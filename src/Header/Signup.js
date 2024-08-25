import React, { Component } from "react";

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
  }

  // Save user data to local storage
  saveUserData = () => {
    const { name, email, password, confirmPassword } = this.state;
    let data = { name, email, password, confirmPassword };
    localStorage.setItem("userData", JSON.stringify(data));
    alert("Register successfully");
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    const { name, email, password, confirmPassword } = this.state;
    let errors = {};
    let formIsValid = true;

    // Name validation
    if (!name) {
      formIsValid = false;
      errors["name"] = "Please enter your name.";
    }

    // Email validation
    if (!email) {
      formIsValid = false;
      errors["email"] = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Email is not valid.";
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      errors["password"] = "Please enter your password.";
    } else if (password.length < 6) {
      formIsValid = false;
      errors["password"] = "Password must be at least 6 characters long.";
    }

    // Confirm Password validation
    if (!confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Passwords don't match.";
    }

    this.setState({ errors });
    return formIsValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.saveUserData();
    }
  }

  render() {
    const { name, email, password, confirmPassword, errors } = this.state;

    return (
      <div className="container d-flex justify-content-center align-items-center my-4">
        <div
          className="card p-4"
          style={{ width: "350px", backgroundColor: "#0d093b", color: "white" }}
        >
          <h3 className="text-center mb-4">Register</h3>

          <form onSubmit={this.handleSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Enter your name"
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleChange}
                placeholder="Confirm your password"
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <div className="text-center mt-3">
            <small>
              By registering, you agree to our terms and conditions.
            </small>
          </div>
        </div>
      </div>
    );
  }
}
