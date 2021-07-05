import React from 'react'
import Title from './title'
import Description from './description'
import Image from 'react-bootstrap/Image'

const About = () => {
    return (
        <div>
            <Title />
            <Description />
            <Image src="https://cdn.shopify.com/s/files/1/1267/8737/products/2_Palram_Greenhouses_Balance_8x20_Grey_1920.jpg?v=1605832310" fluid />
 
        </div>
    )
}

export default About