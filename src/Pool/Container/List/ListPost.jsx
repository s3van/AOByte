//IMPORT CSS
import styles from "./ListPost.module.css";

const ListPost = (props) => {
  const { post, handleRemovePost, averageRating } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        <div className={styles.name}>{post.name}</div>
        <div className={styles.post}>{post.post}</div>
        <div className={styles.rating}>rating: {averageRating}</div>
        <button onClick={handleRemovePost} className={styles.btnWrap}>
          -
        </button>
      </div>
    </div>
  );
};

export default ListPost;
