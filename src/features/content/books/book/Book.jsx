//CSS
import styles from "./Book.module.css";
//React/Redux
import { useSelector } from "react-redux";
//Slices
import { selectUser } from "../../login/loginSlice";
import { selectCheckedBooks } from "../booksSlice";
//External Components
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Book = (props) => {
  //PROPS
  const { book, handleDeleteOneBook, toggleCheckOneBook, handleSetEditBook } =
    props;
  //SELECTORS
  const checkedBooks = useSelector(selectCheckedBooks);
  const user = useSelector(selectUser);

  const cls = [styles.wrapper];
  if (!!checkedBooks.includes(book._id)) {
    cls.push(styles.checkedWrapper);
  }
  const cls2 = [styles.adminFooter];
  if (user && user.roles[0] !== "ADMIN") {
    cls2.push(styles.userFooter);
  }
  return (
    <>
      <div className={cls.join(" ")}>
        <Link
          to={`/books${book._id}`}
          style={{ textDecoration: "none", color: "#003049" }}
        >
          <div className={styles.body}>
            <div className={styles.avatar}>
              <img
                src={"http://localhost:5000/" + book.img}
                className={styles.img}
                alt="avatar"
              />
            </div>
          </div>
        </Link>
        <div className={cls2.join(" ")}>
          {user && user.roles[0] === "ADMIN" ? (
            <div className={styles.btnWrap}>
              <DropdownButton variant="secondary" title="">
                <Dropdown.Item onClick={() => handleDeleteOneBook(book._id)}>
                  Delete
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSetEditBook(book)}>
                  Edit
                </Dropdown.Item>
              </DropdownButton>
            </div>
          ) : (
            ""
          )}
          <div className={styles.infoWrap}>
            <div className={styles.info}>
              <span>{book.author}</span>
            </div>
            {user && user.roles[0] === "ADMIN" ? (
              <input
                type="checkbox"
                className={styles.inpt}
                onChange={() => toggleCheckOneBook(book._id)}
                checked={checkedBooks.includes(book._id)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
