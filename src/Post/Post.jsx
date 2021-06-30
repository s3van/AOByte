import React, { Component } from "react";
import PostStyles from "./Post.module.css";
import Comment from "../Comment/Comment";
import { connect } from "react-redux";
import idGenerator from "../Utils/idGenerator";
import nameGenerator from "../Utils/nameGenerator";

export class Post extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      inputValue: value,
    });
  };

  handleSubmit = () => {
    const { inputValue } = this.state;
    let data = {
      name: nameGenerator(),
      _id: idGenerator(),
      text: inputValue,
      raiting: 0,
      reply: {
        test: true,
      },
    };
    if (!!inputValue) {
      this.props.handleAddComment(data, this.props.post._id);
    }
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { post } = this.props;

    const cls = [PostStyles.wrapper];
    if (post.isAdded === true) {
      cls.push(PostStyles.addedWrapper);
    }

    const commentsJSX = post.comments.map((comment) => {
      return <Comment comment={comment} key={comment._id} post={post} />;
    });

    return (
      <div className={cls.join(" ")}>
        <div className={PostStyles.message}>
          <div className={PostStyles.name}>{post.name}</div>
          <div className={PostStyles.post}>{post.post}</div>
          <div className={PostStyles.comments}>
            <div className={PostStyles.toolsWrap}>
              <input
                placeholder="Type your comment..."
                type="text"
                onChange={this.handleChange}
                value={this.state.inputValue}
                className={PostStyles.inptWrap}
              />
              <button
                onClick={this.handleSubmit}
                className={PostStyles.btnWrap}
              >
                Add
              </button>
            </div>
            <div className={PostStyles.commentsInput}>{commentsJSX}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    handleAddComment: (data, postId) => {
      dispatch({ type: "addComment", data, postId });
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Post);
