import Post from "./Post/Post";
import Contain from "./Contain/Contain";
import PoolStyles from "./Pool.module.css";
import { connect } from "react-redux";
import { useCallback } from "react";
import Pagination from "react-js-pagination";

const Pool = (props) => {
  const {
    //STATE
    posts,
    searchInputValue,
    currentPage,
    postPerPage,
    //FUNCTIONS
    handleChangeSearchInputValue,
    handleSearch,
    handleChangeCommentInputValue,
    handleAddComment,
    handleChangeReplyCommentValue,
    handleReplyComment,
    toggleHaidPost,
    handleChangePage,
  } = props;

  const indexOfLastPost = currentPage * postPerPage;

  const indexOfFirstPost = indexOfLastPost - postPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
      handleChangeSearchInputValue(value);
    },
    [handleChangeSearchInputValue]
  );

  const handleSubmit = useCallback(
    (e) => {
      if (!!searchInputValue) {
        handleSearch(searchInputValue);
      }
    },
    [handleSearch, searchInputValue]
  );

  const postsJSX = currentPosts.map((post) => {
    return (
      <Post
        post={post}
        key={post._id}
        handleChangeCommentInputValue={(e) => handleChangeCommentInputValue}
        handleAddComment={handleAddComment}
        handleChangeReplyCommentValue={(e) => handleChangeReplyCommentValue}
        handleReplyComment={handleReplyComment}
      />
    );
  });
  return (
    <div className={PoolStyles.wrapper}>
      <div className={PoolStyles.toolsWrap}>
        <input
          placeholder="Type Name"
          type="text"
          onChange={handleChange}
          value={searchInputValue}
          className={PoolStyles.inptWrap}
        />
        <button onClick={handleSubmit} className={PoolStyles.btnWrap}>
          Search
        </button>
      </div>
      <div className={PoolStyles.postsWrap}>{postsJSX}</div>
      <div className={PoolStyles.containWrap}>
        <Contain posts={posts} toggleHaidPost={toggleHaidPost} />
      </div>
      <div className={PoolStyles.page}>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={postPerPage}
          totalItemsCount={posts.length}
          onChange={(pageNumber) => handleChangePage(pageNumber)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.poolState.posts,
    searchInputValue: state.poolState.searchInputValue,
    currentPage: state.poolState.currentPage,
    postPerPage: state.poolState.postPerPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSearchInputValue: (value) => {
      dispatch({ type: "CHANGE-SEARCH", value });
    },
    handleSearch: (data) => {
      dispatch({ type: "SEARCH", data });
    },
    handleChangeCommentInputValue: (text, postId) => {
      dispatch({ type: "CHANGE-COMMENT", text, postId });
    },
    handleAddComment: (data, postId) => {
      dispatch({ type: "ADD-COMMENT", data, postId });
    },
    handleChangeReplyCommentValue: (value, commentId, postId) => {
      dispatch({ type: "CHANGE-REPLY", value, commentId, postId });
    },
    handleReplyComment: (data, commentId, postId) => {
      dispatch({ type: "ADD-REPLY", data, commentId, postId });
    },
    toggleHaidPost: (data, indicator) => {
      dispatch({ type: "HAID-POST", data, indicator });
    },
    handleChangePage: (activePage) => {
      dispatch({ type: "CHANGE-PAGE", activePage });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pool);
