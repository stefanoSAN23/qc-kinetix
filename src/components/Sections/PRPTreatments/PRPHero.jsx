import { useEffect, useRef } from 'react';
import { ImageDivider, Button } from '../../Common';
import './PRPHero.css';

const PRPHero = () => {
  const dividerRef = useRef(null);
  const titleRef = useRef(null);
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

    if (dividerRef.current) observer.observe(dividerRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (dividerRef.current) observer.unobserve(dividerRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="prp-hero-section">
      <div className="prp-hero-container">
        <div className="prp-hero-content">
          <div className="prp-hero-header">
            <div className="prp-hero-divider-container">
              <img
                src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-747.png.webp"
                alt="Decorative divider"
                width="177"
                height="8"
                loading="lazy"
                className="prp-hero-divider animated fadeInDown"
                data-animate-immediate="true"
                ref={dividerRef}
              />
            </div>
            <h1
              className="prp-hero-title animated fadeInDown"
              data-animate-immediate="true"
              ref={titleRef}
            >
              PRP Treatments
            </h1>
          </div>

          <div className="prp-hero-text-section">
            <h2>PRP Injections to Treat Joint Pain</h2>
            <p>QC Kinetix utilizes <a href="/regenerative-medicine/">advanced regenerative medicine</a>, including PRP treatments, to help patients find lasting relief from chronic pain without the risks, downtime, and extensive recovery associated with surgery.</p>
            <p><strong>Joint Pain</strong>: Offers relief for conditions affecting the knees, hips, shoulders, and other joints.</p>
            <p><strong>Musculoskeletal Injury Pain</strong>: Is effective for strains, sprains, torn ligaments, tendons, and other sports-related injuries.</p>
            <p><strong>Chronic Conditions</strong>: Reduces pain and inflammation from conditions like arthritis.</p>
            <p><strong>Back and Neck Pain</strong>: Addresses chronic pain in the spine, helping to improve mobility.</p>
            <p><strong>Foot and Hand Pain</strong>: Provides relief for pain in the extremities.</p>
          </div>

          <div
            className="prp-hero-button animated fadeInUp prp-hero-button-desktop"
            data-animate-immediate="true"
            ref={buttonRef}
          >
            <Button 
              text="Request an Appointment"
              href="/request-your-first-appointment/"
              variant="primary"
              size="medium"
              className="qc-btn"
            />
          </div>
        </div>

        <div className="prp-hero-image-wrapper">
          <div
            className="prp-hero-image animated fadeIn"
            data-animate-immediate="true"
            ref={imageRef}
          >
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/09/DSC_3399-1-1024x681.jpg.webp"
              alt="PRP Treatment"
              width="800"
              height="532"
              loading="lazy"
            />
          </div>
          <div className="prp-hero-bottom-text">
            <p>At QC Kinetix, we've seen countless patients regain their former vitality thanks to PRP therapy. They are once again able to participate in activities they love, whether it's playing with their grandkids, hiking a favorite trail, or simply walking without a cane. Many report improved function and a greater range of motion, allowing them to move freely and comfortably.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRPHero;

