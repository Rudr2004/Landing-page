import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import IsItForYouPage from './pages/IsItForYouPage';
import FamilyBalancingPage from './pages/FamilyBalancingPage';
import GeneticConditionsPage from './pages/GeneticConditionsPage';
import PlanningPage from './pages/PlanningPage';
import ResultsPage from './pages/ResultsPage';
import LocationsPage from './pages/LocationsPage';
import StoriesPage from './pages/StoriesPage';
import VerifyPage from './pages/VerifyPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('/');
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState('ALL');

  // Sticky Header Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top when changing pages
  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll Reveal & Intersection Observer logic for modern transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      );

      const targets = document.querySelectorAll('.reveal-on-scroll, .timeline-step-row');
      targets.forEach((target) => observer.observe(target));

      return () => {
        targets.forEach((target) => observer.unobserve(target));
        observer.disconnect();
      };
    }, 120);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div className="app-wrapper">
      {/* Global Floating Background Blobs */}
      <div className="organic-blobs-container">
        <div className="organic-blob blob-1"></div>
        <div className="organic-blob blob-2"></div>
        <div className="organic-blob blob-3"></div>
      </div>

      {/* GLOBAL HEADER */}
      <header className={`global-header ${isHeaderScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a onClick={() => navigateTo('/')} className="logo-text" style={{ cursor: 'pointer' }}>
            MicroSort<span>®</span>
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-menu">
              <li className="nav-item">
                <span className={`nav-link ${currentPage === '/how-it-works' || currentPage === '/family-balancing' || currentPage === '/genetic-conditions' ? 'active' : ''}`}>
                  How It Works <span style={{ fontSize: '0.75rem' }}>▼</span>
                </span>
                <ul className="nav-dropdown">
                  <li><a onClick={() => navigateTo('/how-it-works')} className="dropdown-link">Science & Process</a></li>
                  <li><a onClick={() => navigateTo('/family-balancing')} className="dropdown-link">Family Balancing</a></li>
                  <li><a onClick={() => navigateTo('/genetic-conditions')} className="dropdown-link">Genetic Conditions (X-Linked)</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a onClick={() => navigateTo('/is-it-for-you')} className={`nav-link ${currentPage === '/is-it-for-you' ? 'active' : ''}`}>Is It For You</a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigateTo('/locations')} className={`nav-link ${currentPage === '/locations' ? 'active' : ''}`}>Locations</a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigateTo('/stories')} className={`nav-link ${currentPage === '/stories' ? 'active' : ''}`}>Stories</a>
              </li>
              <li className="nav-item">
                <a onClick={() => navigateTo('/contact')} className={`nav-link ${currentPage === '/contact' ? 'active' : ''}`}>Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+18005550199" className="phone-link">
              <span>📞</span> +1 (800) 555-0199
            </a>
            <a onClick={() => navigateTo('/verify')} className="btn btn-ghost" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
              Verify Your Sort <span className="btn-arrow">→</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="hamburger" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line" style={isMobileMenuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}}></span>
            <span className="hamburger-line" style={isMobileMenuOpen ? { opacity: 0 } : {}}></span>
            <span className="hamburger-line" style={isMobileMenuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}}></span>
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <span className="mobile-nav-link">How It Works</span>
            <ul className="mobile-submenu">
              <li><a onClick={() => navigateTo('/how-it-works')} className="mobile-submenu-link">The Science & Process</a></li>
              <li><a onClick={() => navigateTo('/family-balancing')} className="mobile-submenu-link">Family Balancing</a></li>
              <li><a onClick={() => navigateTo('/genetic-conditions')} className="mobile-submenu-link">Genetic Conditions</a></li>
            </ul>
          </li>
          <li><a onClick={() => navigateTo('/is-it-for-you')} className="mobile-nav-link">Is It For You</a></li>
          <li><a onClick={() => navigateTo('/locations')} className="mobile-nav-link">Locations</a></li>
          <li><a onClick={() => navigateTo('/stories')} className="mobile-nav-link">Stories</a></li>
          <li><a onClick={() => navigateTo('/contact')} className="mobile-nav-link">Contact</a></li>
        </ul>
        <div className="mobile-header-actions">
          <a href="tel:+18005550199" className="phone-link" style={{ justifyContent: 'center', fontSize: '1.1rem' }}>
            <span>📞</span> +1 (800) 555-0199
          </a>
          <a onClick={() => navigateTo('/verify')} className="btn btn-ghost" style={{ width: '100%' }}>
            Verify Your Sort <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>

      {/* MAIN CONTENT ROUTER */}
      <main key={currentPage} className="page-fade-in">
        {currentPage === '/' && <HomePage navigateTo={navigateTo} />}
        {currentPage === '/how-it-works' && <HowItWorksPage navigateTo={navigateTo} />}
        {currentPage === '/is-it-for-you' && <IsItForYouPage navigateTo={navigateTo} />}
        {currentPage === '/family-balancing' && <FamilyBalancingPage navigateTo={navigateTo} />}
        {currentPage === '/genetic-conditions' && <GeneticConditionsPage navigateTo={navigateTo} />}
        {currentPage === '/planning' && <PlanningPage navigateTo={navigateTo} />}
        {currentPage === '/results' && <ResultsPage navigateTo={navigateTo} />}
        {currentPage === '/locations' && <LocationsPage navigateTo={navigateTo} />}
        {currentPage === '/stories' && <StoriesPage navigateTo={navigateTo} />}
        {currentPage === '/verify' && <VerifyPage />}
        {currentPage === '/contact' && <ContactPage navigateTo={navigateTo} />}
        {currentPage === '/faq' && <FaqPage activeCategory={activeFaqCategory} setActiveCategory={setActiveFaqCategory} />}
      </main>

      {/* GLOBAL FOOTER */}
      <footer className="global-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>MicroSort®</h4>
              <p>Advanced clinical sperm-sorting technology licensed to top fertility labs worldwide.</p>
              <div className="footer-socials">
                <a href="#" className="footer-social-icon" aria-label="LinkedIn">LN</a>
                <a href="#" className="footer-social-icon" aria-label="Twitter">TW</a>
                <a href="#" className="footer-social-icon" aria-label="Facebook">FB</a>
              </div>
            </div>
            <div className="footer-col">
              <h5>About Us</h5>
              <ul className="footer-links">
                <li><a onClick={() => navigateTo('/faq')} className="footer-link">FAQ Hub</a></li>
                <li><a onClick={() => navigateTo('/results')} className="footer-link">Clinical Evidence</a></li>
                <li><a onClick={() => navigateTo('/stories')} className="footer-link">Family Journeys</a></li>
                <li><a onClick={() => navigateTo('/locations')} className="footer-link">Our Licenses</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Patient Resources</h5>
              <ul className="footer-links">
                <li><a onClick={() => navigateTo('/how-it-works')} className="footer-link">Sperm sorting science</a></li>
                <li><a onClick={() => navigateTo('/is-it-for-you')} className="footer-link">Eligibility rules</a></li>
                <li><a onClick={() => navigateTo('/planning')} className="footer-link">Planning checklist</a></li>
                <li><a onClick={() => navigateTo('/verify')} className="footer-link">Verify sort purity</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Get in touch</h5>
              <ul className="footer-links">
                <li><a onClick={() => navigateTo('/contact')} className="footer-link">Patient coordinator</a></li>
                <li><a onClick={() => navigateTo('/locations')} className="footer-link">Find nearest center</a></li>
                <li><a href="tel:+18005550199" className="footer-link">Call clinic (+1 800)</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>
              © {new Date().getFullYear()} MicroSort. All rights reserved.
            </div>
            <div>
              <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('/contact'); }} className="footer-partnership-link">
                Are you a fertility clinic? Learn about partnership <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="footer-disclaimer-box">
            <p className="footer-disclaimer">
              MicroSort is a sperm-sorting technology available exclusively at licensed laboratories. 
              MicroSort increases the chance of conceiving a child of the desired sex but does not guarantee a specific clinical outcome. 
              Availability and regulatory requirements vary by country. 
              Please consult a licensed MicroSort laboratory for medical information and guidelines specific to your situation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
