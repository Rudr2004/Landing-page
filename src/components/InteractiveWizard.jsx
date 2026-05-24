import { useState } from 'react';

export default function InteractiveWizard({ navigateTo }) {
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
        <div style={{ animation: 'pageFadeInUp 0.5s ease' }}>
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
        <div style={{ animation: 'pageFadeInUp 0.5s ease' }}>
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
        <div style={{ animation: 'pageFadeInUp 0.5s ease' }}>
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
            <div style={{ animation: 'pageFadeInUp 0.5s ease' }}>
              {eligibilityStatus === 'eligible' && (
                <div className="wizard-result-box eligible">
                  <span className="wizard-result-icon">✓</span>
                  <h4 className="wizard-result-title">Likely Eligible</h4>
                  <p style={{ fontSize: '0.9375rem', marginBottom: '1.5rem', color: '#1F6B3A' }}>
                    Based on your answers, your family meets the criteria for MicroSort processing. 
                    Local regulatory conditions apply based on your chosen region.
                  </p>
                  <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
                    Contact a laboratory coordinator <span className="btn-arrow">→</span>
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
