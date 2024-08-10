import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white py-8">
      <div className="container mt-8 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="footer-item">
          <h2 className="text-lg font-semibold mb-4">Real-Time Crime Analysis</h2>
          <li><a href="/about" className="cont text-white">Contact</a></li>
        </div>
        <div className="footer-item mt-4 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="flex flex-col md:flex-col">
            <li className="mr-6 mb-2 md:mb-0"><a href="/" className="text-white hover:underline">Home</a></li>
            <li className="mr-6 mb-2 md:mb-0"><a href="/about" className="text-white hover:underline">About</a></li>
            <li className="mr-6 mb-2 md:mb-0"><a href="/report" className="text-white hover:underline">Report</a></li>
            <li><a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p className='inte'>INTELL-I</p>
      </div>
      <div className="und flex justify-center"></div>
      <div className="btm-foot flex justify-between m-14 p-4 mb-2 ">
        <span>Copyright &copy; INTELL-IPOLICE</span>
        <span>BHARAT, INDORE</span>
        <span><FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-400" />Instagram</span>
        <span><FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" />LinkedIn</span>
      </div>
    </footer>
  );
};

export default Footer;
