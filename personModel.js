const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    number: Number,
    city: String,
    zipcode: Number
})

const Person = mongoose.model('Person', PersonSchema)

exports.createPerson = (firstName, lastName, email, address, number, city, zipcode) => {

    var person = new Person({
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        number: number,
        city: city,
        zipcode: zipcode
    })

    return person;
}