import { useEffect, useRef, useState } from 'react';
import '../StemCellTreatments/StemCellFAQs.css';
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
  const titleRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

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

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="stem-cell-faqs-section wte-faqs-section">
      <div className="stem-cell-faqs-container">
        <h2 className="stem-cell-faqs-title animated fadeInDown" ref={titleRef}>
          FAQs About Our Clinic
        </h2>

        <div className="stem-cell-faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details key={index} className="stem-cell-faq-item" open={isOpen}>
                <summary
                  className="stem-cell-faq-question"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle(index);
                  }}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <h3 className="stem-cell-faq-question-text">{faq.question}</h3>
                  <span className="stem-cell-faq-icon">
                    {isOpen ? (
                      <svg aria-hidden="true" className="minus-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" className="plus-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    )}
                  </span>
                </summary>
                <div className="stem-cell-faq-answer">
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


