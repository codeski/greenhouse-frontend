import React from 'react'
import Title from './title'
import Description from './description'
import Image from 'react-bootstrap/Image'
import plantImage from '../assets/plantImage.jpg'

const About = () => {
    return (
        <div className="home">
            <Title />
            <Description />
            <Image src={plantImage} fluid />
        </div>
    )
}

export default About