import { useEffect, useRef } from 'react';
import { ImageDivider } from '../../Common';
import './PainReliefJourney.css';

const steps = [
  {
    title: 'Immediate Relief',
    description:
      'Many of our patients experience immediate relief upon receiving their first treatment. Our treatment is a layered approach, so many patients will see increased improvement after they leave the facility.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-966.png.webp',
    connector: 'https://qckinetix.com/wp-content/plugins/bdthemes-element-pack/assets/images/direction/step-1.svg',
  },
  {
    title: 'Mid-Treatment Gains',
    description:
      'By mid-treatment, most patients are already experiencing the start of the regenerative process in their joint.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-967.png.webp',
    connector: 'https://qckinetix.com/wp-content/plugins/bdthemes-element-pack/assets/images/direction/step-3.svg',
  },
  {
    title: 'Steady Improvements',
    description:
      'Patients may see ebbs and flows of pain relief with an overall improvement to quality of life by their 4th treatment.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-968.png.webp',
    connector: 'https://qckinetix.com/wp-content/plugins/bdthemes-element-pack/assets/images/direction/step-3.svg',
  },
  {
    title: 'Before Protocol Ends',
    description:
      'We find that patients often experience a significant reduction in pain along with significant improvement in function well before the last treatment in their protocol.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-969.png.webp',
    connector: 'https://qckinetix.com/wp-content/plugins/bdthemes-element-pack/assets/images/direction/step-3.svg',
  },
  {
    title: 'Long-Term Results',
    description:
      'Most regenerative medicine patients will feel the full effects of their regenerative medicine treatments within 3 to 6 months.',
    icon: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-1054.png.webp',
  },
];

const PainReliefJourney = () => {
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
    <section className="pain-relief-journey">
      <div className="pain-relief-container">
        <div className="pain-relief-header" ref={headerRef}>
          <div className="pain-relief-heading animated fadeInDown animated-active">
            <h3>A Patient&apos;s</h3>
            <ImageDivider variant="green" className="pain-relief-divider" />
          </div>
          <h2 className="animated fadeInDown animated-active">Pain Relief Journey</h2>
          <p className="pain-relief-description">
            Patients undergoing care with QC Kinetix experience regenerative healing long after their
            treatment is complete and enjoy the benefits for years to come.
          </p>
        </div>

        <div className="pain-relief-steps">
          {steps.map((step, index) => (
            <div className={`pain-step pain-step-${index + 1}`} key={step.title}>
              <div className="pain-step-icon">
                <img src={step.icon} alt={step.title} width="45" height="45" loading="lazy" />
              </div>
              <div className="pain-step-body">
                <p>{step.description}</p>
              </div>
              <div className="pain-step-dots" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, dotIndex) => (
                  <span key={`dot-${step.title}-${dotIndex}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainReliefJourney;


