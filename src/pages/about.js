import React, { Component } from 'react';
import Layout from '../components/layout';
import { Container, Row, Col } from 'reactstrap';
import './about.css';
import ritratto from '../images/ritratto.jpg';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';
import Carousel from 'nuka-carousel';

export default class about extends Component {
  render() {
    return (
    <Layout>    
      <div>
          <div className="mainn">
          </div>
              <Container className="about_cont">
                  <Row>
                      <Col className="title"><h1>Mission</h1></Col>
                  </Row>    
              </Container> 
              <Container className="about_cont">
                  <Col className="about_frame"><h3>Welcome! I am Enrico Cerri</h3></Col>
              </Container>
              <br/>
              <br/>
              <Container>
                  <img className="ritratto" src={ritratto} alt=""/>
              </Container>
              <br/>
              <br/>       
              <Container className="about_cont"> 
                          <Col className="about_frame">I founded REC Consulting in 2018 to help businesses grow in the two 
                          most important areas for modern companies: the <b>human capital</b> and the <b>digital branding</b>!
                          Thanks to several years of experience as recruiter and a passion for web development, I help
                          finding the <b>right person for the right team</b> and <b>I develop the brand online</b>, designing the Website
                          and promoting the business with the <b>most modern SEO tactics.</b></Col>
              </Container> 
              <br/>
              <br/>
              <Container fluid className="about_cont"> 
                  <Carousel
                  className="carous" 
                  autoplay="true"
                  initialSlideHeight="600" 
                  framePadding="50px"
                  renderBottomCenterControls={({ }) => (
                      <div></div>
                  )}>
                  <div><h2>Recruitment Expertise</h2><h6>Finding the right person in the right team</h6></div>
                  <div><h2>Web Design</h2><h6>Empowering Online-Business with beatiful websites</h6></div>
                  <div><h2>SEO Services</h2><h6>Climbing Search Engines searches and building the brand</h6></div>
                  </Carousel>
                </Container> 
              <div>
                  <Container className="about_cont">
                  <i>Who is in the business know that one of the hardest things is finding the right human capital
                  at the same time not losing track of the technology necessary to be competitive. Me and my team are to help.
                  Matching expertise in recruitment and deep understanding of the new technology trends and 
                  tactics, we can help your bsuiness grow and always being up-to-date.</i>
                  </Container>
              </div>
              <br/>
              <br/>
              <Container className="about_cont">
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
