import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xknankwz");
  if (state.succeeded) {
    return (
      <section className="contact" id="connect">
        <Container>
          <Row>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <h2>Your Message Was Send Successfully...</h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <Row>
              <Col><h2>Get In Touch</h2></Col>
            </Row>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input id="text" name="First Name" placeholder="First Name" />
                  <ValidationError prefix="Message" field="text" errors={state.errors} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input id="text" name="Last Name" placeholder="Last Name" />
                  <ValidationError prefix="Message" field="text" errors={state.errors} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input id="text" name="Phone No." placeholder="Phone No." />
                  <ValidationError prefix="Message" field="text" errors={state.errors} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input id="email" type="email" name="email" placeholder="Email" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Col>
                <Col size={12} sm={12} className="px-1">                
                  <textarea id="message" type="message" name="Message" placeholder="Message" />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Col>
                <Col size={12} className="px-1">
                  <button type="submit" disabled={state.submitting}>
                    <span>Send</span>
                  </button>
                </Col>

              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );

}