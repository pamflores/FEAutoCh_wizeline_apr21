require('dotenv').config();
import {Selector, t} from 'testcafe'



export const PAGE = {   
    URL: process.env.URL,

    PAGETITLES: {
        PRODUCTLIST: "PRODUCTS",
        YOUR_CART: "YOUR CART",
        OVERVIEW: "CHECKOUT: OVERVIEW"
  },
    PAGEMSGS: {
        LOGINERROR: "Epic sadface: Username and password do not match any user in this service"
    },

    SORTS: {
        AtoZ: "Name (A to Z)",
        ZtoA: "Name (A to Z)",
        LtoH: "Price (low to high)",
        HtoL: "Price (high to low)"
    },
    PRODUCTS:{
        ONESIE: "Sauce Labs Onesie",
        LIGHT: "Sauce Labs Bike Light",
        BACKPACK: "Sauce Labs Backpack"
    },
    BUTTONS:{
        ADDTOCART: "ADD TO CART",
        REMOVE: "REMOVE"
    }
    
}


