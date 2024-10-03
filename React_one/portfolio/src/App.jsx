import React from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import {  BrowserRouter , Routes , Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      {/* <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer></footer> */}

        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <footer></footer>
       </BrowserRouter>


    </div>
  );
};

export default App;
