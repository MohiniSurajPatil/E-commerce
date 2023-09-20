import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import WelcomeComp from './Welcomecomp';
import './Home.css';
import { useState } from 'react';
import Adminpage from './Adminpage';
import Adminlogin from './Adminlogin';

const Home = () => {

    
  return (
    <div>
     
        <WelcomeComp  />
     
    </div>
  );
  
  };



export default Home;
