import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  // simple states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);

      if (result.success) {
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="inset-0 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-center">
            Sign in to continue your learning journey
          </p>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center">
            <a
              href="#forgot"
              className="text-sm text-red-500 hover:text-red-600"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition shadow-md"
          >
            Sign In
          </button>

          {/* Signup link */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="text-red-500 font-semibold hover:text-red-600"
              >
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
