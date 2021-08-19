//CSS
import styles from "./Comments.module.css";
//React/Redux
import { useState } from "react";
//External Components
import {
  minLengthValidator,
  maxLengthValidator,
} from "../../../utils/validators";

const Comments = (props) => {
  //Props
  const { user, onSubmit, id } = props;
  //State
  const [comm, setComm] = useState("");
  const [commError, setCommError] = useState("");
  //Functions
  const maxlength30 = maxLengthValidator(50);

  const minlength30 = minLengthValidator(2);

  const validation = (comm) => {
    setComm(comm);
    let error = maxlength30(comm) || minlength30(comm);
    if (error) {
      setCommError(error);
    } else {
      setCommError("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.tools}>
        <input
          className={styles.itemInput}
          placeholder="Type your comment..."
          value={comm}
          onChange={(e) => validation(e.target.value)}
        />
        <button
          className={styles.btn}
          disabled={!comm || commError}
          onClick={() => {
            if (user) {
              onSubmit({ comment: comm, commentator: user.email, _id: id });
              setComm("");
            }
          }}
        >
          Submit
        </button>
      </div>
      <div className={styles.error}>
        {commError && comm && (
          <div className={styles.validDiv}>{commError}</div>
        )}
      </div>
    </div>
  );
};

export default Comments;
