import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand><NavLink to="/">GreenHouse</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
            <Nav.Link ><NavLink to="/">About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/plants">My Plants</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/water">Water Time</NavLink></Nav.Link>
            </Nav>           
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
