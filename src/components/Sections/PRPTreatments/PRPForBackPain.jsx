import { useEffect, useRef } from 'react';
import './PRPForBackPain.css';

const PRPForBackPain = () => {
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
    <section className="prp-for-back-pain-section" id="regMed">
      <div className="prp-for-back-pain-container">
        <div className="prp-for-back-pain-content">
          <h2 className="prp-for-back-pain-title animated fadeInDown" ref={titleRef}>
            PRP Therapy for Back Pain
          </h2>
          <div className="prp-for-back-pain-text">
            <p>When you're dealing with <a href="/back-pain/">chronic back pain</a>, it can feel like you're out of options. For years, the main treatments have been physical therapy, medications, and steroid injections, but these often only offer temporary relief or come with unwanted side effects.</p>
            <p>For many, the last resort has been surgery. Back surgery is a major procedure that is tough on the body, requiring a long and difficult recovery. Even then, success isn't guaranteed, and it carries the risk of infection, nerve damage, and "failed back surgery syndrome," where the pain remains or gets worse.</p>
            <p>PRP therapy for back pain offers a powerful alternative that avoids these risks. By using your own platelets and growth factors, this non-surgical treatment gets to the root cause of the pain, promoting natural healing and tissue repair. You get a less invasive path to lasting relief without the difficult recovery, uncertain outcomes, or complications of surgery.</p>
          </div>
        </div>
        <div className="prp-for-back-pain-image">
          <img
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/back-pain-6949392_1920.png.webp"
            alt="Back Pain Treatment"
            width="453"
            height="632"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default PRPForBackPain;

