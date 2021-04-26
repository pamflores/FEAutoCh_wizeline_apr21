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
    await productListing.selectProduct(PAGE.PRODUCTS.ONESIE)
    await productDetails.addItemToCart()
    await t.expect(await productDetails.returnBtnText()).eql(PAGE.BUTTONS.REMOVE)
});

test(`Add Multiple Items to Cart`, async t => {
  
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.selectProduct(PAGE.PRODUCTS.LIGHT)
    await productDetails.addItemToCart()
    await t.expect(await productDetails.returnBtnText()).eql(PAGE.BUTTONS.REMOVE)
    await productDetails.returntoPLP()
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.selectProduct(PAGE.PRODUCTS.BACKPACK)
    await productDetails.addItemToCart()
    await t.expect(await productDetails.returnBtnText()).eql(PAGE.BUTTONS.REMOVE)
});