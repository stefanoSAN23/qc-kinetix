import { useEffect, useRef } from 'react';
import './WhyChooseNonSurgical.css';

const WhyChooseNonSurgical = () => {
  const dividerRef = useRef(null);
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

    if (dividerRef.current) observer.observe(dividerRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (dividerRef.current) observer.unobserve(dividerRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const benefits = [
    {
      title: 'No Surgical Risks',
      text: 'You can avoid the risk of potential complications – such as infection, blood clots, or adverse reactions to anesthesia – that come with any surgical procedure.'
    },
    {
      title: 'Minimal to No Downtime',
      text: 'Unlike surgery, which often requires significant recovery time, these non-surgical treatments allow you to return to your normal daily activities almost immediately, without a long recovery period.'
    },
    {
      title: 'No Strong Pain Medication',
      text: 'By addressing the root cause of the pain, non-surgical therapies aim to provide real relief, lessening or eliminating the need for reliance on pain medications and their associated side effects.'
    }
  ];

  return (
    <section className="why-choose-non-surgical-section">
      <div className="why-choose-non-surgical-container">
        <div className="why-choose-non-surgical-content">
          {/* Left Column */}
          <div className="why-choose-non-surgical-left">
            <div className="why-choose-non-surgical-dots animated fadeInDown" ref={dividerRef}>
              {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className={`why-choose-non-surgical-dot ${index % 2 === 0 ? 'dot-green' : 'dot-green-dark'}`}
                />
              ))}
            </div>
            <h3 className="why-choose-non-surgical-title">
              Why Choose<br />Non-Surgical Treatment ?
            </h3>
            <p className="why-choose-non-surgical-intro">
              Opting for a non-surgical approach to pain management offers a compelling alternative to traditional surgery, providing several key benefits that prioritize patient convenience and safety. These benefits include:
            </p>
          </div>

          {/* Right Column */}
          <div className="why-choose-non-surgical-right">
            <ul className="why-choose-non-surgical-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="why-choose-non-surgical-list-item">
                  <div className="why-choose-non-surgical-list-icon">
                    <svg aria-hidden="true" className="check-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                    </svg>
                  </div>
                  <div className="why-choose-non-surgical-list-content">
                    <strong className="why-choose-non-surgical-list-title">{benefit.title}:</strong> {benefit.text}
                  </div>
                </li>
              ))}
            </ul>

            <p className="why-choose-non-surgical-final-text">
              Ultimately, choosing a non-surgical path can lead to a quicker, safer, and more natural recovery, helping you find natural pain relief and regain your quality of life without the drawbacks of an invasive procedure.
            </p>

            <div className="why-choose-non-surgical-button animated fadeInUp" ref={buttonRef}>
              <a href="/request-your-first-appointment/" className="knee-pain-btn">
                Request an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNonSurgical;

