import {Role} from 'testcafe';
import {PAGE} from '../data/pageElements';
import {CREDENTIALS} from '../data/credentials';
import {LOGIN} from '../pages/loginPage'

class roles{
    invalidUser= Role(PAGE.URL, async t=>{
        await LOGIN.loginpage.loginMethod(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    },
    {preserveUrl:true} //Return to page where role was introduced
    )

    validUser= Role(PAGE.URL, async t=>{
        await LOGIN.loginpage.loginMethod(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    },
    {preserveUrl:true} //Return to page where role was introduced
    )
}