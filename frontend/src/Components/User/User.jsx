import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import './user.css';

const User = () => {
  const [email, setEmail] = useState("");
  const [password ,setpassword] =useState('');
  const [error, setError] = useState("");
  const [loading ,setloading] = useState(false)
  const navigate = useNavigate();

  const checkAdmin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setloading(true)
      const { data } = await axios.post(
        `${import.meta.env.VITE_PORT}/admin`,
        { email ,password}
      );

      if (data.message) {
        setloading(false)
        localStorage.setItem("isAdmin", true);
        navigate("/addproject");
      } else {
        localStorage.removeItem("isAdmin");
        setError("Admin user not found.");
      }
    } catch (error) {
      setloading(false)
      localStorage.removeItem("isAdmin");
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="user-container">
      <h1 className="user-heading">Are you unauthorized?</h1>
      <form onSubmit={checkAdmin} className="user-form">
        <input
          type="text"
          placeholder="Enter your credential"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="user-input"
        /> 

        <input
          type="password"
          placeholder="Enter your secret code"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="user-input"
        /> 


        {loading ? (  <ClipLoader size={20} color="#1876f2" loading={loading} />) :(
          <button type="submit" className="user-button">
          Check..
        </button>
        )}
        
      </form>
      {error && <p className="user-error">{error}</p>}
    </div>
  );
};

export default User;
