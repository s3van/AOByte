import React, { Component } from "react";
import List1 from "./List/List1";
import List2 from "./List/List2";
import ContainStyles from "./Contain.module.css";

export class Contain extends Component {
  state = {
    newArr: [...this.props.posts],
    listPosts1: [],
    listPosts2: [],
    ratingsArr: [],
  };

  handleCalcAverageRating = (arr) => {
    let averagearr = [];
    if (arr.length) {
      arr.forEach((post) => {
        post.comments.forEach((comm) => {
          averagearr.push(comm.rating);
        });
        let sum = averagearr.reduce((a, b) => a + b, 0);
        let rating = sum / averagearr.length;
        post.averageRating = rating;
        this.state.ratingsArr.push(post.averageRating);
        averagearr = [];
      });
      this.setState({
        ratingsArr: [],
        listPosts1: arr,
        listPosts2: arr,
      });
    }
  };

  toggleSort = (listId) => {
    if (listId === 1) {
      this.state.listPosts1.sort((a, b) => {
        if (a.averageRating > b.averageRating) {
          return b.averageRating - a.averageRating;
        }
        if (a.averageRating < b.averageRating) {
          return a.averageRating - b.averageRating;
        }
        return 0;
      });
    }
    if (listId === 2) {
      this.state.listPosts2.sort((a, b) => {
        if (a.averageRating > b.averageRating) {
          return b.averageRating - a.averageRating;
        }
        if (a.averageRating < b.averageRating) {
          return a.averageRating - b.averageRating;
        }
        return 0;
      });
    }
    this.setState({
      listPosts1: this.state.listPosts1,
      listPosts2: this.state.listPosts2,
    });
  };

  handleAddPost = (listId) => {
    let { newArr, listPosts1, listPosts2 } = this.state;
    let poped;
    if (newArr.length > 0 && listId === 1) {
      poped = newArr.pop();
      listPosts1.push(poped);
      this.handleCalcAverageRating(listPosts1);
      listPosts1.sort((a, b) => {
        return a.averageRating - b.averageRating;
      });
    } else if (newArr.length > 0 && listId === 2) {
      poped = newArr.pop();
      listPosts2.push(poped);
      this.handleCalcAverageRating(listPosts2);
      listPosts2.sort((a, b) => {
        return a.averageRating - b.averageRating;
      });
    } else {
      return;
    }
    poped.isAdded = true;
    this.props.toggleHaidPost(poped, "+");
    this.setState({
      newArr,
      listPosts1,
      listPosts2,
    });
  };

  handleRemovePost = (listId1, listId2, _id) => {
    let poped;
    let { listPosts1, newArr, listPosts2 } = this.state;

    if (listId1) {
      listPosts1 = [...this.state.listPosts1];
      let idx = listPosts1.findIndex((post) => post._id === _id);
      poped = listPosts1[idx];
      listPosts1.splice(idx, 1);
      poped.isAdded = false;
      newArr.push(poped);
    } else if (listId2) {
      listPosts2 = [...this.state.listPosts2];
      let idx = listPosts2.findIndex((post) => post._id === _id);
      poped = listPosts2[idx];
      listPosts2.splice(idx, 1);
      poped.isAdded = false;
      newArr.push(poped);
    }

    this.props.toggleHaidPost(poped, "-");
    this.setState({
      newArr,
      listPosts1,
      listPosts2,
    });
  };

  render() {
    const { posts } = this.props;
    console.log("newArr",this.state.newArr)
    return (
      <div className={ContainStyles.wrapper}>
        <List1
          posts={posts}
          listPosts1={this.state.listPosts1}
          handleAddPost={this.handleAddPost}
          handleRemovePost={this.handleRemovePost}
          toggleSort={this.toggleSort}
        />
        <List2
          posts={posts}
          listPosts2={this.state.listPosts2}
          handleAddPost={this.handleAddPost}
          handleRemovePost={this.handleRemovePost}
          toggleSort={this.toggleSort}
        />
      </div>
    );
  }
}

export default Contain
