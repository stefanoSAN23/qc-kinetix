import { useEffect, useRef } from 'react';
import SectionHeader from '../../Common/SectionHeader';
import './BenefitsOfPRP.css';

const BenefitsOfPRP = () => {
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

    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const benefits = [
    {
      title: 'Faster Recovery',
      text: 'Patients can avoid the long, painful recovery periods that often follow surgery, which can leave them with limited mobility for weeks or months.'
    },
    {
      title: 'Less Downtime',
      text: 'Patients can return to their daily lives, work, and favorite activities much faster, without the extensive downtime required for surgical rehabilitation.'
    },
    {
      title: 'Natural Healing',
      text: 'These therapies work with your body\'s own natural healing processes, providing a more natural and less traumatic path to lasting pain relief.'
    },
    {
      title: 'Reduced Risks',
      text: 'Non-surgical options eliminate the risks associated with the operating room, such as infection, bleeding, scarring, anesthesia complications, and nerve damage.'
    },
    {
      title: 'No Opioid Pain Medication',
      text: 'By avoiding invasive procedures, patients can also avoid the need for opioid pain medication, which is often prescribed during surgical recovery.'
    }
  ];

  return (
    <section className="benefits-of-prp-section">
      <div className="benefits-of-prp-container">
        <div className="benefits-of-prp-content">
          <div className="benefits-of-prp-left">
            <SectionHeader
              titlePart="Benefits of"
              mainTitle="PRP Treatments"
              dividerType="dots"
              dotsCount={5}
              className="benefits-of-prp-header-component"
            />

            <div className="benefits-of-prp-intro">
              <p>Avoiding surgery offers numerous benefits that make it an attractive option for pain relief. By choosing non-surgical treatments like PRP therapy, patients can bypass the significant downsides of going under the knife.</p>
              <p>By avoiding surgery, you gain these benefits:</p>
            </div>
          </div>

          <div className="benefits-of-prp-right">
            <ul className="benefits-of-prp-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefits-of-prp-list-item">
                <div className="benefits-of-prp-list-icon">
                  <svg aria-hidden="true" className="check-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                  </svg>
                </div>
                <div className="benefits-of-prp-list-content">
                  <strong className="benefits-of-prp-list-title">{benefit.title}:</strong> {benefit.text}
                </div>
              </li>
            ))}
            </ul>

            <div className="benefits-of-prp-final-text">
              <p><span style={{ fontWeight: 400 }}>Start your journey toward a life without chronic pain. Schedule a free consultation at QC Kinetix to find out if regenerative medicine is right for you. Before your first visit, find out </span><a href="https://qckinetix.com/what-to-expect/"><span style={{ fontWeight: 400 }}>what to expect from QC Kinetix</span></a><span style={{ fontWeight: 400 }}>.</span></p>
            </div>

            <div className="benefits-of-prp-button animated fadeInUp" ref={buttonRef}>
              <a href="/request-your-first-appointment/" className="qc-btn">
                Request an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfPRP;

