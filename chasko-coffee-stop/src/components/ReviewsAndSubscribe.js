import React, { useState } from 'react';

const reviews = [
  {
    name: "Sahil Patel",
    content: "The best coffee I've ever had! The atmosphere is cozy and the staff is incredibly friendly.",
    rating: 5
  },
  {
    name: "Vraj Bhanderi",
    content: "Great selection of coffee and pastries. My go-to spot for morning meetings.",
    rating: 4
  },
  {
    name: "Ayush Dadhaniya",
    content: "Love their seasonal specials. The pumpkin spice latte is to die for!",
    rating: 5
  }
];

export default function ReviewsAndSubscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_URL = 'http://127.0.0.1:8000/subscribe/';
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section id="reviews-subscribe" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif text-center italic text-amber-900 mb-12">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-brown-800">{review.name}</h3>
              <p className="text-brown-600 mt-2">{review.content}</p>
              <p className="text-brown-600 mt-2">Rating: {review.rating} stars</p>
            </div>
          ))}
        </div>
        <div className="bg-brown-100 rounded-lg p-8">
          <h3 className="text-3xl text-amber-900 font-bold text-center italic mb-6">Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex align-center justify-center">
              <input
                type="email"
                value={email}
                name="subscribe"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 max-w-[400px] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brown-600"
              />
              <button
                type="submit"
                className="bg-brown-600 text-white px-6 py-2 rounded-r-lg hover:bg-brown-700 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
