

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "student",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signup Form Data:', formData); // Debug form data

    try {
      console.log('Attempting to signup...'); // Debug signup attempt
      const result = await signup(formData);
      console.log('Signup Result:', result); // Debug signup result

      if (result.success) {
        console.log('Signup successful, redirecting to login...'); // Debug successful flow
        navigate("/login");
      }
    } catch (err) {
      console.error('Signup Error:', err); // Debug errors in detail
      alert(err.error || "Signup failed");
    }
  };

  return (
    <div className="inset-0bg-opacity-50 flex items-center justify-center  py-8">
      <div className="bg-white rounded-xl shadow-2xl ">
     

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
          
         
          
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Create Account
          </button>
          
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-red-500 font-semibold hover:text-red-600"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;