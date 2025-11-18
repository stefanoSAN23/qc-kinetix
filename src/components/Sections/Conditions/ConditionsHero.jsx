import { useEffect, useRef } from 'react';
import './ConditionsHero.css';

const ConditionsHero = () => {
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
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

    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (dividerRef.current) observer.observe(dividerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (dividerRef.current) observer.unobserve(dividerRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="conditions-hero-section">
      <div className="conditions-hero-container">
        <div className="conditions-hero-content">
          <div className="conditions-hero-left">
            <div className="conditions-hero-header-component">
              <div className="conditions-hero-header-top">
                <h2
                  className="conditions-hero-title-part animated"
                  data-animate-immediate="true"
                  ref={subtitleRef}
                >
                  Conditions Treated by
                </h2>
              </div>
              <h2
                className="conditions-hero-main-title animated"
                data-animate-immediate="true"
                ref={titleRef}
              >
                Regenerative<br />
                Medicine Treatments
              </h2>
              <div
                className="conditions-hero-divider-dots animated"
                data-animate-immediate="true"
                ref={dividerRef}
              >
                {Array.from({ length: 7 }).map((_, index) => (
                  <div key={index} className="conditions-hero-dot"></div>
                ))}
              </div>
            </div>
            <div className="conditions-hero-text">
              <p>QC Kinetix offers different types of regenerative medicine designed to address the source of your pain. Our regenerative medicine treatments include <a href="/regenerative-medicine/stem-cell-treatments/" onClick={(e) => { e.preventDefault(); window.location.href = '/regenerative-medicine/stem-cell-treatments/'; }}>stem cell</a> and <a href="/regenerative-medicine/prp-treatments/" onClick={(e) => { e.preventDefault(); window.location.href = '/regenerative-medicine/prp-treatments/'; }}>PRP treatments</a> that work with your body's natural ability to restore and repair itself. These non-surgical options may help various musculoskeletal conditions without the risks and downtime of surgery.</p>
            </div>
          </div>
          <div className="conditions-hero-right">
            <div
              className="conditions-hero-image animated fadeIn"
              data-animate-immediate="true"
              ref={imageRef}
            >
              <img
                src="https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-40.png.webp"
                alt="Conditions Treated"
                width="600"
                height="773"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConditionsHero;
