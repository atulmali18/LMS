import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaLaptop, FaCertificate } from "react-icons/fa"; // React Icons
import bg from "../assets/images/bg.jpg";
import featureBackground from "../assets/images/bg2.jpg";

const Home = () => {
  // Feature Cards Data
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience in their fields.",
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Interactive Learning",
      description:
        "Engage with interactive content, quizzes, and collaborative projects.",
      icon: <FaLaptop className="text-green-500 text-2xl" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Certification",
      description:
        "Earn recognized certificates to advance your career and skills.",
      icon: <FaCertificate className="text-purple-500 text-2xl" />,
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen relative px-4 flex items-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Your Learning Experience
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            EduConnect brings students and educators together in a collaborative
            learning environment with cutting-edge tools and resources.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/courses"
              className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-600 transition"
            >
              Explore Courses
            </Link>
            <Link
              to="/signup"
              className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg shadow border border-gray-200 hover:bg-gray-50 transition"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen relative px-4 flex items-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${featureBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white opacity-90"></div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose EduConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
