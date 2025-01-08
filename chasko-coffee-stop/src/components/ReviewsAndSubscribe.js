import React, { useState, useEffect } from 'react';
import Review from './Review';

const ReviewsAndSubscribe = () => {
  const [reviews, setReviews] = useState([]);
  const [email, setEmail] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/reviews/');
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setReviews(data);
      } else {
        console.error('Failed to fetch reviews');
      }
    };
  
    fetchReviews();
  }, []);

  // Change the current review after a specified interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [reviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = document.cookie.match(/csrftoken=([^;]+)/)?.[1];
    const response = await fetch('http://127.0.0.1:8000/api/subscriptions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      console.log('Subscribed:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    } else {
      console.error('Error subscribing');
    }
  };

  return (
    <section id="reviews-subscribe" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold font-serif text-center italic text-amber-900 mb-12">Customer Reviews</h2>
        
        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-16">
          <div className="flex transition-all duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Review {...review} />
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
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
};

export default ReviewsAndSubscribe;
