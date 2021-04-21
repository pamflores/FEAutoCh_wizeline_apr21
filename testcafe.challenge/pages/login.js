import {Selector, t} from 'testcafe'

class loginpage{

    //Create selectors
    constructor(){
        this.username_txtbox = Selector('#user-name');
        this.password_txtbox = Selector('#password');
        this.login_btn = Selector('#login-button');
    }


}