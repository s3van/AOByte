import styles from "./Books.module.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getBooksAsync,
  selectBooks,
  selectCheckedBooks,
  toggleCheckAllBooks,
  deleteManyBooksAsync,
  selectCurrentPage,
  selectPerPage,
  toggleActivePage,
  selectTotalBooks,
} from "./booksSlice"
import { selectAuth, selectLoading } from "../login/loginSlice";
import Book from "./bookModel/Book"
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-js-pagination";

const Books = () => {

  const dispatch = useDispatch()

  //SELECTORS
  const books = useSelector(selectBooks)
  const checkedBooks = useSelector(selectCheckedBooks)
  const isAuth = useSelector(selectAuth);
  const isLoading = useSelector(selectLoading)
  const currentPage = useSelector(selectCurrentPage);
  const postPerPage = useSelector(selectPerPage);
  const totalBooks = useSelector(selectTotalBooks)

  useEffect(() => {
    console.log("currentPage", currentPage)
    dispatch(getBooksAsync({ page: currentPage - 1, limit: postPerPage }))
  }, [dispatch, currentPage, postPerPage])


  
    let booksJSX = books.map((book) => {
      return (
        <Col
          key={book._id}
          xs={12}
          sm={8}
          md={6}
          lg={3}
          className={styles.column}
        >
          <Book
            book={book}
            page={currentPage - 1}
            limit={postPerPage}
          //   handleDeletebook={handleDeletebook}
          //   handleCheckbook={toggleCheckbook}
          //   isAnybookChecked={!!checkedbooks.size}
          //   isChecked={!!checkedbooks.has(book._id)}
          //   toggleSetEditablebook={handleSetEditablebook}
          />
        </Col>
      )
    })


  if (isLoading) {
    return (<div style={{ marginTop: '100px', color: "black" }}>Loading...</div>)
  }
  return (
    <>
      <Container className={styles.books}>
        <Row className={styles.tools}>
          <Col >
            <h1>Books</h1>
            <div>
              {isAuth &&
                <button onClick={() => dispatch(deleteManyBooksAsync(checkedBooks))}>
                  Delete Books
                </button>}
            </div>
            <div>
              {isAuth &&
                <button onClick={() => dispatch(toggleCheckAllBooks())}>
                  {checkedBooks.length === books.length ? "Remove All" : "Check All"}
                </button>}
            </div>
            <div>{isAuth ? <h1>User Logged in</h1> : <h1>Please log</h1>}</div>
          </Col>
        </Row>
        <Row className={styles.btnWrap}>
          {/* <div className={styles.btn}>
            <button
              onClick={toggleOpenAddTaskModal}
              className={styles.addBtn}
              disabled={!!checkedTasks.size}
            >
              Add Task
            </button>
          </div>
          <div className={styles.btn}>
            <button
              className={styles.deleteCheckedBtn}
              onClick={toggleOpenDeleteTaskModal}
              disabled={!!!checkedTasks.size}
            >
              Delete Selected
            </button>
          </div>
          <div style={{ width: "140px" }}>
            <button
              className={styles.checkedAllTasksBtn}
              onClick={toggleCheckAllTasks}
              disabled={!!!booksJSX.length}
            >
              {tasks.length && checkedTasks.size === tasks.length
                ? "Deselect"
                : "Select all"}
            </button>
          </div> */}

        </Row>

        <Row className={styles.booksWrap}>
          {/* {booksJSX.length ? (
            booksJSX
          ) : (
            <p className={styles.ptux}> NO Books</p>
          )} */}
          {booksJSX}
        </Row>
        {books.length && <div className={styles.pages}>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={books.length}
            totalItemsCount={totalBooks}
            onChange={(activePage) => dispatch(toggleActivePage(activePage))}
          />
        </div>}
      </Container>

      {/* {loading && <SpinnerLoader />}
      {isOpenDeleteTaskModal && (
        <DeleteTaskModal
          onHide={toggleOpenDeleteTaskModal}
          onSubmit={handleDeleteTaskCheckedTasks}
          checkedTasksCount={
            oneCheckedTask ? oneCheckedTask : checkedTasks.size
          }
        />
      )}
       {errorModal && (
        <ErrorModal onHide={toggleSetOrRemoveErrorModal} backendError={backendError} />
      )}
      {isOpenAddTaskModal && (
        <MainModal onHide={toggleOpenAddTaskModal} onSubmit={handleAddTask} />
      )}
      {editableTask && (
        <MainModal
          onHide={handleSetEditableTask}
          onSubmit={handleEditTask}
          editableTask={editableTask}
        />
      )} */}
    </>
  )
}

export default Books