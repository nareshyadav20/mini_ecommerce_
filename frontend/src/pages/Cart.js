import { useEffect, useState } from "react";
import API from "../services/api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [showAddressBox, setShowAddressBox] = useState(false);
  const [address, setAddress] = useState("");

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      setCartItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      fetchCart();
    } catch (error) {
      alert("Error removing item");
    }
  };

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;

    try {
      await API.put(`/cart/${id}`, { quantity });
      fetchCart();
    } catch (error) {
      alert("Error updating quantity");
    }
  };

  // ✅ SAFE TOTAL CALCULATION
  const total = cartItems.reduce((sum, item) => {
    if (!item.productId) return sum;
    return sum + item.productId.price * item.quantity;
  }, 0);

  const confirmOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address");
      return;
    }

    alert("Order Placed Successfully!");
    setCartItems([]);
    setShowAddressBox(false);
    setAddress("");
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Cart</h1>

      {cartItems.length === 0 && <p>Cart is Empty</p>}

      {cartItems.map((item) => (
        <div key={item._id} className="card mb-3 p-3 shadow-sm">

          {/* ✅ SAFE PRODUCT CHECK */}
          {item.productId ? (
            <>
              <h5>{item.productId.name}</h5>
              <p>Price: ₹{item.productId.price}</p>

              <div className="d-flex align-items-center mb-2">
                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() =>
                    updateQuantity(item._id, item.quantity - 1)
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  className="btn btn-secondary btn-sm ms-2"
                  onClick={() =>
                    updateQuantity(item._id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <p>Total: ₹{item.productId.price * item.quantity}</p>
            </>
          ) : (
            <p className="text-danger">
              Product no longer available
            </p>
          )}

          <button
            className="btn btn-danger btn-sm"
            onClick={() => removeItem(item._id)}
          >
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3 className="mt-3">Grand Total: ₹{total}</h3>

          <button
            className="btn btn-success mt-3"
            onClick={() => setShowAddressBox(true)}
          >
            Place Order
          </button>
        </>
      )}

      {/* Address Dialog */}
      {showAddressBox && (
        <div className="card p-3 mt-4 shadow">
          <h5>Enter Delivery Address</h5>

          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Enter your full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            className="btn btn-primary me-2"
            onClick={confirmOrder}
          >
            Confirm Order
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setShowAddressBox(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;