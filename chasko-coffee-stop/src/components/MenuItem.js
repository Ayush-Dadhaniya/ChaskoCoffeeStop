import React from 'react';

export function MenuItem({ name, description, price, image }) {
  return (
    <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:scale-105">
      <div className="relative h-0 pb-[66.67%]">
        <img src={image} alt={name} className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-brown-800">{name}</h3>
        <p className="text-sm text-brown-600 mb-2">{description}</p>
        <p className="text-brown-700 font-bold">{price}</p>
      </div>
    </div>
  );
}

export default MenuItem;