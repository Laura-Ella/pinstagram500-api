const Photos = require("../models/Photos")

module.exports = {
    index: (req, res) => {
        Photos.find({})
          .then(person =>
            res.json(person)
          )
      },
      show: (req, res) => {
        Photos.find({ id: req.params.id })
          .then(person =>
            res.json(person)
          )
      },
      showName: (req, res) => {
        Photos.find({ name: req.params.name })
          .then(person =>
            res.json(person)
          )
      },
      create: (req, res) => {
        Photos.create(req.body)
          .then(person =>
            res.json(person)
          )
      },
      update: (req, res) => {
        Photos.findOneAndUpdate({ _id: req.params.id }, 
          {$set: {name : req.body.name} } )
          .then(person =>
            res.json(person)
          )},
      delete: (req, res) => {
        Photos.findOneAndDelete({ _id: req.params.id }, req.body)
          .then(person =>
            res.json(person)
          )
      }
    }