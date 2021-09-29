//TRANSACTION MODEL

const mongoose = require("mongoose");
const { Schema } = mongoose;


//transaction schema
const transactionSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    //shopping cart info
    cart: { type: Array, required: true },

    //meta info about cart items
    meta: {
        //required
        count: {type:Number, required: true},
        total: {type:Number, required: true},
    },

    //success or failure of transaction
    success: { type: Boolean, required: true }

}, {timestamps: true, versionKey: false});

//creating model for transaction
const Transaction = mongoose.model("Transaction", transactionSchema);

//export
module.exports = Transaction;