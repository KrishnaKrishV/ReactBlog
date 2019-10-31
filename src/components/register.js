import React, { Component } from "react";

const initialState = {
  userName: "",
  email: "",
  password: "",
  cPassword: "",
  mobile: "",
  userNameError: "",
  emailError: "",
  passwordError: "",
  cPasswordError: "",
  mobileError: ""
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  updateUser = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    let userNameError = "";
    let emailError = "";
    let passwordError = "";
    let cPasswordError = "";
    let mobileError = "";

    if (!this.state.userName) {
      userNameError = "Please enter your username";
    } else if (!this.state.userName.match(/^[a-zA-z]+$/)) {
      userNameError = "Only alphabets";
    }

    if (!this.state.email) {
      emailError = "Please enter your email";
    } else if (
      !this.state.email.includes("@") ||
      !this.state.email.includes(".")
    ) {
      emailError = "Invalid email";
    }

    if (!this.state.password) {
      passwordError = "Password is required";
    }
    if (!this.state.cPassword) {
      cPasswordError = "Password is required";
    } else if (this.state.password !== this.state.cPassword) {
      cPasswordError = "Password does not match";
    }

    if (!this.state.mobile.match(/^[0-9]{10}$/)) {
      mobileError = "Please enter valid mobile number";
    }

    if (
      emailError ||
      userNameError ||
      passwordError ||
      cPasswordError ||
      mobileError
    ) {
      this.setState({
        emailError,
        userNameError,
        passwordError,
        cPasswordError,
        mobileError
      });
      return false;
    }
    return true;
  };

  clickHandler = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      localStorage.setItem("registerData", JSON.stringify(this.state));
      //   this.setState(initialState);
    }
    this.props.navigation.e("Login");
  };

  render() {
    return (
      <div className="col-sm-4 offset-sm-4 border">
        <h1 style={{ textAlign: "center" }}>Register Form</h1>
        <form onSubmit={this.clickHandler}>
          <div className="form-group">
            <label> UserName: </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="UserName"
              value={this.state.userName}
              onChange={this.updateUser}
            />
          </div>
          <div style={{ color: "red" }}>{this.state.userNameError}</div>

          <div className="form-group">
            <label> Email: </label>
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.updateUser}
            />
          </div>
          <div style={{ color: "red" }}>{this.state.emailError}</div>

          <div className="form-group">
            <label> Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.updateUser}
            />
          </div>
          <div style={{ color: "red" }}>{this.state.passwordError}</div>

          <div className="form-group">
            <label>Confirm Password: </label>
            <input
              type="password"
              className="form-control"
              name="cPassword"
              placeholder="Confirm Password"
              value={this.state.cPassword}
              onChange={this.updateUser}
            />
          </div>
          <div style={{ color: "red" }}>{this.state.cPasswordError}</div>

          <div className="form-group">
            <label> Phone no: </label>
            <input
              type="text"
              className="form-control"
              name="mobile"
              placeholder="Mobile Number"
              value={this.state.mobile}
              onChange={this.updateUser}
            />
          </div>
          <div style={{ color: "red" }}>{this.state.mobileError}</div>
          <div className="form-group" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
