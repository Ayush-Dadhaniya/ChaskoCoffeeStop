import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brown-800 to-brown-900 text-white">
      <div className="mt-4 container text-center">
        <h3 className="flex justify-center text-amber-100">
          <Logo />
        </h3>
        <div className="mb-2">
          <p className="text-lg text-amber-50">123 Coffee Street, Brew City, BC 12345</p>
          <p className="text-lg text-amber-50">Phone: (+91) 1234567890</p>
          <p className="text-lg text-amber-50">Email: info@chaskoCoffeeStop.com</p>
        </div>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram w-8 h-8 text-amber-100 hover:text-amber-200"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-youtube w-8 h-8 text-amber-100 hover:text-amber-200"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin w-8 h-8 text-amber-100 hover:text-amber-200"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-amber-100 hover:text-amber-200">
          <i className="fa fa-twitter w-8 h-8 text-amber-100 hover:text-amber-200"></i>
        </a>
        <p className="text-sm text-amber-200 mb-4">&copy; 2023 Chasko Coffee Stop. All rights reserved.</p>
      </div>
    </footer>
  );
}