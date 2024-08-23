import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">
            © 2024 FlashReports. All rights reserved. Developed by Supekar Sagar Hanumant.
          </p>
        </div>
      </footer>
    );
  }
}
