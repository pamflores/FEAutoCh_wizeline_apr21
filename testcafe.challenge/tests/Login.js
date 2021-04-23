import {PAGE} from '../data/pageElements';
import roles from '../data/roles';
import loginpage from '../pages/loginPage';
import productListing from '../pages/plp';
import {CREDENTIALS} from '../data/credentials';
import common from '../pages/common';
import {Selector,t} from 'testcafe';

fixture `Testing Login`
    .page(PAGE.URL);
    
test(`Login with valid credentials`, async t => {
    //await t.useRole(roles.validUser) //Login with valid user with roles
    await loginpage.loginMethod(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCT) //Verify user is logged in
});
test(`Login with invalid credentials`, async t => {
    //await t.useRole(roles.invalidUser) //Login with invalid user with roles
    await loginpage.loginMethod(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(await loginpage.getErrorMsg()).eql(PAGE.PAGEMSGS.LOGINERROR) //Verify error is displayed
});
test(`Logout`, async t => {
    //await t.useRole(roles.validUser) //Login with valid user with roles
    await loginpage.loginMethod(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    await t.expect(await productListing.returnPLPtitle()).eql(PAGE.PAGETITLES.PRODUCT) //Verify user is logged in
    await common.logout()
    await loginpage.existsLoginBtn().ok()
});
