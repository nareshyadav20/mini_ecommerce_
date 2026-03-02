function ProductCard({ product, addToCart }) {
  return (
    <div className="card shadow-sm p-3 h-100">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top mb-2"
        style={{ height: "200px", objectFit: "contain" }}
      />

      <h5>{product.name}</h5>
      <p className="fw-bold">₹{product.price}</p>

      <button
        className="btn btn-primary"
        onClick={() => addToCart(product._id)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;