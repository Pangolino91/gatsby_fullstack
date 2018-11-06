import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import development from '../images/development.png';
import computer from '../images/computer.png';
import responsive from '../images/responsive.png';
import asisst from '../images/asisst.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './web_services.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';
import Layout from '../components/layout';



    
export default class WebService extends Component {


  render() {
    return (
        <Layout>
            <div>
            <div>
                <div className="web_main">
                </div>
                <br/>
                <br/>
                </div>
                    <Container className="web_cont">
                        <Col className="web_frame">
                            <h3>
                                Nowadays if a brand is not online, it does not exist.
                                At REC Consulting Our job is to create or empower the business at its very
                                core: Website and Social management.
                            </h3>
                        </Col>
                    </Container>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="inner_cont inner_cont_left">
                                    <img src={computer} />
                                    <div className="ext_list">                                
                                        <ul className="list">
                                            <li>Animated and fast websites</li>
                                            <li>User-friendly interface and catchy call-to-actions</li>
                                            <li>Photo and video editing to enhance content</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="inner_cont inner_cont_right">
                                    <img src={responsive} />
                                    <div className="ext_list">
                                        <ul className="list">
                                            <li>Maximum Responsiveness - the website will look great on every device</li>
                                            <li>App design - we listen to your ideas and help you in creating the app for your business</li>
                                            <li>SEO Optimization to be displayed first in search engines</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <br/>
                <br/>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="inner_cont inner_cont_left">
                                    <img src={development} />
                                    <div className="ext_list">                                
                                        <ul className="list">
                                            <li>Maintenance post-realization</li>
                                            <li>Blog and forum creation to share & connect ideas</li>
                                            <li>E-mail and database linking to create a whole new web entity</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="inner_cont inner_cont_right">
                                    <img src={asisst} />
                                    <div className="ext_list">
                                        <ul className="list">
                                            <li>Always open to new ideas and suggestions while realizing the project</li>
                                            <li>Re-styling of your old website if needed</li>
                                            <li>Assistance once deployed - we do not disappear once the work is done!</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Container className="web_cont">
                        <form action="/contacts">
                            <button  className="animated_btn">Get in Touch!</button>
                        </form>  
                    </Container>
                    <br/>
                    <br/>
                    <br/>
            </div>
        </Layout>        
    )   
  }
}