const apiResponse = require("../helpers/apiResponse");

const product = [
    { id: 'pr1', name: 'product1',price: 20.50 ,description:'description product1'},
    { id: 'pr2', name: 'product2',price: 21.50 ,description:'description product2'}
];

exports.getProduct = (req, res) => {
    try {
      apiResponse.successResponseWithData(res,"product find",product);
    } catch (error) {
      apiResponse.ErrorResponse(res,"error search product");
    }
};

exports.getProductById = (req, res) => {
    var product_id = req.body.id;
    var product_data = product.find(item => item.id === product_id);
    if (product_data) {
      apiResponse.successResponseWithData(res,"product find",product_data);
    } else {
      apiResponse.notFoundResponse(res," product not found");
    }
};