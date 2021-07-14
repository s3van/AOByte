//IMPORT HOOKS
import { useState } from "react";

//IMPORT COMPONENTS
import List1 from "./List/List1";
import List2 from "./List/List2";

//IMPORT CSS
import styles from "./Container.module.css";

//IMPORT SELECTORS
import { calcAverageRating } from "../../Redux/reducers/poolReducer";

const Container = (props) => {
  const { posts } = props;

  const [newArr, setNewArr] = useState([...props.posts]);
  const [listPosts1, setListPosts1] = useState([]);
  const [listPosts2, setListPosts2] = useState([]);

  const sort = (arr) => {
    arr.sort((a, b) => {
      if (a.averageRating > b.averageRating) {
        return b.averageRating - a.averageRating;
      }
      if (a.averageRating < b.averageRating) {
        return a.averageRating - b.averageRating;
      }
      return 0;
    });
    return arr;
  };

  const toggleSort = (listId) => {
    if (listId === 1) {
      setListPosts1([...sort(listPosts1)]);
    }
    if (listId === 2) {
      setListPosts2([...sort(listPosts2)]);
    }
  };

  const addPost = (arr) => {
    let poped;

    poped = newArr.pop();
    arr.push(poped);
    arr.sort((a, b) => {
      return a.averageRating - b.averageRating;
    });
    poped.isAdded = true;
    props.toggleHidePost(poped, "+");

    return arr;
  };

  const handleAddPost = (listId) => {
    if (listId === 1 && newArr.length > 0) {
      setListPosts1(addPost(listPosts1));
      calcAverageRating(listPosts1);
    }
    if (listId === 2 && newArr.length > 0) {
      setListPosts2(addPost(listPosts2));
      calcAverageRating(listPosts2);
    }
  };

  const removePost = (arr, _id) => {
    let poped;

    const idx = arr.findIndex((post) => post._id === _id);
    poped = arr[idx];
    arr.splice(idx, 1);
    setNewArr((newArr) => [...newArr, poped]);
    poped.isAdded = false;
    props.toggleHidePost(poped, "-");
    return arr;
  };

  const handleRemovePost = (listId1, listId2, _id) => {
    if (listId1) {
      setListPosts1(removePost(listPosts1, _id));
    } else if (listId2) {
      setListPosts2(removePost(listPosts2, _id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <List1
        posts={posts}
        listPosts1={listPosts1}
        handleAddPost={handleAddPost}
        handleRemovePost={handleRemovePost}
        toggleSort={toggleSort}
      />
      <List2
        posts={posts}
        listPosts2={listPosts2}
        handleAddPost={handleAddPost}
        handleRemovePost={handleRemovePost}
        toggleSort={toggleSort}
      />
    </div>
  );
};

export default Container;
