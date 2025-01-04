import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif italic text-amber-900 text-center mb-12">About Chasko Coffee Stop</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Our Story</h3>
            <p className="mb-4 font-serif">Chasko Coffee Stop was founded in 2023 with a simple mission: to serve the perfect cup of coffee. Our journey began with a small kiosk and a big dream, and today we're proud to be a cornerstone of the local community.</p>
            <p className="font-serif">We source our beans directly from sustainable farms around the world, ensuring that every cup not only tastes amazing but also supports ethical farming practices.</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Values</h3>
            <ul className="space-y-4 font-serif">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Quality: We never compromise on the quality of our coffee</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Sustainability: We're committed to environmentally friendly practices</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Community: We believe in fostering connections over a great cup of coffee</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brown-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Innovation: We're always exploring new ways to enhance your coffee experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}