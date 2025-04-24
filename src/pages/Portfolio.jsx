
import React from 'react';
import Navbar from '../components/Navbar';

import MainSection from '../components/main/MainSection';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="w-full lg:w-2/3 mx-auto relative bg-white ">
      <Navbar />
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
};

export default Portfolio;