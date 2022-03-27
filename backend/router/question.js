const fs = require("fs");
const router = require("express").Router();

router.route("/courses").get(async (req, res) => {
    const result = fs.readdirSync("./question", "utf-8");
    const mapped = result.map((e) => {
        const files = fs.readdirSync(`./question/${e}`);
        return { course: e, section: files };
    });
    res.json({ result: mapped });
});

router.route("/course").get(async (req, res) => {
    let { course, filename } = req.query;
    course = course.replaceAll("%", " ");
    filename = filename.replaceAll("%", " ");
    res.download(`./question/${course}/${filename}`);
});

module.exports = router;
