//IMPORT HOOKS
import { useCallback } from "react";

//IMPORT CSS
import styles from "./Comment.module.css";

//IMPORT UTILS
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

  const cls = [styles.wrapper];
  const colorForRating = (rating) => {
    switch (true) {
      case rating < 3 && rating > 0:
        cls.push(styles.badRating);
        return cls.join(" ");
      case rating <= 4 && rating >= 3:
        cls.push(styles.normalRating);
        return cls.join(" ");
      case rating > 4:
        cls.push(styles.goodRating);
        return cls.join(" ");
      default:
        cls.push(styles.wrapper);
        return cls.join(" ");
    }
  };

  return (
    <div className={colorForRating(comment.rating)}>
      <div className={styles.comment}>
        <div className={styles.commentWrap}>
          <div className={styles.name}>{comment.name}</div>
          <div className={styles.text}>{comment.text}</div>
          <div>Comment rating: {comment.rating}</div>
        </div>
        <div className={styles.textWrap}>
          {comment.reply.test && (
            <div className={styles.toolsWrap}>
              <input
                type="text"
                placeholder="Reply to comment"
                onChange={handleChange}
                value={comment.replyInputValue}
                className={styles.inptWrap}
              />
              <button onClick={handleSubmit} className={styles.btnWrap}>
                Reply
              </button>
            </div>
          )}
        </div>
        <div className={styles.replyWrap}>
          <div className={styles.replyName}>{comment.reply.name}</div>
          <div className={styles.replyText}>{comment.reply.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
