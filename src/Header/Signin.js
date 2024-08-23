import React, { Component } from 'react';

import { FaGoogle, FaFacebookF } from 'react-icons/fa';


export default class Signin extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center my-4">
        
        <div className="card p-4" style={{ width: '300px', borderColor:"black",backgroundColor:"#0d093b",color:"white" }}>
          
          <h3 className="text-center mb-4">Sign In</h3>

          
          <div className="mb-3">
            <button className="btn btn-outline-primary btn-block w-100 d-flex align-items-center justify-content-center">
              <FaGoogle className="me-2" />
              Sign in with Google
            </button>
          </div>

          
          <div className="mb-3">
            <button className="btn btn-outline-primary btn-block w-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#3b5998', borderColor: 'pink',color:"white" }}>
              <FaFacebookF className="me-2" />
              Sign in with Facebook
            </button>
          </div>

         
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>

          
          <div className="mb-3">
            <button className="btn btn-success btn-block w-100">Sign In</button>
          </div>

          
          <div className="mb-3 text-end">
            <a href="/" className="text-decoration-none">Forgot Password?</a>
          </div>

          
          <div className="text-center mt-3">
            <small>After sign in, all rights are reserved.</small>
          </div>
        </div>
      </div>
    );
  }
}
