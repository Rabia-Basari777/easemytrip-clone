//USER MODEL

const mongoose = require("mongoose");
const { Schema } = mongoose;

//shipping details child schema
const shippingDetailSchema = new Schema({
    address: String,
    addressOpt: {type:String, required: false},
    city: String,
    state: String,
    country: String,
    pin: Number
});

//pa details child schema
const paymentMethodSchema = new Schema({
    nameOnCard: String,
    cardNumber: String,
    expMonth: String,
    expYear: Number,
    cvv: Number
});

//user schema
const userSchema = new Schema({

    //basic auth fields
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    //child shipping details schema
    shippingDetails: {type: shippingDetailSchema, required: false},

    //child payment method schema
    paymentMethod: {type: paymentMethodSchema, required: false},

}, {timestamps: false, versionKey: false});

//creating model for user
const User = mongoose.model("User", userSchema);

//export
module.exports = User;