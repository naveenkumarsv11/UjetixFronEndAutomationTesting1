import index from '../pageobjects/index.js'
import adminDasboard from '../pageobjects/Admin/adminDasboard.js'
import adminLoginPage from '../pageobjects/Admin/adminLoginPage.js'
import createPackage from '../pageobjects/Admin/createPackage.js'
import manageIssues from '../pageobjects/Admin/manageIssues.js'
import indexPckageList from '../pageobjects/indexPckageList.js'

describe('CreateTourPackage and Verify as User', ()=>{
   
    it("Login as Admin smoke",async ()=>{
        await browser.url('')
        await browser.maximizeWindow()
        await index.adminLoginLink.click()
        await adminLoginPage.adminLogin('admin','Test@123')
        await expect(browser).toHaveUrl('http://rmgtestingserver/domain/Online_Tourism_Management_System/admin/dashboard.php')
    })
    it('click on createTourPackageOption', async ()=>{
        await adminDasboard.clickCreateTouPackageLink()
        await expect(browser).toHaveUrl('http://rmgtestingserver/domain/Online_Tourism_Management_System/admin/create-package.php')
    })
    it('Create Tour Package',async ()=>{
        await createPackage.fillcreateTourPackageDetails()
        await createPackage.clickOnSubmit(createPackage)
    })
    it('get issue list from admin', async ()=>{
        await adminDasboard.manageIssuesMenu.click()
        let issuelist = await manageIssues.issuesList
        await console.log(typeof issuelist);
    })
    it('Logout as Admin smoke', async ()=>{
        await adminDasboard.adminLogout();
        await expect(browser).toHaveUrl('http://rmgtestingserver/domain/Online_Tourism_Management_System/admin/index.php');
        (await adminLoginPage.homePageLink).click()
        await expect(browser).toHaveUrl('http://rmgtestingserver/domain/Online_Tourism_Management_System/index.php');
    })
    it('verify TourPackage Listed', async ()=>{
        (await index.tourPackageMenu).click();
        await expect(browser).toHaveUrl('http://rmgtestingserver/domain/Online_Tourism_Management_System/package-list.php')
        console.log("package name  : "+createPackage.packageName);
        let pack = await indexPckageList.getTourPackageList(createPackage.packageName)
        console.log(pack);
        expect(pack).toBeTruthy()

    })
    
})