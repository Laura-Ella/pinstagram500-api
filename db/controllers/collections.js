module.exports = {
index: (req, res) => {
    Person.find({})
      .then(person =>
        res.json(person)
      )
  },
  show: (req, res) => {
    Person.find({ id: req.params.id })
      .then(person =>
        res.json(person)
      )
  },
  showName: (req, res) => {
    Person.find({ name: req.params.name })
      .then(person =>
        res.json(person)
      )
  },
  create: (req, res) => {
    Person.create(req.body)
      .then(person =>
        res.json(person)
      )
  },
  edit: (req, res) => {
    Person.findOneAndUpdate({ _id: req.params.id }, 
      {$set: {"name" : req.body.name} } )
      .then(person =>
        res.json(person)
      )},
  delete: (req, res) => {
    Person.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(person =>
        res.json(person)
      )
  }
}