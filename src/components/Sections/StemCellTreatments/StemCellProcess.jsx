import { useEffect, useRef } from 'react';
import './StemCellProcess.css';

const StemCellProcess = () => {
  const consultationTitleRef = useRef(null);
  const processTitleRef = useRef(null);
  const afterTitleRef = useRef(null);
  const afterButtonRef = useRef(null);

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

    const refs = [
      consultationTitleRef,
      processTitleRef,
      afterTitleRef, afterButtonRef
    ];

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      {/* How It Works Section */}
      <section className="stem-cell-how-it-works-section">
        <div className="stem-cell-how-it-works-container">
          <div className="stem-cell-how-it-works-text">
            <p>QC Kinetix employs natural biologics, including stem cell treatments and platelet-rich plasma (PRP) therapy, to address pain and tissue damage, particularly in the joints. The process involves concentrating specific cells and growth factors from your own body—autologous stem cells from bone marrow or fat tissue, and platelets from blood. These concentrated biologics are then injected into the injured area to stimulate and support your body's natural restorative processes.</p>
            <p>These treatments are considered safe and effective because they use your body's own natural healing mechanisms. The injected cells and growth factors are already part of your body's repair system. By concentrating them at the site of injury, the therapy boosts the body's innate ability to restore and revitalize tissue, reduce inflammation, and alleviate pain without the need for surgery or medication.</p>
          </div>
        </div>
      </section>

      {/* The First Step - Consultation */}
      <section className="stem-cell-consultation-section">
        <div className="stem-cell-consultation-container">
          <div className="stem-cell-consultation-content">
            <h3 className="stem-cell-consultation-title animated fadeInDown" ref={consultationTitleRef}>
              The First Step - Consultation
            </h3>
            <div className="stem-cell-consultation-text">
              <p>The therapeutic process at QC Kinetix begins with a free consultation to determine if you are a candidate for stem cell treatment for back pain, knee pain, shoulder pain or another type of pain. During this initial appointment, a medical provider on our team conducts a focused examination and reviews your medical history and any previous diagnostic studies. This is a critical step to ensure your condition, such as discomfort from osteoarthritis or a sports injury, can be effectively treated with our non-surgical approach. The consultation also provides an opportunity for you to ask questions and learn more about the science behind the treatments.</p>
              <p>If you are a candidate, you will receive a personalized treatment plan tailored to your unique needs. The plans are often a multi-layered approach that can include various natural biologics, such as platelet-rich plasma (PRP) therapy and stem cell treatments. The first treatment can often begin the same day as the consultation.</p>
            </div>
          </div>
          <div className="stem-cell-consultation-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/09/AdobeStock_520966924-scaled-1-1024x683.jpeg.webp"
              alt="Medical Consultation"
              width="800"
              height="534"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Our Stem Cell Treatment Process */}
      <section className="stem-cell-process-section">
        <div className="stem-cell-process-container">
          <div className="stem-cell-process-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/09/AdobeStock_687771081-scaled-1-1024x780.jpeg.webp"
              alt="Stem Cell Treatment Process"
              width="800"
              height="609"
              loading="lazy"
            />
          </div>
          <div className="stem-cell-process-content">
            <h3 className="stem-cell-process-title animated fadeInDown" ref={processTitleRef}>
              Our Stem Cell Treatment Process
            </h3>
            <div className="stem-cell-process-text">
              <p>The stem cell treatment process typically involves two main phases. First, a small amount of the patient's biological material—either bone marrow or adipose (fat) tissue—is carefully extracted. This is a minimally invasive procedure, often performed under local anesthesia. The harvested material is then processed to concentrate the stem cells and other healing factors.</p>
              <p>Next, these concentrated cells are injected into the specific area of the body experiencing pain or damage, such as a knee joint or an injured tendon. The injected cells support the body's natural healing process by reducing inflammation and stimulating the restoration of damaged tissue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* After Treatment */}
      <section className="stem-cell-after-section">
        <div className="stem-cell-after-container">
          <div className="stem-cell-after-content">
            <h3 className="stem-cell-after-title animated fadeInDown" ref={afterTitleRef}>
              After Treatment
            </h3>
            <div className="stem-cell-after-text">
              <p>You may experience some discomfort or soreness at the site where the bone marrow or fat tissue is extracted. In the injection phase, some patients report feeling a brief pressure or pinching sensation as the stem cells are delivered to the targeted area. Overall, post-procedure discomfort is generally mild and temporary, often described as a soreness that is well-managed with over-the-counter pain relievers.</p>
              <p>Throughout the treatment plan, which can span several weeks to months, you will receive follow-up care to monitor your progress. The goal is to stimulate your body's natural healing processes and provide long-lasting pain relief and improved function without the need for surgery or medication. Many patients report experiencing some reduction in pain after their first appointment. Pain relief and improved quality of life increases as you progress through your treatment protocol.</p>
            </div>
            <div className="stem-cell-after-button animated fadeInUp" ref={afterButtonRef}>
              <a href="#contact" className="knee-pain-btn">
                Book a Consultation
              </a>
            </div>
          </div>
          <div className="stem-cell-after-image">
            <img
              src="https://qckinetix.com/wp-content/smush-webp/2025/09/AdobeStock_809007955-scaled-1-1024x684.jpeg.webp"
              alt="After Treatment Care"
              width="800"
              height="534"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StemCellProcess;

