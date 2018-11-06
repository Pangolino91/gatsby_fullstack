import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import campaign from '../images/digital-campaign.png';
import copywriting from '../images/copywriting.png';
import about2 from '../images/aboutstile2.jpg';
import about3 from '../images/aboutstile3.jpg';
import './mark_services.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';
import { GoChevronDown } from 'react-icons/go';    
import Layout from '../components/layout';

export default class About extends Component {
    constructor(props) {
        super(props)

        

    }




  render() {
    return (
        <Layout>
            <div>
                <div className="mark_main">
                </div>
                <br/>
                <br/>
                    <div className="general">
                        <Container className="about_cont">
                        <h2><em>“Content is fire, Digital Marketing is gasoline.”
                        <h4>Jay Baer - Bestselling Author, Marketing Expert and Founder of Convince & Convert</h4></em></h2>      
                        </Container>
                        <br/>
                        <Container>
                            <div className="mark_cont">
                                <GoChevronDown className="arrow"/>
                            </div>
                        </Container>
                        <br/>
                        <Container className="about_cont">
                            <div>
                                <p>
                                    At REC Consulting we foster Brands on the major Social Media and Web Channels,
                                    enhancing web traffic and spreading the voice on the products among targeted audience. 
                                </p>
                            </div>
                        </Container>
                        <br/>
                            <br/>
                            <br/>
                        <Container className="about_cont">
                            <Row>
                                <Col xs={12} md={6} className="bottom_margin">
                                    <img src={campaign} alt=""/>
                                </Col>
                                <Col className="left">
                                    <ul>
                                        <li>Social Campaigns management (Twitter, Facebook, Pinterest, etc.) to enhance Brand 
                                            awareness and sales</li>
                                        <li>Webinair Organization to train stakeholders</li>
                                        <li>YouTube channels enhancement with tailored video editing and releases</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="about_cont">
                            <Row className="flex-row-reverse">
                                <Col xsOffset={12} md={6} className="bottom_margin">
                                    <img src={copywriting} alt=""/>
                                </Col>
                                <Col className="left">
                                    <ul>
                                        <li>Sales Copywriting services</li>
                                        <li>Blog management and uploading of content on a regular base</li>
                                        <li>Tips and Tricks on how to improve the overall external communication (e.g. press, suppliers)</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <Container className="mark_cont">
                                <button className="animated_btn">Get in Touch!</button>
                            </Container>
                        </div>
                    <br/>
                    <br/>     
                </div>
            </Layout>      
    )   
  }
}
