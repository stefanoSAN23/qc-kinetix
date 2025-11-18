import { useEffect, useRef } from 'react';
import Button from '../../Common/Button';
import SectionHeader from '../../Common/SectionHeader';
import BulletList from '../../Common/BulletList';
import './LaserTherapyHero.css';

const LaserTherapyHero = () => {
  const buttonRef = useRef(null);
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

    if (buttonRef.current) observer.observe(buttonRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="laser-therapy-hero-section">
      <div className="laser-therapy-hero-container">
        <div className="laser-therapy-hero-content">
          <div className="laser-therapy-hero-header">
            <SectionHeader
              titlePart=""
              mainTitle={
                <>
                  Class IV Laser Therapy &<br />
                  Therapy
                </>
              }
              dividerType="dots"
              dotsCount={7}
              className="laser-therapy-hero-header-component"
              animateImmediate
            />
          </div>

          <div className="laser-therapy-hero-text-section">
            <h2>Reduce Pain with Class IV Laser Therapy</h2>
            <p>Are you seeking lasting relief from debilitating joint, tendon, or arthritis pain? At QC Kinetix, we offer hope through advanced <a href="/regenerative-medicine/">regenerative solutions</a>, including Class IV laser therapy. This targeted, non-invasive treatment stimulates your body's natural healing capabilities to reduce inflammation, ease pain, and accelerate repair.</p>
            <p>Our clinically studied Class IV laser therapy offers significant pain relief from <a href="/conditions/">conditions</a> including:</p>
            <BulletList
              items={[
                'Osteoarthritis',
                'Ligament injuries',
                'Worn or torn cartilage',
                'Tendon sprains or strains',
                'Bursitis',
                'Repetitive motion injuries'
              ]}
              twoColumns={true}
              className="laser-therapy-hero-list"
              itemClassName="laser-therapy-hero-list-item-white"
            />
            <p>Deep tissue laser therapy can help you reclaim your active lifestyle without surgery or a dependency on strong medications. It's a powerful, restorative tool to kick-start your body's cellular recovery process.</p>
          </div>

          <div
            className="laser-therapy-hero-button animated fadeInUp laser-therapy-hero-button-desktop"
            data-animate-immediate="true"
            ref={buttonRef}
          >
            <Button 
              text="Request an Appointment" 
              href="#contact" 
              variant="primary"
              size="small"
            />
          </div>
        </div>

        <div className="laser-therapy-hero-image-wrapper">
          <div
            className="laser-therapy-hero-image animated fadeIn"
            data-animate-immediate="true"
            ref={imageRef}
          >
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/09/DSC_4237-1024x681.jpg.webp"
              alt="Class IV Laser Therapy"
              width="800"
              height="532"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaserTherapyHero;

