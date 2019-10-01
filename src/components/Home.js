import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
      mobile: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="col-sm-4 offset-sm-4">
        <h2>HomePage</h2>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={this.state.userName}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <label>Mobile No</label>
            <input
              type="tel"
              name="mobile"
              className="form-control"
              value={this.state.mobile}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
