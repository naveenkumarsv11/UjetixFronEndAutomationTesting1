/**
 * main page object containing all methods, selectors and functionality shared 
 * accross all page objects
 */

class Index{
    /**
     * SignIn selecter using getter
     */
    get signIn(){
        return $('//li[@class="sigi"]//a');
    }
    get inputUserName(){
        return $("//div[@class='modal fade in']//input[@id='email']");
    }
    get inputPassword(){
        return $("//div[@class='modal fade in']//input[@id='password']");
    }
    get sibmitButton(){
        return $("//input[@name='signin']")
    }
    get adminLoginLink(){
        return $("//a[text()='Admin Login']")
    }
    get tourPackageMenu(){
        return $("//a[text()='Tour Packages']")
    }
    async login (username, password) {
            await this.signIn.click()
            await this.inputUserName.setValue(username)
            await this.inputPassword.setValue(password)
            await this.sibmitButton.click()
            return true;
    }


    
}

export default new Index();