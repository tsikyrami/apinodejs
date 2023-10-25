var express = require("express");
var router = express.Router();

router.get('/', (req, res) => {
    const productId = req.params.id;
    const response = {
        id: 'id_1',
        author: 'Ramitandrintsoa Tsiky Anjara Nomena'
    };
    res.status(200).json(response);
});

module.exports = router;