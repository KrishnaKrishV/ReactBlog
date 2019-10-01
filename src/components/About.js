import React, { Component } from "react";
import axios from "axios";

class About extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      error: ""
    };
  }
  componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log(response);
      })
      .catch(error => {
        this.setState({
          error: "Error retriving message"
        });
        console.log(error);
      });
  }
  render() {
    const { posts, error } = this.state;
    const content = posts.map(post => (
      <tbody key={post.id}>
        <tr>
          <td key={post.id}>{post.id}</td>
          <td key={post.title}>{post.title}</td>
          <td key={post.body}>{post.body}</td>
        </tr>
      </tbody>
    ));
    return (
      <div>
        <h3>Table List of posts from API</h3>
        <div className="col-sm-8 offset-sm-2 ">
          <table className="table table-bordered table-hover ">
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            {content}
          </table>
        </div>
      </div>
    );
  }
}

export default About;
