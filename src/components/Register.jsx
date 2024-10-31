import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Use useHistory for version 5

const Register = ({ setIsLoggedIn }) => {
  const [firstName, setFirstName] = useState(""); // State for first name
  const [lastName, setLastName] = useState(""); // State for last name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory(); // Initialize useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/register", { 
        firstName, // Send first name
        lastName, // Send last name
        email, 
        password 
      });
      setMessage(response.data.message);

      // Assuming successful registration logs in the user immediately
      if (response.status === 201) {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true); // Call the function to update login status
        history.push("/home"); // Redirect to home page
      }
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;
