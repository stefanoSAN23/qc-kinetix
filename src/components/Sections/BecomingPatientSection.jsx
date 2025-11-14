import { useEffect, useRef } from 'react';
import './BecomingPatientSection.css';

const steps = [
  {
    title: 'Schedule an Appointment',
    description:
      'After you request an appointment, we will call you to set up a free consultation at the clinic nearest you.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-742-1.png.webp',
  },
  {
    title: 'Health History',
    description: 'A questionnaire will be sent to you via email for you to fill out prior to your first appointment.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-743-1.png.webp',
  },
  {
    title: 'Provider Exam',
    description:
      'You will meet with a Medical Provider for a focused medical examination to determine if treatment is recommended.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-744-1.png.webp',
  },
  {
    title: 'Consultation',
    description:
      'If treatment is recommended, the patient will discuss a tailored treatment plan with a patient liaison.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-745-1.png.webp',
  },
  {
    title: 'Treatment',
    description: 'You can start your first treatment as soon as the same day.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-746-1.png.webp',
  },
];

const BecomingPatientSection = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <section className="becoming-patient-section">
      <div className="becoming-patient-container">
        <div className="becoming-patient-header" ref={headerRef}>
          <div className="becoming-patient-heading animated fadeInDown">
            <h2>Becoming A Patient</h2>
            <div className="becoming-patient-dots" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={`bp-dot-${index}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="becoming-patient-steps">
          {steps.map((step, index) => (
            <article className="patient-step-card" key={step.title}>
              <div className="patient-step-icon">
                <img src={step.icon} alt={step.title} width="39" height="39" loading="lazy" />
              </div>
              <div className="patient-step-content">
                <h4>
                  <span>{step.title.split(':')[0]}</span>
                  {step.title.includes(':') && `: ${step.title.split(':')[1]}`}
                </h4>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomingPatientSection;

