const Collection = require("../models/Collection")

module.exports = {
  index: (req, res) => {
    Collection.find({})
      .then(collection =>
        res.json(collection)
      )
  },
  create: (req, res) => {
    Collection.create(req.body)
      .then(collection =>
        res.json(collection)
      )
  },
  show: (req, res) => {
    Collection.findById({_id: req.params.id})
      .then(collection => res.json(collection));   
  },
  update: (req, res) => {
    Collection.updateOne({ _id: req.params.id },
      req.body)
      .then(collection =>
        res.json(collection)
      )
  },
  delete: (req, res) => {
    Collection.deleteOne({ _id: req.params.id })
      .then(collection =>
        res.json(collection)
      )
  }
}