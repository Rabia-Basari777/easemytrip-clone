//PRODUCT CONTROLLER

//create a router
const { request } = require("express");
const express = require("express");
const router = express.Router();

//models
const Flight = require("../models/flight.model.js");

//Http Verbs will come here GET, GET by id, POST, PATCH, DELETE

// post flights to the database 

router.post("/", async function (req, res) {
    try {
        const post = await Flight.create(req.body);
        return res.status(201).send(post);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get all flights from database

router.get("/", async function (req, res) {
    try {
        const get = await Flight.find().lean().exec();
        return res.status(200).send(get);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get flights by Id

router.get("/:id", async function (req, res) {
    try {
        const getById = await Flight.findById(req.params.id).lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// get flights by domestic Id

router.get("/query/:id", async function (req, res) {
    try {
        const getById = await Flight.find({id: req.params.id}).lean().exec();
        return res.status(200).send(getById);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// Update the flights in the database

router.patch("/:id", async function (req, res) {
    try {
        const update = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(update);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

// delete the flights from the database

router.delete("/:id", async function(req, res) {
    try {
        const remove = await Flight.findByIdAndDelete(req.params.id);
        return res.status(204).send(remove);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
})

//export
module.exports = router;
