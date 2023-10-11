'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Ttopics() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return (
        <div className="bg-[#F0F2F5] py-12">
            <div className="w-4/5 mx-auto">
                {/* Heading */}
                <h1 className="text-3xl font-semibold mb-10 text-left">Trending Topics</h1>

                {/* Cards */}
                <Slider {...settings}>
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className="w-full px-2">
                            <div className="relative w-full h-48 bg-gradient-to-b from-black to-black rounded-xl">
                                {/* Overlay Title on the Image */}
                                <div className="absolute inset-0 flex items-end justify-start p-4">
                                    <span className="text-white text-2xl font-bold font-['Metropolis']">Card {index + 1}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Ttopics;
