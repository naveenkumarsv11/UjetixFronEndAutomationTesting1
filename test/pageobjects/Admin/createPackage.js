import excelUtility from "../../genericutilities/excelUtility.js"
class CreatePackage{
    packageName='';
    random = '';
    get packagename(){
        return $('#packagename')
    }
    get packageTypeTextFiled(){
        return $('#packagetype')
    }
    get packageLocationTextField(){
        return $('#packagelocation')
    }
    get packagePriceTextField(){
        return $('#packageprice')
    }
    get packageFeaturesTextField(){
        return $('#packagefeatures')
    }
    get packageDetailsTextField(){
        return $('#packagedetails')
    }
    get packageImageField(){
        return $('#packageimage')
    }
    get resetButton(){
        return $("//button[text()='Reset']")
    }
    get createButton(){
        return $("//button[@name='submit']")
    }
    async findElement(id){
         return await $('#'+id)
    }
    get successMsg(){
        return $("//div[@class='succWrap']")
    }
    async fillcreateTourPackageDetails(){
        let map = await excelUtility.readExcelData('Sheet 2')
        await map.forEach(async (key,value,map)=>{
            let ele = await this.findElement(value);
            if(value == 'packagename'){
                this.random = key+Math.random()
                this.packageName = this.random;

            }else{
               this.random = key
            }
            await ele.setValue(this.random)    
        });
        console.log("random contains : "+ await this.random)
    }
    async clickOnSubmit(createPackage){
        await createPackage.createButton.scrollIntoView();
        await expect(createPackage.createButton).toBeClickable();
        await createPackage.createButton.scrollIntoView({block : 'center', inline: 'center'});
        await createPackage.createButton.click();
        await expect(createPackage.successMsg).toBeDisplayed();
    }
}
export default new CreatePackage()