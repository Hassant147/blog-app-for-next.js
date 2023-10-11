'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TwoColumnLayout() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const cardImages = ['/Media/c1.png', '/Media/c2.png', '/Media/c3.png'];

    return (
        <div className="flex flex-wrap justify-between">
            <div className="w-3/4 ml-auto lg:w-1/2 order-1 lg:order-2 hide-below-1100">
                <img 
                    className="w-full h-40 rounded-tl-3xl rounded-bl-3xl lg:h-full" 
                    src="/Media/catImg.png" 
                    alt="Large Image" 
                />
            </div>
            
            <div className="w-full space-y-12 lg:w-auto lg:space-y-6 order-2 lg:order-1 flex flex-col mt-10 mx-auto lg:ml-36 lg:mt-32">
                <div className="mb-10 overflow-hidden lg:hidden">
                    <Slider {...settings}>
                        {cardImages.map((img, index) => (
                            <div key={index} className="card flex flex-col items-center bg-white rounded space-y-4">
                                <img className="w-48 h-48 rounded-xl mx-auto" src={img} alt={`Card ${index + 1} Image`} />
                                <div className="mt-2 flex flex-col items-center">
                                    <div className="text-red-600 text-xs font-normal uppercase tracking-widest">Creative, Digital</div>
                                    <div className="text-neutral-600 text-xl mt-2 font-medium">IPadOS 14 introduces<br/>new designed<br/>specifically for iPad</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="hidden lg:flex flex-col space-y-8">
                    {cardImages.map((img, index) => (
                        <div key={index} className="card flex flex-col lg:flex-row items-center lg:items-start bg-white rounded space-y-4 w-full lg:w-auto">
                            <img className="w-48 h-48 rounded-xl mx-auto lg:mx-0 lg:w-36 lg:h-36" src={img} alt={`Card ${index + 1} Image`} />
                            <div className="mt-2 flex flex-col items-center lg:items-start lg:ml-4 lg:space-y-4">
                                <div className="text-red-600 text-xs font-normal uppercase tracking-widest">Creative, Digital</div>
                                <div className="text-start text-neutral-600 text-xl mt-2 font-medium lg:text-2xl lg:text-neutral-700">IPadOS 14 introduces<br/>new designed<br/>specifically for iPad</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TwoColumnLayout;
