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
                <NavLink to="/">| Home |</NavLink>
                <NavLink to="/plants">| My Plants |</NavLink>
                <NavLink to="/water">| Water Time |</NavLink>
            </Nav>           
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
