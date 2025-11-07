import { useEffect, useRef } from 'react';
import './WhenWillYouSeeResults.css';

const WhenWillYouSeeResults = () => {
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

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="when-will-you-see-results-section">
      <div className="when-will-you-see-results-container">
        <div className="when-will-you-see-results-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/DMA_Detail_Mobile.png.webp"
            alt="Results Timeline"
            width="760"
            height="732"
            loading="lazy"
          />
        </div>
        <div className="when-will-you-see-results-content">
          <h2 className="when-will-you-see-results-title animated fadeInDown" ref={titleRef}>
            When Will You See Results?
          </h2>
          <div className="when-will-you-see-results-text">
            <p>When can you expect to see results from your stem cell treatments? Everyone is different. Some patients say they notice improvement as soon as a few days.</p>
            <ul>
              <li>Most patients see improvements in 3-6 months</li>
              <li>Improvements continue over the next 6-9 months</li>
              <li>Many patients report improvements lasting years</li>
            </ul>
            <p>The effectiveness and timeline of results are influenced by several factors, including the severity of the condition, the patient's overall health and age, and their adherence to post-treatment care instructions. Younger, healthier patients with less severe conditions often experience quicker and more pronounced results. The effects of the treatment can be long-lasting, with many patients reporting sustained improvements for years.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenWillYouSeeResults;

