import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import './styles.css';
import { useSpring, animated } from 'react-spring';
import { UserContext } from '../Auth/UserContext';

const Header = () => {

  const { user } = useContext(UserContext);
  const location = useLocation(); // Get current location

  let firstName = '';

  if (user && user.UserName) {
    const userNameParts = user.UserName.split(' ');
    firstName = userNameParts[0];
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }
  });

  return (
    <animated.header style={animationProps}>
      <nav className='mnc mt-3 text-cyan-100 flex flex-row justify-between items-center p-4'>
        <span className='intel logo-text text-white'>InTelli</span>
        <div className="inteli flex flex-row items-center">
          <Link to="http://localhost:3001/" className='go' style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <div className="go-button">Go Intelli</div>
          </Link>
        </div>

        <div className="menu flex flex-row items-center space-x-8">
          {location.pathname !== '/contact' && ( // Conditionally render Contact link based on current path
            <div className="contact cursor-pointer">
              <Link to="/contact">Contact</Link>
            </div>
          )}
          {user ? (
            <Link to="/" className='border border-black solid text-xs px-3 py-0.5 font-bold hover:cursor-pointer hover:bg-blue-500 '>
              {firstName}
            </Link>
          ) : (
            <div className="menu-toggle" onClick={toggleMenu}>
              <span className="menu-icon">&#9776;</span>
              <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
                <div className="menu-content">
                  <div className="menu-item">
                    <Link to= "/signup" className='menu-link'>Sign Up</Link>
                    <Link to="/login" className='menu-link'>Sign In</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </animated.header>
  );
};

export default Header;
