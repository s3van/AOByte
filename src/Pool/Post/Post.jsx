import PostStyles from "./Post.module.css";
import Comment from "./Comment/Comment";
import idGenerator from "../../Utils/idGenerator";
import nameGenerator from "../../Utils/nameGenerator";
import InputEmoji from "react-input-emoji";
import { useCallback } from "react";

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
    [handleChangeCommentInputValue, post._id,]
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

  const cls = [PostStyles.wrapper];
  if (post.isAdded === true) {
    cls.push(PostStyles.addedWrapper);
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
      <div className={PostStyles.message}>
        <div className={PostStyles.name}>{post.name}</div>
        <div className={PostStyles.post}>{post.post}</div>
        <div className={PostStyles.comments}>
          <div className={PostStyles.commentsInput}>{commentsJSX}</div>
          <div className={PostStyles.toolsWrap}>
            <InputEmoji
              value={post.commentInputValue}
              onChange={(text) => handleChange(text)}
              placeholder="Type a comment"
            />
            <button onClick={handleSubmit} className={PostStyles.btnWrap}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
