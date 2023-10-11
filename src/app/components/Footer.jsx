import React from "react";

// Function to render the main content of the footer
function FooterMainContent() {
  return (
    <div className="flex flex-col gap-7 items-start">
      <h1 className="text-white font-medium text-4xl">Ready to get started?</h1>
      <span className="text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, repudiandae?</span>
      <button className="px-4 py-2 md:py-4 bg-pink-200 text-blue-800 rounded-2xl w-52">Get Started</button>
    </div>
  );
}

// Function to render the footer navigation
function FooterNavigation() {
  return (
    <div className="mt-10 text-left">
      <ul className="flex flex-col gap-5 text-white">
        <li className="text-pink-300">Navigation</li>
        <li>Email Marketing</li>
        <li>Campaigns</li>
        <li>Branding</li>
        <li>Offline</li>
      </ul>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="py-4 md:py-16 bg-[#1E2833] mt-40 flex flex-col md:flex-row justify-between items-start px-4 md:px-40 w-full">
      <FooterMainContent />
      <FooterNavigation />
    </footer>
  );
}

export default Footer;
