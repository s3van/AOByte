import React, { Component } from "react";
import CommentStyles from "./Comment.module.css";

export class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className={CommentStyles.wrapper}>
        <div className={CommentStyles.comment}>
          <div className={CommentStyles.name}>
            {comment.name}
            <div>Raiting:{comment.raiting}</div>
            <div>
              <input type="text" />
              <button>Reply</button>
            </div>
          </div>

          <div className={CommentStyles.textWrap}>
          <div className={CommentStyles.text}>{comment.text}</div>
          <div className={CommentStyles.reply}>Reply</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
