import React from 'react';
import Hero from './Components/Containers/Hero/Hero';
import Aux from './hoc/Aux';
import Navbar from './Components/Containers/Navbar/Navbar';
import About from './Components/Containers/About/About';
import Experiences from './Components/Containers/Experience/Experience';
import Testimonials from './Components/Containers/Testimonials/Testimonials'
import Contact from './Components/Containers/Contact/Contact';

const App = () => {
  return (
    <Aux>
      <Hero />
      <Navbar />
      <About/>
      <Experiences />
      <Testimonials />
      <Contact />
    </Aux>
  )
}

export default App;