import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pageLimit: 10,
      currentPage: 0,
      errorMsg: "",
      pages: [],
      records: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({ posts: res.data });
        this.limitPerPage(0);
      })
      .catch(error => {
        this.setState({ errorMsg: "thows an error" });
      });
  }

  limitPerPage() {
    let { posts, pageLimit } = this.state;
    let pages = Math.ceil(posts.length / pageLimit);
    let allPages = [];
    let j = 0;
    for (let i = 1; i <= pages; i++) {
      allPages[j] = i;
      j = j + this.state.pageLimit;
    }
    this.setState({
      pages: allPages
    });
    this.paginate(0);
  }

  paginate(start) {
    console.log("clicked...!", start);
    let myPages = [];
    for (let i = start; i < this.state.pageLimit + start; i++) {
      myPages.push(this.state.posts[i]);
    }
    this.setState({
      records: myPages
    });
  }

  render() {
    console.log(this.state.pages);
    const { records, errorMsg, pages } = this.state;
    var pageLimit = 10;
    const content = records.map(person => {
      return (
        <tbody key={person.id}>
          <tr>
            <td key={person.id}>{person.id}</td>
            <td key={person.title}>{person.title}</td>
            <td key={person.body}>{person.body}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div>
        <div>
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
          one -
          {pages.map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  this.paginate(index);
                }}
              >
                page{page}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostList;
