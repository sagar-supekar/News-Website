import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default class Signin extends Component {
  validateUser = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    let userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && email === userData.email && password === userData.password) {
      alert("Sign in successfully");
    } else {
      alert("Invalid username or password");
    }
  };

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center my-4">
        <div
          className="card p-4"
          style={{
            width: "300px",
            borderColor: "black",
            backgroundColor: "#0d093b",
            color: "white",
          }}
        >
          <h3 className="text-center mb-4">Sign In</h3>

          <div className="mb-3">
            <button className="btn btn-outline-primary btn-block w-100 d-flex align-items-center justify-content-center">
              <FaGoogle className="me-2" />
              Sign in with Google
            </button>
          </div>

          <div className="mb-3">
            <button
              className="btn btn-outline-primary btn-block w-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#3b5998",
                borderColor: "pink",
                color: "white",
              }}
            >
              <FaFacebookF className="me-2" />
              Sign in with Facebook
            </button>
          </div>

          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" id="email"/>
          </div>

          <div className="mb-3"> 
            <input
              type="password"
              className="form-control"
              placeholder="Password" id="password"
            />
          </div>

          <div className="mb-3">
            <button className="btn btn-success btn-block w-100" onClick={this.validateUser}>Sign In</button>
          </div>
          
          <div className="d-flex justify-content-between mb-3 mx-2">
            <Link to="/Signup" >
              New user? Register
            </Link>
            <a href="/" >
              Forgot Password?
            </a>
          </div>

          <div className="text-center mt-3">
            <small>After sign in, all rights are reserved.</small>
          </div>
        </div>
      </div>
    );
  }
}
