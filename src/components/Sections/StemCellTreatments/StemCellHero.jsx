import { useEffect, useRef } from 'react';
import { ImageDivider } from '../../Common';
import './StemCellHero.css';

const StemCellHero = () => {
  const dividerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef(null);
  const imageRef = useRef(null);

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

    if (dividerRef.current) observer.observe(dividerRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (dividerRef.current) observer.unobserve(dividerRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const benefits = [
    'Many patients see improvements within 3-6 months, with results continuing to build over 6-9 months.',
    'Board-certified providers create personalized treatment plans for each patient\'s unique needs.',
    'Treatments help with joint pain, injuries, and chronic conditions without the risks of surgery.',
    'Patients can return to normal activities right away with no downtime needed.',
    'Free consultations are available to see if you\'re a good fit for regenerative medicine.'
  ];

  return (
    <section className="stem-cell-hero-section">
      <div className="stem-cell-hero-container">
        <div className="stem-cell-hero-content">
          <div className="stem-cell-hero-header">
            <div className="stem-cell-hero-divider-container">
              <img
                src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-747.png.webp"
                alt="Decorative divider"
                width="177"
                height="8"
                loading="lazy"
                className="stem-cell-hero-divider animated fadeInDown"
                data-animate-immediate="true"
                ref={dividerRef}
              />
            </div>
            <h1
              className="stem-cell-hero-title animated fadeInDown"
              data-animate-immediate="true"
              ref={titleRef}
            >
              Get Pain Relief with Stem Cell Treatments
            </h1>
            <p className="stem-cell-hero-text" ref={textRef}>
              QC Kinetix treatments use your body's own stem cells to help damaged tissues heal without surgery or drugs.
            </p>
          </div>

          <ul className="stem-cell-hero-list" ref={listRef}>
            {benefits.map((benefit, index) => {
              const isLink = index === 2; // Third item is a link
              const ListItem = isLink ? 'a' : 'div';
              const listItemProps = isLink ? { href: '/conditions/', className: 'stem-cell-hero-list-item stem-cell-hero-list-item-link' } : { className: 'stem-cell-hero-list-item' };
              
              return (
                <li key={index}>
                  <ListItem {...listItemProps}>
                    <div className="stem-cell-hero-list-icon">
                      <svg aria-hidden="true" className="check-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                      </svg>
                    </div>
                    <div className="stem-cell-hero-list-content">
                      <h4 className="stem-cell-hero-list-title">{benefit}</h4>
                    </div>
                  </ListItem>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="stem-cell-hero-image animated fadeIn"
          data-animate-immediate="true"
          ref={imageRef}
        >
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/09/AdobeStock_611064101-scaled-1.jpeg.webp"
            alt="Stem Cell Treatment"
            width="1707"
            height="2560"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default StemCellHero;

