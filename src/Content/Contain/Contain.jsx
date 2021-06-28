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

  //   achman = (raitingsArr) => {
  //   for (var i = 0; i < raitingsArr.length; i++) {
  //     var min = raitingsArr[i];
  //     for (var j = i + 1; j < raitingsArr.length; j++) {
  //       if (raitingsArr[j] < min) {
  //         min = raitingsArr[j];
  //       }
  //     }
  //     if (raitingsArr[i] > min) {
  //       var y1 = raitingsArr.indexOf(min);
  //       var y2 = raitingsArr.indexOf(raitingsArr[i]);
  //       raitingsArr.splice(y1, 1, raitingsArr[i]);
  //       raitingsArr.splice(y2, 1, min);
  //     }
  //   }
  //   console.log("raitingsArr: =>",raitingsArr);
  // };

  // handleCalcReadRaiting = (arr) => {
  //   let { raitingsArr } = this.state
  //   let raitArr = [];
    
  //   arr.forEach((post)=>{
  //     post.comments.forEach((comm) => {
  //         raitArr.push(comm.raiting);
  //       });
  //       let sum = raitArr.reduce((a, b) => a + b, 0);
  //       let readRaiting = sum / raitArr.length;
  //       raitingsArr.push(readRaiting);
  
  //       raitArr = [];
        
  //   })
  //   for (var i = 0; i < raitingsArr.length; i++) {
  //     var min = raitingsArr[i];
  //     for (var j = i + 1; j < raitingsArr.length; j++) {
  //       if (raitingsArr[j] < min) {
  //         min = raitingsArr[j];
  //       }
  //     }
  //     if (raitingsArr[i] > min) {
  //       var y1 = raitingsArr.indexOf(min);
  //       var y2 = raitingsArr.indexOf(raitingsArr[i]);
  //       raitingsArr.splice(y1, 1, raitingsArr[i]);
  //       raitingsArr.splice(y2, 1, min);
  //     }
  //   }
  //   this.setState({
  //         raitingsArr,
  //       });
  //   console.log("raitingsArr: =>",raitingsArr);
    
  // };

  handleAddPost = (idshnik) => {
    let { newArr, listPosts1, listPosts2 } = this.state;
    let popped;
    if (newArr.length > 0 && idshnik === 1) {
      popped = newArr.pop();
      listPosts1.push(popped);
    } else if (newArr.length > 0 && idshnik === 2) {
      popped = newArr.pop();
      listPosts2.push(popped);
    } else {
      return;
    }
    this.setState({
      newArr,
      listPosts1,
      listPosts2,
    });
  };

  handleRemovePost = (listId1, listId2, _id) => {
    let popped;
    let { listPosts1, newArr, listPosts2,raitingsArr } = this.state;
    if (listId1) {
      listPosts1 = [...this.state.listPosts1];
      listPosts1.forEach(function (post) {
        if (post._id === _id) {
          popped = listPosts1.pop(post);
          newArr.push(popped);
        }
      });
    }
    if (listId2) {
      let popped2 = listPosts2.pop();
      newArr.push(popped2);
    }
    this.setState({
        listPosts2,
        newArr,
        listPosts1,
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
        />
        <List2
          posts={posts}
          listPosts2={this.state.listPosts2}
          handleAddPost={this.handleAddPost}
          handleRemovePost={this.handleRemovePost}
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

// const mapDispatchToProps = (dispatch) => {
//   // return{
//   //   addRait: (readRait,id) => {
//   //     dispatch({type: "raitAdd", readRait,id})
//   //   }
//   // }
// }

export default connect(mapStateToProps,null )(Contain);
