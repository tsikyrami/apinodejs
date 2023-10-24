var express = require("express");
var productController = require('../controllers/productController');
var router = express.Router();

router.get('/', (req, res) => {
    const productId = req.params.id;
    const response = {
        id: 'productId',
        name: 'Sample Product',
        price: 19.99,
        description: 'This is a sample product.'
    };
    res.status(200).json(response);
});

router.get('/product',productController.getProduct);
router.post('/productid', productController.getProductById);

module.exports = router;