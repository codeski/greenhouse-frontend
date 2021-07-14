import React from 'react'
import Title from './title'
import Description from './description'
import Image from 'react-bootstrap/Image'
import plantImage from '../assets/plantImage.jpg'
// import { Jumbotron }  from './Jumbotron'

const About = () => {
    return (
        <div className="home">
            {/* <Jumbotron /> */}
            <Title />
            <Description />
            <Image src={plantImage} fluid />
        </div>
    )
}

export default About