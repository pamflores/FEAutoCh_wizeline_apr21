import {Selector, t} from 'testcafe';
import {PAGE} from '../data/pageElements';

class productListing{

    constructor(){
        this.plpTitle = Selector('.title');
        this.sortCombo = Selector('.product_sort_container');
        this.firstProd = Selector('.inventory_list').nth(0);
        this.productLink = Selector('.inventory_item_name');
    }

    async returnPLPtitle() {
        return await this.plpTitle.innerText;
    }

    async sortBy(option){
        await t.click(this.sortCombo)
                .click((new selectOption(option).option))
    }

    async firstProduct(){
        return await this.firstProd.innerText;
    }

    async selectProduct(product){
        await t.click(this.productLink.withText(product));
    }
}

class selectOption {
    constructor(option) {
        this.option = Selector('option', { text: option })
    }
}
class openPDP{
    contstructor(product){
        this.productLink = Selector((this.productLink).withText(product));
    }
}

export default new productListing();