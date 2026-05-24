import AnimatedCounter from '../components/AnimatedCounter';
import LocationsMapPreview from '../components/LocationsMapPreview';
import heroImg from '../assets/hero_family_planning.png';
import familyBalancingImg from '../assets/family_balancing.png';
import geneticPreventionImg from '../assets/genetic_prevention.png';
import avatarFamily1 from '../assets/avatar_family1.png';
import avatarFather1 from '../assets/avatar_father1.png';
import avatarMother1 from '../assets/avatar_mother1.png';

export default function HomePage({ navigateTo }) {
  return (
    <>
      {/* Section 1 - Hero */}
      <section className="hero-section">
        <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <span className="section-eyebrow">The science of family planning</span>
            <h1 className="hero-title">Increase the chances of having the daughter or son you've been hoping for.</h1>
            <p className="hero-subhead">
              MicroSort® is a sperm-sorting technology used by licensed fertility laboratories around the world. 
              It's how thousands of families have improved their odds of conceiving a child of their preferred sex, 
              for family balancing or to reduce the risk of sex-linked genetic conditions.
            </p>
            <div className="hero-ctas">
              <button onClick={() => navigateTo('/is-it-for-you')} className="btn btn-primary">
                See if MicroSort is right for you <span className="btn-arrow">→</span>
              </button>
              <a onClick={() => navigateTo('/how-it-works')} className="btn-text-link" style={{ cursor: 'pointer' }}>
                How the science works
              </a>
            </div>
          </div>
          <div className="image-placeholder hero-placeholder reveal-on-scroll">
            <img 
              src={heroImg} 
              alt="Soft natural-light photograph of a parent gently holding a baby's hand, representing IVF and family planning" 
              className="premium-hero-img"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Trust Strip */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-tile reveal-on-scroll delay-100">
            <div className="trust-num">
              <AnimatedCounter value="30" suffix="+" />
            </div>
            <div className="trust-label">Years of clinical research and development</div>
          </div>
          <div className="trust-tile reveal-on-scroll delay-200">
            <div className="trust-num">
              <AnimatedCounter value="10,000" suffix="+" />
            </div>
            <div className="trust-label">Families worldwide assisted by sperm sorting</div>
          </div>
          <div className="trust-tile reveal-on-scroll delay-300">
            <div className="trust-num">
              <AnimatedCounter value="8" />
            </div>
            <div className="trust-label">Licensed processing centers globally</div>
          </div>
        </div>
      </section>

      {/* Section 3 - Two Paths */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <span className="section-eyebrow">Reproductive choices</span>
            <h2>Two reasons families choose MicroSort</h2>
          </div>
          <div className="two-paths-grid">
            <div className="card path-card cream reveal-on-scroll delay-100">
              <div className="image-placeholder path-card-image">
                <img 
                  src={familyBalancingImg} 
                  alt="Children playing together representing family balancing" 
                  className="premium-img"
                />
              </div>
              <h3>Bring more gender variety to your family.</h3>
              <p>
                If you already have a child or children of one sex, MicroSort can help shift the odds for your next pregnancy. 
                Many families use MicroSort to balance the gender mix of their growing family.
              </p>
              <button onClick={() => navigateTo('/family-balancing')} className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                Learn about family balancing <span className="btn-arrow">→</span>
              </button>
            </div>

            <div className="card path-card mist reveal-on-scroll delay-300">
              <div className="image-placeholder path-card-image">
                <img 
                  src={geneticPreventionImg} 
                  alt="Scientific clinical genetic screening consultation" 
                  className="premium-img"
                />
              </div>
              <h3>Reduce the risk of passing on an X-linked disorder.</h3>
              <p>
                For couples who are known carriers of X-linked or X-limited genetic conditions, 
                choosing the unaffected sex of the baby is one of the most reliable ways to reduce inheritance risk. 
                MicroSort makes this choice possible before conception.
              </p>
              <button onClick={() => navigateTo('/genetic-conditions')} className="btn btn-secondary" style={{ marginTop: 'auto' }}>
                Learn about genetic prevention <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - How It Works Preview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-offwhite)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 3rem auto', textAlign: 'center' }}>
            <span className="section-eyebrow">The methodology</span>
            <h2>How MicroSort works, in plain language</h2>
            <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>
              MicroSort separates sperm based on a measurable difference in DNA content between X-bearing (female-producing) 
              and Y-bearing (male-producing) sperm. The result is an enriched sample that is then used in IUI or IVF.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step reveal-on-scroll delay-100">
              <div className="process-num">01</div>
              <h4>Initial Consultation</h4>
              <p style={{ fontSize: '0.9375rem' }}>
                You speak with one of our licensed MicroSort laboratories to confirm eligibility, 
                review testing files, and plan your clinical timing.
              </p>
            </div>
            <div className="process-step reveal-on-scroll delay-200">
              <div className="process-num">02</div>
              <h4>Sample Sorting</h4>
              <p style={{ fontSize: '0.9375rem' }}>
                A semen sample is washed, stained with a safe DNA-binding marker, 
                and analyzed cell-by-cell inside a high-speed cytometer to isolate chosen sperm.
              </p>
            </div>
            <div className="process-step reveal-on-scroll delay-300">
              <div className="process-num">03</div>
              <h4>Assisted Reproduction</h4>
              <p style={{ fontSize: '0.9375rem' }}>
                The enriched sample is delivered directly to your physician for use in your IUI or IVF/ICSI 
                procedure on the scheduled day.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal-on-scroll">
            <button onClick={() => navigateTo('/how-it-works')} className="btn btn-secondary">
              See the full process <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 5 - Results Band */}
      <section className="section-padding results-band">
        <div className="container">
          <span className="section-eyebrow" style={{ color: '#D3E4F0' }}>Documented performance</span>
          <h2 className="reveal-on-scroll">A technology backed by published research</h2>
          <div className="results-display-row">
            <div className="results-display-item reveal-on-scroll delay-100">
              <span className="results-display-num">
                <AnimatedCounter value="93" prefix="~" suffix="%" />
              </span>
              <span className="results-display-label">Average purity for female sorts*</span>
            </div>
            <div className="results-display-item reveal-on-scroll delay-300">
              <span className="results-display-num">
                <AnimatedCounter value="82" prefix="~" suffix="%" />
              </span>
              <span className="results-display-label">Average purity for male sorts*</span>
            </div>
          </div>
          <p className="reveal-on-scroll">
            MicroSort's sorting methodology has been the subject of peer-reviewed clinical publications and 
            decades of laboratory refinement. Reported accuracy rates reflect average enrichment purities measured by flow cytometry. 
            Individual sample characteristics can affect final clinical results.
          </p>
          <div className="reveal-on-scroll" style={{ marginBottom: '1.5rem' }}>
            <button onClick={() => navigateTo('/results')} className="btn btn-ghost" style={{ color: 'white', borderColor: 'white' }}>
              See the published evidence <span className="btn-arrow">→</span>
            </button>
          </div>
          <span className="results-footnote reveal-on-scroll">
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
          <p style={{ maxWidth: '720px', margin: '0 auto 2rem auto' }}>
            MicroSort processing services are available exclusively through licensed and regulated partner clinics. 
            Select coordinates below to locate a specialized processing laboratory.
          </p>

          <LocationsMapPreview navigateTo={navigateTo} />

          <div style={{ marginTop: '2.5rem' }}>
            <button onClick={() => navigateTo('/locations')} className="btn btn-primary">
              View all 8 locations and procedures <span className="btn-arrow">→</span>
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
            <div className="testimonial-card reveal-on-scroll delay-100">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Our gorgeous little girl. Millions and trillions of thank-yous for helping us balance our family.
              </p>
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <img 
                  src={avatarFamily1} 
                  alt="Shelley and Paul F." 
                  className="testimonial-avatar" 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(15, 61, 92, 0.1)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div className="testimonial-author" style={{ margin: 0, fontWeight: '600', fontSize: '0.9375rem' }}>Shelley and Paul F.</div>
                  <div className="testimonial-location" style={{ fontSize: '0.8125rem', opacity: 0.7 }}>Family Balancing</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal-on-scroll delay-200">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Everyone at the laboratory was so nice and accommodating. I appreciate their warm support more than I can say.
              </p>
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <img 
                  src={avatarFather1} 
                  alt="Jeff B." 
                  className="testimonial-avatar" 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(15, 61, 92, 0.1)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div className="testimonial-author" style={{ margin: 0, fontWeight: '600', fontSize: '0.9375rem' }}>Jeff B.</div>
                  <div className="testimonial-location" style={{ fontSize: '0.8125rem', opacity: 0.7 }}>Genetic Prevention Carrier</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal-on-scroll delay-300">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Thank you for going above and beyond normal protocols to coordinate sample shipping with my local fertility clinic.
              </p>
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <img 
                  src={avatarMother1} 
                  alt="Elizabeth L." 
                  className="testimonial-avatar" 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(15, 61, 92, 0.1)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div className="testimonial-author" style={{ margin: 0, fontWeight: '600', fontSize: '0.9375rem' }}>Elizabeth L.</div>
                  <div className="testimonial-location" style={{ fontSize: '0.8125rem', opacity: 0.7 }}>Family Balancing</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal-on-scroll">
            <button onClick={() => navigateTo('/stories')} className="btn btn-secondary">
              Read more family stories <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 8 - Final CTA Band */}
      <section className="section-padding cta-band">
        <div className="container reveal-on-scroll">
          <h2>Ready to take the next step?</h2>
          <p>
            Speak with an official MicroSort laboratory patient coordinator. 
            All clinical inquiries are kept strictly confidential and involve no obligation.
          </p>
          <div className="cta-buttons">
            <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
              Contact a laboratory <span className="btn-arrow">→</span>
            </button>
            <button onClick={() => navigateTo('/faq')} className="btn btn-secondary">
              Browse FAQs <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
