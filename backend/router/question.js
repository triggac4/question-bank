const fs = require("fs");
const router = require("express").Router();

router.route("/courses").get(async (req, res) => {
    const result = fs.readdirSync("./question", "utf-8");
    const mapped = result.map((e) => {
        const files = fs.readdirSync(`./question/${e}`);
        return { [e]: files };
    });
    res.json({ result: mapped });
});

router.route("/courses/:course/:filename").get(async (req, res) => {
    console.log("ran");
    let { course, filename } = req.params;
    course = "".replaceAll("%", " ");
    res.download(`./question/${course}/${filename}`);
});

module.exports = router;
