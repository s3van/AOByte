//CSS
import styles from "./Books.module.css"
//React/Redux
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//Slices
import {
  //FUNCTIONS
  getBooksAsync, deleteManyBooksAsync, deleteOneBookAsync,
  addBookAsync, editBookAsync,
  toggleAddModal, toggleErrorModal,
  setEditableBook, setCheckedBook, setAllCheckedBooks,
  resetCheckedBooks, resetEditableBook,
  //SELECTORS
  selectBooks, selectCheckedBooks, selectTotalBooks, selectAddBookModal,
  selectEditableBook, selectLoading, selectErrorModal,
} from "./booksSlice"
import { selectUser } from "../login/loginSlice";
//External Components
import Book from "./book/Book"
import MainModal from "../modals/mainmodal/MainModal"
import ErrorModal from "../modals/errormodal/ErrorModal"
import Loading from "../loading/Loading"
import { Container, Row, Col, Dropdown, DropdownButton, Button } from "react-bootstrap";
import Pagination from "react-js-pagination";

const Books = (props) => {
  //Dispatch
  const dispatch = useDispatch()
  //State
  const [currentPage, setCurrentPage] = useState(Number(props.history.location.search.split("").pop()) || 1)
  const [postPerPage] = useState(12)
  const [sort] = useState(null)
  const [genre] = useState(null)
  //SELECTORS
  const books = useSelector(selectBooks)
  const checkedBooks = useSelector(selectCheckedBooks)
  const isLoading = useSelector(selectLoading)
  const totalBooks = useSelector(selectTotalBooks)
  const isOpenAddBookModal = useSelector(selectAddBookModal)
  const isOpenErrorModal = useSelector(selectErrorModal)
  const editableBook = useSelector(selectEditableBook)
  const user = useSelector(selectUser)

  const prevParams = Object.fromEntries(new URLSearchParams(props.location.search));
  const URLParams = new URLSearchParams({
    ...prevParams,
    page: currentPage,
  });

  const sortVariants = [
    {
      label: "A-Z",
      value: "a-z",
    },
    {
      label: "Z-A",
      value: "z-a",
    },
    {
      label: "Reset",
      value: ""
    }

  ];

  const genreVariants = [
    {
      label: "Fantasy",
      value: "fantasy",
    },
    {
      label: "Triller",
      value: "triller",
    },
    {
      label: "Reset",
      value: ""
    }

  ];

  useEffect(() => {
    dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage }))
    props.history.push({
      search: URLParams.toString()
    });
  }, [currentPage, dispatch, props.history, postPerPage])

  const sortItems = sortVariants.map((variant, index) => {
    return (
      <Dropdown.Item
        onClick={() => {
          dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage, sort: variant.value }))
        }}
        key={index}
      >
        {variant.label}
      </Dropdown.Item>
    );
  });

  const genreItems = genreVariants.map((variant, index) => {
    return (
      <Dropdown.Item
        onClick={() => {
          dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage, genre: variant.value }))
        }}
        key={index}
      >
        {variant.label}
      </Dropdown.Item>
    );
  });

  const booksCol = books.map((book) => {
    return (
      <Col
        key={book._id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className={styles.column}
      >
        <Book
          book={book}
          handleDeleteOneBook={(id) => {
            dispatch(deleteOneBookAsync(id)).then(res => {
              if (res.meta.requestStatus === "fulfilled") {
                dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage }))
                dispatch(resetCheckedBooks())
              }
            })
          }}
          toggleCheckOneBook={
            (id) => {
              dispatch(setCheckedBook(id))
            }
          }
          handleSetEditBook={(books) => dispatch(setEditableBook(books))}
        />
      </Col>
    )
  })

  const cls = [styles.adminTools]
  if (user && user.roles[0] !== "ADMIN") {
    cls.push(styles.userTools);
  }

  const cls2 = [styles.adminBtns]
  if (user && user.roles[0] !== "ADMIN") {
    cls2.push(styles.userBtns);
  }

  return (
    <>
      <Container className={styles.books}>
        <div className={cls.join(" ")}>
          <div className={cls2.join(" ")}>
            {(user && user.roles[0] === "ADMIN") ?
              <div>
                {books.length ? <Button
                  size="sm"
                  variant="secondary"
                  style={{ marginRight: "5px" }}
                  disabled={!checkedBooks.length}
                  onClick={() => dispatch(deleteManyBooksAsync(checkedBooks)).then(res => {
                    if (res.meta.requestStatus === "fulfilled") {
                      dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage }))
                      dispatch(resetCheckedBooks())
                    }
                  })}
                >
                  Delete
                </Button> : ""}

                {books.length ? <Button
                  size="sm"
                  variant="secondary"
                  style={{ marginRight: "5px" }}
                  onClick={() => dispatch(setAllCheckedBooks())}
                >
                  {checkedBooks.length === books.length ? "Remove" : "Check All"}
                </Button> : ""}

                <Button
                  size="sm"
                  variant="secondary"
                  style={{ marginRight: "5px" }}
                  onClick={() => dispatch(toggleAddModal())}
                  disabled={!!checkedBooks.length}
                >
                  Add
                </Button>
                <DropdownButton
                  size="sm"
                  style={{ display: "inline", marginRight: "5px" }}
                  title={
                    sort ? sortVariants.find((item) => item.value === sort).label : "Sort"
                  }
                  variant="secondary"
                  disabled={!!checkedBooks.length}
                >                
                <DropdownButton
                size="sm"
                style={{ display: "flex", marginLeft: "10px" }}
                title={
                  genre ? genreVariants.find((item) => item.value === genre).label : "Genre"
                }
                variant="secondary"
                disabled={!checkedBooks.length}
              >
                {genreItems}
              </DropdownButton>
                  {sortItems}
                </DropdownButton>

              </div>
              : <>
              <DropdownButton
                style={{ display: "inline", marginRight: "5px" }}
                title={
                  sort ? sortVariants.find((item) => item.value === sort).label : "Sort"
                }
                variant="secondary"
              >
                {sortItems}
              </DropdownButton>
               <DropdownButton
               style={{ display: "inline" }}
               title={
                 genre ? genreVariants.find((item) => item.value === genre).label : "Genre"
               }
               variant="secondary"
               disabled={!books.length}
             >
               {genreItems}
             </DropdownButton></>}

          </div>
        </div>
        <Row className={styles.booksWrap}>
          {booksCol}
        </Row>
        <div className={styles.pages}>
          <Pagination
            activePage={currentPage}
            totalItemsCount={totalBooks || 5}
            pageRangeDisplayed={3}
            hideDisabled={true}
            hideNavigation={true}
            activeClass={styles.active}
            activeLinkClass={styles.activeLink}
            onChange={(activePage) => {
              setCurrentPage(activePage)
            }}
          />
        </div>
      </Container>

      {isOpenAddBookModal && (
        <MainModal
          onHide={() => dispatch(toggleAddModal())}
          onSubmit={(data) => dispatch(addBookAsync(data)).then(res => {
            if (res.meta.requestStatus === "fulfilled") {
              dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage }))
            }
          })}
        />
      )}
      {editableBook && (
        <MainModal
          onHide={() => dispatch(setEditableBook())}
          onSubmit={(data) => dispatch(editBookAsync(data)).then(res => {
            if (res.meta.requestStatus === "fulfilled") {
              dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage, }))
            }
          })}
          editableBook={editableBook}
          resetEditableBook={() => dispatch(resetEditableBook())}
        />
      )}
      {isOpenErrorModal && <ErrorModal
        error={isOpenErrorModal}
        onHide={() => dispatch(toggleErrorModal())} />}
      {isLoading && <Loading />}
    </>
  )
}

export default Books