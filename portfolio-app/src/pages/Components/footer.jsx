import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-slate-300 p-6 opacity-80 w-full">
      <div className="flex-1"></div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="https://github.com/locb65" target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub className="text-white" />
            Locb65 |
          </a>
          <a href="https://twitter.com/coding_locker" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter className="text-white" />
            Coding Locker
          </a>
          <a href="https://www.linkedin.com/in/loc-bui-b574ba128/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="text-white" />
            Loc Bui
          </a>
        </div>
      </div>
    </div>
  );
};