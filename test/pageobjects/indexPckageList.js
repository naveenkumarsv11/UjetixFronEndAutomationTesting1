class PackageList{
    get tourPackageList(){
        //scrollTo(0,document.body.scrollHeight)
        return $$(`//div[@class="rom-btm"]//div[contains(.,'Naveen 1')]`)
    }
     getTourPackageList(name){
        return  $('//div[@class="rom-btm"]//div[contains(.,"'+name+'")]')
    }

}
export default new PackageList()
