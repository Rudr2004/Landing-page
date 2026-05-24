import { useState } from 'react';
import { FAQ_DATABASE } from '../data/database';

export default function FaqPage({ activeCategory, setActiveCategory }) {
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
        <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Information Hub</span>
          <h1>Frequently asked questions</h1>
          <p>The questions intended families ask our clinical coordinators most often.</p>
        </div>

        <div className="faq-layout">
          {/* Sidebar Navigation */}
          <ul className="faq-sidebar-nav reveal-on-scroll">
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
          <div style={{ textAlign: 'left' }} className="reveal-on-scroll delay-200">
            {categories.slice(1).map((cat) => {
              // Filter categories based on sidebar selection
              if (activeCategory !== 'ALL' && activeCategory !== cat.id) return null;

              return (
                <div key={cat.id} className="faq-section-wrapper" id={`faq-section-${cat.id}`} style={{ marginBottom: '3rem' }}>
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
