import React, { Component } from "react";
import ListStyles from "./List1.module.css";
import ListPost from "./ListPost";

export class List1 extends Component {
  state = {
    listId1: 1,
  };
 
  render() {

    const { listPosts1, handleAddPost, handleRemovePost, toggleSort } = this.props;

    const postsJSX = listPosts1.map((post) => {
      
      return (
        <ListPost
          post={post}
          key={post._id}
          handleRemovePost={(e) =>
            handleRemovePost(this.state.listId1, null, post._id)
          }
          averageRaiting={post.averageRaiting}
          listId={this.state.listId1}

        />
      );
    });

    return (
      <div className={ListStyles.wrapper}>
        <button onClick={(e) => handleAddPost(this.state.listId1)}>+</button>
        <button onClick={(e) => toggleSort(this.state.listId1)}>sort</button>
        <div>{postsJSX}</div>
      </div>
    );
  }
}

export default List1;
