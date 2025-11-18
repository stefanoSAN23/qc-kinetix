import { useEffect, useRef } from 'react';
import './GreatCandidate.css';

const GreatCandidate = () => {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const candidateItems = [
    'Are experiencing pain',
    'Have an unhealed musculoskeletal injury or damage',
    'Have a degenerative condition',
    'Are not considered a good candidate for surgery (high blood pressure, etc.)',
    'Wish to avoid opioids and/or pain medications',
    'Cannot take significant time away from work',
    'Are anxious to avoid surgery'
  ];

  return (
    <section className="great-candidate-section">
      <div className="great-candidate-container">
        <div className="great-candidate-image">
          <figure className="candidate-image-wrapper">
            <img 
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-631.png.webp" 
              alt="Regenerative Medicine Consultation" 
              width="690" 
              height="503"
              loading="lazy"
            />
            <figcaption className="candidate-image-caption">
              The best way to learn whether you're a good candidate for regenerative therapy is to schedule your free consultation with QC Kinetix.
            </figcaption>
          </figure>
        </div>

        <div className="great-candidate-content">
          <h2 className="great-candidate-title animated fadeInDown" ref={titleRef}>
            You may be a great candidate for regenerative treatments if<br /> you:
          </h2>

          <ul className="great-candidate-list">
            {candidateItems.map((item, index) => (
              <li key={index}>
                {index === 0 ? <strong>{item}</strong> : item}
              </li>
            ))}
          </ul>

          <p className="great-candidate-text">
            Regenerative medicine is not for everyone. For instance, it is not a good fit for a patient who is pregnant or is battling cancer.
          </p>

          <div className="great-candidate-button animated fadeInUp" ref={buttonRef}>
            <a href="/request-your-first-appointment/" className="knee-pain-btn">
              Request an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreatCandidate;


