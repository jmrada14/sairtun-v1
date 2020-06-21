import React from "react"
import { Modal, Button } from "react-bootstrap"
import "./customModal.css"

const AboutMe = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        id="myBtn1"
        style={{ borderRadius: "20px", fontFamily: "Bebas Neue'" }}
        size="sm"
        onClick={handleShow}
        variant="outline-secondary"
      >
        About me
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "Bebas Neue'" }}>
            About Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Curabitur quis sem a mi blandit ultrices. Nunc sed porta turpis. Proin
          tincidunt, turpis at rhoncus porta, est mauris mollis tellus, a
          efficitur orci est ac ex. Morbi vulputate suscipit est nec efficitur.
          Phasellus libero nisi, euismod id bibendum euismod, fringilla eget
          lectus. Nunc accumsan tincidunt posuere. Proin gravida nec augue id
          aliquet. Mauris eget vulputate purus, at auctor leo. Sed eget interdum
          sem. Quisque rutrum nulla id orci accumsan, in efficitur leo blandit.
          Proin quis nulla sollicitudin, aliquam ipsum quis, sagittis purus.
          Vivamus elementum magna vel placerat convallis. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
          non nibh vel augue laoreet posuere.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}id="myBtn1"
        style={{ borderRadius: "20px", fontFamily: "Bebas Neue'" }}
        size="sm">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AboutMe
