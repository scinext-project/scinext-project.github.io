import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/header.css'
import { Row, Col } from 'reactstrap'
import { Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import logo from './../orkg_logo.png';
import scinext_logo from './../scinext-logo.png'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <header>
                            <Navbar className="header-navbar" light expand="md">
                                <NavbarBrand href="/">
                                    <img id='scinext-logo' src={scinext_logo} alt='SCINEXT Logo' />
                                    <img id='orkg-logo' src={logo} alt="ORKG Logo" />
                                </NavbarBrand>
                                <nav>
                                    <NavLink className="navlink" to='/r0-estimates'>R0 Estimates</NavLink>
                                    <NavLink className="navlink" to='/sota'>SOTA</NavLink>
                                </nav>
                            </Navbar>
                        </header>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Header;