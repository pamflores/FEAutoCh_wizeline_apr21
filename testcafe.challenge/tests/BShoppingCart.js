import {CREDENTIALS} from '../data/credentials';
import roles from '../helper/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {PAGE} from '../data/pageElements';
import productDetails from '../pages/pdp';
import common from '../pages/common';
import shoppingCart from '../pages/shoppingCart';
import checkoutNames from '../pages/checkoutNames';


fixture `Product Details Page Testing`
    .page(PAGE.URL).beforeEach(async t=>{ await t.useRole(roles.validUser)}) 

test(`Verify Products were added to the Cart`, async t => {
    await t.useRole(roles.validUser)
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.addItemToCart(PAGE.PRODUCTS.LIGHT)
    await productDetails.returntoPLP()
    await productListing.addItemToCart(PAGE.PRODUCTS.BACKPACK)
    await productDetails.returntoPLP()
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCTLIST)
    await productListing.addItemToCart(PAGE.PRODUCTS.ONESIE)
    await common.openCart()
    await t.expect(await shoppingCart.isItemInTheCart(PAGE.PRODUCTS.LIGHT)).eql(true) 
    await t.expect(await shoppingCart.isItemInTheCart(PAGE.PRODUCTS.BACKPACK)).eql(true) 
    await t.expect(await shoppingCart.isItemInTheCart(PAGE.PRODUCTS.ONESIE)).eql(true) 
});

test(`Add Names to Checkout`, async t => {
    await common.openCart()
    await shoppingCart.clickCheckoutbtn()
    await checkoutNames.addNames(PAGE.NAMES.FIRST_NAME,PAGE.NAMES.LAST_NAME,PAGE.NAMES.POSTAL_CODE)
    await t.expect(await checkoutNames.returnShippingLbl()).eql(PAGE.LABELS.PAYMENT)
    //TO DO: Check that Cart is in 0
});