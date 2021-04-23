import {Selector, t} from 'testcafe'

class loginpage{

    //Create selectors
    constructor(){
        this.username_txtbox = Selector('#user-name');
        this.password_txtbox = Selector('#password');
        this.login_btn = Selector('#login-button');
        this.error_msg = Selector('.error-message-container');
    }

    //***METHODS***

    //Login to the page 
    async loginMethod(user,password){
        await t.typeText(this.username_txtbox,user)
        .typeText(this.password_txtbox,password)
        .click(this.login_btn)

    }

    //Return the error message when invalid user is introduced
    async getErrorMsg(){
        return await this.error_msg.innerText
    }

    
}

export default new loginpage()