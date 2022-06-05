const cloudinary = require("cloudinary").v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
  api_key: process.env.REACT_APP_CLOUDINARY_APIKEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_APISECERT,
  secure: true,
});

export default myconfig;
