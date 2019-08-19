const axios = require("axios");
const fs = require("fs");

axios
 .get(
    "https://api.unsplash.com/photos?client_id=749be1fc4700d5fc3965c9521aba9e749a701f335f71bf4e613a2a620676f939"
 )
 .then(response => {
   // handle success
   console.log(response.data);
   let stringified = JSON.stringify(response.data);
   console.log(stringified);
   fs.writeFile(__dirname + “/photos.json”, stringified, “utf8”, err => {
     if (err) {
       console.error(err);
     } else {
       console.log(successful);
     }
   });
 });