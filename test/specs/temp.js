
describe('0',()=>{
    it('1', async ()=>{
      await  browser.url("www.facebook.com")
       await console.log(await browser.getTitle());
    })
})