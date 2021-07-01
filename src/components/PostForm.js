import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import PropTypes from "prop-types";

export class PostForm extends Component {
  state = {
    title: "",
    post: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { title, post } = this.state;
    const postItem = {
      title,
      body: post,
    };

    this.props.createPost(postItem);
  };

  render() {
    return (
      <div id="postForm">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="inputTitle">Title</label>
            <input
              onChange={this.onChange}
              value={this.state.title}
              name="title"
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Enter title of your article"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Body">Body</label>
            <textarea
              onChange={this.onChange}
              value={this.state.post}
              name="post"
              type="text"
              className="form-control"
              id="Body"
              placeholder="Enter a body of your article"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
