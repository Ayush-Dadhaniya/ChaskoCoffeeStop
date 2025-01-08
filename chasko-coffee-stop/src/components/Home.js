import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="bg-no-repeat mt-8 bg-auto bg-center h-screen relative flex items-center justify-center"
      style={{ backgroundImage: `url(${require('../images/coffee-shop-bg.png')})` }}
    >
      <div className="text-amber-100 mb-12 px-4">
        <h1 className="text-6xl text-center font-bold font-serif italic mb-4">Brewed to Perfection, Just for You</h1>
        <p className="text-xl text-stone-400 text-left font-serif">Experience the rich flavors of our handcrafted coffee</p>
      </div>
    </section>
  );
}
