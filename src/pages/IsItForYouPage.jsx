import InteractiveWizard from '../components/InteractiveWizard';

export default function IsItForYouPage({ navigateTo }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll">
          <span className="section-eyebrow">Patient Guidelines</span>
          <h1>Is MicroSort right for you?</h1>
          <p style={{ fontSize: '1.25rem' }}>
            MicroSort sperm sorting is designed for families who wish to balance the gender mix of their children, 
            or carriers of sex-linked genetic disorders seeking to prevent transmission.
          </p>
        </div>

        {/* Two Paths Callout */}
        <div className="qualifying-grid" style={{ marginBottom: '5rem' }}>
          <div className="qualifying-card family-balancing reveal-on-scroll">
            <span className="qualifying-tag">Indication 1</span>
            <h3>Family Balancing</h3>
            <p>
              Available to couples who want to have a child of the underrepresented sex in their family. 
              To qualify, you must already have at least one child, and sort for the opposite gender.
            </p>
            <ul className="qualifying-list">
              <li>Must have at least one child of one sex.</li>
              <li>Must sort for the underrepresented sex.</li>
              <li>Semen parameters must meet laboratory thresholds.</li>
            </ul>
          </div>

          <div className="qualifying-card genetic reveal-on-scroll delay-200">
            <span className="qualifying-tag">Indication 2</span>
            <h3>Genetic Prevention</h3>
            <p>
              Available to couples who are known carriers of sex-linked or sex-limited genetic disorders 
              (such as Hemophilia or Duchenne Muscular Dystrophy) to select the unaffected gender.
            </p>
            <ul className="qualifying-list">
              <li>No child requirement applies.</li>
              <li>Known family carrier status of X-linked disorder.</li>
              <li>Genetic consultation referral is recommended.</li>
            </ul>
          </div>
        </div>

        {/* Wizard Selector Container */}
        <div style={{ marginBottom: '5rem' }} className="reveal-on-scroll">
          <InteractiveWizard navigateTo={navigateTo} />
        </div>

        {/* Advanced details cards */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="reveal-on-scroll">Key parameters for laboratory acceptance</h2>
          <div className="eligibility-info-grid">
            <div className="eligibility-info-card reveal-on-scroll">
              <h3>Minimum Sperm Counts</h3>
              <p>
                Flow cytometry requires a minimum total number of motile sperm in the ejaculate to complete a successful sort. 
                Before a cycle can be confirmed, a preliminary semen analysis is required.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>For IUI:</strong> Minimum of 140 million total motile sperm.</li>
                <li><strong>For IVF:</strong> Minimum of 70 million total motile sperm.</li>
              </ul>
            </div>

            <div className="eligibility-info-card reveal-on-scroll delay-200">
              <h3>Female Age & Tracking</h3>
              <p>
                Because MicroSort is a preparation technique, pregnancy success ultimately depends on female fertility parameters. 
                Physicians recommend age-appropriate screening (AMH, FSH) and ovarian tracking.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>AMH and follicle count reviews.</li>
                <li>Ovarian tracking managed by local physician.</li>
                <li>Hormonal support timing.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
