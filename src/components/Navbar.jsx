import React from 'react'
import '../styles/styles.css'

const navLinks = [
    { 
        label: 'Home', href: '/'
    },
    {
        label: 'Projects', href: '/projects'
    },
    {
        label: 'About', href: '/about'
    },
    {
        label: 'Contact Me', href: '/contact'
    },
]

export default function Navbar() {
  return (
    <div className='navbar orange'>
        <div className='picture logo'>
            <img src='/favicon2.png' alt="logo" width={70} className='logo' />
        </div>
        <div className='nav-wrapper'>
        
            <ul className='nav-links'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
            
        </div>
        {/* Mobile Menu */}
        <button
        className="btn mobilemenu"
        id="menu-btn"
        aria-label="Menu"
        aria-expanded="false"
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
    </div>
  )
}