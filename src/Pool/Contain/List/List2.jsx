import React, { Component } from "react";
import ListStyles from "./List1.module.css";
import ListPost from "./ListPost";

class List2 extends Component {
  state = {
    listId2: 2,
  };

  render() {
    const {
      listPosts2,
      handleAddPost,
      handleRemovePost,
      toggleSort,
    } = this.props;

    const postsJSX = listPosts2.map((post) => {
      return (
        <ListPost
          post={post}
          key={post._id}
          handleRemovePost={(e) =>
            handleRemovePost(null, this.state.listId2, post._id)
          }
          averageRating={post.averageRating}
          listId={this.state.listId2}
        />
      );
    });

    return (
      <div className={ListStyles.wrapper}>
        <button onClick={(e) => handleAddPost(this.state.listId2)}>+</button>
        <button onClick={(e) => toggleSort(this.state.listId2)}>sort</button>
        <div>{postsJSX}</div>
      </div>
    );
  }
}

export default List2;
