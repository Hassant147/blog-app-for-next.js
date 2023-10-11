"use client"; // This is a client component 👈🏽

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BlogSection() {
    const galleryImages = [
        '/media/ThreeColumnSection/Gimg1.png',
        '/media/ThreeColumnSection/Gimg2.png',
        '/media/ThreeColumnSection/Gimg3.png',
        '/media/ThreeColumnSection/Gimg4.png',
        '/media/ThreeColumnSection/Gimg5.png',
        '/media/ThreeColumnSection/Gimg6.png'
    ];

    const [windowWidth, setWindowWidth] = useState(
      typeof window !== 'undefined' ? window.innerWidth : 1200
    );
      
    const titles = [
        "Get ready to Up your creative Game with the new DJI Mavic Air 2",
        "Description for the second card...",
        "Description for the third card...",
        "Description for the fourth card...",
        "Description for the fifth card..."
    ];
  
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-white w-4/5 mx-auto flex mt-16">
          {windowWidth < 1100 ? (
            // Mobile and Tablet View
            <div className="w-full flex flex-col">
              <Slider>
                {titles.map((title, idx) => (
                  <div key={idx} className="flex flex-col items-center shadow-lg border border-zinc-300 rounded-xl p-4">
                    <img className="w-full h-80 rounded-2xl mb-4" src={`/media/YourImageSourceHere.png`} alt="Main Card Image" />
                    <div className="text-red-600 text-[6.65px] font-medium font-['Metropolis'] uppercase tracking-widest">Creative, Digital</div>
                    <div className="text-neutral-700 text-base font-bold font-['Metropolis'] mb-4">{title}</div>
                    <img className="w-[37.10px] h-[37.10px] rounded-full mb-2" src="/Media/AuthorDP.png" alt="Author DP" />
                    <div className="text-black text-xs font-medium font-['Metropolis'] uppercase mb-1">Author Name</div>
                    <div className="text-zinc-400 text-[6.65px] font-medium font-['Metropolis'] lowercase">January 24, 2023 - 4 min read</div>
                  </div>
                ))}
              </Slider>

              {/* Search Bar */}
              <div className="mb-6 bg-indigo-400 bg-opacity-10 p-4 rounded-xl mt-10">
                <input type="text" className="w-full h-12 bg-indigo-400 bg-opacity-5 rounded-3xl pl-4" placeholder="Search..." />
              </div>

              {/* Recent on Blogar */}
              <div className="mb-6 bg-indigo-400 bg-opacity-10 p-4 rounded-xl">
                <h2>Recent on Blogar</h2>
                <ul>
                  <li>Blog Post 1 - 2023-01-24</li>
                  <li>Blog Post 2 - 2023-01-23</li>
                  <li>Blog Post 3 - 2023-01-22</li>
                </ul>
              </div>

              {/* Gallery */}
              <div className="flex flex-col items-center bg-indigo-400 bg-opacity-10 p-4 rounded">
                <div className="text-2xl font-bold mb-4">Gallery</div>
                <div className="flex justify-center w-full">
                  <div className="grid grid-cols-2 gap-4">
                    {galleryImages.map((img, idx) => (
                      <div key={idx} className="flex justify-center items-center">
                        <img className="w-28 h-28 rounded-lg" src={img} alt={`Gallery ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Desktop View
            <>
              <div className="w-2/3 flex flex-col">
                {titles.map((title, idx) => (
                  <div key={idx} className="flex flex-row space-x-12 mb-4">
                    {/* Blog Image */}
                    <div className="w-64 ">
                      <img className="w-full h-64 rounded-2xl" src={`/media/ThreeColumnSection/C1Img${idx + 1}.png`} alt={`Item-${idx}`} />
                    </div>
                    {/* Blog Card */}
                    <div className="w-3/6 bg-white rounded-xl shadow-lg p-4">
                      <div className="text-red-600 text-xs uppercase mb-2">Creative, Digital</div>
                      <div className="text-neutral-700 text-lg font-bold mb-4">{title}</div>
                      <div className="flex items-center">
                        <img className="w-12 h-12 rounded-full mr-4" src="/media/AuthorDP.png" alt="Author" />
                        <div>
                          <div className="text-black text-xs uppercase mb-1">Author</div>
                          <div className="text-gray-400 text-xs">January 24, 2023 - 4 min read</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-1/3">
                {/* Search Bar */}
                <div className="mb-6 bg-indigo-400 bg-opacity-10 p-4 rounded-xl">
                  <input type="text" className="w-96 h-12 bg-indigo-400 bg-opacity-5 rounded-3xl pl-4" placeholder="Search..." />
                </div>

                {/* Recent Blogs */}
                <div className="mb-6 bg-indigo-400 bg-opacity-10 p-4 rounded-xl">
                  <div className="text-center text-neutral-700 text-[19px] font-bold font-['Metropolis'] mb-6">Recent on Blogar</div>
                  {/* Example: */}
                  <div className="flex mb-4">
                    <img className="w-28 h-28 rounded-lg" src="/media/ThreeColumnSection/Rimg1.png" alt="Blog" />
                    <div className="ml-4">
                      <div className="text-neutral-700 text-sm font-medium font-['Metropolis']">Blog Title</div>
                      <div className="text-zinc-400 text-xs font-medium font-['Metropolis'] lowercase">January 24, 2023 - 4 min read</div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="grid grid-rows-2 grid-cols-3 gap-4 bg-indigo-400 bg-opacity-10 py-4 px-4">
                  {galleryImages.map((img, idx) => (
                    <div key={idx} className="flex justify-center items-center">
                      <img className="w-28 h-28 rounded-lg" src={img} alt={`Gallery ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
    );
}
