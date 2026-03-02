import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        alert("Please login again");
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow text-center">
        <h2>👤 Profile</h2>
        <hr />
        <h4>Name: {user.name}</h4>
        <h5>Email: {user.email}</h5>
      </div>
    </div>
  );
}

export default Profile;