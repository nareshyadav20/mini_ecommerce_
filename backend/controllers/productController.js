const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const search = req.query.search;

  if (search) {
    const products = await Product.find({
      name: { $regex: search, $options: "i" }
    });
    return res.json(products);
  }

  const products = await Product.find();
  res.json(products);
};

exports.getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};