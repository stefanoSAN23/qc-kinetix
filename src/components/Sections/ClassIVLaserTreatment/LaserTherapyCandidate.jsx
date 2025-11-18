import { useEffect, useRef } from 'react';
import Button from '../../Common/Button';
import BulletList from '../../Common/BulletList';
import './LaserTherapyCandidate.css';

const LaserTherapyCandidate = () => {
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
    'You have chronic pain in your back, joints, or limbs.',
    'Your pain is from injury, repetitive stress, osteoarthritis, or another chronic condition.',
    'You want to avoid surgery.',
    'You are not able to take time off work for surgical recovery.',
    'You can\'t or don\'t want to take the pain medications prescribed after surgery.',
    'You don\'t qualify for surgery.'
  ];

  return (
    <section className="laser-therapy-candidate-section" id="regMed">
      <div className="laser-therapy-candidate-container">
        <div className="laser-therapy-candidate-content">
          <h2 className="laser-therapy-candidate-title animated fadeInDown" ref={titleRef}>
            Are you a Candidate for Class IV Laser Therapy?
          </h2>

          <div className="laser-therapy-candidate-text">
            <p>Want to find out if our Class IV laser therapy treatments can help you? Schedule a free consultation today at your <a href="/qc-locations/">local QC Kinetix clinic location</a>. We will hear your concerns, review your medical records, conduct a medical exam, and answer your questions.</p>
            <p>These factors make you a good candidate for deep tissue laser therapy:</p>
            <BulletList
              items={candidateItems}
              twoColumns={false}
              className="laser-therapy-candidate-list"
            />
            <p>If any of these apply to you, contact us at QC Kinetix to find out about our Class IV laser therapy pain treatments.</p>
          </div>

          <div className="laser-therapy-candidate-button animated fadeInUp" ref={buttonRef}>
            <Button 
              text="Request an Appointment" 
              href="#contact" 
              variant="primary"
              size="small"
            />
          </div>
        </div>

        <div className="laser-therapy-candidate-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/09/DSC_3187-Edit-1024x681.jpg.webp"
            alt="Class IV Laser Therapy Candidate"
            width="800"
            height="532"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default LaserTherapyCandidate;

