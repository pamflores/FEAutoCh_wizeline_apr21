import {CREDENTIALS} from '../data/credentials';
import roles from '../helper/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp';
import common from '../pages/common';
import shoppingCart from '../pages/shoppingCart'


fixture `Product Details Page Testing`
    .page(PAGE.URL).beforeEach(async t=>{ 
        await t.useRole(roles.validUser)
        await common.openCart()
        })

test(`Verify Onsie is in the Cart`, async t => {
    
// in progress
});
test(`Verify Products were added to the Cart`, async t => {
    
// in progress
});
