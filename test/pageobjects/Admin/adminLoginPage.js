class AdminLoginPage{
    get userNameTextField(){
        return $("input.name")
    }
    get passwordTextField(){
        return $("input.password")
    }
    get submitButton(){
        return $("input.login")
    }
    get homePageLink(){
        return $("=Back to home")
    }

    async adminLogin(username, password){
        try{
        await expect(this.userNameTextField).toBeExisting()
        await this.userNameTextField.setValue(username)
        await this.passwordTextField.setValue(password)
        await this.submitButton.click();
        }catch (error) {
            return false
        }
        return true
    }
}

export default new AdminLoginPage()