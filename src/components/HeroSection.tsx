import React from 'react';
import '../styles/herosection.css';

import Image from "./Images"
import {Link} from 'react-router-dom'
export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">FoodRest restaurant is...</h1>
                <p className="info">FoodRest is a place where you can please your soul and tummy with delicious food of all cuisine.</p>
                <Link to="recipes" className="btn">explore now</Link>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <Image key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}