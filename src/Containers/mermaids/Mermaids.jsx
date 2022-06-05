import React, { useState } from 'react'
import './mermaids.css'
import Slider from "react-slick";
import mermaid from "../../assets/tale_2.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"


const images = [mermaid, mermaid, mermaid, mermaid];


function Mermaids() {
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };


    return (
        <div className="mermaids" id="mermaids">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                        <img src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Mermaids;