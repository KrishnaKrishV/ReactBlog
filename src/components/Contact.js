import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class Contact extends Component {
  updateLanguage = e => this.setState({ language: e.target.value });

  render() {
    return (
      <div>
        <UserConsumer>
          <header>
            see this site in
            <select onChange={updateLanguage}>
              <option value="french">french</option>
              <option value="english">english</option>
              <option value="italian">italian</option>
            </select>
          </header>
          )}
        </UserConsumer>
      </div>
    );
  }
}

export default Contact;
