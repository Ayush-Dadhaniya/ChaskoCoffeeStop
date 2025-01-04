import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import CoffeePerks from './components/CoffeePerks';
import ReviewsAndSubscribe from './components/ReviewsAndSubscribe';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <CoffeePerks />
              <Menu />
              <ReviewsAndSubscribe />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;