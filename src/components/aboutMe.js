import React from "react"
import styled from "@emotion/styled"
import { Modal, Button } from "react-bootstrap"
import "./customModal.css"

const AboutMe = () => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const Footer = styled.footer`
  display: flex;
  justify-content: center;
`
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
          <Modal.Title style={{ fontFamily: "Bebas Neue'", color: "#ed7272" }}>
            About Me
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>Hi there,</b> I'm Juan, an enthusiastic Software Developer,
          building the web @<b>Infosys Ltd</b>, Currently I build UI solutions{" "}
          <b>@Allstate</b> using the React ecosystem. I spend most of my time
          programming JavaScript and Node.js, but I also love Ruby and it's
          elegant and simple syntax and style.
          <br />
          <br />
          I'm interested in UI development using React, data
          analysis and visualization, economic systems, and much more.
          <br />
          <br />
         
          <Footer>
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
          </Footer>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            id="myBtn1"
            style={{ borderRadius: "20px", fontFamily: "Bebas Neue'" }}
            size="sm"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AboutMe
