import {Selector, t} from 'testcafe'

class checkoutNames{

    constructor(){
        this.checkoutbtn=Selector('#checkout');
        this.firstNameText = Selector('#first-name');
        this.lastNameText = Selector('#last-name');
        this.zipCodeText = Selector('#postal-code');
        this.continueBtn = Selector('#continue');
        this.shippingLbl = Selector('.summary_value_label');
    }

    async addNames(first,last,zip){
        await t.typeText(this.firstNameText,first)
            .typeText(this.lastNameText,last)
            .typeText(this.zipCodeText,zip)
            .click(this.continueBtn)

    }
    async returnShippingLbl(){
        return await this.shippingLbl.innerText;
    }
}

export default new checkoutNames()


