import PostStyles from "./Post.module.css";
import React, { Component } from 'react'
import Comment from "../Comment/Comment"
import {connect} from "react-redux"

export class Post extends Component {
  
  render() {

    const { post } = this.props;

    const commentsJSX = post.comments.map((comment) => {
      return (
        <Comment
          comment={comment}
          key={comment._id}
        />
      );
    });
  
    return (
      <div className={PostStyles.wrapper}>
        <div className={PostStyles.message}>
          <div className={PostStyles.name}>{post.name}</div>
          <div className={PostStyles.post}>{post.post}</div>
          <div className={PostStyles.comments}>
            Comment
          <div className={PostStyles.commentsInput}>
          {commentsJSX}
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

export default connect(mapStateToProps,null)(Post)
