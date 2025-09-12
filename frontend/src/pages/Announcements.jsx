import React, { useState } from "react";

const Announcements = () => {
 const [announcements, setAnnouncements] = useState([
  {
    id: 1,
    title: "New Python Developer Bootcamp",
    content:
      "Enroll in our Python Developer Bootcamp starting this month. Cover Python basics, OOP, APIs, and frameworks like Django and Flask. Perfect for building backend expertise.",
    date: "2025-09-20",
    category: "courses",
    important: true,
  },
  {
    id: 2,
    title: "MERN Stack Project Showcase",
    content:
      "Join us next week for the MERN Stack Showcase where students will present their full-stack applications built using MongoDB, Express.js, React, and Node.js.",
    date: "2025-09-18",
    category: "events",
    important: true,
  },
  {
    id: 3,
    title: "Data Analytics Workshop",
    content:
      "Don’t miss our hands-on workshop on Data Analytics with Python and Pandas. Learn data cleaning, visualization, and basic machine learning workflows.",
    date: "2025-09-25",
    category: "workshops",
    important: false,
  },
]);


  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Announcements</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest news, course updates, and important information from EduConnect.
        </p>
      </div>



      {/* Announcements List */}
      <div className="space-y-6">
        {announcements.map(announcement => (
            <div 
              key={announcement.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${announcement.important ? 'border-red-500' : 'border-purple-500'}`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-xl font-semibold text-gray-800">{announcement.title}</h2>
                  {announcement.important && (
                    <span className="bg-red-100 text-red-700 text-xs font-medium px-2.5 py-0.5 rounded">
                      Important
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{announcement.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(announcement.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className="capitalize">{announcement.category}</span>
                </div>
              </div>
            </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-10">
        <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow border border-gray-200 hover:bg-gray-50 transition">
          Load More Announcements
        </button>
      </div>
    </div>
  );
};

export default Announcements;