//PRODUCT MODEL

const mongoose = require("mongoose");
const { Schema } = mongoose;

//product schema
const flightSchema = new Schema({
    id: { type: Number, required: true },
    image: {type: String, required: true},
    flightName: { type: String, required: true },
    flightNumber: { type: String, required: true },
    basePrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    arrivalTime: { type: String, required: true },
    departureTime: { type: String, required: true },
    arrivalPlace: { type: String, required: true },
    departurePlace: { type: String, required: true },
    duration: { type: String, required: true },
    flightType: { type: String, required: true },
    departureDate: { type: String, required: true },
    arrivalDate: { type: String, required: true },
    checkinBaggage: { type: Number, required: false },
    cabinBaggage: { type: Number, required: false },
    layoverTime: { type: String, required: false },
    offPrice: { type: Number, required: false },
    departureTerminal: { type: Number, required: false },
    arrivalTerminal: { type: Number, required: false },
    departureCode: { type: String, required: true },
    arrivalCode: {type: String, required: true},
}, {timestamps: false, versionKey: false});

//creating model for product
const Flight = mongoose.model("Flight", flightSchema);

//export
module.exports = Flight;