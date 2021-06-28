import React, { Component } from "react";
import ListStyles from "./List1.module.css";
import ListPost from "./ListPost";

export class List1 extends Component {
  state = {
    listId1: 1,
  };
 
  render() {

    //   const cls = [TaskStyles.wrapper];
    // if (isChecked) {
    //   cls.push(TaskStyles.checkedWrapper);
    // }

    const { listPosts1, handleAddPost, handleRemovePost, } = this.props;

    let raitArr = [];
    let raitingsArr = []

    const postsJSX = listPosts1.map((post) => {
      post.comments.forEach((comm) => {
        raitArr.push(comm.raiting);
      });
      let sum = raitArr.reduce((a,b) => a+b,0);
      let readRaiting = sum/raitArr.length
      raitingsArr.push(readRaiting)
      raitArr = []
      
      return (
        <ListPost
          post={post}
          key={post._id}
          handleRemovePost={(e) =>
            handleRemovePost(this.state.listId1, null, post._id)
          }
          readRaiting={readRaiting}
          listId={this.state.listId1}

        />
      );
    });

    return (
      <div className={ListStyles.wrapper}>
        <button onClick={(e) => handleAddPost(this.state.listId1)}>+</button>
        <button>sort</button>
        <div>{postsJSX}</div>
      </div>
    );
  }
}

export default List1;
