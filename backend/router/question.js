const fs = require("fs");
const router = require("express").Router();

const resultboolean = fs.readFileSync("./question/day 2/boolean-Answer.docx");

const result = fs.readdirSync("./question", "utf8");
router.route("/").get(async (req, res) => {
    res.send(result);
});

module.exports = router;
