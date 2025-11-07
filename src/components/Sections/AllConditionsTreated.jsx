import { useEffect, useRef } from 'react';
import './AllConditionsTreated.css';

const AllConditionsTreated = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

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

    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  const conditions = [
    { title: "Knee Pain", href: "/knee-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-251.svg" },
    { title: "Shoulder Pain", href: "/shoulder-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-648.svg" },
    { title: "Elbow Pain", href: "/elbow-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-649.svg" },
    { title: "Wrist Pain", href: "/wrist-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-651.svg" },
    { title: "Back Pain", href: "/back-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-652.svg" },
    { title: "Hip Pain", href: "/hip-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-653.svg" },
    { title: "Ankle Pain", href: "/ankle-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-654.svg" },
    { title: "Arthritis Pain", href: "/arthritis-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/04/Group-1074.svg" },
    { title: "Finger & Toe Pain", href: "/finger-toe-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-655.svg" },
    { title: "Hand & Foot Pain", href: "/foot-hand-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/04/Group-1077.svg" },
    { title: "Tendon & Ligament Pain", href: "/tendon-and-ligament-pain/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-251.svg" },
    { title: "Joint Pain", href: "/joint-pain-treatments/", icon: "https://qckinetix.com/wp-content/uploads/2025/03/Group-251.svg" }
  ];

  return (
    <section className="all-conditions-treated-section">
      <div className="all-conditions-treated-container">
        <h2 className="all-conditions-treated-title animated fadeInDown" ref={headerRef}>
          All Conditions Treated
        </h2>

        <div className="all-conditions-treated-grid animated fadeIn" ref={gridRef}>
          {conditions.map((condition, index) => (
            <div 
              key={index} 
              className="all-conditions-treated-card"
            >
              <div className="all-conditions-treated-card-icon">
                <img 
                  src={condition.icon} 
                  alt={`${condition.title} icon`}
                  width="50"
                  height="50"
                  loading="lazy"
                />
              </div>
              <div className="all-conditions-treated-card-content">
                <h4 className="all-conditions-treated-card-title">{condition.title}</h4>
                <a 
                  href={condition.href} 
                  className="all-conditions-treated-button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = condition.href;
                  }}
                >
                  <span className="all-conditions-treated-button-text">Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17.574" height="14.907" viewBox="0 0 17.574 14.907" className="all-conditions-treated-button-icon">
                    <g id="Group_526" data-name="Group 526" transform="translate(0.75 1.056)">
                      <line id="Line_43" data-name="Line 43" x2="15.855" transform="translate(0 6.398)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></line>
                      <path id="Path_76" data-name="Path 76" d="M1756,2931.116l5.242,6.4-5.242,6.4" transform="translate(-1745.387 -2931.116)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllConditionsTreated;

