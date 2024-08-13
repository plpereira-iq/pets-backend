const Pet = require("../models/pet.models");

module.exports = {
  getAllPets: (req, res) => {
    Pet.find()
      .sort({ PetType: 1 })
      .collation({ locale: "en", caseLevel: true })
      .then((allPets) => {
        console.log(allPets);
        res.json(allPets);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addPet: (req, res) => {
    Pet.create(req.body)
      .then((newPet) => {
        console.log(newPet);
        res.json(newPet);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
      .then((deletedPet) => {
        res.json(deletedPet);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  },

  getOnePet: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      .then((onePet) => {
        res.json(onePet);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateOnePet: (request, response) => {
    Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
      new: true,
      runValidators: true,
    }).then((updatedPet) => {
        console.log(updatedPet);
        response.json(updatedPet);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  },
};
