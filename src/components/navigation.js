import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand><NavLink to="/">GreenHouse</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link ><NavLink to="/">About</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/plants">My Plants</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/water">Water Time</NavLink></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* {if (<NavLink to="/plants">My Plants</NavLink>) {
                return (<Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>)
            }} */}
            
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
