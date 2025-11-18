import { useState, useEffect, useRef } from 'react';
import './FAQAccordion.css';

const FAQAccordion = ({ title, items, id }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const [searchQuery, setSearchQuery] = useState('');
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

  useEffect(() => {
    const handleSearch = (event) => {
      const query = event.detail?.query?.toLowerCase() || '';
      setSearchQuery(query);
      
      if (query) {
        // Find matching items
        const matchingIndex = items.findIndex((item, idx) => {
          const questionText = item.question.toLowerCase();
          const answerText = item.answer.toLowerCase();
          return questionText.includes(query) || answerText.includes(query);
        });
        
        if (matchingIndex !== -1) {
          setOpenIndex(matchingIndex);
          // Scroll to the accordion section
          const accordionElement = document.getElementById(id);
          if (accordionElement) {
            accordionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    window.addEventListener('faqSearch', handleSearch);
    return () => window.removeEventListener('faqSearch', handleSearch);
  }, [items, id]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredItems = searchQuery
    ? items.filter((item) => {
        const questionText = item.question.toLowerCase();
        const answerText = item.answer.toLowerCase();
        return questionText.includes(searchQuery) || answerText.includes(searchQuery);
      })
    : items;

  useEffect(() => {
    if (searchQuery) {
      // Small delay to allow all accordions to process the search
      const timeoutId = setTimeout(() => {
        const event = new CustomEvent('faqSearchResults', { 
          detail: { 
            noMatches: filteredItems.length === 0,
            hasMatches: filteredItems.length > 0,
            sectionId: id
          } 
        });
        window.dispatchEvent(event);
      }, 100);
      
      return () => clearTimeout(timeoutId);
    } else {
      const event = new CustomEvent('faqSearchResults', { 
        detail: { 
          noMatches: false,
          hasMatches: true,
          sectionId: id
        } 
      });
      window.dispatchEvent(event);
    }
  }, [searchQuery, filteredItems.length, id]);

  if (filteredItems.length === 0 && searchQuery) {
    return null; // Let parent handle "no matches" message
  }

  return (
    <section className="conditions-faqs-section" id={id}>
      <div className="conditions-faqs-container">
        <h2 
          className="conditions-faqs-title animated fadeInDown" 
          ref={titleRef}
          {...(id === 'aboutClinic' ? { 'data-animate-immediate': 'true' } : {})}
        >
          {title}
        </h2>

        <div className="conditions-faqs-accordion">
          {filteredItems.map((item, index) => {
            const actualIndex = items.indexOf(item);
            const isOpen = (index === 0 && openIndex === 0) || openIndex === actualIndex;
            return (
              <details
                key={actualIndex}
                className="conditions-faq-item"
                open={isOpen}
              >
                <summary
                  className="conditions-faq-question"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle(actualIndex);
                  }}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <span className="conditions-faq-question-text">{item.question}</span>
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
                <div className="conditions-faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }} />
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

