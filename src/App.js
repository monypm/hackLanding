import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSection from './sections/HeroSection';
import InstructionsSection from './sections/InstructionsSection';
import NavbarSection from './sections/NavbarSection';
import ContactSection from './sections/ContactSection';

class App extends Component {
  render() {
    return (
      <div>
        <HeroSection/>
        <InstructionsSection/>
        <ContactSection/>
      </div>
      
    );
  }
}

export default App;
