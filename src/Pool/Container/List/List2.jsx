//IMPORT HOOKS
import { useState } from "react";

//IMPORT COMPONENTS
import ListPost from "./ListPost";

//IMPORT CSS
import styles from "./List.module.css";

const List2 = (props) => {
  const [listId2] = useState(2);

  const { listPosts2, handleAddPost, handleRemovePost, toggleSort } = props;

  const postsJSX = listPosts2.map((post) => {
    return (
      <ListPost
        post={post}
        key={post._id}
        handleRemovePost={(e) => handleRemovePost(null, listId2, post._id)}
        averageRating={post.averageRating}
        listId={listId2}
      />
    );
  });

  return (
    <div className={styles.wrapper}>
      <button
        onClick={(e) => handleAddPost(listId2)}
        className={styles.btnWrap}
      >
        +
      </button>
      <button onClick={(e) => toggleSort(listId2)} className={styles.btnWrap}>
        Sort
      </button>
      <div>{postsJSX}</div>
    </div>
  );
};

export default List2;
