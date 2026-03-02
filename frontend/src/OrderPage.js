import React, { useState } from "react";

function OrderPage() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!orderPlaced ? (
        <button onClick={handleOrder}>
          Place Order
        </button>
      ) : (
        <h2 style={{ color: "green" }}>
          ✅ Order Placed Successfully!
        </h2>
      )}
    </div>
  );
}

export default OrderPage;