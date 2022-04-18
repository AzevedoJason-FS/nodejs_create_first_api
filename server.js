const express = require("express");
const { listen } = require("express/lib/application");
const { type } = require("express/lib/response");
require("dotenv").config();

const {boredService, boredServiceByType} = require("./services/boredService");

const app = express();

//for localhost:3000/
app.get("/", (req, res, next) => {
    res.status(200).send("Service is Up");
});

// get external service
// http://localhost:3000/bored
app.get("/bored", (req, res, next) => {
    boredService()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
            message: err.message, 
            status: err.status, 
            method: err.method
        }
    }));
});

//get external service by id
// http://localhost:3000/bored/50
app.get("/bored/:type", (req, res, next) => {
    const type = req.params.type;
    boredServiceByType(type)
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({
        error: {
            message: err.message,
            status: err.status,
            method: err.method
        }
    }));
});


//middleware modules for Error Handling
app.use((req, res, next) => {
    const error = new Error("NOT FOUND");
    error.status = 404;
    next(error);
});

//middleware modules to send Error neatly
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});

app.listen(process.env.port, () => {
    console.log(`Server Started on Port ${process.env.port}`);
});
