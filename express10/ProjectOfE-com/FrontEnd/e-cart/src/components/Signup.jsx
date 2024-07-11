import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const dataInfo = (event) => {
    event.preventDefault(); 
    console.log("Name:", Name, "Email:", Email, "Password:", Password);
  }

  return (
    <div className="aligncenter">
      <div className="register-container">
        <h2 style={{ color: "#131313", textAlign: "center" }}>SignUp!!</h2>
        <form className="register-form" onSubmit={dataInfo}>
          <div className="form-group">
            <label htmlFor="name">Enter Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={Name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
