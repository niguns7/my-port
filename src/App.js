import React from 'react';
import Hero from './Components/Containers/Hero/Hero';
import Aux from './hoc/Aux';
import Navbar from './Components/Containers/Navbar/Navbar';
import About from './Components/Containers/About/About';
import Experiences from './Components/Containers/Experience/Experience';

const App = () => {
  return (
    <Aux>
      <Hero />
      <Navbar />
      <About/>
      <Experiences />
    </Aux>
  )
}

export default App;