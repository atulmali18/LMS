import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  return (
     <nav className="bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex ">
        
        <span className="text-2xl font-extrabold text-gray-800 underline decoration-red-500 underline-offset-4 ">
          <span className="text-red-500 text-3xl font-extrabold ">S</span>
          <span className="">peedUp</span> <span >Infotech</span>
        </span>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-red-500 transition">Home</Link>
        <Link to="/courses" className="hover:text-red-500 transition">Courses</Link>
        <Link to="/announcements" className="hover:text-red-500 transition">Announcements</Link>
      </div>

      {/* Auth Buttons or User Profile */}
      <div className="flex items-center">
        {currentUser ? (
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                {currentUser?.name
                  ? currentUser.name[0].toUpperCase()
                  : currentUser?.firstName
                      ? currentUser.firstName[0].toUpperCase()
                      : currentUser?.email
                        ? currentUser.email[0].toUpperCase()
                        : 'U'}
              </div>
              <span className="text-gray-800 font-medium">
                Welcome, {currentUser.name || currentUser.firstName || "User"}
              </span>
            </div>
            <button 
              onClick={logout}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-600 transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/signup" className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition">
              Sign Up
            </Link>
            <Link to="/login" className="ml-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-600 transition">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar