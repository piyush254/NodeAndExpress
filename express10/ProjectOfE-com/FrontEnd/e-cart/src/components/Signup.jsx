import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="aligncenter">
    <div className="register-container">
      <h1>Register</h1>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="name">Enter Name</label>
          <input type="text" placeholder="Enter Name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter Email</label>
          <input type="text" placeholder="Enter Email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter Password</label>
          <input type="password" placeholder="Password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
