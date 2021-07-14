//IMPORT HOOKS
import { useState } from "react";

//IMPORT COMPONENTS
import ListPost from "./ListPost";

//IMPORT CSS
import styles from "./List.module.css";


const List1 = (props) => {
  const [listId1] = useState(1);

  const { listPosts1, handleAddPost, handleRemovePost, toggleSort } = props;

  const postsJSX = listPosts1.map((post) => {
    return (
      <ListPost
        post={post}
        key={post._id}
        handleRemovePost={(e) => handleRemovePost(listId1, null, post._id)}
        averageRating={post.averageRating}
        listId={listId1}
      />
    );
  });

  return (
    <div className={styles.wrapper}>
      <button
        onClick={(e) => handleAddPost(listId1)}
        className={styles.btnWrap}
      >
        +
      </button>
      <button onClick={(e) => toggleSort(listId1)} className={styles.btnWrap}>
        Sort
      </button>
      <div>{postsJSX}</div>
    </div>
  );
};

export default List1;
