import { useCallback } from "react";
import CommentStyles from "./Comment.module.css";
import nameGenerator from "../../../Utils/nameGenerator";
import idGenerator from "../../../Utils/idGenerator";

const Comment = (props) => {
  const {
    //STATE
    post,
    comment,
    //FUNCTIONS
    handleChangeReplyCommentValue,
    handleReplyComment,
  } = props;

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      handleChangeReplyCommentValue(value, comment._id, post._id);
    },
    [ handleChangeReplyCommentValue, comment._id, post._id]
  );

  const handleSubmit = () => {
    let data = {
      name: nameGenerator(),
      _id: idGenerator(),
      text: comment.replyInputValue,
      test: false,
    };
    if (comment.replyInputValue) {
      handleReplyComment(data, comment._id, post._id);
    }
  };

  const cls = [CommentStyles.wrapper];
  const colorForRating = (rating) => {
    switch (true) {
      case rating < 3 && rating > 0:
        cls.push(CommentStyles.badRating);
        return cls.join(" ");
      case rating <= 4 && rating >= 3:
        cls.push(CommentStyles.normalRating);
        return cls.join(" ");
      case rating > 4:
        cls.push(CommentStyles.goodRating);
        return cls.join(" ");
      default:
        cls.push(CommentStyles.wrapper);
        return cls.join(" ");
    }
  };

  return (
    <div className={colorForRating(comment.rating)}>
      <div className={CommentStyles.comment}>
        <div className={CommentStyles.commentWrap}>
          <div className={CommentStyles.name}>{comment.name}</div>
          <div className={CommentStyles.text}>{comment.text}</div>
          <div>Comment rating: {comment.rating}</div>
        </div>
        <div className={CommentStyles.textWrap}>
          {comment.reply.test && (
            <div className={CommentStyles.toolsWrap}>
              <input
                type="text"
                placeholder="Reply to comment"
                onChange={handleChange}
                value={comment.replyInputValue}
                className={CommentStyles.inptWrap}
              />
              <button onClick={handleSubmit} className={CommentStyles.btnWrap}>
                Reply
              </button>
            </div>
          )}
        </div>
        <div className={CommentStyles.replyWrap}>
          <div className={CommentStyles.replyName}>{comment.reply.name}</div>
          <div className={CommentStyles.replyText}>{comment.reply.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
