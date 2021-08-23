import React from 'react'
import Title from './title'
import Description from './description'
import Image from 'react-bootstrap/Image'
import plantImage from '../assets/plantImage.jpg'
// import HooksTimer from './hooksTimer'
// import Counter from './hooksTimer'
// import Timer from './timer'

const About = () => {
    return (
        <div className="home">
            {/* <Timer /> */}
            {/* <Counter /> */}
            {/* <HooksTimer /> */}
            <Title />
            <Description />
            <Image src={plantImage} fluid />
        </div>
    )
}

export default About