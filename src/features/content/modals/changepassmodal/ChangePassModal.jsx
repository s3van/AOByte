//CSS
import styles from "./ChangePassModal.module.css";
//React/Redux
import { useState } from "react";
import { useSelector } from "react-redux";
//Slices
import {
  selectChangePassAccess,
  selectChangePassError,
} from "../../login/loginSlice";
//External Components
import {
  emailValidator,
  maxLengthValidator,
  minLengthValidator,
} from "../../../../utils/validators";
import { Modal } from "react-bootstrap";

const ErrorModal = (props) => {
  //Props
  const { onHide, onSubmit } = props;
  //State
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  //Selectors
  const changePassAccess = useSelector(selectChangePassAccess);
  const changePassError = useSelector(selectChangePassError);
  const maxlength30 = maxLengthValidator(50);
  const minlength30 = minLengthValidator(2);
  //Functions
  const validation = (email) => {
    setEmail(email);
    let error =
      maxlength30(email) || minlength30(email) || emailValidator(email);
    if (error) {
      setEmailError(error);
    } else {
      setEmailError("");
    }
  };

  return (
    <Modal
      show={true}
      onHide={() => onHide(null)}
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
          }}
        >
          <div style={{ textAlign: "center" }}>
            Write your email address where you are registered
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.wrapper}>
          {!changePassAccess && (
            <div className={styles.tools}>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                onChange={(e) => validation(e.target.value)}
                value={email}
                className={styles.itemInput}
              />
              <button
                onClick={() => {
                  onSubmit(email);
                  setEmail("");
                }}
                className={styles.btn}
                disabled={emailError}
              >
                Send
              </button>
            </div>
          )}
          <div
            style={{ margin: "0 auto", fontWeight: "600", textAlign: "center" }}
          >
            {changePassAccess}
          </div>
          {emailError && email && (
            <div className={styles.validDiv}>{emailError}</div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div
          style={{ margin: "0 auto", fontWeight: "600", textAlign: "center" }}
        >
          {changePassError}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
