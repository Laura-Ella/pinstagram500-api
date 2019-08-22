const Photos = require("../models/Photos");

module.exports = {
  index: (req, res) => {
    Photos.find({}).then(photos => res.json(photos));
  },
  create: (req, res) => {
    Photos.create(req.body).then(photos => res.json(photos));
  },
  show: (req, res) => {
    Photos.findById(req.params.id).then(photos => res.json(photos));
  },
  update: (req, res) => {
    Photos.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(photos => res.json(photos));
  },
  update2: (req, res) => {
    Photos.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: 1 } },
      { new: true },
      {
        new: true
      }
    ).then(photos => res.json(photos));
  },
  delete: (req, res) => {
    Photos.findOneAndDelete({ _id: req.params.id }).then(photos =>
      res.json(photos)
    );
  }
};
