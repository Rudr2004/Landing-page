

export default function PlanningPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Procedure integration</span>
          <h1>Planning your MicroSort cycle</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort works in close coordination with your primary fertility specialist. 
            Review how the sorting process integrates with different assisted reproductive procedures.
          </p>
        </div>

        {/* 3 Options */}
        <div className="procedures-grid">
          <div className="card procedure-card reveal-on-scroll">
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

          <div className="card procedure-card reveal-on-scroll delay-150">
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

          <div className="card procedure-card reveal-on-scroll delay-300">
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
        <div className="counselling-callout reveal-on-scroll card" style={{ maxWidth: '800px', margin: '4rem auto 0 auto', padding: '2.5rem', display: 'flex', gap: '1.5rem' }}>
          <span className="counselling-icon" style={{ fontSize: '2.5rem' }}>🏥</span>
          <div className="counselling-text" style={{ textAlign: 'left' }}>
            <h3>Coordinating with your local physician</h3>
            <p style={{ margin: 0 }}>
              Many MicroSort patients undergo initial ovarian stimulation and diagnostic tracking at their local fertility clinic, 
              only traveling to a licensed MicroSort lab for the day of the sort itself. Our laboratory coordinators regularly 
              manage shipping logistics and timing protocols with clinics worldwide.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }} className="reveal-on-scroll">
          <button onClick={() => navigateTo('/locations')} className="btn btn-primary">
            Find a licensed laboratory near you <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
