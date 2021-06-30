import React, { Component } from "react";
import List1 from "./List/List1";
import List2 from "./List/List2";
import ContainStyles from "./Contain.module.css";
import { connect } from "react-redux";

export class Contain extends Component {
  state = {
    newArr: [...this.props.posts],
    listPosts1: [],
    listPosts2: [],
    raitingsArr: [],
  };

  handleCalcAverageRaiting = (arr) => {
    let averagearr = [];
    if (arr.length) {
      arr.forEach((post) => {
        post.comments.forEach((comm) => {
          averagearr.push(comm.raiting);
        });
        let sum = averagearr.reduce((a, b) => a + b, 0);
        let raiting = sum / averagearr.length;
        post.averageRaiting = raiting;
        this.state.raitingsArr.push(post.averageRaiting);
        averagearr = [];
      });
      this.setState({
        raitingsArr: [],
        listPosts1: arr,
        listPosts2: arr,
      });
    }
  };

  toggleSort = (listId) => {
    if(listId === 1){
      this.state.listPosts1.sort(function (a, b) {
        if (a.averageRaiting > b.averageRaiting) {
         return b.averageRaiting - a.averageRaiting;
        }
        if (a.averageRaiting < b.averageRaiting) {
          return a.averageRaiting - b.averageRaiting;
        }
        return 0;
      });
    }
    if( listId === 2){
      this.state.listPosts2.sort(function (a, b) {
        if (a.averageRaiting > b.averageRaiting) {
         return b.averageRaiting - a.averageRaiting;
        }
        if (a.averageRaiting < b.averageRaiting) {
          return a.averageRaiting - b.averageRaiting;
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
      this.handleCalcAverageRaiting(listPosts1);
      listPosts1.sort(function (a, b) {
        return a.averageRaiting - b.averageRaiting;
      });
    } else if (newArr.length > 0 && listId === 2) {
      poped = newArr.pop();
      listPosts2.push(poped);
      this.handleCalcAverageRaiting(listPosts2);
       listPosts2.sort(function (a, b) {
        return a.averageRaiting - b.averageRaiting;
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
      listPosts1.forEach(function (post) {
        if (post._id === _id) {
          poped = listPosts1.pop(post);
          newArr.push(poped);
        }
      });
    } else if (listId2) {
      listPosts2 = [...this.state.listPosts2];
      listPosts2.forEach(function (post) {
        if (post._id === _id) {
          poped = listPosts2.pop(post);
          newArr.push(poped);
        }
      });
    }
    poped.isAdded = false;
    this.props.toggleHaidPost(poped, "-");
    this.setState({
      newArr,
      listPosts1,
      listPosts2,
    });
  };

  render() {
    const { posts } = this.props;
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHaidPost: (data, indicator) => {
      dispatch({ type: "haidPost", data, indicator });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contain);
