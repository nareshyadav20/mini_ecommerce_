const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity
} = require("../controllers/cartController");

router.post("/", addToCart);
router.get("/", getCart);
router.delete("/:id", removeFromCart);
router.put("/:id", updateCartQuantity); // IMPORTANT

module.exports = router;