// src/app/pages/homepage/index.jsx

import React from 'react';
import Header from '../../components/Header';
import TwoColumnLayout from './TwoColumnLayout'; // Components specific to homepage
import Ttopics from './TrendingTopic';
import { InnovationTechSection } from './InnovTech';
import FeaturedBlogs from './FeaturedBlog';
import BlogSection from './threeColumn';
import InstagramSection from './instagram';
import Footersec from '../../components/Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <TwoColumnLayout />
      <Ttopics />
      <InnovationTechSection />
      <FeaturedBlogs />
      <BlogSection />
      <InstagramSection />
      <Footersec />
    </div>
  );
};

export default HomePage;
