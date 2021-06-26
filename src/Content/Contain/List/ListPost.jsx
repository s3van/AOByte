import React, { Component } from "react";
import ListPostStyles from "./ListPost.module.css"

export class ListPost extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className={ListPostStyles.wrapper}>
        <div className={ListPostStyles.message}>
          <div className={ListPostStyles.name}>{post.name}</div>
          <div className={ListPostStyles.post}>{post.post}</div>
        </div>
      </div>
    );
  }
}

export default ListPost;
