import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react"
import { useDispatch } from "react-redux";
import styles from "./Search.module.css"
import {searchBooksAsync} from "../books/booksSlice"


const Search = () => {
    const [sort, setSort] = useState(null)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();

    const submit = () => {
        let queryParameters = {
          sort,
          search,
        };
        dispatch(searchBooksAsync(queryParameters));
      };
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button 
      className={styles.searchBtn}
      onClick={() => submit()}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Search;
