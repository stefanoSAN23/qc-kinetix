import { useState, useEffect, useRef } from 'react';
import './ConditionsFAQs.css';

const ConditionsFAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const titleRef = useRef(null);

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
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What types of regenerative medicine does QC Kinetix offer?',
      answer: "QC Kinetix offers two primary types of regenerative medicine: PRP (Platelet-Rich Plasma) treatments and stem cell procedures. Both use materials from your own body – PRP uses concentrated platelets from your blood, while stem cell treatments use cells collected from your bone marrow. These treatments are designed to support your body's natural restorative processes. The appropriate treatment type depends on your specific condition and medical evaluation."
    },
    {
      question: 'Which conditions respond best to regenerative medicine treatments?',
      answer: "Regenerative treatments may help various musculoskeletal conditions including osteoarthritis, tendon injuries, ligament damage, and certain sports injuries. Response varies significantly by individual, condition severity, and other factors. During your consultation, our medical team evaluates your specific situation to determine if you may be a candidate. Not all conditions are appropriate for regenerative medicine."
    },
    {
      question: 'How do regenerative medicine treatments differ from cortisone shots?',
      answer: "While cortisone shots primarily reduce inflammation temporarily, regenerative medicine treatments are designed to support your body's natural restorative processes. Cortisone provides symptom relief but may weaken tissues over time with repeated use. Regenerative treatments work with your body's own biological materials to address tissue damage. Individual results vary, and our team can discuss which approach may be appropriate for your situation."
    },
    {
      question: 'How long do regenerative medicine treatments take to show results?',
      answer: "Recovery timelines vary significantly based on the individual, condition treated, severity of condition, medications, weight, alcohol/tobacco use, stress to the treatment area, and type of regenerative medicine used. Some patients notice initial improvements within 2-4 weeks, while optimal results typically develop over 3-6 months as your body responds to treatment. Our medical team provides realistic expectations based on your specific condition during consultation."
    },
    {
      question: 'Who is not a candidate for regenerative medicine treatments?',
      answer: "Certain conditions make regenerative treatments inappropriate, including pregnancy, active cancer, compromised immunity, current chemotherapy or radiation, dialysis, and pain from total joint replacements. Age restrictions apply (must be 18 or older). Additionally, some conditions simply don't respond to regenerative medicine. We provide honest assessments during consultation about whether these treatments are appropriate for you."
    },
    {
      question: 'Do I need a referral for regenerative medicine treatments at QC Kinetix?',
      answer: "No referral is necessary to schedule a consultation at QC Kinetix. We provide comprehensive evaluations to determine if regenerative medicine treatments may help your condition. Our medical team reviews your medical history, current condition, and treatment goals during your initial consultation."
    },
    {
      question: 'How many regenerative medicine treatment sessions will I need?',
      answer: "The number of treatments varies based on your specific condition, its severity, and your body's response. Our medical team creates personalized treatment plans and adjusts based on your progress. We discuss expected treatment frequency during your consultation."
    },
    {
      question: 'Can regenerative medicine treatments help avoid surgery?',
      answer: "Many patients explore regenerative medicine as a non-surgical option for musculoskeletal conditions. While these treatments help some people avoid or delay surgery, results vary by individual and condition. We cannot guarantee surgery avoidance, but our treatments offer a minimally invasive option worth considering before surgical intervention. Our team provides honest assessments about your specific situation."
    }
  ];

  return (
    <section className="conditions-faqs-section">
      <div className="conditions-faqs-container">
        <h2 className="conditions-faqs-title animated fadeInDown" ref={titleRef}>
          Frequently Asked Questions About Regenerative Medicine Treatments
        </h2>

        <div className="conditions-faqs-accordion">
          {faqs.map((faq, index) => {
            const isOpen = (index === 0 && openIndex === 0) || openIndex === index;
            return (
              <details
                key={index}
                className="conditions-faq-item"
                open={isOpen}
              >
                <summary
                  className="conditions-faq-question"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle(index);
                  }}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <span className="conditions-faq-question-text">{faq.question}</span>
                  <span className="conditions-faq-icon">
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
                <div className="conditions-faq-answer">
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

export default ConditionsFAQs;

