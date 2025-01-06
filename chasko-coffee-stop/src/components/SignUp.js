import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Here you would typically handle the sign-up logic
    console.log('Sign Up:', { email, password });
    // Simulate a successful sign-up
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Sign up successful!');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-center text-brown-800">Join Us</h2>
          <p className="text-brown-600 mt-2">Create your account</p>
        </div>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brown-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-amber-900 border shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-brown-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-amber-900 border shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-brown-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-amber-900 border shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brown-600 text-white py-2 px-4 rounded-md hover:bg-brown-700 transition-colors duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}