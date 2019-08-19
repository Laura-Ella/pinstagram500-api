const photoCollection = require("../db/photos.json")
const Photos = require("../db/models/Photos")

Photos.remove({})
  .then(() => {
    Photos.create(photoCollection)
      .then((translations) => {
        console.log(translations)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })


