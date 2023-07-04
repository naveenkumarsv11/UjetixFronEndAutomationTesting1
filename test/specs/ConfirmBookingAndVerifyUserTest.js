import index from '../pageobjects/index.js'
import adminLoginPage from '../pageobjects/Admin/adminLoginPage.js'
import adminDasboard from '../pageobjects/Admin/adminDasboard.js'
import manageBookings from '../pageobjects/Admin/manageBookings.js'
import userIndex from '../pageobjects/userIndexPage.js'
import credentials from '../test_data/credentials.js'
import tourHistoryPage from '../pageobjects/tourHistoryPage.js'

describe('Admin Confirms Booking and User Verifys Booking status', ()=>{
    // before(function(){
    //     console.log(this.test.parent.title, " *******Started");
    //     console.log("Admin Confirms Booking and User Verifys Booking status ---- Started");
    // })
    // after(function () {
    //     console.log(this.test.parent.title, " *********Ended");
    //     console.log("Admin Confirms Booking and User Verifys Booking status ---- ended")
    // })
    // beforeEach(function (){
    //     console.log(this.test.title+" ******* started");
    // })
    // afterEach(function (){
    //     console.log(this.test.state);
    //     console.log(this.test.title + " *******ended");
    // })
    describe('TestCase 1', ()=>{
    it('Launch the application',async ()=>{
        console.log("Launch App");
        await browser.url('/domain/Online_Tourism_Management_System/');
        await browser.maximizeWindow();
    })
    it('Login as Admin',async ()=>{
        console.log("Login as Admin");
        (await index.adminLoginLink).click();
       let res= await adminLoginPage.adminLogin(credentials.getAdminUserName, credentials.getAdminPassword)
       console.log(res+" ################################################");
    })
    it('Confirm Booking', async ()=>{
        console.log("Confirm Booking");
        describe('xxx',()=>{
            it('yyy',async ()=>{
                await console.log("Describe Inside IT Block");
            })
        });
        await adminDasboard.manageBookingMenu.click()
        await manageBookings.confirmBooking('Naveen 10.10896430698632309')
        
    })
    it('Logout as Admin', async ()=>{
        console.log("Logout as Admin");
        await adminDasboard.adminLogout();
        await adminLoginPage.homePageLink.click();
    })
    it('Login as User Naveen@gmail.com', async ()=>{
        console.log("Login as User Naveen@gmail.com");
        await index.login(credentials.getuserUserName, credentials.getuserPassword)
    })
    it('Verify booking Status should be Confirmed', async ()=>{
        console.log("Verify booking Status should be Confirmed");
        await userIndex.myTourHistoryLink.click()
        await tourHistoryPage.verifyTourBookingStatus('#BK284');
    })
})
    
})