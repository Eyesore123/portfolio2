import React, { useState, useContext } from 'react';
import '../styles/styles.css';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    {
      label: t("navbar.home"), 
      path: '/'
    },
    {
      label: t("navbar.projects"), 
      path: '/projects'
    },
    {
      label: t("navbar.about"), 
      path: '/about'
    },
    {
      label: t("navbar.contact"), 
      path: '/contact'
    },
  ];

  return (
    <div className='navbar orange'>
      <div className='blur2 blur3'></div>
      <div className='picture logo'>
        <Link to='/' className='logolink'>
          <img src='/favicon3.png' alt="logo" width={70} className='logo' />
        </Link>
      </div>
      <div className='nav-wrapper'>
        <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
          {navLinks.map((link, index) => (
            <li className='nav-link' key={index}>
              <Link 
                to={link.path} 
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <button
        className="btn mobilemenu"
        id="menu-btn"
        aria-label="Menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="34"
          height="34"
        >
          <path
            fill="currentColor"
            d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
          ></path>
        </svg>
      </button>
      <button 
        className='languagebutton btn scale-125 !mt-1' 
        onClick={() => changeLanguage(selectedLanguage === 'en' ? 'fi' : 'en')}
      >
        {selectedLanguage === 'en' ? 'FI' : 'EN'}
      </button>
    </div>
  );
}
