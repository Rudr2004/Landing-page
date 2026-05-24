import { useState } from 'react';

export default function ContactPage({ navigateTo }) {
  const [selectedLab, setSelectedLab] = useState("I'm not sure yet");
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
    if (consent) setIsSubmitted(true);
  };

  const handleCheckboxChange = (method) => {
    setContactMethods({
      ...contactMethods,
      [method]: !contactMethods[method]
    });
  };

  const labs = [
    'Mexico', 'North Cyprus', 'Japan', 'Malaysia', 'Cambodia', 'Thailand', 'Nigeria', 'Switzerland', "I'm not sure yet"
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll">
          <span className="section-eyebrow">Inquiries</span>
          <h1>Speak with a MicroSort Laboratory</h1>
          <p style={{ fontSize: '1.25rem' }}>
            Every initial conversation is confidential and carries no obligation. 
            Choose your preferred laboratory or submit the inquiry form below to be routed.
          </p>
        </div>

        <div className="contact-layout">
          <div>
            {isSubmitted ? (
              <div className="contact-success-box" style={{ animation: 'pageFadeInUp 0.5s ease' }}>
                <span className="contact-success-icon">✉️</span>
                <h2 className="contact-success-title">Inquiry Submitted Successfully</h2>
                <p className="contact-success-desc">
                  Thank you. A patient coordinator from <strong>{selectedLab === "I'm not sure yet" ? 'our international office' : `MicroSort ${selectedLab}`}</strong> will review your file and contact you within 1 business day.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '2rem' }}>
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div className="contact-form-card reveal-on-scroll">
                <form onSubmit={handleContactSubmit}>
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
                      <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name" className="form-label">Last Name *</label>
                      <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-input" required />
                    </div>
                  </div>

                  <div className="form-grid-2" style={{ marginTop: '1.5rem' }}>
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">Email Address *</label>
                      <input type="email" id="contact-email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="residence-country" className="form-label">Country of Residence *</label>
                      <input type="text" id="residence-country" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="e.g. United Kingdom" className="form-input" required />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label htmlFor="contact-phone" className="form-label">Phone Number (Optional)</label>
                    <input type="tel" id="contact-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +44 20 7946 0958" className="form-input" />
                  </div>

                  <div className="form-group-radio" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">Reason for Inquiry</label>
                    {['Family balancing', 'Genetic condition', 'Both / Not sure yet'].map((r) => (
                      <label key={r} className="radio-option">
                        <input type="radio" name="reason" value={r} checked={inquiryReason === r} onChange={() => setInquiryReason(r)} className="radio-input" />
                        <span className="radio-label">{r === 'Genetic condition' ? 'X-linked genetic condition' : r}</span>
                      </label>
                    ))}
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">Do you already have a fertility clinic?</label>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      {['Yes', 'No'].map((c) => (
                        <label key={c} className="radio-option">
                          <input type="radio" name="hasClinic" value={c} checked={hasClinic === c} onChange={() => setHasClinic(c)} className="radio-input" />
                          <span className="radio-label">{c}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: '1.5rem' }}>
                    <label htmlFor="contact-notes" className="form-label">Additional notes or questions</label>
                    <textarea id="contact-notes" rows="4" maxLength="500" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Share details you'd like us to review (Max 500 characters)" className="form-input" style={{ resize: 'vertical' }}></textarea>
                  </div>

                  <div className="checkbox-group" style={{ marginTop: '1.5rem' }}>
                    <label className="form-label">Preferred Contact Methods</label>
                    {['email', 'phone', 'whatsapp'].map((method) => (
                      <label key={method} className="checkbox-option">
                        <input type="checkbox" checked={contactMethods[method]} onChange={() => handleCheckboxChange(method)} className="checkbox-input" />
                        <span className="checkbox-label">{method === 'email' ? 'Email' : method === 'phone' ? 'Phone Call' : 'WhatsApp Message'}</span>
                      </label>
                    ))}
                  </div>

                  <div className="checkbox-group" style={{ marginTop: '1.5rem' }}>
                    <label className="checkbox-option">
                      <input type="checkbox" checked={consent} onChange={() => setConsent(!consent)} className="checkbox-input" required />
                      <span className="checkbox-label" style={{ fontWeight: '500' }}>
                        I agree to be contacted by a MicroSort patient coordinator. I understand that my medical data will be kept private. *
                      </span>
                    </label>
                  </div>

                  <button type="submit" disabled={!consent} className="btn btn-primary contact-submit-btn" style={{ marginTop: '1.5rem', opacity: consent ? 1 : 0.6 }}>
                    Send my inquiry <span className="btn-arrow">→</span>
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="contact-sidebar">
            <div className="contact-info-card reveal-on-scroll delay-100" style={{ textAlign: 'left' }}>
              <h3>Prefer to call?</h3>
              <p>Speak directly with our centralized coordination office.</p>
              <div className="contact-phone-block">
                <a href="tel:+18005550199" className="contact-phone-num">+1 (800) 555-0199</a>
                <span className="contact-phone-hours">Available Mon - Fri, 8:00 AM - 5:00 PM EST</span>
              </div>
            </div>

            <div className="contact-info-card reveal-on-scroll delay-200" style={{ textAlign: 'left' }}>
              <h3>Send us an email</h3>
              <p>For administrative questions or clinic licensing inquiries:</p>
              <a href="mailto:info@microsort.com" className="contact-email-link">info@microsort.com</a>
            </div>

            <div className="contact-links-card reveal-on-scroll delay-300" style={{ textAlign: 'left' }}>
              <h3>Useful Pages</h3>
              <ul className="contact-quick-links">
                <li className="contact-quick-link-item">
                  <a onClick={() => navigateTo('/how-it-works')} style={{ cursor: 'pointer' }}>Science behind sorting <span className="btn-arrow">→</span></a>
                </li>
                <li className="contact-quick-link-item">
                  <a onClick={() => navigateTo('/is-it-for-you')} style={{ cursor: 'pointer' }}>Eligibility checklist <span className="btn-arrow">→</span></a>
                </li>
                <li className="contact-quick-link-item">
                  <a onClick={() => navigateTo('/faq')} style={{ cursor: 'pointer' }}>Frequently Asked Questions <span className="btn-arrow">→</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
