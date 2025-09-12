import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 px-4 flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Transform Your Learning Experience
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            EduConnect brings students and educators together in a collaborative learning environment with cutting-edge tools and resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-600 transition">
              Explore Courses
            </Link>
            <Link to="/signup" className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg shadow border border-gray-200 hover:bg-gray-50 transition">
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen px-4 flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose EduConnect?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-blue-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience in their fields.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-laptop text-green-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Interactive Learning</h3>
              <p className="text-gray-600">Engage with interactive content, quizzes, and collaborative projects.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-certificate text-purple-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certification</h3>
              <p className="text-gray-600">Earn recognized certificates to advance your career and skills.</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  ) 
}

export default Home