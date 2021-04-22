import {PAGE} from '../data/pageElements'
import {ROLES} from '../data/roles'
import {LOGIN} from '../pages/login'
import {PLP} from '../pages/plp'

fixture `Testing Login`
    .page PAGE.URL;
    
test(`Login with valid credentials`, async t => {
    await t
        .useRole(validUser) //Login with valid user
        .expect(PLP.returnPLPtitle()) //Verify user is logged in
});