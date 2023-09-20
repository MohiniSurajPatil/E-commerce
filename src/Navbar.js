import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='mainnavbar'>
      <Menu className="Navbar" inverted fixed="top" style={{ backgroundColor: 'transparent', position: 'sticky'}}>
        <Menu.Item><h1>Sanwar Customised Gifts</h1></Menu.Item>

        <Menu.Item><Link to="/Home"><h4>Home</h4></Link></Menu.Item>
        <Menu.Item><Link to="/Aboutus"><h4>About Us</h4></Link></Menu.Item>
        <Menu.Item><Link to="/Contactus"><h4>Contact Us</h4></Link></Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
