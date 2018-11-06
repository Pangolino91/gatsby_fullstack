import React, { Component } from 'react';
import { GoChevronDown } from 'react-icons/go';    
import Layout from '../components/layout';

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
    DropdownItem } from 'reactstrap';

export default class About extends Component {
    constructor(props) {
        super(props)

        

    }




  render() {
    return (
        <Layout>
            <div>
                <Navbar color="light" light expand="md" />wdwdw
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          </div>
        </Layout>      
    )   
  }
}
