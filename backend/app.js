const express = require("express");
require("express-async-errors");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    res.json("Hello World");
});

const port = process.env.PORT ?? 4000;
app.listen(port, console.log(`listening on port ${port}`));
