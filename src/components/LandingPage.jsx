import React from 'react'
import Navbar from './landingPage/Navbar'
import BookAppointment from "./landingPage/BookAppointment";
import Stats from "./landingPage/Stats";
import Pricing from "./landingPage/Pricing";
import FAQs from "./landingPage/FAQs";
import AboutUs from "./landingPage/AboutUs";
import IndexPage from './landingPage/IndexPage';
import { Divider } from '@chakra-ui/react';
function landingPage() {
  return (
    <div>
      <Navbar/>
      <IndexPage/>
      <Divider/>
      <BookAppointment/>
      <Divider/>
      <Stats/>
      <Divider/>
      <Pricing/>
      <Divider/>
      <FAQs/>   
      <Divider/>
      <AboutUs/>   
    </div>
  )
}

export default landingPage