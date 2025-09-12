// src/App.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Announcements from './pages/Announcements';
import Header from './components/Navbar';
import { useAuth } from './context/AuthContext';
import Footer from './components/Footer';

// RequireAuth component to protect routes
const RequireAuth = ({ children }) => {
  const { currentUser, loading } = useAuth();
  console.log('RequireAuth - Checking authentication...', { currentUser }); // Debug log

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    console.log('RequireAuth - No user found, redirecting to login...'); // Debug log
    return <Navigate to="/login" />;
  }

  return children;
};

export default function App() {
  return (
    <>
    <Header />
    <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
      <Route path="/" element={
    
          <Home />
        
      } />
      <Route path="/courses" element={
        <RequireAuth>
          <Courses />
        </RequireAuth>
      } />
      <Route path="/announcements" element={
        <RequireAuth>
          <Announcements />
        </RequireAuth>
      } />
    </Routes>
    <Footer />
    </>
  );
}