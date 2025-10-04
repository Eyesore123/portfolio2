import React from 'react';
import '../styles/styles.css';

export default function Footer() {
  return (
    <footer className="footer-portfolio w-full shadow-md shadow-[#5800FF]/10 !pb-6 !px-4">
      <div className="mx-auto flex flex-col items-center justify-center !gap-4">
        <small className="text-xs opacity-70 text-center">
          &copy; {new Date().getFullYear()} Joni Putkinen. All rights reserved.
        </small>

        {/* Social icons */}
        <div className="flex !gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/joni-putkinen-6658682a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E900FF] text-[#5800FF] text-lg"
            aria-label="LinkedIn"
          >
            <img src="/In-Blue-128.png" alt="LinkedIn" className="!w-6 !h-6" />
          </a>
          <a
            href="https://github.com/Eyesore123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E900FF] text-[#5800FF] text-lg"
            aria-label="GitHub"
          >
            <img src="/githubicon.png" alt="GitHub" className="!w-6 !h-6" />
          </a>
             <a
            href="https://www.facebook.com/joni.putkinen.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E900FF] text-[#5800FF] text-lg"
            aria-label="Facebook"
          >
            <img src="/facebook.png" alt="Facebook" className="!w-6 !h-6" />
          </a>
        </div>

        <p className="text-xs opacity-70 text-center !mt-2">
          Made with <span className="text-[white]">♥</span> in Finland
        </p>
      </div>
    </footer>
  );
}
