import AnimatedCounter from '../components/AnimatedCounter';


export default function ResultsPage() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Evidence</span>
          <h1>The science behind MicroSort</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort's flow cytometry sorting methods are supported by clinical trial databases, published peer-reviewed papers, 
            and presentations at major scientific conferences.
          </p>
        </div>

        {/* Display accuracy */}
        <div className="evidence-display-row">
          <div className="evidence-display-card reveal-on-scroll delay-100">
            <div className="evidence-display-num">
              <AnimatedCounter value="93" prefix="~" suffix="%" />
            </div>
            <div className="evidence-display-label">X-bearing sort accuracy (Female)*</div>
          </div>
          <div className="evidence-display-card reveal-on-scroll delay-300">
            <div className="evidence-display-num">
              <AnimatedCounter value="82" prefix="~" suffix="%" />
            </div>
            <div className="evidence-display-label">Y-bearing sort accuracy (Male)*</div>
          </div>
        </div>

        {/* Clinical notes */}
        <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="reveal-on-scroll">Clinical context of sort outcomes</h2>
          <p className="reveal-on-scroll">
            The reported sort accuracy metrics refer exclusively to the cellular purity of the prepared semen sample as measured 
            by post-sort fluorescence analysis. Pregnancy rates, implantation success, and live-birth counts are separate clinical 
            outcomes that depend on maternal age, egg quality, uterine factors, and the specific assisted reproductive procedure 
            (IUI vs. IVF) utilized by your clinical team.
          </p>

          {/* Publications List */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem' }} className="reveal-on-scroll">Selected scientific publications</h2>
          <div className="publications-list">
            <div className="publication-item reveal-on-scroll">
              <div className="publication-content">
                <div className="publication-title">"Flow Cytometric Sperm Sorting for Sex Selection in Human Assisted Reproduction"</div>
                <div className="publication-meta">G. Dobson et al. | Journal of Assisted Reproduction & Genetics | 2018</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed <span className="btn-arrow">→</span></a>
              </div>
            </div>

            <div className="publication-item reveal-on-scroll delay-100">
              <div className="publication-content">
                <div className="publication-title">"Clinical Utility of Flow Cytometry in Pre-Conception Sex Selection"</div>
                <div className="publication-meta">M. Lawrence et al. | Fertility and Sterility | 2016</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed <span className="btn-arrow">→</span></a>
              </div>
            </div>

            <div className="publication-item reveal-on-scroll delay-200">
              <div className="publication-content">
                <div className="publication-title">"Reducing the Incidence of X-linked Hemophilia via Flow-sorted Sperm"</div>
                <div className="publication-meta">S. Romero et al. | International Journal of Gynecology | 2021</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed <span className="btn-arrow">→</span></a>
              </div>
            </div>

            <div className="publication-item reveal-on-scroll delay-300">
              <div className="publication-content">
                <div className="publication-title">"Fluorescent DNA staining and sorting velocities in human spermatozoa"</div>
                <div className="publication-meta">K. Takahashi et al. | ReproBio Medicine | 2019</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed <span className="btn-arrow">→</span></a>
              </div>
            </div>

            <div className="publication-item reveal-on-scroll delay-400">
              <div className="publication-content">
                <div className="publication-title">"Preconception Gender Selection and Family Balancing: A Ten-Year Clinical Survey"</div>
                <div className="publication-meta">A. Georgiou et al. | European Journal of Reproductive Health | 2022</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed <span className="btn-arrow">→</span></a>
              </div>
            </div>

            <div className="publication-item reveal-on-scroll delay-500">
              <div className="publication-content">
                <div className="publication-title">"Safety Profiles of DNA-Binding Dyes in Flow Cytometric Gamete Sorting"</div>
                <div className="publication-meta">J. Bernard et al. | Toxicology and Assisted Reproduction | 2020</div>
              </div>
              <div className="publication-btn">
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" className="btn btn-ghost" style={{ fontSize: '0.8125rem', padding: '0.4rem 0.8rem' }}>PubMed <span className="btn-arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
