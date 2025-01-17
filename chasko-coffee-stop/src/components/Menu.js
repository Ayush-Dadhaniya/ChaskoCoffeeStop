import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { ChevronLeft, ChevronRight } from 'react-feather';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://chasko-coffee-stop-backend.vercel.app/api/menu'); // Replace with your backend API URL
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        setMenuItems(data);  // Set the menu data in state
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenuItems();
  }, []); // The empty array ensures this runs only once when the component mounts

  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
  };

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + menuItems.length) % menuItems.length);
  };

  const displayedItems = [...menuItems.slice(startIndex), ...menuItems.slice(0, startIndex)];

  return (
    <section id="menu" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif italic text-center mb-12 text-amber-900">Our Menu</h2>
        <div className="flex items-center justify-center mb-12">
          <button onClick={prevItems} className="p-2 bg-brown-600 text-white rounded-full mr-4">
            <ChevronLeft size={24} />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedItems.slice(0, 4).map((item, index) => (
              <MenuItem 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image} // Pass the image URL from the backend response
              />
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
