//CSS
import styles from "./SingleBook.module.css";
//React/Redux
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Slices
import {
  getSingleAsync,
  editBookAsync,
  toggleErrorModal,
  resetSingleBook,
  selectErrorModal,
  selectSingleBook,
  selectLoading,
} from "../books/booksSlice";
import { selectUser } from "../login/loginSlice";
//External Components
import ErrorModal from "../modals/errormodal/ErrorModal";
import StarRatings from "react-star-ratings";
import Loading from "../loading/Loading";
import Comments from "../comments/Comments";

const SingleBook = (props) => {
  //Dispatch
  const dispatch = useDispatch();
  //State
  const [rating, setRating] = useState(0);
  let commentsCol = [];
  //Selectors
  const book = useSelector(selectSingleBook);
  const user = useSelector(selectUser);
  const isOpenErrorModal = useSelector(selectErrorModal);
  const isLoading = useSelector(selectLoading);
  //Functions
  const calcAverageRating = () => {
    let averageRating;
    if (book) {
      let sum = book.rating.reduce((a, b) => a + b, 0);
      averageRating = sum / book.rating.length;
    }
    return averageRating;
  };

  useEffect(() => {
    dispatch(getSingleAsync(props.match.params));
    return () => {
      dispatch(resetSingleBook());
    };
  }, []);

  if (book) {
    commentsCol = book.comments.map((comm, index) => {
      if (!comm) {return ("")}
      return (
        <div className={styles.commWrapper} key={index}>
          <div className={styles.comm}>{comm.comment}</div>
          <div className={styles.commentator}>{comm.commentator}</div>
        </div>
      );
    });
  }

  return (
    book && (
      <>
        <div className={styles.singleWrap}>
          <div className={styles.Wrap}>
            <div className={styles.col1}>
              <div className={styles.avatar}>
                <img
                  src={"http://localhost:5000/" + book.img}
                  className={styles.img}
                  alt="avatar"
                />
              </div>
              {user && book.appraisers.includes(user.email) ? (
                <>
                  <div>Rating: {calcAverageRating()}/5 </div>
                  <div>{` (${book.appraisers.length} votes)`}</div>
                </>
              ) : (
                <>
                  <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    changeRating={(e) => {
                      setRating(e);
                      if (user) {
                        dispatch(
                          editBookAsync({
                            rating: e,
                            appraiser: user.email,
                            _id: book._id,
                          })
                        ).then((res) => {
                          if (res.meta.requestStatus === "fulfilled") {
                            dispatch(getSingleAsync(props.match.params));
                          }
                        });
                      }
                    }}
                    numberOfStars={5}
                    starDimension="20px"
                    name="rating"
                  />
                  <div>
                    Rating: {calcAverageRating() || 0}/5{" "}
                    {` (${book.appraisers.length} votes)`}
                  </div>
                  <div></div>
                </>
              )}
              <div>
                <a
                  href={`${book.downloadLink}`}
                  style={{ textDecoration: "none", color: "#003049" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Download</div>
                </a>
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.genre}>
                <div className={styles.infoTitle}>GENRE</div>
                <div className={styles.info}>{book.genre}</div>
              </div>
              <div className={styles.title}>
                <div className={styles.infoTitle}>TITLE</div>
                <div className={styles.info}>{book.title}</div>
              </div>
              <div className={styles.year}>
                <div className={styles.infoTitle}>YEAR</div>
                <div className={styles.info}>{book.year}</div>
              </div>
              <div className={styles.author}>
                <div className={styles.infoTitle}>AUTHOR</div>
                <div className={styles.info}>{book.author}</div>
              </div>
              <div className={styles.desc}>
                <div className={styles.descTitle}>DESCRIPTION</div>
                <div className={styles.descInfo}>{book.description}</div>
              </div>
            </div>
          </div>
          <div className={styles.col3}>
            <div className={styles.commentInput}>
              <Comments
                user={user}
                id={book._id}
                onSubmit={(data) =>
                  dispatch(editBookAsync(data)).then((res) => {
                    if (res.meta.requestStatus === "fulfilled") {
                      dispatch(getSingleAsync(props.match.params));
                    }
                  })
                }
              />
            </div>
            <div className={styles.comments}>{commentsCol}</div>
          </div>
          <div className={styles.col4}>
            <div>
              <button
                className={styles.gobackbtn}
                onClick={() => props.history.goBack()}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
        {isOpenErrorModal && (
          <ErrorModal
            error={isOpenErrorModal}
            onHide={() => dispatch(toggleErrorModal())}
          />
        )}
        {isLoading && <Loading />}
      </>
    )
  );
};

export default SingleBook;
