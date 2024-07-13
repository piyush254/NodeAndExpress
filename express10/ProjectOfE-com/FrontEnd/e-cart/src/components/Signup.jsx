import React, { useEffect, useState } from 'react';
import './Signup.css';
import {json, useNavigate} from "react-router-dom"

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const Navigator = useNavigate('')
  const navigate = useNavigate();
  
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const dataInfo =async (event) => {
    event.preventDefault(); 
    console.log("Name:", Name, "Email:", Email, "Password:", Password);
    let result =await fetch('http://localhost:5000/register',{
      method : 'post',
      body:[JSON.stringify({Name , Email , Password})],
      headers : {
        'content-Type' : 'application/json'
      }
    })
    result = await result.json()
    console.warn(result)

    setName("");
    setEmail("");
    setPassword("");

    localStorage.setItem("user" , JSON.stringify(result))
    if(result){
      Navigator("/");
    }
  }

  return (
    <div className="aligncenter">
      <div className="register-container">
        <h2 style={{ color: "#666", textAlign: "center" , marginBottom: "1rem" }}>SignUp</h2>
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
