import ListPostStyles from "./ListPost.module.css";

const ListPost = (props) => {
  const { post, handleRemovePost, averageRating } = props;
  return (
    <div className={ListPostStyles.wrapper}>
      <div className={ListPostStyles.message}>
        <div className={ListPostStyles.name}>{post.name}</div>
        <div className={ListPostStyles.post}>{post.post}</div>
        <div className={ListPostStyles.rating}>rating: {averageRating}</div>
        <button onClick={handleRemovePost}>-</button>
      </div>
    </div>
  );
};

export default ListPost;
