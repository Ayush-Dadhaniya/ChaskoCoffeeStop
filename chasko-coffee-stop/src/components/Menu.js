import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://chasko-coffee-stop-backend.vercel.app/api/menu');
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchMenuItems();
  }, []);

  // Update items per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4);  // 4 items for large screens (desktops)
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);  // 2 items for tablets
      } else {
        setItemsPerPage(1);  // 1 item for mobile
      }
    };

    // Set initial items per page
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextItems = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % menuItems.length);
  };

  const prevItems = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsPerPage + menuItems.length) % menuItems.length);
  };

  const displayedItems = [...menuItems.slice(startIndex), ...menuItems.slice(0, startIndex)].slice(0, itemsPerPage);

  return (
    <section id="menu" className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif italic text-center mb-12 text-amber-900">Our Menu</h2>
        <div className="flex items-center justify-center mb-12">
          <button onClick={prevItems} className="p-2 bg-amber-600 text-white rounded-full mr-4 hover:bg-amber-700 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedItems.map((item, index) => (
              <MenuItem 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          <button onClick={nextItems} className="p-2 bg-amber-600 text-white rounded-full ml-4 hover:bg-amber-700 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}