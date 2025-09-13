import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-8 shadow-md mt-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
             
               <div className="flex ">
        <span className="text-red-500 text-3xl font-extrabold">S</span>
        <span className="text-2xl font-extrabold text-gray-800 underline decoration-red-500 underline-offset-4">
          <span className="">peedUp</span> <span >Infotech</span>
        </span>
      </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering students and educators with innovative learning solutions. 
              Join our community to transform education together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#courses" className="text-gray-600 hover:text-gray-900">Courses</a></li>
              <li><a href="#support" className="text-gray-600 hover:text-gray-900">Support</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>123 Education St, Learning City</span>
              </li>
              <li className="text-gray-600 flex items-start">
                <i className="fas fa-phone-alt mr-2 mt-1"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-gray-600 flex items-start">
                <i className="fas fa-envelope mr-2 mt-1"></i>
                <span>info@educonnect.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} EduConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;