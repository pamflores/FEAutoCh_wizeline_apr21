require('dotenv').config();

export const CREDENTIALS = {
  STANDARD_USER: {
    USERNAME: process.env.VALIDUSER,
    PASSWORD: process.env.PASSWORD
  }, 
  INVALID_USER: {
    USERNAME: process.env.INVALIDUSER,
    PASSWORD: process.env.PASSWORD
  }

}
