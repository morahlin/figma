import React from 'react';
import Hero from '../InnerPages/Hero';
import Features from '../InnerPages/Features';
import Gallery from '../InnerPages/Gallery';
import Contents from '../InnerPages/Contents';
import Partners from '../InnerPages/Partners';
import Testimonials from '../InnerPages/Testimonials';
import Try from '../InnerPages/try';



const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Gallery/>
      <Contents/>
      <Partners/>
      <Testimonials/>
      <Try/>
    </div>
  )
}

export default Home;
