import React, { Component } from 'react';
import Home from './Pages/Home'
import Reservation from './Pages/Reservation'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import UserProfile from './Pages/UserProfile'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="h-full bg-slate-800 text-white ">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/profile" element={<UserProfile/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
