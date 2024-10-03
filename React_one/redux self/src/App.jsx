// src/App.js
import React from "react";
import Counter from "./Components/Counter";
import User from "./Components/User";
import Theme from "./Components/Theme";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { Route } from 'react-router-dom';
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <h1>React Redux Practise</h1>
      {/* <Counter />
      <User />
      <Theme /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Counter" element={<Counter/>}/>
            <Route path="/User" element={<User/>}/>
            <Route path="/Theme" element={<Theme/>}/>
          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
