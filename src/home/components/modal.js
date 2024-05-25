import React from "react";
import { Modal, Button } from "react-bootstrap";

function CustomModal({ show, onHide, event }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{event?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={event?.image} alt={event?.title} style={{ maxWidth: "100%" }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
