import { React, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../../Assets/Img/slide1.jpg'
import slide2 from '../../Assets/Img/slide2.jpg'
import slide3 from '../../Assets/Img/slide3.jpg'

function Banner() {
    return (
        <Carousel variant='light'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption >
                    <h1 style={{color:'white'}}>K-ON</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 style={{color:'white'}}>Naruto</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 style={{color:'white'}}>One Piece</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner