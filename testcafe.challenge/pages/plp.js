import {Selector, t} from 'testcafe';

class productListing{

    constructor(){
        this.plpTitle = Selector('.title');
        this.sortCombo = Selector('.product_sort_container');
        this.firstProd = Selector('.inventory_list').nth(0);
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
}
class selectOption {
    constructor(option) {
        this.option = Selector('option', { text: option })
    }
}

export default new productListing();