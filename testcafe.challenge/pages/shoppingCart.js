import {Selector, t} from 'testcafe'

class shoppingCart{
    constructor(){
        this.name = Selector('.inventory_item_name')
        this.checkoutbtn=Selector('#checkout')
    }

    //Validate if item exits in the cart
    async isItemInTheCart(item) {
        const count = await this.name.count;
        var found = false;
        for(var i = 0; i < count; i++) {
            const title = await this.name.nth(i).innerText;
            if (title.match(item)) {
                found = true;
            }

        }
    return found
  }

  async clickCheckoutbtn(){
      await t.click(this.checkoutbtn)
  }
}

export default new shoppingCart()