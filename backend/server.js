//config data
const {DEFAULT_CONNECTION_STRING, PORT, MONGOOSE_OPTIONS} = require("./src/configs/dbconfigs");

//connect to express
const express = require("express");
const app = express();
app.listen(PORT, () => console.log(`easemytrip Web App connected successfully to Express. Listening on port ${PORT}...`));

//middlewares
const cors = require("cors");
app.use(cors())
app.use(express.json());

//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect(DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS);
mongoose.connection.on("error", err => {
  console.log("Connection Error. easemytrip Web App could not successfully connect to Mongoose.", err);
});
mongoose.connection.on("connected", (err, res) => {
    console.log("easemytrip Web App connected successfully to Mongoose.");
});

//routes
const flightController = require("./src/controllers/flight.controller.js");
const hotelController = require("./src/controllers/hotel.controller.js");
const userController = require("./src/controllers/user.controller.js");
app.use("/flights", flightController);
app.use("/hotels", hotelController);
app.use("/users", userController);
