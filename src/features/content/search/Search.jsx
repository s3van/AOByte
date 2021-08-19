//CSS
import styles from "./Search.module.css";
//React/Redux
import { useState } from "react";
import { useDispatch } from "react-redux";
//Slices
import { searchBooksAsync } from "../books/booksSlice";
//External Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  //Dispatch
  const dispatch = useDispatch();
  //State
  const [search, setSearch] = useState("");
  //Functions
  const submit = () => {
    let queryParameters = {
      search,
    };
    dispatch(searchBooksAsync(queryParameters));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="The title of the book..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className={styles.searchBtn} onClick={() => submit()}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Search;
