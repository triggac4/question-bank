const error_handler = (err, req, res, next) => {
    res.status(500).json({ err: err.message });
};

module.exports = error_handler;
