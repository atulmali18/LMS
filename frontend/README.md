# LMS Frontend

A modern Learning Management System (LMS) frontend built with React, Vite, and Tailwind CSS. This application provides a comprehensive platform for managing courses, announcements, and user authentication.

## 🚀 Features

- **User Authentication**: Secure login and signup functionality
- **Protected Routes**: Route protection for authenticated users
- **Course Management**: Browse and access course materials
- **Announcements**: View important announcements
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean and intuitive user interface
- **Toast Notifications**: User feedback with react-hot-toast

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM 7.8.2
- **Icons**: React Icons 5.5.0
- **Notifications**: React Hot Toast 2.6.0
- **Package Manager**: Bun

## 📁 Project Structure

```
frontend/
├── public/
│   ├── images/           # Static images
│   └── vite.svg         # Vite logo
├── src/
│   ├── assets/
│   │   ├── images/      # Application images and course thumbnails
│   │   └── react.svg    # React logo
│   ├── components/
│   │   ├── Footer.jsx   # Footer component
│   │   ├── Header.jsx   # Header component
│   │   ├── Navbar.jsx   # Navigation component
│   │   └── ProtectedRoute.jsx # Route protection component
│   ├── context/
│   │   └── AuthContext.jsx # Authentication context
│   ├── pages/
│   │   ├── Announcements.jsx # Announcements page
│   │   ├── Courses.jsx      # Courses page
│   │   ├── Home.jsx         # Home page
│   │   ├── Login.jsx        # Login page
│   │   └── Signup.jsx       # Signup page
│   ├── App.css          # App styles
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Application entry point
├── .gitignore           # Git ignore file
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── README.md           # This file
└── vite.config.js      # Vite configuration
```

## 🚦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Modern web browser

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd LMS/frontend
   ```
2. **Install dependencies**

   ```bash
   bun install
   # or if using npm
   npm install
   ```
3. **Start the development server**

   ```bash
   bun dev
   # or if using npm
   npm run dev
   ```
4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📜 Available Scripts

- `bun dev` - Start the development server
- `bun build` - Build the application for production
- `bun preview` - Preview the production build locally
- `bun lint` - Run ESLint to check for code quality issues

## 🔐 Authentication

The application includes a complete authentication system:

- **Signup**: Users can create new accounts with email and password
- **Login**: Secure login with email and password validation
- **Protected Routes**: Certain pages require authentication
- **Session Management**: User sessions are maintained using localStorage

### Authentication Flow

1. Users can access the home page without authentication
2. Courses and announcements require login
3. Unauthenticated users are redirected to the login page
4. User data is stored in localStorage for session persistence

## 🎨 Styling

The application uses Tailwind CSS for styling with the following features:

- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI components
- **Modern UI**: Clean and professional design
- **Dark/Light Mode**: Ready for theme switching (can be extended)

## 🔧 Configuration

### Vite Configuration

The project uses Vite with the following plugins:

- React plugin for JSX support
- Tailwind CSS plugin for styling

### ESLint Configuration

ESLint is configured with:

- JavaScript recommended rules
- React Hooks rules
- React Refresh for development
- Custom rules for unused variables

## 📱 Pages and Components

### Pages

- **Home**: Landing page with course overview
- **Login**: User authentication page
- **Signup**: User registration page
- **Courses**: Protected page showing available courses
- **Announcements**: Protected page for important updates

### Components

- **Navbar**: Main navigation with authentication status
- **Header**: Page header with branding
- **Footer**: Site footer with links and information
- **ProtectedRoute**: Higher-order component for route protection

## 🗃️ Data Management

Currently, the application uses localStorage for data persistence:

- **Users**: Stored in localStorage under 'users' key
- **Current User**: Stored in localStorage under 'user' key
- **Supabase**: Configured but not actively used (ready for backend integration)

## 🚀 Deployment

### Building for Production

```bash
bun build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

The application can be deployed to various platforms:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, atulmali102@gmail.com or create an issue in the repository.

---

**Happy Learning! 🎓**
