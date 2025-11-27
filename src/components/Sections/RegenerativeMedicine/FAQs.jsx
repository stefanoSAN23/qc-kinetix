import { useState, useEffect, useRef } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is regenerative medicine?',
      answer: "Regenerative medicine is an exciting medical field that harnesses the human body's natural abilities to repair and restore itself. It includes several alternative therapies for pain that utilize natural biologics to reduce inflammation and help injured tissues heal and repair. <a href=\"https://qckinetix.com/regenerative-medicine/\">Learn More</a>"
    },
    {
      question: 'Are your regenerative treatments safe?',
      answer: 'We have found regenerative treatments to be safe and effective when used locally for musculoskeletal injections (in and around joints and soft tissues). This has also been verified in multiple medical studies. We do not condone the use of any of these regenerative therapies for any systemic disease or administration intravenously.'
    },
    {
      question: 'What are the risks and side effects associated with your natural treatments?',
      answer: "Our natural pain treatments are injected at or near the site of the pain. Of course, as with any injection, there is always the risk of bleeding, local soreness, minor bruising, and possibly infection. But, in our experience, other than some localized soreness for a day or two, most people don't experience any significant issues with regenerative medicine treatments."
    },
    {
      question: 'Is there any reason I may not be a candidate for regenerative medicine treatment?',
      answer: 'Regenerative medicine is not appropriate for every cause of pain. Further, there are some conditions in which treatment is contraindicated. These are: Women who are pregnant or nursing; Anyone with a compromised immune system; Anyone with active cancer; Anyone currently going through a chemotherapy or radiation therapy regimen; If your pain comes from a total joint replacement; If you have kidney failure and require dialysis. If you are unsure whether you would be an ideal candidate for treatment at our clinic, <a href="https://qckinetix.com/qc-locations/">contact us today</a>.'
    },
    {
      question: 'What is the recovery time after regenerative medicine treatments?',
      answer: 'There is no significant downtime after the treatments. You may experience some minor soreness at the site for a day or two, but nothing that would impair your ability to work or move.'
    },
    {
      question: 'How long does it take for QC Kinetix alternative pain therapies to show results?',
      answer: 'You may experience positive results from regenerative treatments within just a few days or weeks. However, the results of the regenerative medicine protocol continue to build over time and are typically not fully realized for 6 to 9 months. Visit our <a href="https://qckinetix.com/success-stories/">Patient Testimonials</a> page to hear what others are saying about their experiences with QC Kinetix.'
    },
    {
      question: 'Is there a Medical Director involved with our treatment plans?',
      answer: 'Treatments are specially created by Dr. Mitchell Sheinkop, a board-certified orthopedic surgeon with decades of experience in joint replacement and regenerative medicine.'
    }
  ];

  return (
    <section className="faqs-section">
      <div className="faqs-container">
        <h2 className="faqs-title animated fadeInDown" ref={titleRef}>
          FAQs About Regenerative Medicine
        </h2>

        <div className="faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = (index === 0 && openIndex === 0) || openIndex === index;
            return (
              <details
                key={index}
                className="faq-item"
                open={isOpen}
              >
                <summary
                  className="faq-question"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle(index);
                  }}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    {isOpen ? (
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    )}
                  </span>
                </summary>
                <div className="faq-answer">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </details>
            );
          })}
        </div>

        <div className="faqs-button animated fadeInUp" ref={buttonRef}>
          <a href="/faq/" className="qc-btn">
            All FAQs
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;


