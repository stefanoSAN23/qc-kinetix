import { useEffect, useRef, useState } from 'react';
import './WhatToExpectFAQs.css';

const faqs = [
  {
    question: 'Does your local pain clinic have age restrictions?',
    answer:
      'Yes, age restrictions are clinic dependent. Most clinics require you to be 18 years old to be a QC Kinetix patient. As long as you meet the local clinic age requirement and our minimum health requirements, you can be considered as a candidate for regenerative medicine treatment.',
  },
  {
    question: 'Is there any reason I may not be a candidate for regenerative treatment?',
    answer:
      'Regenerative medicine is not appropriate for every cause of pain. Further, there are some conditions in which treatment is contraindicated. These include: women who are pregnant or nursing, anyone with a compromised immune system, anyone with active cancer, anyone currently going through a chemotherapy or radiation therapy regimen, pain stemming from a total joint replacement, or kidney failure requiring dialysis. If you are unsure whether you would be an ideal candidate for treatment at our clinic, contact us today.',
  },
  {
    question: 'What if I have been treated elsewhere before?',
    answer:
      'If you have been treated for pain before visiting QC Kinetix, please bring any diagnostic study films or reports to your free consultation so we can review them and avoid repeating any tests unnecessarily. We are always happy to provide a second opinion or determine whether you are eligible for our alternative therapies for pain.',
  },
  {
    question: 'Does QC Kinetix provide non-surgical treatments for other issues?',
    answer:
      'We currently offer regenerative medicine treatment to patients who suffer from pain, discomfort, or lack of mobility. Schedule your free consultation today to see how we can jump-start your healing process.',
  },
  {
    question: 'What is the expected expense for my regenerative medicine treatment?',
    answer:
      'We provide various regenerative medicine treatments for a wide range of conditions. We will need to examine you to learn about your issues before determining which therapies and how many treatments you need. At your free consultation, we will provide you with the exact price for the treatments we recommend. We also offer affordable payment plans with approved credit.',
  },
];

const WhatToExpectFAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
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
    <section className="wte-faqs-section">
      <div className="wte-faqs-container">
        <div className="wte-faqs-header animated fadeInDown" ref={headerRef}>
          <h2>FAQs About Our Clinic</h2>
        </div>

        <div className="wte-faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details key={faq.question} className="wte-faq-item" open={isOpen}>
                <summary
                  className="wte-faq-question"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  aria-expanded={isOpen}
                  role="button"
                >
                  <span>{faq.question}</span>
                  <span className="wte-faq-icon">{isOpen ? '−' : '+'}</span>
                </summary>
                <div className="wte-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectFAQs;

