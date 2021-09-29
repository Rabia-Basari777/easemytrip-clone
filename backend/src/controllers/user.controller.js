//USER CONTROLLER

//create a router
const express = require("express");
const router = express.Router();

//models
const User = require("../models/user.model.js");

//Http Verbs will come here GET, GET by id, POST, PATCH, DELETE

//get all users
router.get("/", async (request, response) => {
    try {
        const results = await User.find().lean().exec();
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//get specific user by id
router.get("/:id", async (request, response) => {
    try {
        const results = await User.findById(request.params.id);
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//get user by email
router.get("/query/:email", async (request, response) => {
    try {
        const results = await User.find({ email: request.params.email }).lean().exec();
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//create user
router.post("/", async (request, response) => {
    try {
        const results = await User.create(request.body);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//update user by id
router.patch("/:id", async (request, response) => {
    try {
        const results = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

//update user payment method or shipping details by id
router.patch("/:query/:id", async (request, response) => {
    try {
        if(request.params.query == "updatePaymentMethod"){
            
            const results = await User.findByIdAndUpdate(request.params.id, {"paymentMethod":request.body}, { new: true });
            console.log(results);
            return response.send(results);
        }
        else if(request.params.query == "updateShippingDetails"){
            const results = await User.findByIdAndUpdate(request.params.id, {"shippingDetails":request.body}, { new: true });
            console.log(results);
            return response.send(results);
        }
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const results = await User.findByIdAndDelete(request.params.id);
        console.log(results);
        return response.send(results);
    }
    catch (err) {
        response.status(401).send(err.message);
    }
});




//export
module.exports = router;
