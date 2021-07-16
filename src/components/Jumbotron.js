import React from 'react'
import { Jumbotron as Jumbo, Container, Button } from 'react-bootstrap'
import styled from 'styled-components'
import plantImage from '../assets/plantImage.jpg'
import Title from './title'
import Description from './description'
import { NavLink } from 'react-router-dom'


const Styles = styled.div`
    .jumbo {
        background: url(${plantImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #abfdbe;
        height: 300px;
        position: relative;
        text-shadow: 2px 2px 8px #111;
    }

    // .overlay {
    //     background-color: #000
    //     opacity: 0.6;
    //     position: absolue;
    //     top: 0;
    //     bottom: 0;
    //     right: 0;
    //     left: 0;;
    // }
`

export const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <Title />
                    <Description />
                    <NavLink to="/plants"><Button onClick={() => <NavLink to="/plants"></NavLink>}>Plants
                        {/* <NavLink to="/plants"></NavLink> */}
                    </Button></NavLink>
                </Container>
            </Jumbo> 
        </Styles>
    )
}

