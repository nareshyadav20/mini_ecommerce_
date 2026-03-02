import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
    window.location.reload(); // refresh navbar instantly
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">

        {/* 🛒 Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          🛒 MiniShop
        </Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">
            🏠 Home
          </Link>

          <Link className="btn btn-warning me-2" to="/cart">
            🛍 Cart
          </Link>

          {!token ? (
            <>
              <Link className="btn btn-success me-2" to="/login">
                Login
              </Link>

              <Link className="btn btn-info" to="/register">
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="text-white fw-bold me-3">
                👤 {name}
              </span>

              <button
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;