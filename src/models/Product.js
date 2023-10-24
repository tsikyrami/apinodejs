var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
	id: {type: String, required: true},
	name: {type: String, required: true},
	price: {type: Number, required:false, default: 0},
	description: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);