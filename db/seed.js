const photos = require("../db/photos.json")
const Photos = require("../db/models/Photos")
const Collection = require("../db/models/Photos")
const collections = require("../db/collections.json")

let newPhotos = photos.map(photo => {
  let x = {
    width: photo.width,
    height: photo.height,
    likes: photo.likes,
    description: photo.description,
    username: photo.user.username,
    url: photo.urls.raw,
    tag: ''
  };
  return x;
});

Photos.deleteMany({}).then(newPhotos => {
  Photos.collection.insertMany(newPhotos).then(newPhoto => [
    console.log(newPhoto)
  ])
})

  Collection.deleteMany({})
  .then(() => {
    Collection.create(collections)
      .then((collections) => {
        console.log(collections)
        // process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })