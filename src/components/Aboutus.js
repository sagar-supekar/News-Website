import React, { Component } from 'react';

export default class Aboutus extends Component {
  render() {
    return (
      <div 
        className="d-flex justify-content-center align-items-center" 
        style={{
          minHeight: "100vh", 
          backgroundColor: "#252262", 
          padding: "2rem",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "800px", color: "white" }}>
          <div className="mb-4">
            {/* Optional space for an image or logo */}
           <img src="News-Logo-Template-Download-scaled.jpg" alt="FlashReports Logo" style={{ maxWidth: "50%", height: "auto",borderRadius:"20px" }} /> 
          </div>
          <h1 className="display-4 font-weight-bold mb-4">
            FlashReports
          </h1>
          <p style={{ lineHeight: "1.6", fontSize: "1.1rem", textAlign:"justify" }}>
            FlashReports is a cutting-edge news platform that empowers users to stay informed and share insights on the latest events and topics. Our mission is to provide timely, accurate, and engaging news content that resonates with our diverse audience.
          </p>
          <hr style={{ borderColor: "white", margin: "2rem auto", width: "50%" }} />
          <small style={{ fontSize: "0.9rem", letterSpacing: "0.5px" }}>
            &copy; {new Date().getFullYear()} Sagar Supekar. All rights reserved.
          </small>
        </div>
      </div>
    );
  }
}
