import React, { Component } from 'react';

export default class Aboutus extends Component {
  render() {
    return (
      <div className="container my-4 p-4" style={{ borderRadius: "15px", backgroundColor: "#252262", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", marginTop: "150px" }}>
        <div className="text-center mb-3">
          {/* Optional space for an image or logo */}
        </div>
        <h1 style={{ color: "white", marginTop: "50px", textAlign: "center", fontSize: "2.5rem", fontWeight: "bold" }}>
          FlashReports
        </h1>
        <p style={{ color: "white", textAlign: "justify", padding: "15px", lineHeight: "1.6", fontSize: "1.1rem" }}>
          FlashReports is a cutting-edge news platform that empowers users to stay informed and share insights on the latest events and topics.
        </p>
        <hr style={{ borderColor: "white", margin: "20px auto", width: "50%" }} />
        <small style={{ color: "white", display: "block", textAlign: "center", marginTop: "20px", fontSize: "0.9rem", letterSpacing: "0.5px" }}>
          &copy; {new Date().getFullYear()} Sagar Supekar. All rights reserved.
        </small>
      </div>
    );
  }
}
