import React, { Component } from "react";
import Post from "../../Post/Post";
import Contain from "../Contain/Contain";
import PoolStyles from "./Pool.module.css";
import { connect } from "react-redux";

export class Pool extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = () => {
    const { inputValue } = this.state;
    if (!!inputValue) {
      this.props.handleSearch(inputValue);
    }
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { posts } = this.props;

    const postsJSX = posts.map((post) => {
      return <Post post={post} key={post._id} />;
    });
    return (
      <>
        <div className={PoolStyles.wrapper}>
          <div className={PoolStyles.toolsWrap}>
            <input
              placeholder="Type Name"
              type="text"
              onChange={this.handleChange}
              value={this.state.inputValue}
              className={PoolStyles.inptWrap}
            />
            <button onClick={this.handleSubmit} className={PoolStyles.btnWrap}>
              Search
            </button>
          </div>
          {postsJSX}
        </div>
        <Contain posts={posts} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (data) => {
      dispatch({ type: "search", data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pool);
