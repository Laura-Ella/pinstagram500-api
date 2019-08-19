const Collection = require("../models/Collection")

module.exports = {
index: (req, res) => {
    Collection.find({})
      .then(person =>
        res.json(person)
      )
  },
  show: (req, res) => {
    Collection.find({ id: req.params.id })
      .then(person =>
        res.json(person)
      )
  },
  showName: (req, res) => {
    Collection.find({ name: req.params.name })
      .then(person =>
        res.json(person)
      )
  },
  create: (req, res) => {
    Collection.create(req.body)
      .then(person =>
        res.json(person)
      )
  },
  update: (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id }, 
      {$set: {"name" : req.body.name} } )
      .then(person =>
        res.json(person)
      )},
  delete: (req, res) => {
    Collection.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(person =>
        res.json(person)
      )
  }
}