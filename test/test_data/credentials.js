let Credentials = {
    adminUserName : 'admin',
    adminPassword : 'Test@123',
    get getAdminUserName(){
        return this.adminUserName;
    },
    get getAdminPassword(){
        return this.adminPassword;
    },
    userUserName : 'naveen@gmail.com',
    userPassword : '12345',
    get getuserUserName(){
        return this.userUserName;
    },
    get getuserPassword(){
        return this.userPassword;
    }
}

export default Credentials