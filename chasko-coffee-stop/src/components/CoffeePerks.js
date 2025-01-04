import React from 'react';

export default function CoffeePerks() {
  return (
    <section id="coffee-perks" className="min-h-screen flex items-center bg-brown-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif italic text-amber-900 text-center mb-12">Coffee Perks</h2>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src={require('../images/coffee-benefits.jpg')} alt="Coffee Benefits" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full text-xl font-serif md:w-1/2 md:pl-12">
            <ul className="space-y-6">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                <span><b>Improved Energy:</b> Kickstart your day with a natural boost</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                <span><b>Rich in Antioxidants:</b> Protect your body from harmful free radicals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                <span><b>Stress Relief: </b>Enjoy a moment of calm in your busy day</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                <span><b>Enhanced Focus:</b> Improve concentration and productivity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}