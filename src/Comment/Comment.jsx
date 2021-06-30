import React, { Component } from "react";
import CommentStyles from "./Comment.module.css";
import nameGenerator from "../Utils/nameGenerator";
import idGenerator from "../Utils/idGenerator";
import { connect } from "react-redux";

export class Comment extends Component {
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
      test: false,
    };
    if(inputValue){
      this.props.handleReplyComment(
        data,
        this.props.comment._id,
        this.props.post._id
      );
    }
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { comment } = this.props;
    return (
      <div className={CommentStyles.wrapper}>
        <div className={CommentStyles.comment}>
          <div className={CommentStyles.commentWrap}>
            <div className={CommentStyles.name}>{comment.name}</div>
            <div className={CommentStyles.text}>{comment.text}</div>
            <div>Comment raiting: {comment.raiting}</div>
          </div>
          <div className={CommentStyles.textWrap}>
            {this.props.comment.reply.test && (
              <div className={CommentStyles.toolsWrap}>
                <input
                  type="text"
                  placeholder="Reply to comment"
                  onChange={this.handleChange}
                  value={this.state.inputValue}
                  className={CommentStyles.inptWrap}
                />
                <button
                  onClick={this.handleSubmit}
                  className={CommentStyles.btnWrap}
                >
                  Reply
                </button>
              </div>
            )}
          </div>
          <div className={CommentStyles.replyWrap}>
            <div className={CommentStyles.reply}>{comment.reply.name}</div>
            <div className={CommentStyles.reply}>{comment.reply.text}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.posts.comments,
  };
};

const mapDisPatchToProps = (dispatch) => {
  return {
    handleReplyComment: (data, commentId, postId) => {
      dispatch({ type: "replyComment", data, commentId, postId });
    },
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Comment);
