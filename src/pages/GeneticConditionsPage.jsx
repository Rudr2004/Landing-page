import geneticPreventionImg from '../assets/genetic_prevention.png';

export default function GeneticConditionsPage({ navigateTo }) {
  return (
    <div className="genetic-theme">
      <section className="section-padding">
        <div className="container">
          <div className="genetic-hero-grid reveal-on-scroll" style={{ marginBottom: '4rem' }}>
            <div style={{ textAlign: 'left' }}>
              <span className="section-eyebrow">X-linked disorder prevention</span>
              <h1>Reducing the risk of X-linked genetic conditions</h1>
              <p style={{ fontSize: '1.1875rem' }}>
                For couples who carry sex-linked genetic disorders, choosing the unaffected biological sex is one of the most reliable 
                pre-conception methods to reduce transmission risk to offspring.
              </p>
              <button onClick={() => navigateTo('/contact')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Consult a coordinator <span className="btn-arrow">→</span>
              </button>
            </div>
            <div className="image-placeholder genetic-hero-placeholder reveal-on-scroll delay-200">
              <img 
                src={geneticPreventionImg} 
                alt="Clinical photo representing genetic prevention and consultation" 
                className="premium-img" 
                style={{ borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="reveal-on-scroll">Understanding X-linked inheritance</h2>
            <p className="reveal-on-scroll">
              X-linked conditions are genetic disorders caused by mutations on the X chromosome. Because male offspring inherit only 
              one X chromosome (from the mother) and one Y chromosome (from the father), they face a 50% probability of inheriting 
              the disorder if the mother is a carrier. In contrast, female offspring inherit two X chromosomes, rendering them 
              mostly unaffected carrier states rather than displaying severe clinical symptoms. 
            </p>
            <p className="reveal-on-scroll">
              By utilizing MicroSort to enrich the X-bearing sperm before fertilization, carriers can significantly increase their 
              chances of conceiving female offspring, thereby reducing the probability of transmitting active disease symptoms.
            </p>

            <h2 style={{ marginTop: '3.5rem' }} className="reveal-on-scroll">Common conditions utilizing MicroSort</h2>
            <p className="reveal-on-scroll">
              Sperm sorting is routinely integrated into treatment plans for families carrying mutations for:
            </p>
            <div className="conditions-grid">
              <div className="condition-tag reveal-on-scroll delay-100"><span className="condition-bullet"></span> Hemophilia A and B</div>
              <div className="condition-tag reveal-on-scroll delay-200"><span className="condition-bullet"></span> Duchenne & Becker muscular dystrophy</div>
              <div className="condition-tag reveal-on-scroll delay-300"><span className="condition-bullet"></span> Fragile X syndrome</div>
              <div className="condition-tag reveal-on-scroll delay-400"><span className="condition-bullet"></span> X-linked severe combined immunodeficiency (SCID)</div>
              <div className="condition-tag reveal-on-scroll delay-500"><span className="condition-bullet"></span> X-linked adrenoleukodystrophy</div>
              <div className="condition-tag reveal-on-scroll delay-100"><span className="condition-bullet"></span> Fabry disease</div>
            </div>

            <h2 style={{ marginTop: '3.5rem' }} className="reveal-on-scroll">How MicroSort minimizes inheritance risk</h2>
            <ol className="bullet-list-styled" style={{ listStyleType: 'decimal', paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '1rem' }} className="reveal-on-scroll">
                <strong>Sperm enrichment:</strong> Flow cytometry sorting isolates a highly enriched population of X-bearing sperm.
              </li>
              <li style={{ marginBottom: '1rem' }} className="reveal-on-scroll delay-100">
                <strong>Fertilization (IVF):</strong> The physician uses the enriched X sample to fertilize the retrieved eggs.
              </li>
              <li style={{ marginBottom: '1rem' }} className="reveal-on-scroll delay-200">
                <strong>Preimplantation Diagnosis (PGD):</strong> Biopsied embryo cells are analyzed to confirm chromosomal integrity.
              </li>
              <li style={{ marginBottom: '1rem' }} className="reveal-on-scroll delay-300">
                <strong>Transfer:</strong> Unaffected female embryos are selected for implantation, achieving high risk reduction.
              </li>
            </ol>

            <div className="counselling-callout reveal-on-scroll card" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', marginTop: '4rem' }}>
              <span className="counselling-icon" style={{ fontSize: '2.5rem' }}>🧬</span>
              <div className="counselling-text">
                <h3>The role of genetic counseling</h3>
                <p style={{ margin: 0 }}>
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
