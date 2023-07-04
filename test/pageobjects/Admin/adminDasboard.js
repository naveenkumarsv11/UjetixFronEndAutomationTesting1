class AdminDashboard{
    get tourPackageCreateLink(){
        return $("//a[text()='Create']")
    }
    get tourPackageMenu(){
        return $("//span[text()=' Tour Packages']")
    }
    get tourPackageManageLink(){
        return $("//a[text()='Manage']")
    }
    get manageUsersMenu(){
        return $("//span[text()='Manage Users']")
    }
    get manageBookingMenu(){
        return $("//span[text()='Manage Booking']")
    }
    get manageIssuesMenu(){
        return $("//span[text()='Manage Issues']")
    }
    get manageEnquiriesMenu(){
        return $("//span[text()='Manage Enquiries']")
    }
    get adminDropDownOption(){
        return $("//i[@class='fa fa-angle-down']")
    }
    get adminLogoutLink(){
        return $("//i[@class='fa fa-sign-out']")
    }
    get adminProfileUpdateLink(){
        return $("//i[@class='fa fa-user']")
    }

    async clickCreateTouPackageLink(){
        (await this.tourPackageMenu).click();
        (await this.tourPackageCreateLink).click();
    }
    async clickManageTourPackageLink(){
        (await this.tourPackageMenu).click();
        (await this.tourPackageManageLink).click();
    }
    async adminLogout(){
        await this.adminDropDownOption.scrollIntoView();
        await expect(this.adminDropDownOption).toBeClickable();
        await this.adminDropDownOption.click();
        await this.adminLogoutLink.click();
    }

}

export default new AdminDashboard()