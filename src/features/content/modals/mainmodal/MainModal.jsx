//CSS
import styles from "./MainModal.module.css";
//React/Redux
import { useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
//Slices
import { selectUser } from "../../login/loginSlice";
//External Components
import { Modal } from "react-bootstrap";
import axios from "axios";
import { API_URL, api_url } from "../../../../http/index";

const MainModal = (props) => {
  //Props
  const { onHide, editableBook, onSubmit, resetEditableBook } = props;
  //State
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [link, setLink] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [img, setImg] = useState(null);
  const [imgError, setImgError] = useState(null);
  //Selectors
  const user = useSelector(selectUser);
  //Functions
  const sendImage = useCallback(async () => {
    try {
      const data = new FormData();
      data.append("avatar", img);
      await axios
        .post(API_URL + "/images", data, {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setAvatar(res.data.path);
        });
    } catch (e) {
      setImgError(e.response.data.message);
    }
  }, [img]);

  useEffect(() => {
    if (editableBook) {
      setTitle(editableBook.title);
      setAuthor(editableBook.author);
      setDescription(editableBook.description);
      setGenre(editableBook.genre);
      setYear(editableBook.year);
      setLink(editableBook.downloadLink);
    }
    return () => {
      if (editableBook) {
        resetEditableBook();
      }
    };
  }, [editableBook, resetEditableBook]);

  return (
    <Modal
      show={true}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>{!editableBook ? "Add Book " : "Edit Book"}</div>
          <div
            style={{ margin: "0 auto", fontWeight: "600", textAlign: "center" }}
          >
            Make sure the title of the picture matches of the title of the book.
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.wrapper}>
          <div className={styles.item1}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className={styles.itemInput}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
              className={styles.itemInput}
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
              className={styles.itemInput}
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
              value={year}
              className={styles.itemInput}
            />
            <input
              type="text"
              name="link"
              placeholder="Download Link"
              onChange={(e) => setLink(e.target.value)}
              value={link}
              className={styles.itemInput}
            />
            {editableBook && user ? (
              <input
                type="text"
                name="owner"
                placeholder="Owner email"
                value={editableBook.owner}
                className={styles.itemInput}
                disabled={true}
              />
            ) : (
              <input
                type="text"
                name="owner"
                placeholder="Owner email"
                value={user.email}
                className={styles.itemInput}
                disabled={true}
              />
            )}
            <textarea
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
              placeholder="Description"
              value={description}
            ></textarea>
          </div>
          <div className={styles.item2}>
            {editableBook ? (
              <div className={styles.avatar}>
                <img
                  src={`${api_url}${editableBook.img}`}
                  className={styles.img}
                  alt="Avatar"
                />
              </div>
            ) : avatar ? (
              <div className={styles.avatar}>
                <img
                  src={`${api_url}${avatar}`}
                  className={styles.img}
                  alt="Avatar"
                />
              </div>
            ) : imgError ? (
              <div>{imgError}</div>
            ) : (
              <div>Please upload a picture </div>
            )}

            {editableBook ? (
              <div>Тhe picture cannot be changed</div>
            ) : (
              <div>
                <input
                  type="file"
                  onChange={(e) => setImg(e.target.files[0])}
                  className={styles.imgInput}
                />
                <button onClick={sendImage} className={styles.btn3}>
                  Upload
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
      <div className={styles.footer}>
        <button
          disabled={!title || !author || !description || !genre || !year || !link}
          onClick={
            editableBook
              ? () =>
                  onSubmit({
                    ...editableBook,
                    title,
                    author,
                    description,
                    genre,
                    year,
                    link,
                  })
              : () =>
                  onSubmit({
                    title,
                    author,
                    description,
                    genre,
                    year,
                    img: avatar,
                    link,
                    owner: user.email,
                  })
          }
          className={styles.btn1}
        >
          {editableBook ? "Save" : "Add"}
        </button>
        <button onClick={() => onHide()} className={styles.btn2}>
          {!editableBook ? "Close" : "Cancel"}
        </button>
      </div>
    </Modal>
  );
};

export default MainModal;
