import React from 'react'

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Carousel from '../../components/Carousel';
import AboutSection from '../../components/AboutSection';
import Sentence from '../../components/SentenceTest';
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
    <Nav />
    <Header />
    <Carousel />
    <AboutSection />
    <Sentence />
    <NewsLetter />
    <Footer />
    </>
  )
}

export default Home;
