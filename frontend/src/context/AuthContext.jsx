import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setCurrentUser(JSON.parse(userData));
      } catch (err) {
        console.error('Error parsing user data:', err);
        setCurrentUser(null);
      }
    }
    setLoading(false);
  }, []);

  const signup = async (userData) => {
    console.log('Starting signup process...', { email: userData.email }); // Debug signup start
    try {
      // Get existing users or initialize empty array
      const usersData = localStorage.getItem('users');
      console.log('Existing users data:', usersData ? 'Found' : 'Not found'); // Debug existing users
      let users = usersData ? JSON.parse(usersData) : [];

      // Check if email already exists
      if (users.some(user => user.email === userData.email)) {
        console.log('Email already exists:', userData.email); // Debug email conflict
        throw new Error('Email already registered');
      }

      // Create new user object
      const newUser = {
        id: Date.now(),
        ...userData,
        createdAt: new Date().toISOString()
      };
      console.log('Created new user object:', { ...newUser, password: '****' }); // Debug new user (password masked)

      // Add to users array
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Successfully saved new user to localStorage'); // Debug successful save

      return { success: true };
    } catch (error) {
      console.error('Signup error:', error.message); // Debug error
      return { success: false, error: error.message };
    }
  };

  const login = async (email, password) => {
    console.log('Starting login process...', { email }); // Debug login start
    try {
      const usersData = localStorage.getItem('users');
      console.log('Users data from localStorage:', usersData ? 'Found' : 'Not found'); // Debug users data

      if (!usersData) {
        console.log('No users found in localStorage'); // Debug no users case
        throw new Error('No users found');
      }

      const users = JSON.parse(usersData);
      console.log('Number of registered users:', users.length); // Debug user count

      const user = users.find(u => u.email === email && u.password === password);
      console.log('User found:', user ? 'Yes' : 'No'); // Debug user found status

      if (!user) {
        throw new Error('Invalid email or password');
      }

      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Login successful, user data saved to localStorage'); // Debug successful login

      return { success: true };
    } catch (error) {
      console.error('Login error:', error.message); // Debug error
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    signup,
    login,
    logout,
    isAuthenticated: () => !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
