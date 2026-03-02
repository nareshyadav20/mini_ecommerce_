const Cart = require("../models/Cart");

// ADD TO CART
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const newItem = new Cart({
      productId,
      quantity
    });

    await newItem.save();
    res.json(newItem);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to cart" });
  }
};

// GET CART
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate("productId");
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart" });
  }
};

// REMOVE ITEM
exports.removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error removing item" });
  }
};

// UPDATE QUANTITY  ⭐ VERY IMPORTANT ⭐
exports.updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    res.json(updatedItem);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating quantity" });
  }
};