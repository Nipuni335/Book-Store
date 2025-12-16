import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import bookImage from "../assets/bird.png"; // replace with book image if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5555/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      alert("Login Successful!");
      navigate("/");
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="login-wrapper-flex">

      {/* LEFT SIDE */}
      <div className="left-side">
        <img src={bookImage} alt="Left Visual" className="left-img" />

        <h2 className="left-title">Maecenas mattis egestas</h2>
        <p className="left-desc">
          Erudum et malesuada fames ac ante ipsum primis in faucibus suspendisse porta.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side">
        <h1 className="brand">Kavindya Book Store</h1>
        <p className="welcome">Welcome to Kavindya Book Store</p>

        {error && <p className="error">{error}</p>}

        <form className="form" onSubmit={submit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Link to="/forgot-password" className="forgot">
            Forgot password?
          </Link>

          <button type="submit" className="btn-login">Sign in</button>
        </form>

        <div className="divider"><span>or</span></div>

        <button className="google-btn">Sign in with Google</button>

        <p className="create-text">
          Do Not Have an Account?
          <Link to="/register" className="create-link"> Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
