import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5555/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2 className="title">Create Account</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="field-label">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="field-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="field-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="field-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="field-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            className="field-input"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label className="field-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="field-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-register">
            Register
          </button>
        </form>

        <p className="bottom-text">
          Already have an account?
          <Link to="/login" className="login-link"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
