const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const base=process.env.PORTFOLIO_URL || 'http://127.0.0.1:4173';
(async()=>{
  const browser=await chromium.launch({headless:true,...(process.env.BROWSER_CHANNEL?{channel:process.env.BROWSER_CHANNEL}:{})});
  try {
    const page=await browser.newPage({viewport:{width:1440,height:1000}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    assert((await page.goto(base+'/')).ok());
    assert.equal(await page.locator('.project-card').count(),6);
    await page.locator('.atlas-entry').scrollIntoViewIfNeeded();
    fs.mkdirSync(path.resolve(__dirname,'../.qa'),{recursive:true});
    await page.locator('.atlas-entry').screenshot({path:path.resolve(__dirname,'../.qa/atlas-entry.png')});
    await page.locator('.atlas-entry a[href="project-atlas/"]').click();
    await page.waitForURL('**/project-atlas/');
    const payload=JSON.parse(await page.locator('#project-data').textContent());
    assert.equal(payload.audience,'public');assert(payload.repositories.every(r=>r.visibility==='public'));
    assert.equal(await page.locator('.repo').count(),payload.repositories.length);
    for(let i=0;i<payload.repositories.length;i++){
      await page.locator('.repo').nth(i).click();
      await page.locator('#detail summary').click();
      assert(!/[\u2013\u2014]/.test(await page.locator('body').innerText()),'Long dash in Atlas rendered copy');
    }
    await page.locator('[data-preset="concept"]').click();
    assert.equal(await page.locator('.repo').count(),payload.repositories.filter(r=>r.status==='Concept').length);
    await page.locator('a[href="tradeoffs.html"]').click();
    await page.waitForURL('**/tradeoffs.html');
    assert((await page.locator('h1').textContent()).includes('Vector or graph?'));
    for(const route of ['/','/404.html','/project-atlas/','/project-atlas/tradeoffs.html','/projects/ai-workflow-review/','/projects/cmu-court-reservations/','/projects/con-alma/','/projects/fastmail-kiosk/','/projects/moment-comments/','/projects/watch-and-unlock/']){
      await page.setViewportSize({width:390,height:844});
      assert((await page.goto(base+route)).ok());
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'Mobile overflow: '+route);
      assert(!/[\u2013\u2014]/.test(await page.locator('body').innerText()),'Long dash on '+route);
      assert(!/[\u2013\u2014]/.test(await page.title()),'Long dash in title: '+route);
    }
    assert.deepEqual(errors,[]);
    console.log(JSON.stringify({base,repositories:payload.repositories.length,featuredProjects:6,routes:10,javascriptErrors:0,mobileOverflow:false,longDashes:false}));
  }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
