import { Modal } from "react-bootstrap";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const { onHide, error } = props;

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
          <div>Warning</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.title}>{error.message}</div>
      </Modal.Body>

    </Modal>
  );
};

export default ErrorModal;