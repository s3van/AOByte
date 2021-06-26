import React, { Component } from "react";
import ListStyles from "./List1.module.css";
import ListPost from "./ListPost";

export class List1 extends Component {
  

  render() {
    const { listPosts,handleAddPost1 } = this.props;
    const postsJSX = listPosts.map((post) => {
      return <ListPost post={post} key={post._id} />;
    });
    return (
      <div className={ListStyles.wrapper}>
        <button onClick={handleAddPost1}>+</button>
        <button>sort</button>
        <div>{postsJSX}</div>
      </div>
    );
  }
}

export default List1;
