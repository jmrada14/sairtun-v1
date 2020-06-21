import React from 'react';
import {Modal, Button} from "react-bootstrap"
import "./customModal.css"

const ContactMe = () => {
    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="myBtn2" style={{borderRadius: "20px",fontFamily: "Bebas Neue', cursive"}}  size="sm" onClick={handleShow} variant="outline-secondary">Get in touch</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactMe;