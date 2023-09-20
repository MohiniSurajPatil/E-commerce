import React from 'react';
import { Link } from 'react-router-dom';
import './Welcomecomp.css';

const WelcomeComp = () => {
  return (
    <div className='WelcomeComponent'>
      <h1 > Welcome to Sanwar Customised Gifts</h1>
      <h4>
        Discover the unparalleled world of Sanwar Customized Gifts – the ultimate platform for buying and selling exquisite handmade treasures, where creativity knows no bounds, and where the art of personalization elevates gift-giving to extraordinary heights.
      </h4>
      
      <Link to="/Adminlogin">
        <button> I Am Seller</button>
      </Link>
      <br />
      <br />
      <Link to="/Buyer">
        <button>I Am Buyer</button>
      </Link>
    </div>
  );
};

export default WelcomeComp;
