

const photocollection = require("../db/photos.json")

const Photos = require("../db/models/Photos")




//mapping through the photo data to get properties 
var newarr = photocollection.map(newitems => {
    let newObj = {}
    newObj.width = newitems.width
    newObj.height= newitems.height
    newObj.likes = newitems.likes
    newObj.description = newitems.decription
    newObj.user = newitems.user
    newObj.url =newitems.url
   
    
    

    return newObj
})
// console.log(newarr)


// Photos.remove({})
// .then(_=>{
//     Photo.collection.insert(newarr)
//     .then(allphotos=>{console.log(allphotos)})
// })