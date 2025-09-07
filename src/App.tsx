import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Footer from "./components/Footer";
import './App.css';

function App() {
  // simple auth state (in real app, you might use context or redux)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="logo">
            <a href="https://sjapathway.com" target="_blank" rel="noopener noreferrer">
              SJA Pathway
            </a>
          </div>
          <div className="navlinks">
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/jobs">Jobs</Link>}
            {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
            {!isLoggedIn && <Link to="/login">Login</Link>}
            {!isLoggedIn && <Link to="/register">Register</Link>}
            {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={<Login setIsLoggedIn={setIsLoggedIn} />} 
            />
            <Route 
              path="/register" 
              element={<Register setIsLoggedIn={setIsLoggedIn} />} 
            />
            
            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/jobs" 
              element={isLoggedIn ? <Jobs /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;