import React, { Component } from "react";
import List1 from "./List/List1";
import List2 from "./List/List2";
import ContainStyles from "./Contain.module.css";

export class Contain extends Component {
  state = {
    newArr: [],
    listPosts: [],
    addedPosts: new Set(),
  };

  handleAddPost1 = (props) => {
    let { posts } = this.props;
    let { addedPosts, newArr, listPosts } = this.state;
    posts.forEach((post) => {
      addedPosts.add(post._id);
      newArr.push(post);
    });
    let lastEl = newArr.pop()
    console.log(lastEl)
    listPosts.push(lastEl)
    this.setState({
      addedPosts: addedPosts,
      newArr: newArr,
      listPosts:listPosts
    });
    console.log(addedPosts);
    console.log(newArr);
  };

  
  render() {
    const { posts } = this.props;
    return (
      <div className={ContainStyles.wrapper}>
        <List1
          posts={posts}
          listPosts={this.state.listPosts}
          handleAddPost1={this.handleAddPost1}
        />
        <List2 posts={posts} />
      </div>
    );
  }
}

export default Contain;
