import {Selector, t} from 'testcafe';

class productListing{

    constructor(){
        this.plpTitle = Selector('.title');
    }

    async returnPLPtitle() {
        return await this.plpTitle.innerText;
    }
}

export default new productListing();