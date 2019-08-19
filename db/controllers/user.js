const User = require("../models/User")

module.exports = {
    index: (req, res) => {
        User.find({})
          .then(person =>
            res.json(person)
          )
      },
      show: (req, res) => {
        User.find({ id: req.params.id })
          .then(person =>
            res.json(person)
          )
      },
      showName: (req, res) => {
        User.find({ name: req.params.name })
          .then(person =>
            res.json(person)
          )
      },
      create: (req, res) => {
        User.create(req.body)
          .then(person =>
            res.json(person)
          )
      },
      update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, 
          {$set: {name : req.body.name} } )
          .then(person =>
            res.json(person)
          )},
      delete: (req, res) => {
        User.findOneAndDelete({ _id: req.params.id }, req.body)
          .then(person =>
            res.json(person)
          )
      }
    }