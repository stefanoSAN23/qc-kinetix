import { useEffect, useRef } from 'react';
import './HowRegenerativeTreatsPain.css';

const HowRegenerativeTreatsPain = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

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
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const categories = [
    {
      title: "Joint Pain and Degeneration",
      description: (
        <>
          Many patients seek regenerative treatments for <a href="/joint-pain-treatments/" onClick={(e) => { e.preventDefault(); window.location.href = '/joint-pain-treatments/'; }}>chronic joint issues</a> that haven't responded to conservative care.
        </>
      ),
      link: "/joint-pain-treatments/"
    },
    {
      title: "Sports and Activity Injuries",
      description: "Athletes and active individuals often choose these treatments to address injuries without extended downtime."
    },
    {
      title: "Age-Related Conditions",
      description: "As we age, our bodies' natural restorative processes slow down – regenerative medicine may help support these processes."
    },
    {
      title: "Repetitive Use Injuries",
      description: "Repetitive stress and occupational injuries may respond to regenerative approaches."
    }
  ];

  return (
    <section className="how-regenerative-treats-pain-section">
      <div className="how-regenerative-treats-pain-container">
        <div className="how-regenerative-treats-pain-header">
          <h2 className="how-regenerative-treats-pain-title animated fadeInDown" ref={titleRef}>
            How Regenerative Medicine Treats Pain
          </h2>
          <div className="how-regenerative-treats-pain-intro animated fadeIn" ref={textRef}>
            <p>When considering regenerative medicine treatments, it's important to understand how these approaches differ from traditional pain management. Our treatments focus on supporting your body's natural restorative processes rather than simply managing symptoms.</p>
            <p>The types of regenerative medicine available at QC Kinetix are designed to address various musculoskeletal conditions without surgery. Each treatment type works differently, but all share the goal of helping your body address tissue damage at the source.</p>
          </div>
        </div>

        <div className="how-regenerative-treats-pain-categories">
          {categories.map((category, index) => (
            <div key={index} className="how-regenerative-category-item">
              <h3 className="how-regenerative-category-title">{category.title}</h3>
              <div className="how-regenerative-category-content">
                <div className="how-regenerative-divider">
                  {Array.from({ length: 7 }).map((_, dotIndex) => (
                    <div key={dotIndex} className="how-regenerative-dot"></div>
                  ))}
                </div>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-regenerative-treats-pain-footer">
          <p>Our medical team evaluates each patient individually to determine if regenerative medicine treatments are appropriate. Factors we consider include your specific condition, overall health, activity level, and treatment goals. Not everyone is a candidate for these treatments, and individual results vary.</p>
        </div>
      </div>
    </section>
  );
};

export default HowRegenerativeTreatsPain;


