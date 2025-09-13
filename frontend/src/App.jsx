import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Announcements from './pages/Announcements';
import Header from './components/Navbar';
import { useAuth } from './context/AuthContext';
import Footer from './components/Footer';
import { Toaster, toast } from 'react-hot-toast'; // <-- Add this

// RequireAuth component to protect routes
const RequireAuth = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace state={{ fromProtected: true }} />;
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
        <Route path="/" element={<Home />} />
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
        {/* Toast */}
        <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}