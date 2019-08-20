const photos = require("../db/photos.json")
const Photos = require("../db/models/Photos")
const Collection = require("../db/models/Collection")
const collections = require("../db/collections.json")

Photos.deleteMany({})
  .then(() => {
    Photos.create(photos)
      .then((photo) => {
        console.log(photo)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

  // Collection.deleteMany({})
  // .then(() => {
  //   Collection.create(collections)
  //     .then((collection) => {
  //       console.log(collection)
  //       process.exit()
  //     })
  // })
  // .catch((err) => {
  //   console.log(err)
  // })