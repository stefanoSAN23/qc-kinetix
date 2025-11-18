import { useState, useEffect, useRef } from 'react';
import './StemCellFAQs.css';

const StemCellFAQs = () => {
  const titleRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0); // First FAQ is open by default

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

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How long does it take to see results from stem cell treatments at QC Kinetix?',
      answer: 'Most patients start seeing improvements within three to six months. Results continue to get better over time and are usually fully realized at 6-9 months.'
    },
    {
      question: 'Can stem cell treatments help me avoid joint replacement surgery?',
      answer: 'Many QC Kinetix patients seek out our <a href="/conditions/">regenerative medicine services</a> as an alternative to joint replacement, choosing to preserve their natural joint instead of surgery.'
    },
    {
      question: 'What makes QC Kinetix different from other providers?',
      answer: 'QC Kinetix has board-certified providers who specialize in sports and orthopedic medicine. They offer personalized treatment plans and direct access to your medical team throughout your healing.'
    },
    {
      question: 'Are stem cell treatments safe and who can get them?',
      answer: 'QC Kinetix has found regenerative treatments to be safe and effective for joint and muscle problems. However, you must meet certain health requirements and cannot be pregnant or battling cancer.'
    }
  ];

  return (
    <section className="stem-cell-faqs-section">
      <div className="stem-cell-faqs-container">
        <h2 className="stem-cell-faqs-title animated fadeInDown" ref={titleRef}>
          Frequently Asked Questions about Stem Cell Treatments
        </h2>

        <div className="stem-cell-faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={index}
                className="stem-cell-faq-item"
                open={isOpen}
              >
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
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    ) : (
                      <svg aria-hidden="true" className="plus-icon" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                      </svg>
                    )}
                  </span>
                </summary>
                <div className="stem-cell-faq-answer">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StemCellFAQs;

