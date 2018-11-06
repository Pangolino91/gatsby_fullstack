import { Link } from 'gatsby';
import React, { Component } from 'react';
import logo from '../images/logo_recconsulting/Logo_final - Copy.png';
import tile1 from '../images/tile_imgs/prova(m).png';
import tile2 from '../images/tile_imgs/prova(d).png';
import tile3 from '../images/tile_imgs/prova(x).png';
import { Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button, Col, Row, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';


import Layout from '../components/layout'
import './index.css';

const IndexPage = () => (
  <Layout>
    <div>
          <div className="App">
            <br/>
            <br/>
            <br/>
              <img className="logomain" src={logo} />
              <br/>
            </div>
              <br/>
              <br/><br/>
              <Container className="prova centered" fluid>
                <Row className="justify-content-center">
                  <Col className="frame" md={6} sm={7} lg={4}>
                    <Card className="card">
                    <CardImg className="cards" src={tile1} />
                      <CardBody>
                        <CardTitle> Recruitment Services</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <form method="get" action="/rec_services">
                            <Button type="submit">Dicover More!</Button>
                          </form>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="frame" md={6} sm={7} lg={4}>
                    <Card>
                    <CardImg className="cards" src={tile2} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Web Design and Web-mastering</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <form method="get" action="/web_services">
                            <Button>Dicover More!</Button>
                          </form>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="frame" md={6} sm={7} lg={4}>
                    <Card>
                    <CardImg className="cards" src={tile3} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Digital Marketing</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                          <form method="get" action="/mark_services">
                            <Button type="submit">Dicover More!</Button>
                          </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                </Container>
                <br/>
                <br/>
      </div>
  </Layout>
)

export default IndexPage
