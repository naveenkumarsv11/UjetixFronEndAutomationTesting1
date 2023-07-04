import packageList from '../pageobjects/indexPckageList.js'

describe('',async ()=>{
    
    it('',async ()=>{
       await browser.url('http://rmgtestingserver/domain/Online_Tourism_Management_System/package-list.php')
        // let x =await  packageList.tourPackageList
        // await console.log(typeof x);
        // await console.log(x);
        //await browser.scroll(0,1000)
        let ele =  await packageList.tourPackageList
        await console.log(" Element Text : "+ await getElementText(ele));
       await console.log("getproperty using"+ await ele.getProperty('innerHTML'))
        
    })
})

 async function getElementText(element) {
     await console.log("Using $() - locator"+element);
    // let dele = await document.getElementByClassName('col-md-6 room-midle wow fadeInUp animated animated').innerHTML;
  //   browser.getelemet
 //    await console.log("using document - "+ dele);
     await console.log("111111 : "+ element.getText())
  //   await console.log("2222222 "+ dele.innerHTML);
    return element.textContent;
}
//getElementText();
