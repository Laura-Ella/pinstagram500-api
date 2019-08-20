// const User = require("../models/User")

// module.exports = {
//     index: (req, res) => {
//         User.find({})
//           .then(user =>
//             res.json(user)
//           )
//       },
//       create: (req, res) => {
//         User.create(req.body)
//           .then(user =>
//             res.json(user)
//           )
//       },
//       update: (req, res) => {
//         User.findOneAndUpdate({ _id: req.params.id }, 
//           {$set: {name : req.body.name} } )
//           .then(user =>
//             res.json(user)
//           )},
//       delete: (req, res) => {
//         User.findOneAndDelete({ _id: req.params.id }, req.body)
//           .then(user =>
//             res.json(user)
//           )
//       }
//     }