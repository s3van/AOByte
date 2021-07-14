//IMPORT HOOKS
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

//IMPORT COMPONENTS
import Post from "./Post/Post";
import Container from "./Container/Container";
import Search from "./Search/Search";

//IMPORT CSS
import styles from "./Pool.module.css";

//IMPORT EXTERNAL LIBS
import Pagination from "react-js-pagination";

const Pool = (props) => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.poolState.posts);
  const currentPage = useSelector((state) => state.poolState.currentPage);
  const postPerPage = useSelector((state) => state.poolState.postPerPage);

  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleSubmit = useCallback(
    (searchInputValue) => {
      if (!!searchInputValue) {
        dispatch({ type: "SEARCH", searchInputValue });
      }
    },
    [dispatch]
  );

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  const postsJSX = currentPosts.map((post) => {
    return (
      <Post
        post={post}
        key={post._id}
        handleChangeCommentInputValue={(text, postId) =>
          dispatch({ type: "CHANGE-COMMENT", text, postId })
        }
        handleAddComment={(payload, postId) =>
          dispatch({ type: "ADD-COMMENT", payload, postId })
        }
        handleChangeReplyCommentValue={(value, commentId, postId) =>
          dispatch({ type: "CHANGE-REPLY", value, commentId, postId })
        }
        handleReplyComment={(payload, commentId, postId) =>
          dispatch({ type: "ADD-REPLY", payload, commentId, postId })
        }
      />
    );
  });
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolsWrap}>
        <Search handleSubmit={handleSubmit} handleReset={handleReset} />
      </div>
      <div className={styles.postsWrap}>{postsJSX}</div>
      <div className={styles.containerWrap}>
        <Container
          posts={posts}
          toggleHidePost={(payload, indicator) =>
            dispatch({ type: "HIDE-POST", payload, indicator })
          }
        />
      </div>
      <div className={styles.page}>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={postPerPage}
          totalItemsCount={posts.length}
          onChange={(activePage) =>
            dispatch({ type: "CHANGE-PAGE", activePage })
          }
        />
      </div>
    </div>
  );
};

export default Pool;
