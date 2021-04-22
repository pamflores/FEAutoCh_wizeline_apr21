import {Role} from 'testcafe';
import {PAGE} from '../data/pageElements';
import {CREDENTIALS} from '../data/credentials';
import loginpage from '../pages/loginPage';


    const invalidUser= Role(PAGE.URL, async t=>{
        await loginpage.loginMethod(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    },
    {preserveUrl:true} //Return to page where role was introduced
    )

    const validUser= Role(PAGE.URL, async t=>{
        await loginpage.loginMethod(CREDENTIALS.STANDARD_USER.USERNAME, CREDENTIALS.STANDARD_USER.PASSWORD)
    },
    {preserveUrl:true} //Return to page where role was introduced
    )
