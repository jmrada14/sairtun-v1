import React from "react"
import { Modal, Button, Card } from "react-bootstrap"
import "./customModal.css"
import styled from "@emotion/styled"

const Linky = styled.a`
  color: #615e5a;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ed7272;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    color:#ed7272; 
     text-decoration:none; 
     cursor:pointer;  
  }
`
const ContactMe = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        id="myBtn2"
        style={{ borderRadius: "20px", fontFamily: "Bebas Neue'" }}
        size="sm"
        onClick={handleShow}
        variant="outline-secondary"
      >
        Get in touch
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get in touch</Modal.Title>
        </Modal.Header>
        <Modal.Body align="center">
          <>
          <Linky href="https://github.com/jmrada14" target="_blank">
              {" "}
              <img src="https://img.icons8.com/dusk/64/000000/github.png"/>
            </Linky>
            <a href="https://icons8.com/icon/46565/github"></a>
            <Linky
              href="https://www.linkedin.com/in/juan-rada-4b997b190/"
              target="_blank"
            >
              {" "}
              <img src="https://img.icons8.com/dusk/64/000000/linkedin.png"/>
            </Linky>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="myBtn2"
            style={{ borderRadius: "20px", fontFamily: "Bebas Neue'" }}
            size="sm"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ContactMe
