import { Modal } from "react-bootstrap";
import styles from "./AccessModal.module.css";

const AccessModal = (props) => {
  const { onHide } = props;

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
          <div className={styles.title}>ostalos odin shag</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>proydite po pochtu chtob aktivirovat akkaunt</div>
      </Modal.Body>
    </Modal>
  );
};

export default AccessModal;
