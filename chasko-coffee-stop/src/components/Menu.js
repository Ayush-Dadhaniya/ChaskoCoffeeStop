import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { ChevronLeft, ChevronRight } from 'react-feather';

const menuItems = [
  {
    name: "Espresso",
    description: "A shot of pure, intense and roasted coffee flavor",
    price: "₹300",
    image: require('../images/expresso.jpg')
  },
  {
    name: "Cappuccino",
    description: "Espresso with steamed milk and a layer of foam",
    price: "₹250",
    image: require('../images/cappuccino.jpg')
  },
  {
    name: "Latte",
    description: "Espresso with steamed milk and a light layer of foam",
    price: "₹400",
    image: require('../images/latte.jpg')
  },
  {
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: "₹450",
    image: require('../images/mocha.jpg')
  },
  {
    name: "Cold Brew",
    description: "Smooth, cold-steeped coffee served over ice",
    price: "₹375",
    image: require('../images/cold-brew.jpg')
  },
  {
    name: "Croissant",
    description: "Buttery, flaky pastry perfect with coffee",
    price: "₹80",
    image: require('../images/croissants.jpg')
  }
];

export default function Menu() {
  const [startIndex, setStartIndex] = useState(0);

  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
  };

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
  };

  const displayedItems = [...menuItems.slice(startIndex), ...menuItems.slice(0, startIndex)].slice(0, 4);

  return (
    <section id="menu" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif italic text-center mb-12 text-amber-900">Our Menu</h2>
        <div className="flex items-center justify-center mb-12">
          <button onClick={prevItems} className="p-2 bg-brown-600 text-white rounded-full mr-4">
            <ChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedItems.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
          <button onClick={nextItems} className="p-2 bg-brown-600 text-white rounded-full ml-4">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}