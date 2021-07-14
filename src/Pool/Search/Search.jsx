//IMPORT HOOKS
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

//IMPORT CSS
import styles from "./Search.module.css";

const Search = (props) => {
  const searchInputValue = useSelector(
    (state) => state.searchState.searchInputValue
  );
  
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      const { value } = e.target;
      dispatch({ type: "CHANGE-SEARCH", value });
    },
    [dispatch]
  );

  return (
    <div className={styles.wrapper}>
      <button
        onClick={(e) => props.handleSubmit(searchInputValue)}
        className={styles.btnWrap}
        disabled={!searchInputValue}
      >
        Search
      </button>
      <input
        placeholder="Type Name"
        type="text"
        onChange={handleChange}
        value={searchInputValue}
        className={styles.inptWrap}
      />
      <button
        onClick={(e) => props.handleReset(searchInputValue)}
        className={styles.btnWrap}
        disabled={!searchInputValue}
      >
        Reset
      </button>
    </div>
  );
};

export default Search;
