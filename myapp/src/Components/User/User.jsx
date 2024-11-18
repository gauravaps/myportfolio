import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const checkAdmin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_PORT}/admin`,
        { email }
      );

      if (data.message) {
        localStorage.setItem("isAdmin", true);
        navigate("/addproject");
      } else {
        localStorage.removeItem("isAdmin");
        setError("Admin user not found.");
      }
    } catch (error) {
      localStorage.removeItem("isAdmin");
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div>
      <h1>Are you unauthorized?</h1>
      <form onSubmit={checkAdmin}>
        <input
          type="text"
          placeholder="Enter your credential"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Go..</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default User;
