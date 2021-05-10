import React, { Component } from "react";
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css'

/**
 * This class is to develop the Navbar using react bootstrap.
 */

class NavBar extends Component {
    render() {
      return (

        <Navbar crolling dark expand="md" fixed="top">
        <Navbar.Brand className="color-title" as={Link} to="/Home">Precise Weather</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav fill className="ml-auto">
                <NavItem className="text-color" as={Link} to="/Home">Home</NavItem>
                <NavItem className="text-color" as={Link} to="/Radar">Radar</NavItem>
                <NavItem className="text-color" eventKey="disabled" disabled>Machine Learning</NavItem>
                <NavItem className="text-color" as={Link} to="/About">About</NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>);
        
    }
}

export default NavBar;