
class TourHistory{
    packageId;
    get status(){
        return $("//tbody//tr//td[contains(.,'"+this.packageId+"')]/following-sibling::td[contains(.,'Confirmed')]/parent::tr")
    }
    get action(){
        return $("./td[contains(.,'Pending')]")
    }
    set setPackageId(packageid){
        this.packageId = packageid;
    }
    async verifyTourBookingStatus(packageid){
        this.setPackageId = packageid;
        await expect(this.status).toBeDisplayed();
    }
}

export default new TourHistory()