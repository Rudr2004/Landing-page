import React, { useState, useEffect } from 'react';

// Verification mock database
const MOCK_VERIFICATION_DATABASE = {
  'SORT-2026-X': {
    date: 'January 14, 2026',
    target: 'X-bearing (Female enrichment)',
    accuracy: '93% purity of X-bearing sperm in final sample',
    lab: 'MicroSort Mexico (Puerto Vallarta)',
    physician: 'Dr. Sofia Romero',
    method: 'Flow Cytometry (staining & sorting)',
    status: 'Verified'
  },
  'SORT-2026-Y': {
    date: 'March 22, 2026',
    target: 'Y-bearing (Male enrichment)',
    accuracy: '82% purity of Y-bearing sperm in final sample',
    lab: 'MicroSort Switzerland (Basel)',
    physician: 'Dr. Hans Meier',
    method: 'Flow Cytometry (staining & sorting)',
    status: 'Verified'
  },
  'SORT-2026-CYP': {
    date: 'April 08, 2026',
    target: 'X-bearing (Female enrichment)',
    accuracy: '93% purity of X-bearing sperm in final sample',
    lab: 'MicroSort North Cyprus (Nicosia)',
    physician: 'Dr. Andreas Georgiou',
    method: 'Flow Cytometry (staining & sorting)',
    status: 'Verified'
  }
};

// 8 Licensed MicroSort Laboratories
const LOCATIONS_DATA = [
  {
    id: 'mexico',
    name: 'MicroSort Mexico',
    city: 'Puerto Vallarta',
    country: 'Mexico',
    coords: { x: 180, y: 240 },
    procedures: ['IUI', 'IVF', 'IVF + PGT'],
    languages: ['Spanish', 'English'],
    phone: '+52 322 226 2200',
    email: 'pv@microsort.com',
    hours: 'Mon - Fri, 8:00 AM - 5:00 PM',
    photoLabel: '📷 Modern coastal laboratory, warm wood finishes'
  },
  {
    id: 'cyprus',
    name: 'MicroSort North Cyprus',
    city: 'Nicosia',
    country: 'North Cyprus',
    coords: { x: 540, y: 190 },
    procedures: ['IVF', 'IVF + PGT'],
    languages: ['Turkish', 'English', 'Russian'],
    phone: '+90 392 224 5500',
    email: 'cyprus@microsort.com',
    hours: 'Mon - Sat, 8:00 AM - 6:00 PM',
    photoLabel: '📷 Bright medical facility with mountain views'
  },
  {
    id: 'japan',
    name: 'MicroSort Japan Liaison',
    city: 'Tokyo',
    country: 'Japan',
    coords: { x: 860, y: 180 },
    procedures: ['IVF Shipment Coordination'],
    languages: ['Japanese', 'English'],
    phone: '+81 3 5400 1100',
    email: 'tokyo@microsort.com',
    hours: 'Mon - Fri, 9:00 AM - 6:00 PM',
    photoLabel: '📷 Sleek corporate consultation office, minimalist design'
  },
  {
    id: 'malaysia',
    name: 'MicroSort Malaysia Office',
    city: 'Petaling Jaya',
    country: 'Malaysia',
    coords: { x: 780, y: 310 },
    procedures: ['IVF', 'IVF + PGT'],
    languages: ['Malay', 'English', 'Mandarin'],
    phone: '+60 3 7950 4400',
    email: 'malaysia@microsort.com',
    hours: 'Mon - Fri, 8:30 AM - 5:30 PM',
    photoLabel: '📷 State-of-the-art cleanroom laboratory, high-tech sensors'
  },
  {
    id: 'cambodia',
    name: 'MicroSort Cambodia Clinic',
    city: 'Phnom Penh',
    country: 'Cambodia',
    coords: { x: 795, y: 295 },
    procedures: ['IVF', 'IVF + PGT'],
    languages: ['Khmer', 'English', 'Chinese'],
    phone: '+855 23 990 800',
    email: 'cambodia@microsort.com',
    hours: 'Mon - Sat, 8:00 AM - 5:00 PM',
    photoLabel: '📷 Modern multi-story clinic, spacious reception area'
  },
  {
    id: 'thailand',
    name: 'MicroSort Thailand Liaison',
    city: 'Bangkok',
    country: 'Thailand',
    coords: { x: 785, y: 285 },
    procedures: ['IVF', 'IVF + PGT'],
    languages: ['Thai', 'English'],
    phone: '+66 2 250 8800',
    email: 'bangkok@microsort.com',
    hours: 'Mon - Fri, 9:00 AM - 5:00 PM',
    photoLabel: '📷 High-end medical suite in downtown Bangkok'
  },
  {
    id: 'nigeria',
    name: 'MicroSort Nigeria Clinic',
    city: 'Lagos',
    country: 'Nigeria',
    coords: { x: 480, y: 300 },
    procedures: ['IUI', 'IVF', 'IVF + PGT'],
    languages: ['English', 'Yoruba', 'Igbo'],
    phone: '+234 1 460 3300',
    email: 'nigeria@microsort.com',
    hours: 'Mon - Fri, 8:00 AM - 5:00 PM',
    photoLabel: '📷 Professional medical laboratory complex'
  },
  {
    id: 'switzerland',
    name: 'MicroSort Switzerland',
    city: 'Basel',
    country: 'Switzerland',
    coords: { x: 480, y: 160 },
    procedures: ['IVF', 'IVF + PGT'],
    languages: ['German', 'French', 'English'],
    phone: '+41 61 270 9900',
    email: 'basel@microsort.com',
    hours: 'Mon - Fri, 8:00 AM - 4:30 PM',
    photoLabel: '📷 Modern European clinic with clean, sterile finishes'
  }
];

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

  return (
    <div className="app-wrapper">
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
              Verify Your Sort →
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
            Verify Your Sort →
          </a>
        </div>
      </div>

      {/* MAIN CONTENT ROUTER */}
      <main>
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
        {currentPage === '/contact' && <ContactPage />}
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
                Are you a fertility clinic? Learn about partnership →
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

// -------------------------------------------------------------
// PAGE 1: HOME PAGE
// -------------------------------------------------------------
function HomePage({ navigateTo }) {
  return (
    <>
      {/* Section 1 - Hero */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="section-eyebrow">The science of family planning</span>
            <h1 className="hero-title">Increase the chances of having the daughter — or son — you've been hoping for.</h1>
            <p className="hero-subhead">
              MicroSort® is a sperm-sorting technology used by licensed fertility laboratories around the world. 
              It's how thousands of families have improved their odds of conceiving a child of their preferred sex — 
              for family balancing or to reduce the risk of sex-linked genetic conditions.
            </p>
            <div className="hero-ctas">
              <button onClick={() => navigateTo('/is-it-for-you')} className="btn btn-primary">
                See if MicroSort is right for you →
              </button>
              <a onClick={() => navigateTo('/how-it-works')} className="btn-text-link" style={{ cursor: 'pointer' }}>
                How the science works
              </a>
            </div>
          </div>
          <div className="image-placeholder hero-placeholder">
            <div className="image-placeholder-label">
              <span>📷</span>
              <strong>Soft natural-light photograph:</strong>
              <p style={{ fontSize: '0.875rem', margin: '0.25rem 0 0 0', opacity: 0.8 }}>
                Intended parent holding a child's hand gently, warm tones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-tile">
            <div className="trust-num">30+</div>
            <div className="trust-label">Years of clinical research and development</div>
          </div>
          <div className="trust-tile">
            <div className="trust-num">10,000+</div>
            <div className="trust-label">Families worldwide assisted by sperm sorting</div>
          </div>
          <div className="trust-tile">
            <div className="trust-num">8</div>
            <div className="trust-label">Licensed processing centers globally</div>
          </div>
        </div>
      </section>

      {/* Section 3 - Two Paths */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span className="section-eyebrow">Reproductive choices</span>
            <h2>Two reasons families choose MicroSort</h2>
          </div>
          <div className="two-paths-grid">
            <div className="card path-card cream">
              <div className="image-placeholder path-card-image">
                <span className="image-placeholder-label" style={{ fontSize: '0.8125rem' }}>
                  <span>📷</span> Warm focus photo: toys in a basket or parent with children
                </span>
              </div>
              <h3>Bring more gender variety to your family.</h3>
              <p>
                If you already have a child or children of one sex, MicroSort can help shift the odds for your next pregnancy. 
                Many families use MicroSort to balance the gender mix of their growing family.
              </p>
              <button onClick={() => navigateTo('/family-balancing')} className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                Learn about family balancing →
              </button>
            </div>

            <div className="card path-card mist">
              <div className="image-placeholder path-card-image">
                <span className="image-placeholder-label" style={{ fontSize: '0.8125rem' }}>
                  <span>📷</span> Scientific clinical photo: consultation with DNA karyotype chart
                </span>
              </div>
              <h3>Reduce the risk of passing on an X-linked disorder.</h3>
              <p>
                For couples who are known carriers of X-linked or X-limited genetic conditions, 
                choosing the unaffected sex of the baby is one of the most reliable ways to reduce inheritance risk. 
                MicroSort makes this choice possible before conception.
              </p>
              <button onClick={() => navigateTo('/genetic-conditions')} className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                Learn about genetic prevention →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - How It Works Preview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-offwhite)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <span className="section-eyebrow">The methodology</span>
            <h2>How MicroSort works, in plain language</h2>
            <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>
              MicroSort separates sperm based on a measurable difference in DNA content between X-bearing (female-producing) 
              and Y-bearing (male-producing) sperm. The result is an enriched sample that is then used in IUI or IVF.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-num">01</div>
              <h4>Initial Consultation</h4>
              <p style={{ fontSize: '0.9375rem' }}>
                You speak with one of our licensed MicroSort laboratories to confirm eligibility, 
                review testing files, and plan your clinical timing.
              </p>
            </div>
            <div className="process-step">
              <div className="process-num">02</div>
              <h4>Sample Sorting</h4>
              <p style={{ fontSize: '0.9375rem' }}>
                A semen sample is washed, stained with a safe DNA-binding marker, 
                and analyzed cell-by-cell inside a high-speed cytometer to isolate chosen sperm.
              </p>
            </div>
            <div className="process-step">
              <div className="process-num">03</div>
              <h4>Assisted Reproduction</h4>
              <p style={{ fontSize: '0.9375rem' }}>
                The enriched sample is delivered directly to your physician for use in your IUI or IVF/ICSI 
                procedure on the scheduled day.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button onClick={() => navigateTo('/how-it-works')} className="btn btn-secondary">
              See the full process →
            </button>
          </div>
        </div>
      </section>

      {/* Section 5 - Results Band */}
      <section className="section-padding results-band">
        <div className="container">
          <span className="section-eyebrow" style={{ color: '#D3E4F0' }}>Documented performance</span>
          <h2>A technology backed by published research</h2>
          <div className="results-display-row">
            <div className="results-display-item">
              <span className="results-display-num">~93%</span>
              <span className="results-display-label">Average purity for female sorts*</span>
            </div>
            <div className="results-display-item">
              <span className="results-display-num">~82%</span>
              <span className="results-display-label">Average purity for male sorts*</span>
            </div>
          </div>
          <p>
            MicroSort's sorting methodology has been the subject of peer-reviewed clinical publications and 
            decades of laboratory refinement. Reported accuracy rates reflect average enrichment purities measured by flow cytometry. 
            Individual sample characteristics can affect final clinical results.
          </p>
          <button onClick={() => navigateTo('/results')} className="btn btn-ghost" style={{ color: 'white', borderColor: 'white' }}>
            See the published evidence →
          </button>
          <span className="results-footnote">
            *Percentage figures reflect average target chromosome enrichment in sorted specimens measured via fluorescent analysis. 
            MicroSort increases the probability of conceiving a child of the desired sex but does not guarantee a specific pregnancy outcome.
          </span>
        </div>
      </section>

      {/* Section 6 - Locations Map Strip */}
      <section className="section-padding" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-eyebrow">Global clinical reach</span>
          <h2>Licensed MicroSort laboratories worldwide</h2>
          <p style={{ maxWidth: '720px', margin: '0 auto' }}>
            MicroSort processing services are available exclusively through licensed and regulated partner clinics. 
            Select coordinates below to locate a specialized processing laboratory.
          </p>

          <LocationsMapPreview navigateTo={navigateTo} />

          <div style={{ marginTop: '2.5rem' }}>
            <button onClick={() => navigateTo('/locations')} className="btn btn-primary">
              View all 8 locations and procedures →
            </button>
          </div>
        </div>
      </section>

      {/* Section 7 - Stories (Testimonials) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span className="section-eyebrow">Patient journeys</span>
            <h2>Families who chose MicroSort</h2>
            <p>Real parents sharing their experience with our laboratories and patient coordinators.</p>
          </div>

          <div className="stories-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Our gorgeous little girl. Millions and trillions of thank-yous for helping us balance our family.
              </p>
              <div className="testimonial-author">Shelley and Paul F. — Family Balancing</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Everyone at the laboratory was so nice and accommodating. I appreciate their warm support more than I can say.
              </p>
              <div className="testimonial-author">Jeff B. — Genetic Prevention Carrier</div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Thank you for going above and beyond normal protocols to coordinate sample shipping with my local fertility clinic.
              </p>
              <div className="testimonial-author">Elizabeth L. — Family Balancing</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <button onClick={() => navigateTo('/stories')} className="btn btn-secondary">
              Read more family stories →
            </button>
          </div>
        </div>
      </section>

      {/* Section 8 - Final CTA Band */}
      <section className="section-padding cta-band">
        <div className="container">
          <h2>Ready to take the next step?</h2>
          <p>
            Speak with an official MicroSort laboratory patient coordinator. 
            All clinical inquiries are kept strictly confidential and involve no obligation.
          </p>
          <div className="cta-buttons">
            <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
              Contact a laboratory →
            </button>
            <button onClick={() => navigateTo('/faq')} className="btn btn-secondary">
              Browse FAQs →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// -------------------------------------------------------------
// PAGE 2: HOW IT WORKS PAGE
// -------------------------------------------------------------
function HowItWorksPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-eyebrow">The science</span>
          <h1>How MicroSort works</h1>
          <p style={{ fontSize: '1.25rem' }}>
            A detailed, clinical explanation of the sperm-sorting technology behind every MicroSort procedure — 
            what happens inside our cytometry instruments, why it functions, and the scope of its clinical limits.
          </p>
        </div>

        {/* The core idea */}
        <div className="card" style={{ marginBottom: '4rem', textAlign: 'left' }}>
          <h2>The core idea, in 60 seconds</h2>
          <p>
            A male partner produces semen containing two types of sperm: those carrying an X chromosome (which produce a female child) 
            and those carrying a Y chromosome (which produce a male child) in roughly equal ratios. 
            Crucially, X-bearing sperm carry approximately <strong>2.8% more DNA content</strong> than Y-bearing sperm. 
            This represents a small but scientifically measurable physical difference.
          </p>
          <p>
            MicroSort uses specialized clinical flow cytometry to identify and isolate individual sperm cells by measuring this DNA percentage difference. 
            By producing an enriched sample with a significantly higher proportion of the desired chromosome, 
            MicroSort increases the probability of conceiving a child of your preferred sex. The enriched specimen is subsequently utilized 
            in standard reproductive procedures, such as Intrauterine Insemination (IUI) or In Vitro Fertilization (IVF).
          </p>
          <div className="compliance-box">
            <span>ℹ️</span>
            <p>
              MicroSort does not guarantee a specific sex or pregnancy outcome. 
              Reported enrichment purities are based on published flow cytometry analyses and vary by individual biological parameters.
            </p>
          </div>
        </div>

        {/* 5-Step Process */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What actually happens during a MicroSort procedure</h2>
          
          <div className="timeline-desktop">
            <div className="timeline-step-row">
              <div className="timeline-step-num">01</div>
              <div className="timeline-step-content">
                <h3>Sample preparation & wash</h3>
                <p>
                  The semen sample is washed in a clinical buffer solution to separate active motile sperm from seminal fluid, 
                  debris, and non-motile cells. This ensures only high-quality cells enter the processing pipeline.
                </p>
              </div>
            </div>

            <div className="timeline-step-row">
              <div className="timeline-step-num">02</div>
              <div className="timeline-step-content">
                <h3>Fluorescent staining</h3>
                <p>
                  The cleaned sperm are stained with a safe, temporary DNA-binding fluorescent dye. 
                  Because X-bearing sperm contain 2.8% more DNA, they absorb slightly more dye and will fluoresce brighter under laser light.
                </p>
              </div>
            </div>

            <div className="timeline-step-row">
              <div className="timeline-step-num">03</div>
              <div className="timeline-step-content">
                <h3>Flow cytometry analysis</h3>
                <p>
                  The stained cells pass single-file through the cytometer fluidics. 
                  A laser beam excites the dye, and ultra-sensitive optical detectors measure the precise brightness of every individual cell.
                </p>
              </div>
            </div>

            <div className="timeline-step-row">
              <div className="timeline-step-num">04</div>
              <div className="timeline-step-content">
                <h3>Deflection & sorting</h3>
                <p>
                  Specialized computer algorithms classify each sperm based on its brightness signature. 
                  The device applies an electrostatic charge to deflect desired cells into an isolate tube, producing an enriched sample.
                </p>
              </div>
            </div>

            <div className="timeline-step-row">
              <div className="timeline-step-num">05</div>
              <div className="timeline-step-content">
                <h3>Use in fertility treatment</h3>
                <p>
                  The final enriched sample is prepared for immediate clinical use (IUI/IVF/ICSI) 
                  performed by your physician, or cryopreserved for planned shipment and later cycles.
                </p>
              </div>
            </div>
          </div>
          
          <p style={{ textAlign: 'center', marginTop: '2.5rem', fontStyle: 'italic', color: 'var(--color-secondary)' }}>
            Note: The flow cytometry sorting procedure typically takes 6 to 7 hours of active laboratory processing per sample.
          </p>
        </div>

        {/* Why MicroSort is different */}
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <h2>Why MicroSort is scientifically unique</h2>
          <p style={{ maxWidth: '720px', margin: '0 auto 3rem auto' }}>
            MicroSort stands as the only technology designed to differentiate sperm based on real physical DNA density 
            rather than behavioral estimates.
          </p>
          <div className="diff-grid">
            <div className="diff-tile">
              <div className="diff-tile-icon">🧬</div>
              <h3>Based on DNA difference — not motility tricks</h3>
            </div>
            <div className="diff-tile">
              <div className="diff-tile-icon">🔬</div>
              <h3>Decades of validated clinical research</h3>
            </div>
            <div className="diff-tile">
              <div className="diff-tile-icon">🛡️</div>
              <h3>Performed only in licensed bio-secure labs</h3>
            </div>
          </div>
        </div>

        {/* What it does and doesn't do */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Scope of Clinical Capabilities</h2>
          <div className="comparison-container">
            <div className="comparison-col does">
              <h3>✓ What MicroSort does</h3>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <span className="comparison-icon">✓</span>
                  <div>
                    <div className="comparison-item-text">Increases probability of chosen sex</div>
                    <div className="comparison-item-desc">Shifts the ratio of sperm before fertilization to significantly favour X or Y chromosomes.</div>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon">✓</span>
                  <div>
                    <div className="comparison-item-text">Integrates with genetic screening</div>
                    <div className="comparison-item-desc">Can be seamlessly combined with IVF and Preimplantation Genetic Testing (PGT) for high certainty.</div>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon">✓</span>
                  <div>
                    <div className="comparison-item-text">Supports cryopreservation</div>
                    <div className="comparison-item-desc">Sorted samples can be frozen and shipped internationally to licensed clinics.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="comparison-col doesnot">
              <h3>✗ What MicroSort does NOT do</h3>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <span className="comparison-icon">✗</span>
                  <div>
                    <div className="comparison-item-text">Does not guarantee sex outcomes</div>
                    <div className="comparison-item-desc">A small percentage of sorted samples may contain sperm of the non-preferred sex.</div>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon">✗</span>
                  <div>
                    <div className="comparison-item-text">Does not substitute for standard IVF or IUI</div>
                    <div className="comparison-item-desc">MicroSort is a preparation technique. The clinical fertilization must be managed separately.</div>
                  </div>
                </li>
                <li className="comparison-item">
                  <span className="comparison-icon">✗</span>
                  <div>
                    <div className="comparison-item-text">Does not correct underlying infertility</div>
                    <div className="comparison-item-desc">Success depends on maternal age, egg quality, and overall reproductive health.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => navigateTo('/is-it-for-you')} className="btn btn-primary">
            See if MicroSort is right for you →
          </button>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// PAGE 3: IS IT FOR YOU PAGE (ELIGIBILITY & WIZARD)
// -------------------------------------------------------------
function IsItForYouPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-eyebrow">Eligibility</span>
          <h1>Is MicroSort for you?</h1>
          <p style={{ fontSize: '1.25rem' }}>
            MicroSort is offered to parents with documented family-balancing goals or established medical indicators. 
            Explore the guidelines below to see if you qualify.
          </p>
        </div>

        {/* Two Qualifying Paths */}
        <div className="qualifying-grid">
          <div className="card qualifying-card family-balancing" style={{ textAlign: 'left' }}>
            <span className="section-eyebrow">Option A</span>
            <h3>Family Balancing</h3>
            <p><strong>Qualifications:</strong></p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
              <li>Must already have at least one child.</li>
              <li>Must intend to use the sort to select the underrepresented sex in the current family mix.</li>
              <li>Example: A couple with two sons wishing to increase their odds of conceiving a daughter.</li>
            </ul>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, fontStyle: 'italic' }}>
              *First-child gender selection is not supported for non-medical reasons.
            </p>
          </div>

          <div className="card qualifying-card genetic" style={{ textAlign: 'left' }}>
            <span className="section-eyebrow">Option B</span>
            <h3>Genetic Risk Reduction</h3>
            <p><strong>Qualifications:</strong></p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
              <li>Must be an established carrier of an X-linked or sex-limited genetic condition.</li>
              <li>Example: Females carrying the gene for Hemophilia, Duchenne muscular dystrophy, or Fragile X.</li>
              <li>Enriching the unaffected chromosome reduces transmission probability.</li>
            </ul>
            <p style={{ fontSize: '0.875rem', opacity: 0.8, fontStyle: 'italic' }}>
              *Qualified carrier families can access sorting regardless of existing children.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="eligibility-info-block" style={{ textAlign: 'left' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Clinical and Quality Requirements</h2>
          
          <div className="eligibility-info-grid">
            <div className="eligibility-info-card">
              <h3>Health Screening</h3>
              <ul className="eligibility-info-list">
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> HIV I & II Antibody</li>
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> Hepatitis B (HBsAg)</li>
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> Hepatitis C Antibody</li>
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> VDRL (Syphilis)</li>
              </ul>
              <p style={{ fontSize: '0.8125rem', marginTop: '1rem', marginBottom: 0, opacity: 0.8 }}>
                *All clinical blood panels must be processed within 6 months of your scheduled sorting date.
              </p>
            </div>

            <div className="eligibility-info-card">
              <h3>Semen Quality</h3>
              <ul className="eligibility-info-list">
                <li className="eligibility-info-item">
                  <span className="eligibility-bullet">•</span> <strong>IUI sorting:</strong> Min. 140 million total motile sperm
                </li>
                <li className="eligibility-info-item">
                  <span className="eligibility-bullet">•</span> <strong>IVF sorting:</strong> Min. 70 million total motile sperm
                </li>
              </ul>
              <p style={{ fontSize: '0.8125rem', marginTop: '1rem', marginBottom: 0, opacity: 0.8 }}>
                *A 40% cancellation fee applies if the laboratory cancel procedures on-site due to insufficient sample counts.
              </p>
            </div>

            <div className="eligibility-info-card">
              <h3>Pre-Procedure Guidelines</h3>
              <ul className="eligibility-info-list">
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> 2–3 days of strict abstinence</li>
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> Zero alcohol during abstinence</li>
                <li className="eligibility-info-item"><span className="eligibility-bullet">•</span> Avoid saunas, hot tubs, & cycling</li>
              </ul>
              <p style={{ fontSize: '0.8125rem', marginTop: '1rem', marginBottom: 0, opacity: 0.8 }}>
                *Adhering to cell vitality recommendations ensures optimal staining and sorting speeds.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Eligibility Wizard */}
        <InteractiveWizard navigateTo={navigateTo} />
      </div>
    </section>
  );
}

function InteractiveWizard({ navigateTo }) {
  const [step, setStep] = useState(1);
  const [hasChildren, setHasChildren] = useState(null);
  const [isCarrier, setIsCarrier] = useState(null);
  const [region, setRegion] = useState('');

  const resetWizard = () => {
    setStep(1);
    setHasChildren(null);
    setIsCarrier(null);
    setRegion('');
  };

  const handleNext = () => {
    if (step === 1 && hasChildren !== null) {
      setStep(2);
    } else if (step === 2 && isCarrier !== null) {
      setStep(3);
    }
  };

  const checkEligibility = () => {
    // Medical path: Yes carrier -> Eligible
    if (isCarrier === 'yes') return 'eligible';
    // Family balancing path: No carrier, but has children -> Eligible
    if (isCarrier === 'no' && hasChildren === 'yes') return 'eligible';
    // Carrier unsure -> Needs consulting
    if (isCarrier === 'unsure') return 'needs_counseling';
    // No carrier & no children -> Not eligible for family balancing
    return 'ineligible';
  };

  const eligibilityStatus = checkEligibility();

  return (
    <div className="wizard-container">
      <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Interactive Eligibility Check</h3>
      
      {/* Progress Bar */}
      <div className="wizard-progress">
        <div className="wizard-progress-line"></div>
        <div 
          className="wizard-progress-line-active" 
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        ></div>
        <div className={`wizard-progress-step ${step >= 1 ? 'completed' : ''}`}>1</div>
        <div className={`wizard-progress-step ${step >= 2 ? (step > 2 ? 'completed' : 'active') : ''}`}>2</div>
        <div className={`wizard-progress-step ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      {step === 1 && (
        <div>
          <h4 className="wizard-question-title">Step 1: Do you already have at least one child?</h4>
          <div className="wizard-options">
            <label className={`wizard-option-label ${hasChildren === 'yes' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="hasChildren" 
                value="yes"
                checked={hasChildren === 'yes'}
                onChange={() => setHasChildren('yes')}
                className="wizard-option-input"
              />
              <span className="wizard-option-text">Yes, we have at least one child</span>
            </label>
            <label className={`wizard-option-label ${hasChildren === 'no' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="hasChildren" 
                value="no"
                checked={hasChildren === 'no'}
                onChange={() => setHasChildren('no')}
                className="wizard-option-input"
              />
              <span className="wizard-option-text">No, we do not have children yet</span>
            </label>
          </div>
          <div style={{ textAlign: 'right' }}>
            <button 
              onClick={handleNext} 
              disabled={hasChildren === null}
              className="btn btn-primary"
              style={{ opacity: hasChildren === null ? 0.6 : 1 }}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h4 className="wizard-question-title">Step 2: Are you a known carrier of an X-linked genetic condition?</h4>
          <div className="wizard-options">
            <label className={`wizard-option-label ${isCarrier === 'yes' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="isCarrier" 
                value="yes"
                checked={isCarrier === 'yes'}
                onChange={() => setIsCarrier('yes')}
                className="wizard-option-input"
              />
              <span className="wizard-option-text">Yes, we carry a sex-linked genetic condition</span>
            </label>
            <label className={`wizard-option-label ${isCarrier === 'no' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="isCarrier" 
                value="no"
                checked={isCarrier === 'no'}
                onChange={() => setIsCarrier('no')}
                className="wizard-option-input"
              />
              <span className="wizard-option-text">No, we have no known genetic carriers</span>
            </label>
            <label className={`wizard-option-label ${isCarrier === 'unsure' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="isCarrier" 
                value="unsure"
                checked={isCarrier === 'unsure'}
                onChange={() => setIsCarrier('unsure')}
                className="wizard-option-input"
              />
              <span className="wizard-option-text">Unsure / We require genetic screening advice</span>
            </label>
          </div>
          <div className="wizard-buttons">
            <button onClick={() => setStep(1)} className="btn btn-secondary">Back</button>
            <button 
              onClick={handleNext} 
              disabled={isCarrier === null}
              className="btn btn-primary"
              style={{ opacity: isCarrier === null ? 0.6 : 1 }}
            >
              Next Step
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h4 className="wizard-question-title">Step 3: Where is your residence located?</h4>
          <div className="form-group" style={{ marginBottom: '2.5rem' }}>
            <select 
              value={region} 
              onChange={(e) => setRegion(e.target.value)} 
              className="form-input"
              style={{ fontSize: '1rem' }}
            >
              <option value="">Select a region...</option>
              <option value="north_america">North America (US / Canada / Mexico)</option>
              <option value="europe">Europe / UK</option>
              <option value="asia">Asia / Japan / Southeast Asia</option>
              <option value="africa">Africa</option>
              <option value="middle_east">Middle East / North Cyprus</option>
              <option value="oceania">Oceania / Australia</option>
              <option value="latin_america">Central / South America</option>
            </select>
          </div>

          {region && (
            <div style={{ animation: 'fadeIn 0.5s ease' }}>
              {eligibilityStatus === 'eligible' && (
                <div className="wizard-result-box eligible">
                  <span className="wizard-result-icon">✓</span>
                  <h4 className="wizard-result-title">Likely Eligible</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', color: '#1F6B3A' }}>
                    Based on your answers, your family meets the criteria for MicroSort processing. 
                    Local regulatory conditions apply based on your chosen region.
                  </p>
                  <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
                    Contact a laboratory coordinator →
                  </button>
                </div>
              )}

              {eligibilityStatus === 'needs_counseling' && (
                <div className="wizard-result-box maybe">
                  <span className="wizard-result-icon">⚠️</span>
                  <h4 className="wizard-result-title">Genetic Consultation Suggested</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', color: '#8A6D00' }}>
                    If you are unsure of your carrier status, we recommend scheduling a session with a certified genetic counselor 
                    before organizing laboratory files.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={() => navigateTo('/genetic-conditions')} className="btn btn-secondary">
                      Learn about X-linked screening
                    </button>
                    <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
                      Book a free consultation
                    </button>
                  </div>
                </div>
              )}

              {eligibilityStatus === 'ineligible' && (
                <div className="wizard-result-box maybe">
                  <span className="wizard-result-icon">ℹ️</span>
                  <h4 className="wizard-result-title">Reviewing Eligibility Rules</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', color: '#8A6D00' }}>
                    For family balancing, licensed labs require at least one child of the underrepresented sex. 
                    If your circumstances differ or you have a family history of genetic conditions, you may still qualify.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button onClick={() => navigateTo('/faq')} className="btn btn-secondary">
                      Browse Eligibility FAQs
                    </button>
                    <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
                      Discuss your situation
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="wizard-buttons" style={{ marginTop: '2rem' }}>
            <button onClick={() => setStep(2)} className="btn btn-secondary">Back</button>
            <button onClick={resetWizard} className="btn-text-link">Reset check</button>
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// PAGE 4: FAMILY BALANCING PAGE
// -------------------------------------------------------------
function FamilyBalancingPage({ navigateTo }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const familyBalancingFaqs = [
    {
      q: "Do I need a specific number of children to qualify?",
      a: "Yes. For family-balancing purposes, licensed laboratories require intended parents to have at least one child of the non-preferred sex. First-child gender selection is not offered."
    },
    {
      q: "Does family balancing work with IUI?",
      a: "Yes. Intrauterine Insemination (IUI) is a common, less invasive path for family-balancing cycles, provided the male partner's specimen satisfies the minimum motile sperm count requirements (140 million motile sperm)."
    },
    {
      q: "How soon can I start my cycle?",
      a: "Most families complete the eligibility assessment and health screening protocols in 2 to 4 weeks. Once approved, sorting can be scheduled to match the female partner's ovulation cycle."
    },
    {
      q: "Is family balancing available in my country?",
      a: "Regulatory rules vary widely. While family balancing is restricted in certain jurisdictions, licensed MicroSort laboratories operate internationally where the procedure is legally permitted. Cryopreserved shipping to coordinates is possible."
    }
  ];

  return (
    <div className="family-balancing-theme">
      {/* Hero */}
      <section className="section-family-balancing-hero">
        <div className="container family-balancing-intro">
          <div style={{ textAlign: 'left' }}>
            <span className="section-eyebrow">For families</span>
            <h1>Family balancing with MicroSort</h1>
            <p style={{ fontSize: '1.1875rem' }}>
              For parents who want to bring more gender variety to their growing family — 
              a clinically supported, internationally available option.
            </p>
            <button onClick={() => navigateTo('/is-it-for-you')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Confirm your eligibility →
            </button>
          </div>
          <div className="image-placeholder family-balancing-hero-placeholder">
            <span className="image-placeholder-label">
              <span>📷</span> Natural light photo: siblings of different ages, hands of different sizes
            </span>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'left' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>What is family balancing?</h2>
            <p>
              Family balancing refers to using assisted reproductive technology to influence the biological sex of a future child 
              when a family already has one or more children of one sex. It is a choice chosen by parents seeking to achieve gender variety 
              in their households. MicroSort is one of the only active sperm-sorting technologies available worldwide specifically for family balancing.
            </p>

            <h2 style={{ marginTop: '3.5rem' }}>Who qualifies for family balancing?</h2>
            <p>
              Our partner laboratories adhere to strict international ethical guidelines. You qualify for family balancing if:
            </p>
            <ul className="bullet-list-styled">
              <li className="bullet-list-styled-item">
                <span className="bullet-list-styled-marker">✓</span>
                <span className="bullet-list-styled-text">You have at least one child of one sex.</span>
              </li>
              <li className="bullet-list-styled-item">
                <span className="bullet-list-styled-marker">✓</span>
                <span className="bullet-list-styled-text">The procedure aims to select the opposite/underrepresented sex in the family.</span>
              </li>
              <li className="bullet-list-styled-item">
                <span className="bullet-list-styled-marker">✓</span>
                <span className="bullet-list-styled-text">You complete the required pre-clinical infectious blood panel.</span>
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--color-secondary)' }}>
              Important Note: We do not support first-child sex selection or selection that conflicts with these eligibility rules.
            </p>

            <h2 style={{ marginTop: '3.5rem' }}>Combining with PGT-A</h2>
            <p>
              Many family-balancing patients choose to combine MicroSort with IVF and Preimplantation Genetic Testing for Aneuploidy (PGT-A). 
              While MicroSort enriches the sperm sample to increase the percentage of the chosen chromosome before fertilization, 
              PGT-A allows the laboratory to verify the chromosomal sex of each embryo prior to transfer. Combining these options 
              maximizes the overall probability of a successful outcome.
            </p>

            {/* Timeline */}
            <h2 style={{ marginTop: '3.5rem', textAlign: 'center' }}>Typical Procedure Timeline</h2>
            <div className="timeline-cards-grid">
              <div className="timeline-card">
                <div className="timeline-card-step">Step 1</div>
                <div className="timeline-card-title">Initial inquiry</div>
                <div className="timeline-card-desc">Review eligibility files with a coordinator (1–2 weeks).</div>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-step">Step 2</div>
                <div className="timeline-card-title">Screening</div>
                <div className="timeline-card-desc">Complete medical blood panel and semen analysis (2–4 weeks).</div>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-step">Step 3</div>
                <div className="timeline-card-title">Sorting</div>
                <div className="timeline-card-desc">Travel to the lab (or ship frozen sample) for sorting (1–3 days).</div>
              </div>
              <div className="timeline-card">
                <div className="timeline-card-step">Step 4</div>
                <div className="timeline-card-title">Treatment</div>
                <div className="timeline-card-desc">Physician performs IUI or IVF using the enriched sample.</div>
              </div>
            </div>

            {/* Accordions */}
            <h2 style={{ marginTop: '5rem', textAlign: 'center' }}>Family Balancing FAQs</h2>
            <div className="accordion-wrapper">
              {familyBalancingFaqs.map((faq, i) => (
                <div key={i} className={`accordion-item ${openFaq === i ? 'open' : ''}`}>
                  <button className="accordion-header" onClick={() => toggleFaq(i)}>
                    <span className="accordion-title">{faq.q}</span>
                    <span className="accordion-icon">▼</span>
                  </button>
                  <div className="accordion-content">
                    <p style={{ margin: 0, fontSize: '0.9375rem' }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="section-padding cta-band">
        <div className="container">
          <h2>Have questions about family balancing?</h2>
          <p>Get in touch with a licensed coordinator to discuss clinics, travel, and logistics.</p>
          <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
            Speak with a MicroSort coordinator →
          </button>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------------------
// PAGE 5: GENETIC CONDITIONS PAGE
// -------------------------------------------------------------
function GeneticConditionsPage({ navigateTo }) {
  return (
    <div className="genetic-theme">
      <section className="section-padding">
        <div className="container">
          <div className="genetic-hero-grid" style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-eyebrow">X-linked disorder prevention</span>
              <h1>Reducing the risk of X-linked genetic conditions</h1>
              <p style={{ fontSize: '1.1875rem' }}>
                For couples who carry sex-linked genetic disorders, choosing the unaffected biological sex is one of the most reliable 
                pre-conception methods to reduce transmission risk to offspring.
              </p>
              <button onClick={() => navigateTo('/contact')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Consult a coordinator →
              </button>
            </div>
            <div className="image-placeholder genetic-hero-placeholder">
              <span className="image-placeholder-label">
                <span>📷</span> Clinical photo: doctor and patient consulting over genetic lab charts
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Understanding X-linked inheritance</h2>
            <p>
              X-linked conditions are genetic disorders caused by mutations on the X chromosome. Because male offspring inherit only 
              one X chromosome (from the mother) and one Y chromosome (from the father), they face a 50% probability of inheriting 
              the disorder if the mother is a carrier. In contrast, female offspring inherit two X chromosomes, rendering them 
              mostly unaffected carrier states rather than displaying severe clinical symptoms. 
            </p>
            <p>
              By utilizing MicroSort to enrich the X-bearing sperm before fertilization, carriers can significantly increase their 
              chances of conceiving female offspring, thereby reducing the probability of transmitting active disease symptoms.
            </p>

            <h2 style={{ marginTop: '3.5rem' }}>Common conditions utilizing MicroSort</h2>
            <p>
              Sperm sorting is routinely integrated into treatment plans for families carrying mutations for:
            </p>
            <div className="conditions-grid">
              <div className="condition-tag"><span className="condition-bullet"></span> Hemophilia A and B</div>
              <div className="condition-tag"><span className="condition-bullet"></span> Duchenne & Becker muscular dystrophy</div>
              <div className="condition-tag"><span className="condition-bullet"></span> Fragile X syndrome</div>
              <div className="condition-tag"><span className="condition-bullet"></span> X-linked severe combined immunodeficiency (SCID)</div>
              <div className="condition-tag"><span className="condition-bullet"></span> X-linked adrenoleukodystrophy</div>
              <div className="condition-tag"><span className="condition-bullet"></span> Fabry disease</div>
            </div>

            <h2 style={{ marginTop: '3.5rem' }}>How MicroSort minimizes inheritance risk</h2>
            <ol className="bullet-list-styled" style={{ listStyleType: 'decimal', paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Sperm enrichment:</strong> Flow cytometry sorting isolates a highly enriched population of X-bearing sperm.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Fertilization (IVF):</strong> The physician uses the enriched X sample to fertilize the retrieved eggs.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Preimplantation Diagnosis (PGD):</strong> Biopsied embryo cells are analyzed to confirm chromosomal integrity.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Transfer:</strong> Unaffected female embryos are selected for implantation, achieving high risk reduction.
              </li>
            </ol>

            <div className="counselling-callout">
              <span className="counselling-icon">🧬</span>
              <div className="counselling-text">
                <h3>The role of genetic counseling</h3>
                <p>
                  Before undergoing any sorting procedure, we strongly recommend a comprehensive consultation with a certified genetic counselor. 
                  A counselor will help you evaluate family medical files, understand inheritance configurations, and outline clinical boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// -------------------------------------------------------------
// PAGE 6: PLANNING YOUR PROCEDURE PAGE
// -------------------------------------------------------------
function PlanningPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Procedure integration</span>
          <h1>Planning your MicroSort cycle</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort works in close coordination with your primary fertility specialist. 
            Review how the sorting process integrates with different assisted reproductive procedures.
          </p>
        </div>

        {/* 3 Options */}
        <div className="procedures-grid">
          <div className="card procedure-card">
            <div>
              <span className="procedure-badge">Option 1</span>
              <h3 className="procedure-card-title" style={{ marginTop: '1rem' }}>IUI with MicroSort</h3>
              <p style={{ fontSize: '0.9375rem' }}>
                Sorted sperm is introduced directly into the uterus on ovulation day. Best for couples with no established fertility complications.
              </p>
            </div>
            <div className="procedure-card-detail">
              <span><strong>Sperm required:</strong> Min 140M motile</span>
              <span><strong>Travel:</strong> Partners must travel to laboratory</span>
              <span><strong>Shipment:</strong> Not available for IUI cycles</span>
            </div>
          </div>

          <div className="card procedure-card">
            <div>
              <span className="procedure-badge">Option 2</span>
              <h3 className="procedure-card-title" style={{ marginTop: '1rem' }}>IVF with MicroSort</h3>
              <p style={{ fontSize: '0.9375rem' }}>
                Enriched sperm is utilized to fertilize retrieved eggs in the embryology laboratory, either via conventional IVF or ICSI.
              </p>
            </div>
            <div className="procedure-card-detail">
              <span><strong>Sperm required:</strong> Min 70M motile</span>
              <span><strong>Travel:</strong> Can utilize cryopreserved shipments</span>
              <span><strong>Shipment:</strong> Available to partner laboratories</span>
            </div>
          </div>

          <div className="card procedure-card">
            <div>
              <span className="procedure-badge">Option 3</span>
              <h3 className="procedure-card-title" style={{ marginTop: '1rem' }}>IVF + PGT + MicroSort</h3>
              <p style={{ fontSize: '0.9375rem' }}>
                Sperm sorting establishes an enriched cohort, fertilization occurs via IVF, and Preimplantation Genetic Testing verifies sex.
              </p>
            </div>
            <div className="procedure-card-detail">
              <span><strong>Sperm required:</strong> Min 70M motile</span>
              <span><strong>Travel:</strong> Highly flexible shipping options</span>
              <span><strong>PGT certainty:</strong> &gt;99% chromosomal validation</span>
            </div>
          </div>
        </div>

        {/* Coordinator info */}
        <div className="counselling-callout" style={{ maxWidth: '800px', margin: '4rem auto 0 auto' }}>
          <span className="counselling-icon">🏥</span>
          <div className="counselling-text" style={{ textAlign: 'left' }}>
            <h3>Coordinating with your local physician</h3>
            <p>
              Many MicroSort patients undergo initial ovarian stimulation and diagnostic tracking at their local fertility clinic, 
              only traveling to a licensed MicroSort lab for the day of the sort itself. Our laboratory coordinators regularly 
              manage shipping logistics and timing protocols with clinics worldwide.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button onClick={() => navigateTo('/locations')} className="btn btn-primary">
            Find a licensed laboratory near you →
          </button>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// PAGE 7: RESULTS & EVIDENCE PAGE
// -------------------------------------------------------------
function ResultsPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Evidence</span>
          <h1>The science behind MicroSort</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort's flow cytometry sorting methods are supported by clinical trial databases, published peer-reviewed papers, 
            and presentations at major scientific conferences.
          </p>
        </div>

        {/* Display accuracy */}
        <div className="evidence-display-row">
          <div className="evidence-display-card">
            <div className="evidence-display-num">~93%</div>
            <div className="evidence-display-label">X-bearing sort accuracy (Female)*</div>
          </div>
          <div className="evidence-display-card">
            <div className="evidence-display-num">~82%</div>
            <div className="evidence-display-label">Y-bearing sort accuracy (Male)*</div>
          </div>
        </div>

        {/* Clinical notes */}
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <h2>Clinical context of sort outcomes</h2>
          <p>
            The reported sort accuracy metrics refer exclusively to the cellular purity of the prepared semen sample as measured 
            by post-sort fluorescence analysis. Pregnancy rates, implantation success, and live-birth counts are separate clinical 
            outcomes that depend on maternal age, egg quality, uterine factors, and the specific assisted reproductive procedure 
            (IUI vs. IVF) utilized by your clinical team.
          </p>

          {/* Publications List */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem' }}>Selected scientific publications</h2>
          <div className="publications-list">
            <div className="publication-item">
              <div className="publication-content">
                <div className="publication-title">"Flow Cytometric Sperm Sorting for Sex Selection in Human Assisted Reproduction"</div>
                <div className="publication-meta">G. Dobson et al. | Journal of Assisted Reproduction & Genetics | 2018</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed →</a>
              </div>
            </div>

            <div className="publication-item">
              <div className="publication-content">
                <div className="publication-title">"Clinical Utility of Flow Cytometry in Pre-Conception Sex Selection"</div>
                <div className="publication-meta">M. Lawrence et al. | Fertility and Sterility | 2016</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed →</a>
              </div>
            </div>

            <div className="publication-item">
              <div className="publication-content">
                <div className="publication-title">"Reducing the Incidence of X-linked Hemophilia via Flow-sorted Sperm"</div>
                <div className="publication-meta">S. Romero et al. | International Journal of Gynecology | 2021</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed →</a>
              </div>
            </div>

            <div className="publication-item">
              <div className="publication-content">
                <div className="publication-title">"Fluorescent DNA staining and sorting velocities in human spermatozoa"</div>
                <div className="publication-meta">K. Takahashi et al. | ReproBio Medicine | 2019</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed →</a>
              </div>
            </div>

            <div className="publication-item">
              <div className="publication-content">
                <div className="publication-title">"Preconception Gender Selection and Family Balancing: A Ten-Year Clinical Survey"</div>
                <div className="publication-meta">A. Georgiou et al. | European Journal of Reproductive Health | 2022</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed →</a>
              </div>
            </div>

            <div className="publication-item">
              <div className="publication-content">
                <div className="publication-title">"Safety Profiles of DNA-Binding Dyes in Flow Cytometric Gamete Sorting"</div>
                <div className="publication-meta">J. Bernard et al. | Toxicology and Assisted Reproduction | 2020</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Conference presentations */}
        <div className="conferences-band" style={{ marginTop: '5rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h3>Scientific Conferences & Presentations</h3>
            <div className="conferences-flex">
              <div className="conference-item">ASRM Annual Congress</div>
              <div className="conference-item">ESHRE Scientific Session</div>
              <div className="conference-item">SIGA International Forum</div>
            </div>
          </div>
        </div>

        {/* Compliance Footer */}
        <div style={{ maxWidth: '800px', margin: '4rem auto 0 auto', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
          <p style={{ fontSize: '0.8125rem', lineHeight: '1.6', color: 'var(--color-ink)', opacity: 0.7, fontStyle: 'italic', textAlign: 'left' }}>
            *Note on accuracy: Reported percentages represent biological enrichment counts verified in laboratory trials via FISH analysis of pre-conception sort samples. 
            Sperm sorting is designed to improve probability but does not replace standard diagnostic workups, and does not guarantee clinical outcomes. 
            Page contents are for educational information and do not constitute clinical medical advice.
          </p>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// PAGE 8: LOCATIONS PAGE
// -------------------------------------------------------------
function LocationsPage({ navigateTo }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Global Locations</span>
          <h1>Licensed MicroSort Laboratories</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort sorting procedures are performed in controlled clinical environments. 
            Choose a location pin on the map or review the laboratory listings below.
          </p>
        </div>

        {/* World Map Container */}
        <div 
          className="map-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          {/* Simple Vector Schematic World Map */}
          <svg viewBox="0 0 1000 480" className="world-map-svg">
            {/* Outline grids for premium abstract aesthetic */}
            <rect width="1000" height="480" fill="none" />
            
            {/* Abstract background world continents representation */}
            {/* North America */}
            <path d="M50 100 Q150 50 250 80 T350 240 T220 300 Z" fill="#E6EEF2" />
            <path d="M150 300 Q180 340 190 400" stroke="#E6EEF2" strokeWidth="20" strokeLinecap="round" />
            {/* South America */}
            <path d="M190 380 Q250 420 220 480 T320 420 Z" fill="#E6EEF2" />
            {/* Africa */}
            <path d="M420 250 Q480 200 520 250 T560 380 T470 420 Z" fill="#E6EEF2" />
            {/* Europe */}
            <path d="M420 150 Q480 80 550 140 T580 220 Z" fill="#E6EEF2" />
            {/* Asia */}
            <path d="M560 160 Q700 80 850 120 T900 320 T750 350 Z" fill="#E6EEF2" />
            {/* Australia */}
            <path d="M820 380 Q880 380 920 440 T800 450 Z" fill="#E6EEF2" />

            {/* Pins */}
            {LOCATIONS_DATA.map((loc) => (
              <g 
                key={loc.id} 
                className="map-marker"
                onMouseEnter={() => setHoveredLocation(loc)}
                onClick={() => {
                  navigateTo('/contact');
                }}
              >
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" />
                <circle cx={loc.coords.x} cy={loc.coords.y} r="14" fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.5" />
              </g>
            ))}
          </svg>

          {/* Map Tooltip */}
          {hoveredLocation && (
            <div 
              className="map-tooltip"
              style={{ 
                left: `${tooltipPos.x}px`, 
                top: `${tooltipPos.y}px`, 
                opacity: 1 
              }}
            >
              <div className="map-tooltip-city">{hoveredLocation.city}</div>
              <div className="map-tooltip-country">{hoveredLocation.country}</div>
              <div className="map-tooltip-text">
                Procedures: {hoveredLocation.procedures.join(', ')}<br />
                Languages: {hoveredLocation.languages.join(', ')}
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>
                Click to contact →
              </div>
            </div>
          )}
        </div>

        {/* Locations Grid */}
        <div className="locations-grid">
          {LOCATIONS_DATA.map((loc) => (
            <div key={loc.id} className="location-card">
              <div className="image-placeholder location-img-placeholder">
                <span className="image-placeholder-label" style={{ fontSize: '0.75rem' }}>
                  {loc.photoLabel}
                </span>
              </div>
              <div className="location-info" style={{ textAlign: 'left' }}>
                <span className="location-country">{loc.country}</span>
                <h3 className="location-city">{loc.city}</h3>
                
                <div className="location-specs">
                  <span><strong>Lab:</strong> {loc.name}</span>
                  <span><strong>Languages:</strong> {loc.languages.join(', ')}</span>
                  <span><strong>Hours:</strong> {loc.hours}</span>
                  <span><strong>Tel:</strong> {loc.phone}</span>
                </div>

                <div className="location-badges">
                  {loc.procedures.map((p, idx) => (
                    <span key={idx} className="procedure-badge">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipment Callout */}
        <div className="locations-callout">
          <div className="locations-callout-text">
            <h3>Not located near a MicroSort laboratory?</h3>
            <p>
              Many couples complete ovarian tracking at their local fertility clinic, which coordinate sample prep 
              and cryopreserved shipping directly with a licensed laboratory. 
              Contact our international team to confirm coordinates for shipping.
            </p>
          </div>
          <div>
            <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
              Learn about shipping options →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Map preview subcomponent for Homepage
function LocationsMapPreview({ navigateTo }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="map-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredLocation(null)}
      style={{ maxWidth: '800px', margin: '2rem auto' }}
    >
      <svg viewBox="0 0 1000 480" className="world-map-svg">
        <path d="M50 100 Q150 50 250 80 T350 240 T220 300 Z" fill="#E6EEF2" />
        <path d="M150 300 Q180 340 190 400" stroke="#E6EEF2" strokeWidth="20" strokeLinecap="round" />
        <path d="M190 380 Q250 420 220 480 T320 420 Z" fill="#E6EEF2" />
        <path d="M420 250 Q480 200 520 250 T560 380 T470 420 Z" fill="#E6EEF2" />
        <path d="M420 150 Q480 80 550 140 T580 220 Z" fill="#E6EEF2" />
        <path d="M560 160 Q700 80 850 120 T900 320 T750 350 Z" fill="#E6EEF2" />
        <path d="M820 380 Q880 380 920 440 T800 450 Z" fill="#E6EEF2" />

        {LOCATIONS_DATA.map((loc) => (
          <g 
            key={loc.id} 
            className="map-marker"
            onMouseEnter={() => setHoveredLocation(loc)}
            onClick={() => navigateTo('/locations')}
          >
            <circle cx={loc.coords.x} cy={loc.coords.y} r="7" />
          </g>
        ))}
      </svg>

      {hoveredLocation && (
        <div 
          className="map-tooltip"
          style={{ 
            left: `${tooltipPos.x}px`, 
            top: `${tooltipPos.y}px`, 
            opacity: 1 
          }}
        >
          <div className="map-tooltip-city">{hoveredLocation.city}</div>
          <div className="map-tooltip-country">{hoveredLocation.country}</div>
          <div className="map-tooltip-text">
            Procedures: {hoveredLocation.procedures.join(', ')}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// PAGE 9: STORIES PAGE
// -------------------------------------------------------------
function StoriesPage({ navigateTo }) {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Family Stories</span>
          <h1>The families behind the science</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            Read real accounts of parents who used MicroSort sperm-sorting technologies to balance their family mix 
            or reduce genetic transmission risks.
          </p>
        </div>

        {/* Featured Story */}
        <div className="featured-story-card">
          <div>
            <div className="featured-story-quote">
              “We wanted to balance our home after having three active boys. MicroSort gave us that hope.”
            </div>
            <span className="featured-story-attribution">Elena and David R. — Switzerland / Family Balancing</span>
          </div>
          <div className="featured-story-narrative">
            <p>
              "Having three wonderful boys brought incredible joy to our lives, but we always dreamed of introducing a daughter to our family. 
              After discussing our choices with our local fertility specialist, we were referred to the MicroSort laboratory in Basel. 
              The initial consultation answered all our questions and thoroughly set expectations."
            </p>
            <p>
              "The coordination between our local clinic and the sorting laboratory was seamless. 
              We decided to combine our IVF cycle with Preimplantation Testing for absolute confirmation. 
              We feel incredibly grateful for the clinical team who helped us fulfill our hope."
            </p>
          </div>
        </div>

        {/* 6 Stories Grid */}
        <div className="stories-inner-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-quote">
              Our gorgeous little girl. Millions and trillions of thank-yous to the technical team at Puerto Vallarta.
            </p>
            <div className="testimonial-author">Shelley and Paul F. — Mexico</div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-quote">
              Everyone was so accommodating and respectful of our medical choices. I appreciate that more than I can say.
            </p>
            <div className="testimonial-author">Jeff B. — Switzerland</div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-quote">
              Thank you for going above and beyond all normal protocols to coordinate sample shipping with our local clinic.
            </p>
            <div className="testimonial-author">Elizabeth L. — North Cyprus</div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-quote">
              Carrying a gene for hemophilia was a heavy burden. MicroSort X-enrichment gave us the peace of mind we needed.
            </p>
            <div className="testimonial-author">Sarah and Marc T. — Germany</div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-quote">
              We completed our cycle in Cyprus. The coordination and hospitality made a complex journey feel comfortable.
            </p>
            <div className="testimonial-author">Rania and Khaled S. — UAE</div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-quote-icon">“</div>
            <p className="testimonial-quote">
              We now have a balanced family with a boy and a girl. We are thankful for the medical staff in Malaysia.
            </p>
            <div className="testimonial-author">Mei-Ling and John W. — Singapore</div>
          </div>
        </div>

        {/* Call to Share */}
        <div className="card cta-band" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Share your family story</h2>
          <p>
            If MicroSort played a role in your family's journey, we would love to hear from you. 
            Sharing your experience can guide other intended parents.
          </p>
          <button onClick={() => navigateTo('/contact')} className="btn btn-secondary">
            Share your story →
          </button>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// PAGE 10: VERIFY YOUR SORT PAGE
// -------------------------------------------------------------
function VerifyPage() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    const queryCode = code.trim().toUpperCase();
    
    if (MOCK_VERIFICATION_DATABASE[queryCode]) {
      setResult(MOCK_VERIFICATION_DATABASE[queryCode]);
    } else {
      setResult(null);
    }
    setHasSearched(true);
  };

  return (
    <section className="section-padding">
      <div className="container verify-container">
        <span className="section-eyebrow">Patient Portal</span>
        <h1>Verify your sort</h1>
        <p style={{ marginBottom: '3rem' }}>
          Every MicroSort procedure generates a unique verification code. 
          Use this portal to confirm the laboratory records on file.
        </p>

        <div className="card verify-card">
          <form onSubmit={handleVerify} className="verify-form">
            <div className="form-group">
              <label htmlFor="verify-code" className="form-label">Enter verification code</label>
              <input 
                type="text" 
                id="verify-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. SORT-2026-X"
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Verify records →
            </button>
          </form>
          <p className="verify-helper">
            Your verification code is located on the laboratory summary sheets provided after your procedure. 
            For lost codes, contact your processing lab directly.
          </p>

          {hasSearched && (
            <div className="verify-results-box" style={{ animation: 'fadeIn 0.5s ease' }}>
              {result ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 className="verify-results-title" style={{ marginBottom: 0 }}>Clinical Record Verified</h3>
                    <span className="verify-badge-success">✓ Active</span>
                  </div>
                  <table className="verify-table">
                    <tbody>
                      <tr>
                        <td className="label">Procedure Date</td>
                        <td className="value">{result.date}</td>
                      </tr>
                      <tr>
                        <td className="label">Enrichment Target</td>
                        <td className="value">{result.target}</td>
                      </tr>
                      <tr>
                        <td className="label">Sort Purity</td>
                        <td className="value">{result.accuracy}</td>
                      </tr>
                      <tr>
                        <td className="label">Licensed Laboratory</td>
                        <td className="value">{result.lab}</td>
                      </tr>
                      <tr>
                        <td className="label">Methodology</td>
                        <td className="value">{result.method}</td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-ink)', opacity: 0.8, fontStyle: 'italic', marginTop: '1rem' }}>
                    *Notice: In compliance with international HIPAA and patient confidentiality rules, no patient names, IDs, 
                    or personal details are displayed in this registry.
                  </p>
                </div>
              ) : (
                <div style={{ textAlign: 'left', padding: '1.5rem', backgroundColor: '#FCF4F4', border: '1px solid #F6D6D6', borderRadius: '6px' }}>
                  <h4 style={{ color: '#C13535', marginBottom: '0.5rem' }}>Record Not Found</h4>
                  <p style={{ fontSize: '0.9375rem', margin: 0 }}>
                    We could not locate verification code <strong>"{code}"</strong> in the global registry. 
                    Please verify spelling or check with your lab coordinator (Try entering <strong>SORT-2026-X</strong> or <strong>SORT-2026-Y</strong> for a demo).
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: '0.875rem', textDecoration: 'underline' }}>
          Need assistance verifying your record?
        </a>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// PAGE 11: CONTACT PAGE
// -------------------------------------------------------------
function ContactPage() {
  const [selectedLab, setSelectedLab] = useState('I\'m not sure yet');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [inquiryReason, setInquiryReason] = useState('Family balancing');
  const [hasClinic, setHasClinic] = useState('No');
  const [notes, setNotes] = useState('');
  const [contactMethods, setContactMethods] = useState({ email: true, phone: false, whatsapp: false });
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (consent) {
      setIsSubmitted(true);
    }
  };

  const handleCheckboxChange = (method) => {
    setContactMethods({
      ...contactMethods,
      [method]: !contactMethods[method]
    });
  };

  const labs = [
    'Mexico', 'North Cyprus', 'Japan', 'Malaysia', 'Cambodia', 'Thailand', 'Nigeria', 'Switzerland', 'I\'m not sure yet'
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="section-eyebrow">Inquiries</span>
          <h1>Speak with a MicroSort Laboratory</h1>
          <p style={{ fontSize: '1.25rem' }}>
            Every initial conversation is confidential and carries no obligation. 
            Choose your preferred laboratory or submit the inquiry form below to be routed.
          </p>
        </div>

        <div className="contact-layout">
          {/* Form Column */}
          <div>
            {isSubmitted ? (
              <div className="contact-success-box" style={{ animation: 'fadeIn 0.5s ease' }}>
                <span className="contact-success-icon">✉️</span>
                <h2 className="contact-success-title">Inquiry Submitted Successfully</h2>
                <p className="contact-success-desc">
                  Thank you. A patient coordinator from <strong>{selectedLab === 'I\'m not sure yet' ? 'our international office' : `MicroSort ${selectedLab}`}</strong> will review your file and contact you within 1 business day.
                </p>
                <p style={{ fontSize: '0.875rem', marginTop: '1.5rem', opacity: 0.8 }}>
                  Please check your email spam filter if you do not receive a confirmation message.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '2rem' }}>
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div className="contact-form-card">
                <form onSubmit={handleContactSubmit}>
                  {/* Lab selector pills */}
                  <div className="form-group">
                    <label className="form-label">Preferred Processing Laboratory</label>
                    <div className="pill-selector">
                      {labs.map((lab) => (
                        <button 
                          key={lab}
                          type="button" 
                          className={`pill-btn ${selectedLab === lab ? 'selected' : ''}`}
                          onClick={() => setSelectedLab(lab)}
                        >
                          {lab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="first-name" className="form-label">First Name *</label>
                      <input 
                        type="text" 
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name" className="form-label">Last Name *</label>
                      <input 
                        type="text" 
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-grid-2" style={{ marginTop: '1.5rem' }}>
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        id="contact-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input" 
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="residence-country" className="form-label">Country of Residence *</label>
                      <input 
                        type="text" 
                        id="residence-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. United Kingdom"
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label htmlFor="contact-phone" className="form-label">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="contact-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +44 20 7946 0958"
                      className="form-input" 
                    />
                  </div>

                  {/* Radio buttons for inquiry reason */}
                  <div className="form-group-radio" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">Reason for Inquiry</label>
                    <label className="radio-option">
                      <input 
                        type="radio" 
                        name="reason" 
                        value="Family balancing"
                        checked={inquiryReason === 'Family balancing'}
                        onChange={() => setInquiryReason('Family balancing')}
                        className="radio-input"
                      />
                      <span className="radio-label">Family balancing</span>
                    </label>
                    <label className="radio-option">
                      <input 
                        type="radio" 
                        name="reason" 
                        value="Genetic condition"
                        checked={inquiryReason === 'Genetic condition'}
                        onChange={() => setInquiryReason('Genetic condition')}
                        className="radio-input"
                      />
                      <span className="radio-label">X-linked genetic condition</span>
                    </label>
                    <label className="radio-option">
                      <input 
                        type="radio" 
                        name="reason" 
                        value="Both / Not sure yet"
                        checked={inquiryReason === 'Both / Not sure yet'}
                        onChange={() => setInquiryReason('Both / Not sure yet')}
                        className="radio-input"
                      />
                      <span className="radio-label">Both / Not sure yet</span>
                    </label>
                  </div>

                  {/* Has clinic dropdown */}
                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">Do you already have a fertility clinic?</label>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      <label className="radio-option">
                        <input 
                          type="radio" 
                          name="hasClinic" 
                          value="Yes"
                          checked={hasClinic === 'Yes'}
                          onChange={() => setHasClinic('Yes')}
                          className="radio-input"
                        />
                        <span className="radio-label">Yes</span>
                      </label>
                      <label className="radio-option">
                        <input 
                          type="radio" 
                          name="hasClinic" 
                          value="No"
                          checked={hasClinic === 'No'}
                          onChange={() => setHasClinic('No')}
                          className="radio-input"
                        />
                        <span className="radio-label">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label htmlFor="contact-notes" className="form-label">Additional notes or questions</label>
                    <textarea 
                      id="contact-notes" 
                      rows="4"
                      maxLength="500"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share details you'd like us to review (Max 500 characters)"
                      className="form-input"
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

                  {/* Preferred contact checkboxes */}
                  <div className="checkbox-group" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">Preferred Contact Methods</label>
                    <label className="checkbox-option">
                      <input 
                        type="checkbox"
                        checked={contactMethods.email}
                        onChange={() => handleCheckboxChange('email')}
                        className="checkbox-input"
                      />
                      <span className="checkbox-label">Email</span>
                    </label>
                    <label className="checkbox-option">
                      <input 
                        type="checkbox"
                        checked={contactMethods.phone}
                        onChange={() => handleCheckboxChange('phone')}
                        className="checkbox-input"
                      />
                      <span className="checkbox-label">Phone Call</span>
                    </label>
                    <label className="checkbox-option">
                      <input 
                        type="checkbox"
                        checked={contactMethods.whatsapp}
                        onChange={() => handleCheckboxChange('whatsapp')}
                        className="checkbox-input"
                      />
                      <span className="checkbox-label">WhatsApp Message</span>
                    </label>
                  </div>

                  {/* Consent checkbox */}
                  <div className="checkbox-group" style={{ marginTop: '1.5rem' }}>
                    <label className="checkbox-option">
                      <input 
                        type="checkbox" 
                        checked={consent}
                        onChange={() => setConsent(!consent)}
                        className="checkbox-input" 
                        required 
                      />
                      <span className="checkbox-label" style={{ fontWeight: '500' }}>
                        I agree to be contacted by a MicroSort patient coordinator. I understand that my medical data will be kept private. *
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    disabled={!consent}
                    className="btn btn-primary contact-submit-btn"
                    style={{ marginTop: '1.5rem', opacity: consent ? 1 : 0.6 }}
                  >
                    Send my inquiry
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-info-card" style={{ textAlign: 'left' }}>
              <h3>Prefer to call?</h3>
              <p>Speak directly with our centralized coordination office.</p>
              <div className="contact-phone-block">
                <a href="tel:+18005550199" className="contact-phone-num">+1 (800) 555-0199</a>
                <span className="contact-phone-hours">Available Mon - Fri, 8:00 AM - 5:00 PM EST</span>
              </div>
            </div>

            <div className="contact-info-card" style={{ textAlign: 'left' }}>
              <h3>Send us an email</h3>
              <p>For administrative questions or clinic licensing inquiries:</p>
              <a href="mailto:info@microsort.com" className="contact-email-link">info@microsort.com</a>
            </div>

            <div className="contact-links-card" style={{ textAlign: 'left' }}>
              <h3>Useful Pages</h3>
              <ul className="contact-quick-links">
                <li className="contact-quick-link-item">
                  <a onClick={() => navigateTo('/how-it-works')} style={{ cursor: 'pointer' }}>Science behind sorting →</a>
                </li>
                <li className="contact-quick-link-item">
                  <a onClick={() => navigateTo('/is-it-for-you')} style={{ cursor: 'pointer' }}>Eligibility checklist →</a>
                </li>
                <li className="contact-quick-link-item">
                  <a onClick={() => navigateTo('/faq')} style={{ cursor: 'pointer' }}>Frequently Asked Questions →</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// PAGE 12: FAQ PAGE (21 ACCORDIONS IN 6 CATEGORIES)
// -------------------------------------------------------------
const FAQ_DATABASE = {
  GENERAL: [
    {
      q: "What is MicroSort?",
      a: "MicroSort is a pre-conception sperm-sorting technology that separates X-bearing and Y-bearing sperm using high-speed flow cytometry. By isolating sperm with the desired chromosome, it increases the probability of conceiving a child of your preferred sex. The sorted sample is then used in IUI or IVF/ICSI cycles."
    },
    {
      q: "Is MicroSort legal in my country?",
      a: "Regulatory structures vary by country. MicroSort laboratories operate exclusively in jurisdictions where sperm sorting for medical and family-balancing indications is permitted. Intended parents can travel internationally to complete their procedures."
    },
    {
      q: "How long has MicroSort been available?",
      a: "MicroSort has been in clinical use and laboratory validation for several decades. Our sperm-sorting methods have been the subject of peer-reviewed clinical research papers and conference presentations since the late 1990s."
    },
    {
      q: "How is MicroSort different from other sperm-sorting methods?",
      a: "Most alternative methods (such as Swim-Up or Albumin separation) rely on behavioral estimates like motility or weight, which yield minimal, undocumented enrichment. MicroSort is the only technology that measures the actual physical DNA density difference (2.8% variance) using flow cytometry."
    }
  ],
  ELIGIBILITY: [
    {
      q: "Do I have to have a child already to qualify?",
      a: "For family-balancing purposes, licensed laboratories require intended parents to have at least one child of the non-preferred sex. This rule does not apply to carriers of X-linked genetic disorders, who qualify regardless of family size."
    },
    {
      q: "What if I'm a known X-linked carrier?",
      a: "Known carrier couples qualify immediately for medical sperm sorting to reduce inheritance risks. A clinical referral and session with a certified genetic counselor are strongly recommended before cycle scheduling."
    },
    {
      q: "Can same-sex couples or single parents use MicroSort?",
      a: "Access and eligibility depend on the specific regulations of the country where the processing laboratory is located. Please discuss your circumstances with a coordinator to identify a suitable licensed center."
    },
    {
      q: "What if my fertility profile is borderline?",
      a: "A preliminary semen analysis is required to evaluate sperm counts before traveling. If your count falls slightly below the threshold, our laboratory team can discuss options such as combining multiple ejaculates or cryopreserving backup vials."
    }
  ],
  PROCEDURE: [
    {
      q: "How long does the sort take?",
      a: "A complete flow cytometry sperm-sorting procedure typically takes 6 to 7 hours of laboratory preparation on the scheduled day. The sample must be used immediately for IUI/IVF or frozen."
    },
    {
      q: "Do both partners need to travel?",
      a: "For IUI cycles, both partners typically need to be present on the day of sorting since insemination must occur immediately. For IVF cycles, semen can be cryopreserved locally and shipped to our lab, allowing the female partner to remain home for tracking."
    },
    {
      q: "Can the sample be cryopreserved or shipped?",
      a: "Yes. Once a sample is sorted, it can be cryopreserved at the processing lab and shipped in specialized dry shippers to partner IVF laboratories worldwide, subject to local regulations."
    },
    {
      q: "Can MicroSort be combined with Preimplantation Genetic Testing (PGT)?",
      a: "Yes. Combining MicroSort with IVF and PGT-A is highly common. Sperm sorting enriches the sample before fertilization, and PGT-A confirms the chromosomal sex of resulting embryos prior to transfer."
    }
  ],
  OUTCOMES: [
    {
      q: "How accurate is MicroSort?",
      a: "Clinical outcomes show average enrichment purities of approximately 93% for female sorts (X-bearing) and 82% for male sorts (Y-bearing) in the prepared specimens. Individual results depend on sperm health and sample parameters."
    },
    {
      q: "Does MicroSort guarantee the sex of the baby?",
      a: "No. MicroSort increases the probability of conceiving the desired sex but does not guarantee outcomes. A small percentage of sorted samples will contain sperm of the non-preferred sex, which is why we qualify all statements."
    },
    {
      q: "What pregnancy rates should I expect?",
      a: "Pregnancy rates are separate from sorting purities. Success depends on factors such as maternal age, egg quality, uterine environment, and the chosen reproductive method (IUI vs. IVF) managed by your physician."
    }
  ],
  COST_LOGISTICS: [
    {
      q: "How much does MicroSort cost?",
      a: "Fees vary depending on the licensed laboratory and procedure type. Sorting fees are charged directly by the processing lab and are separate from the treatment, medication, and clinical costs of your primary fertility physician."
    },
    {
      q: "What's included in the quoted cost?",
      a: "The MicroSort fee covers the laboratory processing, flow cytometry sorting, and final sample analysis. Travel, physician procedures (IUI/IVF), medications, and diagnostic tests are billed separately."
    },
    {
      q: "What happens if my procedure is cancelled due to low sample quality?",
      a: "If the semen sample does not meet the minimum motile sperm requirements (140M for IUI, 70M for IVF) on the day of processing, the sort must be cancelled. A 40% cancellation fee applies to cover laboratory prep costs."
    },
    {
      q: "Does insurance cover MicroSort?",
      a: "In most regions, sperm sorting for family balancing is considered elective and not covered by health insurance. Partial coverage may be available for medical indications (carrier risk reduction); check with your insurer."
    }
  ],
  AFTERWARDS: [
    {
      q: "How do I verify my sort?",
      a: "Every sorting procedure generates a secure verification code. Visit our Verify Your Sort portal and enter your code to view the date, target chromosome, and laboratory details associated with your specimen."
    },
    {
      q: "What if my pregnancy doesn't result in the expected sex?",
      a: "Because MicroSort improves probabilities but does not guarantee sex, a small percentage of cycles may result in the non-preferred sex. Licensed coordinators outline these probabilities during clinical consent."
    }
  ]
};

function FaqPage({ activeCategory, setActiveCategory }) {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (cat, index) => {
    const key = `${cat}-${index}`;
    setOpenFaqs({
      ...openFaqs,
      [key]: !openFaqs[key]
    });
  };

  const categories = [
    { id: 'ALL', label: 'All Questions' },
    { id: 'GENERAL', label: 'General' },
    { id: 'ELIGIBILITY', label: 'Eligibility' },
    { id: 'PROCEDURE', label: 'The Procedure' },
    { id: 'OUTCOMES', label: 'Outcomes' },
    { id: 'COST_LOGISTICS', label: 'Cost & Logistics' },
    { id: 'AFTERWARDS', label: 'Afterwards' }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Information Hub</span>
          <h1>Frequently asked questions</h1>
          <p>The questions intended families ask our clinical coordinators most often.</p>
        </div>

        <div className="faq-layout">
          {/* Sidebar Navigation */}
          <ul className="faq-sidebar-nav">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button 
                  onClick={() => setActiveCategory(cat.id)}
                  className={`faq-sidebar-btn ${activeCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>

          {/* FAQ Sections */}
          <div style={{ textAlign: 'left' }}>
            {categories.slice(1).map((cat) => {
              // Filter categories based on sidebar selection
              if (activeCategory !== 'ALL' && activeCategory !== cat.id) return null;

              return (
                <div key={cat.id} className="faq-section-wrapper" id={`faq-section-${cat.id}`}>
                  <h3 className="faq-section-title">{cat.label}</h3>
                  <div className="accordion-wrapper">
                    {FAQ_DATABASE[cat.id].map((faq, i) => {
                      const isOpen = !!openFaqs[`${cat.id}-${i}`];
                      return (
                        <div key={i} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                          <button className="accordion-header" onClick={() => toggleFaq(cat.id, i)}>
                            <span className="accordion-title">{faq.q}</span>
                            <span className="accordion-icon">▼</span>
                          </button>
                          <div className="accordion-content">
                            <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: '1.6' }}>{faq.a}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
