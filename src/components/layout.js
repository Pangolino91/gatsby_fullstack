import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby';
import MainNavBar from './navbar';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';

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


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>

          <MainNavBar />
            {children}
          <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
