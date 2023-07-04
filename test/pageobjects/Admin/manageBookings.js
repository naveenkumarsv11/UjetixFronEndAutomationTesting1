
class ManageBooking{
    packagename;
    get booking(){
        return $("//tbody//td[@data-th='RegDate ']//a[contains(.,'"+this.packagename+"')]");
    }
    get confirm(){
        return $$("//tbody//td[contains(.,'"+this.packagename+"')]/following-sibling::td[@data-th='Status ']//span[contains(.,'Pending')]/parent::td/parent::tr")[0].$$("./td[@data-th='Action ']//a[contains(.,'Confirm')]")[0]
    }
    get cancel(){
        return $("//tbody//td[contains(.,'"+this.packagename+"')]/following-sibling::td[@data-th='Action ']//a[.='Cancel']")
    }
    get status(){
        return $("//tbody//td[contains(.,'"+this.packagename+"')]/following-sibling::td[@data-th='Status ']//span[contains(.,'Pending')]/parent::td/parent::tr")
    }
    get successWrap(){
        return $("//div[@class='succWrap']")
    }
    set setPackageName(packageName){
        this.packagename = packageName; 
    }
    async confirmBooking(packageName){
        this.setPackageName=packageName;
        if (await this.status.isExisting()) {
            await this.confirm.isExisting();
            await this.confirm.scrollIntoView();
            await expect(this.confirm).toBeClickable();
            await expect(this.confirm).toBeDisplayedInViewport();
            await this.confirm.click();
            if(await browser.isAlertOpen()){
                await browser.acceptAlert();
            }
            await expect(this.successWrap).toBeExisting();
        }
    }
}

export default new ManageBooking();