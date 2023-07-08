describe('mictest',()=>{
    it('handlepopup ',async ()=>{
        await  browser.url("https://webcamtests.com")
        await browser.maximizeWindow();
        let click = await $("//button[@id='webcam-launcher']")
       await click.click();

    })
})