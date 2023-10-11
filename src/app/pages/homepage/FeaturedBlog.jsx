'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function FeaturedBlogsSection() {
    const largeCardData = {
        imageUrl: "/Media/featuredSection/img.png",
        category: "Creative, Digital",
        title: "Large Card Title"
    };

    const smallCardsData = [
        { imageUrl: "/Media/featuredSection/img1.png", category: "Creative, Digital", title: "Small Card 1" },
        { imageUrl: "/Media/featuredSection/img2.png", category: "Tech, Modern", title: "Small Card 2" },
        { imageUrl: "/Media/featuredSection/img3.png", category: "Innovation, Trends", title: "Small Card 3" },
        { imageUrl: "/Media/featuredSection/img4.png", category: "Design, Art", title: "Small Card 4" }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-gray-100 py-12 w-full">
            <div className="w-4/5 mx-auto">

                {/* Ad Image */}
                <div className="mb-6 text-center">
                    <img className="w-full h-52" src="https://via.placeholder.com/1276x207" alt="Ad" />
                </div>

                {/* Title */}
                <h1 className="text-3xl font-semibold mb-10 text-center lg:text-left">Featured Blogs</h1>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Large Featured Card */}
                    <div className="mx-auto lg:mx-0">
                        <img className="w-96 h-96 rounded-lg shadow mb-4" src={largeCardData.imageUrl} alt="Featured" />
                        <div className="text-center lg:text-left text-red-600 text-xs font-medium font-['Metropolis'] uppercase tracking-widest mb-2">{largeCardData.category}</div>
                        <div className="text-center lg:text-left text-neutral-700 text-4xl font-bold font-['Metropolis']">{largeCardData.title}</div>
                    </div>

                    {/* Slider for small cards on screens <= 1100px */}
                    <div className="lg:hidden">
                        <Slider {...sliderSettings}>
                            {smallCardsData.map((card, index) => (
                                <div key={index} className="px-2">
                                    <img className="w-72 h-72 rounded-lg shadow mb-4 mx-auto" src={card.imageUrl} alt="Card" />
                                    <div className="text-center text-red-600 text-xs font-medium font-['Metropolis'] uppercase tracking-widest mb-2">{card.category}</div>
                                    <div className="text-center text-neutral-700 text-lg font-bold font-['Metropolis']">{card.title}</div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Grid of smaller cards for screens > 1100px */}
                    <div className="hidden lg:grid grid-cols-2 gap-6">
                        {smallCardsData.map((card, index) => (
                            <div key={index}>
                                <img className="w-72 h-72 rounded-lg shadow mb-4 mx-auto" src={card.imageUrl} alt="Card" />
                                <div className="text-center lg:text-left text-red-600 text-xs font-medium font-['Metropolis'] uppercase tracking-widest mb-2">{card.category}</div>
                                <div className="text-center lg:text-left text-neutral-700 text-lg font-bold font-['Metropolis']">{card.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedBlogsSection;
