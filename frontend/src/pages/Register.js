import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful");
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>

      <input
        className="form-control mb-2"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;