require('dotenv').config();

export const PAGE = {   
    URL: process.env.URL,

    PAGETITLES: {
        PRODUCT: "PRODUCTS",
        YOUR_CART: "YOUR CART",
        OVERVIEW: "CHECKOUT: OVERVIEW"
  },
    PAGEMSGS: {
        LOGINERROR: "Epic sadface: Username and password do not match any user in this service"
    }
    
}
