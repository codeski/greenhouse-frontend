import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from "react-bootstrap"
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-hav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`

const Navigation = () => {
    return (
        <Styles>
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
        </Styles>
    )
}

export default Navigation
