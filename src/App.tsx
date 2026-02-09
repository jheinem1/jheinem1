import "./App.css";
import {
  HashRouter as Router,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import AcademicProjects from "./pages/AcademicProjects";
import Contact from "./pages/Contact";
import PersonalProjects from "./pages/PersonalProjects";
import PersonalProjectDetail from "./pages/PersonalProjectDetail";
import { navLinks } from "./content";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        className="page-shell"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal-projects" element={<PersonalProjects />} />
          <Route
            path="/personal-projects/:projectId"
            element={<PersonalProjectDetail />}
          />
          <Route path="/academic-projects" element={<AcademicProjects />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function AppFrame() {
  useEffect(() => {
    document.documentElement.setAttribute("data-design", "notebook");
  }, []);

  return (
    <div className="app-root">
      <header className="site-header">
        <div>
          <p className="kicker">James Heinemann</p>
        </div>
        <nav className="site-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `site-nav-link${isActive ? " active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <AnimatedRoutes />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppFrame />
    </Router>
  );
}

export default App;
