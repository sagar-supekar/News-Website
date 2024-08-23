import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoMdLogIn, IoMdPersonAdd } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

export default class Navbar extends Component {
  
  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  }

  render() {
    return (
      <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">FlashReports</a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" onClick={() => this.closeNavbar()}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Aboutus" onClick={() => this.closeNavbar()}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={() => this.closeNavbar()}>Contact Us</Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="/" 
                    id="accountDropdown" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    style={{ zIndex: 1050 }}  
                  >
                    <FaUserCircle size={20} /> Account
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                    <li><Link className="dropdown-item" to="/account-info" onClick={() => this.closeNavbar()}>Account Information</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/settings" onClick={() => this.closeNavbar()}>Settings</Link></li>
                  </ul>
                </li>

               
                <li className="nav-item">
                  <Link className="nav-link" to="/SavedArticles" onClick={() => this.closeNavbar()}>
                    Saved Articles
                  </Link>
                </li>

               
                <li className="nav-item">
                  <Link className="nav-link" to="/Signin" onClick={() => this.closeNavbar()}>
                    <IoMdLogIn /> Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup" onClick={() => this.closeNavbar()}>
                    <IoMdPersonAdd /> Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
