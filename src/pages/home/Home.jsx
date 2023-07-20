import React from 'react'
import HeroSection from '../../components/hero-section/HeroSection';
import TimeTable from './TimeTable/TimeTable';
import Services from './our-services/Services';
import AboutUsHome from './aboutUs/AboutUsHome';
import SliderSmile from './craouselSlider/SliderSmile';
import Testimonials from './patientsTestimonials/Testimonials';
import Gallery from './galleryPlace/Gallery';
import Form from './form/Form';

function Home() {
  return (
    <>
<HeroSection />
<TimeTable />
<Services />
<AboutUsHome />
<SliderSmile />
<Testimonials/>
<Gallery />
<Form />
    </>
  )
}

export default Home
