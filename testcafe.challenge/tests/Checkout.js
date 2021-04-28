import {CREDENTIALS} from '../data/credentials';
import roles from '../helper/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp';
import common from '../pages/common';
import shoppingCart from '../pages/shoppingCart';



fixture `Checkout Page Testing`
    .page(PAGE.URL).beforeEach(async t=>{ await t.useRole(roles.validUser)}) 

test(`Insert Names for Checkout`, async t => {
    
});