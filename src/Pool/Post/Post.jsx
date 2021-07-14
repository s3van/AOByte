//IMPORT HOOKS
import { useCallback } from "react";

//IMPORT COMPONENTS
import Comment from "./Comment/Comment";

//IMPORT CSS
import styles from "./Post.module.css";

//IMPORT UTILS
import idGenerator from "../../Utils/idGenerator";
import nameGenerator from "../../Utils/nameGenerator";

//IMPORT EXTERNAL LIBS
import InputEmoji from "react-input-emoji";

const Post = (props) => {
  const {
    //STATE
    post,
    //FUNCTIONS
    handleChangeCommentInputValue,
    handleAddComment,
    handleChangeReplyCommentValue,
    handleReplyComment,
  } = props;

  const handleChange = useCallback(
    (text) => {
      handleChangeCommentInputValue(text, post._id);
    },
    [handleChangeCommentInputValue, post._id]
  );

  const handleSubmit = useCallback(() => {
    let data = {
      _id: idGenerator(),
      name: nameGenerator(),
      text: post.commentInputValue,
      rating: 0,
      reply: {
        test: true,
      },
    };
    if (!!post.commentInputValue) {
      handleAddComment(data, post._id);
    }
  }, [handleAddComment, post._id, post.commentInputValue]);

  const cls = [styles.wrapper];
  if (post.isAdded === true) {
    cls.push(styles.addedWrapper);
  }

  const commentsJSX = post.comments.map((comment) => {
    return (
      <Comment
        comment={comment}
        key={comment._id}
        post={post}
        handleChangeReplyCommentValue={handleChangeReplyCommentValue}
        handleReplyComment={handleReplyComment}
      />
    );
  });

  return (
    <div className={cls.join(" ")}>
      <div className={styles.message}>
        <div className={styles.name}>{post.name}</div>
        <div className={styles.post}>{post.post}</div>
        <div className={styles.comments}>
          <div className={styles.commentsInput}>{commentsJSX}</div>
          <div className={styles.toolsWrap}>
            <InputEmoji
              value={post.commentInputValue}
              onChange={(text) => handleChange(text)}
              placeholder="Type a comment"
            />
            <button onClick={handleSubmit} className={styles.btnWrap}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
