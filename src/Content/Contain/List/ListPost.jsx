import React, { Component } from "react";
import ListPostStyles from "./ListPost.module.css"

export class ListPost extends Component {
  
  render() {
    const { post, handleRemovePost, readRaiting } = this.props;
    return (
      <div className={ListPostStyles.wrapper}>
        <div className={ListPostStyles.message}>
          <div className={ListPostStyles.name}>{post.name}</div>
          <div className={ListPostStyles.post}>{post.post}</div>
          <div className={ListPostStyles.raiting}>Raiting: {readRaiting}</div>
          <button onClick={handleRemovePost}>-</button>
        </div>
      </div>
    );
  }
}

export default ListPost;
