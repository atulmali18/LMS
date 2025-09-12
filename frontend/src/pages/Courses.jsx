import React, { useState } from "react";

const Courses = () => {
  // State for courses
  const [courses] = useState([
    {
      id: 1,
      title: "Python Development",
      description:
        "Learn Python, OOP, APIs, and frameworks like Django and Flask for backend development.",
      price: "$89.99",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      id: 2,
      title: "MERN Stack",
      description:
        "Master MongoDB, Express.js, React, and Node.js to build full-stack web applications.",
      price: "$99.99",
      gradient: "from-green-400 to-blue-500",
    },
    {
      id: 3,
      title: "Data Analytics",
      description:
        "Work with Python, Pandas, and visualization tools to analyze and present data insights.",
      price: "$79.99",
      gradient: "from-yellow-400 to-red-500",
    },
  ]);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Popular Courses
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover our most popular courses across various disciplines and skill
          levels.
        </p>

        {/* Courses grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-r ${course.gradient}`}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-500 font-semibold">
                    {course.price}
                  </span>
                  <button className="text-blue-500 font-semibold hover:text-blue-700">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <button className="bg-white text-gray-800 font-semibold py-3 px-8 rounded-lg shadow border border-gray-200 hover:bg-gray-50 transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
