const photos = require("../db/photos.json")
const Photos = require("../db/models/Photos")
const Collection = require("../db/models/Collection")
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

Photos.deleteMany({}).then(newPhoto => {
  Photos.collection.insert(newPhotos).then(newPhoto => [
    console.log(newPhoto)
  ])
})

// Photos.deleteMany({})
//   .then(() => {
//     Photos.create(photos)
//       .then((photo) => {
//         console.log(photo)
//         process.exit()
//       })
//   })
//   .catch((err) => {
//     console.log(err)
//   })

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