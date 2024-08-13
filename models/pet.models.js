const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    Name: {
        type: String,
        minlength: [3, "There is no pet with a 2 character long name, please insert a true pet name"],
        required: [true, "Please enter a pet name!"]
    },
    PetType: {
        type: String,
        minlength: [3, "it should start with http"],
        required: [true, "Plese enter a correct pirat image link"]
    },
    Description: {
        type: String,
        required: [true, "Plese give a description of the pet"]
    }, 
    SkillOne: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"]
    },
    SkillTwo: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"]
    },
    SkillTree: {
        type: String,
        maxlength: [30, "Please enter a skill with less than 30 characters"]
    },

}, {timestamps:true})

const Pets = mongoose.model("Pets", PetSchema)

module.exports = Pets;