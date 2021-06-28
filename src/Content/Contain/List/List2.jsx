import React, { Component } from "react";
import ListStyles from "./List1.module.css";
import ListPost from "./ListPost";

class List2 extends Component {
  state = {
    listId2: 2,
  };
  render() {
    const { listPosts2, handleAddPost, handleRemovePost} = this.props;
    let raitArr = [];
    let raitingsArr = [];

    const postsJSX = listPosts2.map((post) => {
      post.comments.forEach((comm) => {
        raitArr.push(comm.raiting);
      });
      let sum = raitArr.reduce((a, b) => a + b, 0);
      let readRaiting = sum / raitArr.length;
      raitingsArr.push(readRaiting);
      raitArr = [];
      return (
        <ListPost
          post={post}
          key={post._id}
          handleRemovePost={(e) =>
            handleRemovePost(null, this.state.listId2, post._id)
          }
          readRaiting={readRaiting}
          listId={this.state.listId2}
        />
      );
    });

    return (
      <div className={ListStyles.wrapper}>
        <button onClick={(e) => handleAddPost(this.state.listId2)}>+</button>
        <button>sort</button>
        <div>{postsJSX}</div>
      </div>
    );
  }
}

export default List2;
