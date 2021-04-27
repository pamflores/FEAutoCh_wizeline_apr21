import {CREDENTIALS} from '../data/credentials';
import roles from '../helper/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp'


fixture `Product Details Page Testing`
    .page(PAGE.URL).beforeEach(async t=>{ await t.useRole(roles.validUser)})
    
test(`Add Onesie to Cart`, async t => {
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.addItemToCart(PAGE.PRODUCTS.ONESIE)
});

test(`Add Multiple Items to Cart`, async t => {
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.addItemToCart(PAGE.PRODUCTS.LIGHT)
    await productDetails.returntoPLP()
    await productListing.addItemToCart(PAGE.PRODUCTS.BACKPACK)
    await productDetails.returntoPLP()
});