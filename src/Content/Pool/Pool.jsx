import React, { Component } from "react";
import Post from "../../Post/Post";
import Contain from "../Contain/Contain";
import Poolstyles from "./Pool.module.css";
import {connect} from "react-redux"

export class Pool extends Component {
  
  render() {
    const { posts } = this.props;
    const postsJSX = posts.map((post) => {
      return (
        <Post
          post={post}
          key={post._id}
        />
      );
    });
    return (
     <>
      <div className={Poolstyles.wrapper}>{postsJSX}</div>
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

export default connect(mapStateToProps,null)(Pool);
