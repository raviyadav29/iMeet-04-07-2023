import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">My Website</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">ContactPage</Link>
            </li>
            <li className="nav-item">
              <Link to="/skills" className="nav-link">Skills</Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/skills" component={SkillsPage} />
          </Switch>
        </div>
        <footer className="mt-4 text-center">
          <p>© 2023 My Website. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
