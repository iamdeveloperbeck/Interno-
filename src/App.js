import React from 'react';

import { Header, Service, Intro, Testimonials, Client, Project, Counter, Blog, CalltoAction } from './container';
import { Navbar, Footer, Author } from './components';
import './App.css';

function App() {
  return (
    <div className="app__wrapper">
      <Navbar />
      <Header />
      <Service />
      <Intro />
      <Testimonials />
      <Client />
      <Project />
      <Counter />
      <Blog />
      <CalltoAction />
      <Footer />
      <Author />
    </div>
  );
}

export default App;
