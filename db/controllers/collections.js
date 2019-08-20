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
  show: function(req, res) {
    Collection.findById(req.params.id)
      .then(collection => res.json(collection));   
  },
  update: (req, res) => {
    Collection.findOneAndUpdate({ _id: req.params.id },
      { $set: { name: req.body.name } })
      .then(collection =>
        res.json(collection)
      )
  },
  delete: (req, res) => {
    Collection.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(collection =>
        res.json(collection)
      )
  }
}