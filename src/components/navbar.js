import './navbar.css';
import Link from "gatsby-link";
import logoNoWrite from '../images/logo_recconsulting/justglobenobckgrnd.png';
import write from '../images/logo_recconsulting/write.png';

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  DropdownItem } from 'reactstrap';

export default class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.scrolNav = this.scrolNav.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      class_up: 'whentop',
      class_down: 'nav_top',
      dropdownOpen: false,
      isOpen: false
    };
  }

// prova scroll adaptive navbar

componentDidMount() {
    window.addEventListener('scroll', this.scrolNav);
}


componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolNav)
}


scrolNav() {
    const scrolly = window.scrollY;
    if (scrolly > 80) {
        this.setState({
          class_up: 'whenscroll',
          class_down: 'nav_down'
        })
    }   
    else if (scrolly < 80) {
        this.setState({
          class_up: 'whentop',
          class_down: 'nav_top'
        });

    }
}


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  toggle2() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }


  render() {
    return (
      <div  className={this.state.class_up}>
        <Navbar className={this.state.class_down} color="white" light expand="md">
        <a href="/"><img className="logonowrite" src={logoNoWrite} width="80px" alt=""/>
          <NavbarBrand id="write_logo"><img src={write} className="write_logo" alt=""/></NavbarBrand></a>
          <NavbarToggler onClick={this.toggle} />   
          <Collapse toggle={this.toggle} isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle2}>
            <DropdownToggle nav caret>
              Services
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><Link to="/rec_services">Recruitment Solutions</Link></DropdownItem>
              <DropdownItem><Link to="/web_services">Web Design</Link></DropdownItem>
              <DropdownItem><Link to="/mark_services">SEO & Digital Marketing</Link></DropdownItem>
            </DropdownMenu>
          </Dropdown>                
              <NavItem>
              <Link className="int_link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="int_link_about" to="about">About</Link>
              </NavItem>
               <NavItem>
                <Link className="int_link_about" to="/contacts">Contacts</Link>    
               </NavItem> 
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}