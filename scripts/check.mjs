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
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'');
  if(/[\u2013\u2014]|&(?:em|en)dash;|&#(?:8211|8212);|&#x201[34];/i.test(markup))errors.push(`${file}: long dash in page copy`);
  if(/`r`n|\bundefined\b/.test(markup))errors.push(`${file}: escaped formatting or missing data`);
  if(file.endsWith(path.join('project-atlas','index.html'))){
    const embedded=html.match(/<script id="project-data" type="application\/json">([\s\S]*?)<\/script>/);
    if(!embedded)errors.push('Atlas missing its public payload');
    else {const data=JSON.parse(embedded[1]);if(data.audience!=='public'||data.repositories.some(r=>r.visibility!=='public'))errors.push('Atlas exposes non-public repository records');}
  }
}
const atlas=JSON.parse(await readFile(path.join(root,'project-atlas/public-graph.json'),'utf8'));
if(atlas.audience!=='public'||atlas.repositories.some(r=>r.visibility!=='public'))errors.push('Atlas JSON is not public-only');
const nodeIds=new Set(atlas.nodes.map(n=>n.id));
if(atlas.edges.some(e=>!nodeIds.has(e.source)||!nodeIds.has(e.target)))errors.push('Atlas contains dangling graph edges');
if(new Set(projects.map(p=>p.id)).size!==projects.length)errors.push('Duplicate project id');
for(const p of projects){if(!categories.some(c=>c.id===p.category))errors.push(`Invalid category: ${p.id}`);if(!p.status||!p.source||!p.repository)errors.push(`Missing project metadata: ${p.id}`);}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`PASS: ${files.filter(f=>f.endsWith('.html')).length} HTML pages, ${checked} local references, ${projects.length} catalog entries. Images have alt text; categories and page headings are valid.`);
