const mongoose = require ('mongoose')

const ProfessionalSchema = new mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'age': Number,
    'weight': Number,
    'height': Number,
    'isRetired': Boolean,
    'nationality': String,
    'oscarsNumber': Number,
    'profession': String
})

module.exports = mongoose.model('Professional', ProfessionalSchema, 'Professional')