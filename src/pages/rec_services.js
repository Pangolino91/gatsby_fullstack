import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import about1 from '../images/aboutstile1.jpg';
import about2 from '../images/aboutstile2.jpg';
import about3 from '../images/aboutstile3.jpg';
// import about3 from '../images';
// import about4 from '../images';
import './rec_services.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';
import Layout from '../components/layout';

export default class About extends Component {
    constructor(props) {
        super(props)

        

    }




  render() {
    return (
        <Layout>
            <div>
                <div className="rec_main">
                </div>
                <br/>
                <br/>
                <Container className="cont">      
                    <Row className="rec_left">      
                        <Col className="about_tile">
                            <img className="about_tile_img" src={about2} alt=""/>
                        </Col>
                            <Col className="about_text">
                                <h2>Executive Recruitment</h2>
                                <ul>
                                    <li>Analysis of the team to understand the profile of the desired candidate</li>
                                    <li>Search candidates with proven successful records through background check</li>
                                    <li>Presentation of the best candidate with the right hard and soft skills</li>
                                </ul>
                            </Col>          
                    </Row>
                    <br/>
                    <Row className="flex-row-reverse rec_right">
                    <Col className="about_tile">
                            <img className="about_tile_img" src={about3} alt=""/>
                        </Col>       
                    <Col className="about_text">
                                <h2>Technical Expertise</h2>
                                <ul>
                                    <li>Complete understanding of highly technical subjects, from Industrial Automation to IT. We and the candidates speak the same language!</li>
                                    <li>Understanding of the recruitment process for technical positions</li>
                                    <li>We save your time by keeping the candidate up-to-date, scheduling interviews and giving feedback</li>
                                </ul>
                            </Col>                  
                    </Row>
                    <br/>
                    <Row className="rec_left">      
                    <Col className="about_tile">
                            <img className="about_tile_img" src={about1} alt=""/>
                        </Col>
                            <Col className="about_text">
                                <h2>Head Hunting</h2>
                                <ul>
                                    <li>Mapping of the competitors on the market to spot the perfect candidate</li>
                                    <li>Approaching targeted candidates with maximum discretion</li>
                                    <li>Attract talents from relevant companies thanks to spot-on job advertising campaigns</li>
                                </ul>
                            </Col>    
                    </Row>
                    </Container>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Container className="rec_cont">
                        <form action="/contacts">
                            <button  className="animated_btn">Get in Touch!</button>
                        </form>  
                    </Container>
                    <br/>
                    <br/>     
                </div>
            </Layout>      
    )   
  }
}
