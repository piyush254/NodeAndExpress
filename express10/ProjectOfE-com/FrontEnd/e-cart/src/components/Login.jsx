import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div className="login">
      <form>
        <label htmlFor="name">Enter Your UserName</label>
        <input
          type="text"
          name="name"
          placeholder="Enter UserName"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
