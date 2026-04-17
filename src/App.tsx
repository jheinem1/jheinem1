import "./App.css";
import {
  HashRouter as Router,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import AcademicProjects from "./pages/AcademicProjects";
import Contact from "./pages/Contact";
import PersonalProjects from "./pages/PersonalProjects";
import PersonalProjectDetail from "./pages/PersonalProjectDetail";
import { navLinks } from "./content";
import FunnyBirthdateSelector, {
  DEFAULT_BIRTHDATE,
  formatBirthdate,
  type BirthdateValue,
} from "./components/FunnyBirthdateSelector";
import LavaLampBackground from "./components/LavaLampBackground";

const BIRTHDATE_STORAGE_KEY = "selected-birthdate";

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
  const [birthdate, setBirthdate] = useState<BirthdateValue>(DEFAULT_BIRTHDATE);
  const [isBirthdateModalOpen, setIsBirthdateModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-design", "notebook");
  }, []);

  useEffect(() => {
    const storedBirthdate = window.localStorage.getItem(BIRTHDATE_STORAGE_KEY);

    if (!storedBirthdate) {
      setIsBirthdateModalOpen(true);
      return;
    }

    try {
      const parsedBirthdate = JSON.parse(storedBirthdate) as BirthdateValue;
      setBirthdate({
        day: parsedBirthdate.day ?? DEFAULT_BIRTHDATE.day,
        year: parsedBirthdate.year ?? DEFAULT_BIRTHDATE.year,
        selectedParts:
          parsedBirthdate.selectedParts ?? DEFAULT_BIRTHDATE.selectedParts,
      });
    } catch {
      setIsBirthdateModalOpen(true);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(BIRTHDATE_STORAGE_KEY, JSON.stringify(birthdate));
  }, [birthdate]);

  return (
    <div className="app-root">
      <LavaLampBackground />
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
      <AnimatePresence>
        {isBirthdateModalOpen ? (
          <motion.div
            className="birthdate-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              className="birthdate-modal panel"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="birthdate-modal-title"
            >
              <div className="birthdate-modal-header">
                <h2 id="birthdate-modal-title">Select your Birth Day</h2>
              </div>
              <FunnyBirthdateSelector
                value={birthdate}
                onChange={setBirthdate}
              />
              <button
                type="button"
                className="birthdate-continue-button"
                onClick={() => setIsBirthdateModalOpen(false)}
              >
                Continue
              </button>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        type="button"
        className="birthdate-chip-trigger"
        onClick={() => setIsBirthdateModalOpen(true)}
      >
        {formatBirthdate(birthdate)}
      </button>
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
