import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row>
                  <p>Here Are Some Things that I <br/>✦ Created ✦ Wrote ✦ Achieved</p>
                </Row>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Development Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Research Papers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">CP Profile Info</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <div className='hover-zoom'>
                       ✦ Portfolio Site - <a href="#">Github</a>
                    </div>
                    <div className='hover-zoom'>
                       ✦ Wireless Volume Control (Python) - <a href="#">Github</a>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className='hover-zoom'> 
                        ✦ Modified Genetic Algorithm with Deep Learning for Fraud <br/>&nbsp;&nbsp;&nbsp;&nbsp; Transactions of Ethereum SmartContract - <a href="#">Publishing</a>
                      </div>  
                      <div className='hover-zoom'> 
                        ✦ Novel Deep Learning Model with Modified Whale optimization 
                          <br/>&nbsp;&nbsp;&nbsp;&nbsp; for Fish Image Classification - <a href="#">Publishing</a> 
                      </div>
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="third">
                    <div className='hover-zoom'> 
                      ✦ Competitive Solved Question From Question Bank -<a href="https://github.com/arya-domain/Laptop-VS-code.git"> Github</a>
                    </div>
                    <div className='hover-zoom'> 
                      ✦ CodeChef Competitive Programming Profile -<a href="https://www.codechef.com/users/arya_fake"> CodeChef</a>
                    </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
