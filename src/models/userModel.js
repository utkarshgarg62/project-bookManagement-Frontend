const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    cover:{
        type: String
    },
    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"],
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        street: { type: String , default:"XXXX" },
        city: { type: String , default:"XXX" },
        pincode: { type: String, default:"XX" },
    },
}, { timestamps: true })

module.exports = mongoose.model('userModel', userSchema)


