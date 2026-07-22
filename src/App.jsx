/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from "./pages/Contact"
import Product from './pages/Product'
import Placeorder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Navbar from './components/Navbar';

 
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={< Contact/>} />
        <Route path='/product:Id' element={< Product/>}/>
        <Route path='/place-holder' element={<Placeorder />}/>
        <Route path='/orders' element={<Orders/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
