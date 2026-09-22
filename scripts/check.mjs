import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../src/projects.mjs';
import { categories } from '../src/site.mjs';
const root=fileURLToPath(new URL('../docs/',import.meta.url));
let checked=0;
const errors=[];
async function walk(dir){const entries=await readdir(dir,{withFileTypes:true});return (await Promise.all(entries.map(e=>e.isDirectory()?walk(path.join(dir,e.name)):path.join(dir,e.name)))).flat();}
const files=await walk(root);
for(const file of files.filter(f=>f.endsWith('.html'))){
  const html=await readFile(file,'utf8');
  if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)errors.push(`${file}: expected one h1`);
  if(!html.includes('name="viewport"'))errors.push(`${file}: missing viewport`);
  for(const match of html.matchAll(/<(?:a|img|link|script)\b[^>]*\b(?:href|src)="([^"]+)"/g)){
    const ref=match[1].replace(/&amp;/g,'&');
    if(/^(?:https?:|mailto:|data:)/.test(ref))continue;
    const url=new URL(ref,`https://local.test/${path.relative(root,file).replaceAll('\\','/')}`);
    let target=path.join(root,decodeURIComponent(url.pathname));
    try{if((await stat(target)).isDirectory())target=path.join(target,'index.html');await stat(target);if(url.hash){const content=await readFile(target,'utf8');if(!content.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`))errors.push(`${file}: missing anchor ${ref}`);}checked++;}catch{errors.push(`${file}: missing target ${ref}`);}
  }
  for(const match of html.matchAll(/<img\b[^>]*>/g))if(!/\balt="[^"]+"/.test(match[0]))errors.push(`${file}: image missing alt text`);
  if(/healthcare-ai-workflows/.test(html))errors.push(`${file}: links private healthcare source`);
  if(/`r`n|\bundefined\b/.test(html))errors.push(`${file}: escaped formatting or missing data`);
}
if(new Set(projects.map(p=>p.id)).size!==projects.length)errors.push('Duplicate project id');
for(const p of projects){if(!categories.some(c=>c.id===p.category))errors.push(`Invalid category: ${p.id}`);if(!p.status||!p.source||!p.repository)errors.push(`Missing project metadata: ${p.id}`);}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`PASS: ${files.filter(f=>f.endsWith('.html')).length} HTML pages, ${checked} local references, ${projects.length} catalog entries. Images have alt text; categories and page headings are valid.`);
