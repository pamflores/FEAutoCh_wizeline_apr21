import {Selector, t} from 'testcafe'

class shoppingCart{
    constructor(){
        this.name = Selector('.inventory_item_name')
    }

    //TO DO: insert method for filling a list with the cart items and verify that the 3 items were added
}

export default new shoppingCart()