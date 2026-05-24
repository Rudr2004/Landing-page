import avatarFamily1 from '../assets/avatar_family1.png';
import avatarFather1 from '../assets/avatar_father1.png';
import avatarMother1 from '../assets/avatar_mother1.png';
import avatarFamily2 from '../assets/avatar_family2.png';
import avatarCoupleUae from '../assets/avatar_couple_uae.png';
import avatarFamilyAsian from '../assets/avatar_family_asian.png';

export default function StoriesPage({ navigateTo }) {
  const testimonials = [
    {
      quote: "Our gorgeous little girl. Millions and trillions of thank-yous to the technical team at Puerto Vallarta.",
      author: "Shelley and Paul F. — Mexico",
      avatar: avatarFamily1
    },
    {
      quote: "Everyone was so accommodating and respectful of our medical choices. I appreciate that more than I can say.",
      author: "Jeff B. — Switzerland",
      avatar: avatarFather1
    },
    {
      quote: "Thank you for going above and beyond all normal protocols to coordinate sample shipping with our local clinic.",
      author: "Elizabeth L. — North Cyprus",
      avatar: avatarMother1
    },
    {
      quote: "Carrying a gene for hemophilia was a heavy burden. MicroSort X-enrichment gave us the peace of mind we needed.",
      author: "Sarah and Marc T. — Germany",
      avatar: avatarFamily2
    },
    {
      quote: "We completed our cycle in Cyprus. The coordination and hospitality made a complex journey feel comfortable.",
      author: "Rania and Khaled S. — UAE",
      avatar: avatarCoupleUae
    },
    {
      quote: "We now have a balanced family with a boy and a girl. We are thankful for the medical staff in Malaysia.",
      author: "Mei-Ling and John W. — Singapore",
      avatar: avatarFamilyAsian
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Family Stories</span>
          <h1>The families behind the science</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            Read real accounts of parents who used MicroSort sperm-sorting technologies to balance their family mix 
            or reduce genetic transmission risks.
          </p>
        </div>

        {/* Featured Story */}
        <div className="featured-story-card reveal-on-scroll">
          <div>
            <div className="featured-story-quote">
              “We wanted to balance our home after having three active boys. MicroSort gave us that hope.”
            </div>
            <span className="featured-story-attribution">Elena and David R. — Switzerland / Family Balancing</span>
          </div>
          <div className="featured-story-narrative">
            <p>
              "Having three wonderful boys brought incredible joy to our lives, but we always dreamed of introducing a daughter to our family. 
              After discussing our choices with our local fertility specialist, we were referred to the MicroSort laboratory in Basel. 
              The initial consultation answered all our questions and thoroughly set expectations."
            </p>
            <p>
              "The coordination between our local clinic and the sorting laboratory was seamless. 
              We decided to combine our IVF cycle with Preimplantation Testing for absolute confirmation. 
              We feel incredibly grateful for the clinical team who helped us fulfill our hope."
            </p>
          </div>
        </div>

        {/* 6 Stories Grid */}
        <div className="stories-inner-grid">
          {testimonials.map((test, idx) => (
            <div key={idx} className={`testimonial-card reveal-on-scroll delay-${((idx % 3) * 100) + 100}`}>
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">{test.quote}</p>
              
              <div className="testimonial-author-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <img 
                  src={test.avatar} 
                  alt={test.author} 
                  className="testimonial-avatar" 
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid rgba(15, 61, 92, 0.1)' }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div className="testimonial-author" style={{ margin: 0, fontWeight: '600', fontSize: '0.9375rem' }}>{test.author.split(' — ')[0]}</div>
                  <div className="testimonial-location" style={{ fontSize: '0.8125rem', opacity: 0.7 }}>{test.author.split(' — ')[1]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Share */}
        <div className="card cta-band reveal-on-scroll" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Share your family story</h2>
          <p>
            If MicroSort played a role in your family's journey, we would love to hear from you. 
            Sharing your experience can guide other intended parents.
          </p>
          <button onClick={() => navigateTo('/contact')} className="btn btn-secondary">
            Share your story <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
