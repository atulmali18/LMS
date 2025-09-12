import React, { useState } from "react";

// Login Component
const Login = ({ onToggleForm, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted:", formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-semibold text-gray-800">EduConnect</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Welcome Back</h2>
          <p className="text-gray-600 text-center">Sign in to continue your learning journey</p>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-red-500 focus:ring-red-300 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            
            <a href="#forgot" className="text-sm text-red-500 hover:text-red-600">Forgot password?</a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Sign In
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onToggleForm}
                className="text-red-500 font-semibold hover:text-red-600"
              >
                Sign up now
              </button>
            </p>
          </div>
        </form>
        
        {/* Social Login */}
        <div className="px-6 pb-6">
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-sm">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </button>
            
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sign Up Component
const SignUp = ({ onToggleForm, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "student",
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log("Sign up submitted:", formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-xl font-semibold text-gray-800">EduConnect</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Create Account</h2>
          <p className="text-gray-600 text-center">Join thousands of learners today</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                placeholder="John"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">I am a</label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>
          
          <label className="flex items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 text-red-500 focus:ring-red-300 border-gray-300 rounded mt-1"
              required
            />
            <span className="ml-2 text-sm text-gray-700">
              I agree to the <a href="#terms" className="text-red-500 hover:text-red-600">Terms of Service</a> and <a href="#privacy" className="text-red-500 hover:text-red-600">Privacy Policy</a>
            </span>
          </label>
          
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Create Account
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onToggleForm}
                className="text-red-500 font-semibold hover:text-red-600"
              >
                Sign in
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

// Auth Modal Manager Component
const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = (login = true) => {
    setIsLogin(login);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {/* This would be in your Navbar component */}
      <button 
        onClick={() => openModal(true)}
        className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
      >
        Sign Up
      </button>

      {/* Render the appropriate modal */}
      {isOpen && (
        isLogin ? 
          <Login onToggleForm={toggleForm} onClose={closeModal} /> : 
          <SignUp onToggleForm={toggleForm} onClose={closeModal} />
      )}
    </>
  );
};

export default AuthModal;
export { Login, SignUp };