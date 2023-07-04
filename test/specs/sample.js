describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url("")
        await browser.pause(3000)
        const ele = await $("//li//a[@href='package-list.php']")
        await ele.click()
        // if (condition) {
            
        // }
        console.log("result if expect")
        console.log(await expect(browser).toHaveUrlContaining('package-list.php'))
        expect(browser)

    })
})

