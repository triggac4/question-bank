const router = require("express").Router();

router.route("/").get(async (req, res) => {
    res.json({ msg: "get request" });
});

module.exports = router;
