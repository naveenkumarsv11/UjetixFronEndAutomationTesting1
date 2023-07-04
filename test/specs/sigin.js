import index from '../pageobjects/index.js' 
import * as fs from "fs";
import { readFile, set_fs } from "xlsx";
set_fs(fs);

describe('Ujetix homePage',()=>{
    it('Login as User',async ()=>{
        await browser.url('')
        console.log(await $('//li[@class="sigi"]//a'))
        await browser.pause(3000)
        console.log("POM Class element");
        const workbook = readFile("test/test_data/data.numbers");
        console.log(workbook.SheetNames);
        const worksheet = workbook.Sheets['Sheet 1'];
        console.log(worksheet)
        let data = worksheet['A1'];
        console.log(worksheet.A1.v +" : "+worksheet.A2.v);
        await index.login(worksheet.A2.v, worksheet.B2.v)
        let url = browser.getUrl();
        console.log(url)
        //expect(url).to.be()
        //expect.to.equal('http://rmgtestingserver/domain/Online_Tourism_Management_System/package-list.php')
       //await expect(browser).toHaveUrl("http://rmgtestingserver/domain/Online_Tourism_Management_System/package-list.php") 
       //console.log("HI HELLO "+worksheet[1]['A'])
    })
})