import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Web3 Dev", " ML Dev", " Researcher", "Blockchain Dev"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome To My Portfolio</span>
                  <h1>{`Hey! I'm Aryan `}</h1>
                  <h1>
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " A Web3 Developer" , " A Machine learning Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>✤ Knack for Developing </p>
                  <p>✤ Coding Enthusiast</p>
                  <p>✤ Competitive Programmer</p>
                  <a href="aryan_resume.pdf" download="Aryan Das.pdf" className="btn btn-primary" >Download Resume <ArrowDownCircle size={35} /></a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className='profile-picture'>
                  <div className='profile-picture-background'></div>
                </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
