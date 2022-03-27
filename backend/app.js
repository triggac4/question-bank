const express = require("express");
require("express-async-errors");
require("dotenv").config();
const cors = require("cors");

//import middlewares
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

//get routes
const question = require("./router/question");

const app = express();
//use middleware
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());
app.use("/api/v1/question", question);
app.use([notFound, errorHandler]);

//start server
const port = process.env.PORT ?? 4000;
app.listen(port, console.log(`listening on port ${port}`));
