import { useEffect, useState } from "react";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/products?search=${search}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search]);

  const addToCart = async (id) => {
    try {
      await API.post("/cart", { productId: id, quantity: 1 });
      alert("Added to Cart");
    } catch (error) {
      alert("Error adding to cart");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Products</h1>

      {/* Search Bar */}
      <input
        className="form-control mb-4"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading products...</p>}

      {!loading && products.length === 0 && (
        <p>No Products Found</p>
      )}

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product._id}>
            <ProductCard
              product={product}
              addToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;