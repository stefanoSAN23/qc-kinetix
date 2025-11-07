import { useEffect, useRef } from 'react';
import SectionHeader from '../Common/SectionHeader';
import './BenefitsOfLaserTherapy.css';

const BenefitsOfLaserTherapy = () => {
  useEffect(() => {
    // Animations handled by SectionHeader component
  }, []);

  return (
    <section className="benefits-of-laser-therapy-section">
      <div className="benefits-of-laser-therapy-container">
        <div className="benefits-of-laser-therapy-content">
          <div className="benefits-of-laser-therapy-left">
            <SectionHeader
              titlePart="Benefits of"
              mainTitle={
                <>
                  Class IV Deep Tissue<br />
                  Laser Therapy
                </>
              }
              dividerType="dots"
              dotsCount={5}
              className="benefits-of-laser-therapy-header-component"
            />

            <div className="benefits-of-laser-therapy-intro">
              <p>Class IV laser therapy works at the cellular level to reduce inflammation and restore mobility, accelerating healing, without surgery or downtime.</p>
              <p>Unlike traditional surgery, which often addresses symptoms by altering or replacing a joint, our non-surgical laser treatments focus on the root cause of your pain. Whether your condition is the result of arthritis, worn cartilage, tendonitis, or chronic inflammation, our Class IV laser therapy works with your body's own healing processes to revitalize tissues and improve function—all without invasive procedures.</p>
              <p>If you've been searching for "Class IV laser therapy near me," consider exploring our advanced <a href="/regenerative-medicine/">regenerative medicine</a> alternatives. Many patients who choose Class IV laser therapy experience significantly reduced pain and improved mobility.</p>
            </div>
          </div>

          <div className="benefits-of-laser-therapy-right">
            <div className="benefits-of-laser-therapy-features">
              <div className="benefits-of-laser-therapy-feature">
                <h3>Non-Invasive</h3>
                <p>Class IV laser therapy is a completely non-invasive treatment that offers a powerful alternative to surgery. Unlike an operation, which requires anesthesia and involves extensive procedures, laser therapy focuses on restoring and healing the affected area with no disruption to surrounding tissues. While surgery involves a difficult recovery with no guarantee of being pain-free, Class IV laser therapy offers an effective solution with minimal to no downtime, allowing you to resume your daily activities immediately.</p>
              </div>

              <div className="benefits-of-laser-therapy-feature">
                <h3>Lower Risks</h3>
                <p>The inherent risks associated with major surgery can include:</p>
                <ul>
                  <li>Additional pain and joint stiffening</li>
                  <li>Excessive bleeding and blood clots</li>
                  <li>Nerve damage</li>
                  <li>Risk of infection</li>
                  <li>Adverse reactions to anesthesia</li>
                </ul>
                <p>In contrast, Class IV laser therapy is exceptionally safe with very few risks or side effects, making it a much safer, non-invasive option for achieving lasting pain relief.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsOfLaserTherapy;

