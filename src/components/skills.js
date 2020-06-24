import React from "react"
import { Modal, Button } from "react-bootstrap"
import "./customModal.css"
import "./skills.css"

const Skills = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  function createMarkup() {
    return {__html: <div class="ui progress" data-percent="33"><div class="bar" style="width:33%"></div></div>}
  }

  return (
    <>
      <Button
        id="myBtn3"
        style={{ borderRadius: "20px", fontFamily: "Bebas Neue'" }}
        size="sm"
        onClick={handleShow}
        variant="outline-secondary"
      >
        Skills
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div align="center">
            <div>
            <div className="ui progress" data-percent="33"><div className="bar" style={{width:"33%"}}></div></div>
            </div>
            <div dangerouslySetInnerHTML={createMarkup()} />
            <br />
            <img src="https://img.icons8.com/dusk/64/000000/javascript.png" />
            <img src="https://img.icons8.com/dusk/64/000000/react.png" />
            <img src="https://img.icons8.com/dusk/64/000000/ruby-programming-language.png" />
            <img src="https://img.icons8.com/dusk/64/000000/css3.png" />
            <img src="https://img.icons8.com/dusk/64/000000/database.png" />
            <img src="https://img.icons8.com/dusk/64/000000/server.png" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            id="myBtn3"
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

export default Skills
