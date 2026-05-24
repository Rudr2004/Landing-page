import { useState } from 'react';
import { MOCK_VERIFICATION_DATABASE } from '../data/database';

export default function VerifyPage() {
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
        <div className="reveal-on-scroll">
          <span className="section-eyebrow">Patient Portal</span>
          <h1>Verify your sort</h1>
          <p style={{ marginBottom: '3rem' }}>
            Every MicroSort procedure generates a unique verification code. 
            Use this portal to confirm the laboratory records on file.
          </p>
        </div>

        <div className="card verify-card reveal-on-scroll">
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
              Verify records <span className="btn-arrow">→</span>
            </button>
          </form>
          <p className="verify-helper">
            Your verification code is located on the laboratory summary sheets provided after your procedure. 
            For lost codes, contact your processing lab directly.
          </p>

          {hasSearched && (
            <div className="verify-results-box" style={{ animation: 'pageFadeInUp 0.5s ease' }}>
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
