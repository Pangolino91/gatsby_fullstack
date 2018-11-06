import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import campaign from '../images/digital-campaign.png';
import copywriting from '../images/copywriting.png';
import about2 from '../images/aboutstile2.jpg';
import about3 from '../images/aboutstile3.jpg';
import './contacts.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay } from 'reactstrap';
import { GoChevronDown } from 'react-icons/go';    
import Layout from '../components/layout';
import axios from 'axios';

export default class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }


    componentDidMount() {
        fetch('/users')
          .then(res => res.json())
          .then(users => this.setState({ users }));
      }
    


  render() {
    return (
        <Layout>
            <div>Lis of Users</div>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.lastname}</li> 
            )}
        </ul>
        </Layout>      
    )   
  }
}
