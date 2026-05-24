import { useState } from 'react';
import familyBalancingImg from '../assets/family_balancing.png';

export default function FamilyBalancingPage({ navigateTo }) {
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
          <div style={{ textAlign: 'left' }} className="reveal-on-scroll">
            <span className="section-eyebrow">For families</span>
            <h1>Family balancing with MicroSort</h1>
            <p style={{ fontSize: '1.1875rem' }}>
              For parents who want to bring more gender variety to their growing family — 
              a clinically supported, internationally available option.
            </p>
            <button onClick={() => navigateTo('/is-it-for-you')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Confirm your eligibility <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="image-placeholder family-balancing-hero-placeholder reveal-on-scroll delay-200">
            <img 
              src={familyBalancingImg} 
              alt="Natural light photograph of siblings representing family balancing" 
              className="premium-img" 
              style={{ borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'left' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="reveal-on-scroll">What is family balancing?</h2>
            <p className="reveal-on-scroll">
              Family balancing refers to using assisted reproductive technology to influence the biological sex of a future child 
              when a family already has one or more children of one sex. It is a choice chosen by parents seeking to achieve gender variety 
              in their households. MicroSort is one of the only active sperm-sorting technologies available worldwide specifically for family balancing.
            </p>

            <h2 style={{ marginTop: '3.5rem' }} className="reveal-on-scroll">Who qualifies for family balancing?</h2>
            <p className="reveal-on-scroll">
              Our partner laboratories adhere to strict international ethical guidelines. You qualify for family balancing if:
            </p>
            <ul className="bullet-list-styled">
              <li className="bullet-list-styled-item reveal-on-scroll">
                <span className="bullet-list-styled-marker">✓</span>
                <span className="bullet-list-styled-text">You have at least one child of one sex.</span>
              </li>
              <li className="bullet-list-styled-item reveal-on-scroll delay-100">
                <span className="bullet-list-styled-marker">✓</span>
                <span className="bullet-list-styled-text">The procedure aims to select the opposite/underrepresented sex in the family.</span>
              </li>
              <li className="bullet-list-styled-item reveal-on-scroll delay-200">
                <span className="bullet-list-styled-marker">✓</span>
                <span className="bullet-list-styled-text">You complete the required pre-clinical infectious blood panel.</span>
              </li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: 'var(--color-secondary)' }} className="reveal-on-scroll">
              Important Note: We do not support first-child sex selection or selection that conflicts with these eligibility rules.
            </p>

            <h2 style={{ marginTop: '3.5rem' }} className="reveal-on-scroll">Combining with PGT-A</h2>
            <p className="reveal-on-scroll">
              Many family-balancing patients choose to combine MicroSort with IVF and Preimplantation Genetic Testing for Aneuploidy (PGT-A). 
              While MicroSort enriches the sperm sample to increase the percentage of the chosen chromosome before fertilization, 
              PGT-A allows the laboratory to verify the chromosomal sex of each embryo prior to transfer. Combining these options 
              maximizes the overall probability of a successful outcome.
            </p>

            {/* Timeline */}
            <h2 style={{ marginTop: '3.5rem', textAlign: 'center' }} className="reveal-on-scroll">Typical Procedure Timeline</h2>
            <div className="timeline-cards-grid">
              <div className="timeline-card reveal-on-scroll">
                <div className="timeline-card-step">Step 1</div>
                <div className="timeline-card-title">Initial inquiry</div>
                <div className="timeline-card-desc">Review eligibility files with a coordinator (1–2 weeks).</div>
              </div>
              <div className="timeline-card reveal-on-scroll delay-100">
                <div className="timeline-card-step">Step 2</div>
                <div className="timeline-card-title">Screening</div>
                <div className="timeline-card-desc">Complete medical blood panel and semen analysis (2–4 weeks).</div>
              </div>
              <div className="timeline-card reveal-on-scroll delay-200">
                <div className="timeline-card-step">Step 3</div>
                <div className="timeline-card-title">Sorting</div>
                <div className="timeline-card-desc">Travel to the lab (or ship frozen sample) for sorting (1–3 days).</div>
              </div>
              <div className="timeline-card reveal-on-scroll delay-300">
                <div className="timeline-card-step">Step 4</div>
                <div className="timeline-card-title">Treatment</div>
                <div className="timeline-card-desc">Physician performs IUI or IVF using the enriched sample.</div>
              </div>
            </div>

            {/* Accordions */}
            <h2 style={{ marginTop: '5rem', textAlign: 'center' }} className="reveal-on-scroll">Family Balancing FAQs</h2>
            <div className="accordion-wrapper reveal-on-scroll">
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
        <div className="container reveal-on-scroll">
          <h2>Have questions about family balancing?</h2>
          <p>Get in touch with a licensed coordinator to discuss clinics, travel, and logistics.</p>
          <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
            Speak with a MicroSort coordinator <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
