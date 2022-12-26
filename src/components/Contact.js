import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                    <h2>Get In Touch</h2>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <a href="mailto:aryandas156@gmail.com" className="btn btn-dark btn-lg btn-txt"> 
                        <h4 >aryandas156@gmail.com 
                        <ArrowRightCircle size={35} /></h4>
                      </a>
                    </Col>
                  </Row> 
                  <div> <br/></div>
                    <Col size={12} sm={6} className="px-1">
                      <div className="buttonpos">
                        <div className="social-icon2"> 
                          <button className="btn btn-dark btn-lg">
                            <a href="https://www.linkedin.com/in/aryan--das/"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/aryan.das.73700/"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/ig_a.r.y.a/"><img src={navIcon3} alt="" /></a>
                            <a href="https://twitter.com/arya_domain/"><img src={navIcon4} alt="" /></a>
                          </button>
                        </div>
                      </div>
                    </Col>
                  
                 
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
