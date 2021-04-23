import {Selector, t} from 'testcafe'

class common{

    constructor(){
        this.burgerbtn = Selector('#react-burger-menu-btn');
        this.burgerlogout = Selector('#logout_sidebar_link');
    }

    async clickBurguerBtn(){
        await t.click(this.burgerbtn);
    }

    async clickLogoutLink(){
        await t.click(this.burgerlogout);
    }

    async logout(){
        await this.clickBurguerBtn();
        await this.clickLogoutLink();
    }

  
}

export default new common();