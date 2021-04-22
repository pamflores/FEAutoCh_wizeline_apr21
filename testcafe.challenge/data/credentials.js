require('dotenv').config();

export const CREDENTIALS = {
  STANDARD_USER: {
    USERNAME: process.env.VALID_USER,
    PASSWORD: process.env.PWD
  }, 
  INVALID_USER: {
    USERNAME: process.env.INVALID_USER,
    PASSWORD: process.env.PWD
  }

}
