import { useEffect, useRef } from 'react';
import Button from '../../Common/Button';
import SectionHeader from '../../Common/SectionHeader';
import './WhatIsLaserTherapy.css';

const WhatIsLaserTherapy = () => {
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

  return (
    <section className="what-is-laser-therapy-section">
      <div className="what-is-laser-therapy-container">
        <SectionHeader
          titlePart="What is"
          mainTitle="Class IV Laser Therapy?"
          dividerType="image"
          className="what-is-laser-therapy-header-component"
        />

        <div className="what-is-laser-therapy-text">
          <p>Class IV laser therapy is a targeted, non-invasive treatment that works at the cellular level, using high-energy light to penetrate deep into tissue. This process, known as photobiomodulation, delivers light energy (photons) directly to your cells. The cells absorb this energy, which stimulates metabolic activity.</p>
          <p>Class IV laser therapy:</p>
          <p><strong>Promotes blood flow</strong> – bringing oxygen and nutrients to injured areas to support healing.</p>
          <p><strong>Stimulates cellular repair</strong> – encouraging cellular restoration and the efficient production of energy.</p>
          <p><strong>Reduces inflammation</strong> – calming inflamed tissues to relieve pain and swelling.</p>
          <p><strong>Decreases pain</strong> – reducing pain signals in the affected area.</p>
          <p><strong>Improves function and range of motion</strong> – allowing joints and muscles to move more freely.</p>
          <p><strong>Supports natural healing</strong> – enhancing the body's own repair mechanisms without surgery or medication.</p>
        </div>

        <div className="what-is-laser-therapy-spacer"></div>

        <div className="what-is-laser-therapy-button animated fadeInUp" ref={buttonRef}>
          <Button 
            text="Request an Appointment" 
            href="#contact" 
            variant="primary"
            size="small"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsLaserTherapy;

