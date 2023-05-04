import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
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
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Row>
                    <p>Here Are Some Things that I <br />✦ Created ✦ Wrote ✦ Achieved</p>
                  </Row>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-6 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" >Devs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Research</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">CP Profile</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <table>
                          <thread>
                            <tr>
                              <th> </th>
                              <th> </th>
                              <th> </th>
                            </tr>
                          </thread>
                          <tbody>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp; Crypto DEX Using Smart Contracts</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://github.com/arya-domain/crypto-dex.git">Github</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp; RNA-Sequencing Using NCBI Sequencing Data</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://github.com/arya-domain/RNA-sequencing">Github</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp; Portfolio Site Front-End Based</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://github.com/arya-domain/Portfolio-Web-Project-Using-React-NodeJS.git">Github</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp;Portfolio Site With Back-End</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://github.com/arya-domain/Porfolio-Web-Project-Front-End-Based-.git">Github</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp;Wireless Volume Control Using Python</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://github.com/arya-domain/PROJECTS.git">Github</a></td>
                            </tr>
                          </tbody>
                        </table>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <table >
                          <thread>
                            <tr>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thread>
                          <tbody>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp;Modified Genetic Algorithm with Deep Learning for <br /> Fraud Transactions of Ethereum SmartContract </td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://doi.org/10.3390/app13020697">Published</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp;Novel Cuckoo Search-Based Metaheuristic Approach for  <br /> Deep Learning Prediction of Depression</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://doi.org/10.3390/app13095322">Published</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp;Novel Deep Learning Model with Modified Whale optimization for  <br /> Fish Image Classification</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="">Publishing</a></td>
                            </tr>
                          </tbody>
                        </table>

                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <table >
                          <thread>
                            <tr>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thread>
                          <tbody>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp; </td>
                              <td>Competitive Solved Question From Question Bank</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://github.com/arya-domain/Laptop-VS-code.git">Github</a></td>
                            </tr>
                            <tr className='hover-zoom'>
                              <td>✦&nbsp; </td>
                              <td> CodeChef Competitive Programming Profile</td>
                              <td>&nbsp;&nbsp;</td>
                              <td><a href="https://www.codechef.com/users/arya_fake">CodeChef</a></td>
                            </tr>
                          </tbody>
                        </table>
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
