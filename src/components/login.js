import React, { Component } from "react";

const initialState = {
  userName: "",
  password: "",
  userNameError: "",
  passwordError: ""
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.newUser = JSON.parse(localStorage.getItem("registerData"));
  }

  updateUser = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = event => {
    let userNameError = "";
    let passwordError = "";
    if (!this.state.userName) {
      userNameError = "UserName is required";
    } else if (this.state.userName !== this.newUser.userName) {
      userNameError = "UserName is incorrect";
    }
    if (!this.state.password) {
      passwordError = "Password is required";
    } else if (this.state.password !== this.newUser.password) {
      passwordError = "Password is incorrect";
    }

    if (userNameError || passwordError) {
      this.setState({ userNameError, passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    let isValid = this.validate();
    if (isValid) {
      console.log(this.state.userName);
      this.setState(initialState);
      console.log(this.newUser);
    }
  };

  render() {
    return (
      <div className="col-sm-4 offset-sm-4 border">
        <h1 style={{ textAlign: "center" }}>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>UserName :</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="User Name"
              value={this.state.userName}
              onChange={this.updateUser}
            />
          </div>
          <div style={{ color: "red" }}>{this.state.userNameError}</div>
          <div className="form-group">
            <label>Password:</label>
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

export default Login;
