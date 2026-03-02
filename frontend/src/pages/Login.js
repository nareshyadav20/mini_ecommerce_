import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please enter email and password");
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // 🔥 Save token + name
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.name);

      alert("Login Successful");

      // Redirect to Home
      navigate("/");

      // Refresh navbar instantly
      window.location.reload();

    } catch (error) {
      alert(error.response?.data || "Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg border-0">
        <h2 className="mb-4 text-center text-primary">🔐 Login</h2>

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-success w-100 mb-3"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;