import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-md-end">
          <Col size={12} sm={11} className="text-end text-sm-end">
            <p> Copyright 2022. All Rights Reserved <br /></p>
            <img className="logo " src={logo} alt="Logo" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
