import { Card } from "react-bootstrap";
import styles from "./Book.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckOneBook, selectCheckedBooks, deleteOneBookAsync } from "../booksSlice";

const Book = (props) => {

  const { book, page, limit } = props;
  const dispatch = useDispatch();
  const checkedBooks = useSelector(selectCheckedBooks);

  // const submit = () => {
  //   dispatch(toggleCheckOneBook(book._id));
  // };

  const cls = [styles.wrapper];
  if (!!checkedBooks.includes(book._id)) {
    cls.push(styles.checkedWrapper);
  }

  return (
    <>
      <Card className={cls.join(" ")} style={{ width: '18rem' }} bg="dark" text="light">
        <div className={styles.toolsWrapper}>
          <button
            className={styles.deleteBtn}
            // disabled={isAnybookChecked}
            onClick={() => dispatch(deleteOneBookAsync({book,page,limit}))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <input
            type="checkbox"
            className={styles.inpt}
            onChange={() => dispatch(toggleCheckOneBook(book._id))}
            checked={checkedBooks.includes(book._id)}
          />
          <button
            className={styles.editBtn}
            // disabled={isAnybookChecked}
            // onClick={() => toggleSetEditablebook(book)}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        {/* <Card.Body>
          <Link
            to={`/book/${book._id}`}
            style={{textDecoration: "none", color: "#003049"}}
          >
            <Card.Title className={styles.link}>{book.title}</Card.Title>
          </Link>
        </Card.Body> */}
        <Card.Text className={styles.info}>
          <span>Author</span>
          {book.author}
        </Card.Text>
        <Card.Title className={styles.link}>{book.title}</Card.Title>
      </Card>
    </>
  );
};

export default Book;
