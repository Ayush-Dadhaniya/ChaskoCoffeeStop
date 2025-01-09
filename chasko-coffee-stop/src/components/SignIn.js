import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Here you would typically handle the sign-in logic with your backend
    console.log('Sign In:', { email, password });
    // Simulate a successful sign-in
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Sign in successful!');
    login({ email }); // Log the user in after successful sign-in
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold text-center text-brown-800">Welcome Back</h2>
          <p className="text-brown-600 mt-2">Sign in to your account</p>
        </div>
        <form onSubmit={handleSignIn} className="space-y-6">
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
              className="mt-1 block w-full border rounded-md border-amber-900 shadow-sm focus:border-brown-500 focus:ring focus:ring-brown-500 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brown-600 text-white py-2 px-4 rounded-md hover:bg-brown-700 transition-colors duration-300 font-semibold"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-brown-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-brown-800 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

