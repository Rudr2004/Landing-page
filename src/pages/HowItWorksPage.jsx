
export default function HowItWorksPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll">
          <span className="section-eyebrow">The science</span>
          <h1>How MicroSort works</h1>
          <p style={{ fontSize: '1.25rem' }}>
            A detailed, clinical explanation of the sperm-sorting technology behind every MicroSort procedure — 
            what happens inside our cytometry instruments, why it functions, and the scope of its clinical limits.
          </p>
        </div>

        {/* The core idea */}
        <div className="card reveal-on-scroll" style={{ marginBottom: '4rem', textAlign: 'left' }}>
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
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal-on-scroll">What actually happens during a MicroSort procedure</h2>
          
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
          <h2 className="reveal-on-scroll">Why MicroSort is scientifically unique</h2>
          <p style={{ maxWidth: '720px', margin: '0 auto 3rem auto' }} className="reveal-on-scroll">
            MicroSort stands as the only technology designed to differentiate sperm based on real physical DNA density 
            rather than behavioral estimates.
          </p>
          <div className="diff-grid">
            <div className="diff-tile reveal-on-scroll delay-100">
              <div className="diff-tile-icon">🧬</div>
              <h3>Based on DNA difference — not motility tricks</h3>
            </div>
            <div className="diff-tile reveal-on-scroll delay-200">
              <div className="diff-tile-icon">🔬</div>
              <h3>Decades of validated clinical research</h3>
            </div>
            <div className="diff-tile reveal-on-scroll delay-300">
              <div className="diff-tile-icon">🛡️</div>
              <h3>Performed only in licensed bio-secure labs</h3>
            </div>
          </div>
        </div>

        {/* What it does and doesn't do */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal-on-scroll">Scope of Clinical Capabilities</h2>
          <div className="comparison-container">
            <div className="comparison-col does reveal-on-scroll">
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

            <div className="comparison-col doesnot reveal-on-scroll delay-200">
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
        <div style={{ textAlign: 'center' }} className="reveal-on-scroll">
          <button onClick={() => navigateTo('/is-it-for-you')} className="btn btn-primary">
            See if MicroSort is right for you <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
