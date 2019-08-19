const Photos = require("../models/Photos")

module.exports = {
    index: (req, res) => {
        Photos.find({})
          .then(photos =>
            res.json(photos)
          )
      },
      create: (req, res) => {
        Photos.create(req.body)
          .then(photos =>
            res.json(photos)
          )
      },
      update: (req, res) => {
        Photos.findOneAndUpdate({ _id: req.params.id }, 
          {$set: {name : req.body.name} } )
          .then(photos =>
            res.json(photos)
          )},
      delete: (req, res) => {
        Photos.findOneAndDelete({ _id: req.params.id }, req.body)
          .then(photos =>
            res.json(photos)
          )
      }
    }