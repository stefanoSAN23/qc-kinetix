import './WebinarHero.css';
import { WebinarShareButtons } from './WebinarShareButtons';

const WebinarHero = () => {
  return (
    <section className="webinar-hero-section">
      <div className="webinar-hero-container">
        <div className="webinar-hero-left">
          <img
            className="webinar-hero-divider animated fadeInLeft"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
            width="177"
            height="8"
            alt="Decorative divider"
            loading="lazy"
            data-animate-immediate="true"
          />
          <h1 className="webinar-hero-title">
            QC KINETIX WEBINAR: THE TRUTH ABOUT STEM CELLS AND PRP: HYPE OR HOPE? WHY SURGERY ISN'T YOUR ONLY OPTION FOR JOINT PAIN.
          </h1>
          <h2 className="webinar-hero-date">
            Date & Time Sep 23, 2025 01:00 PM<br />
            Eastern Time (US and Canada)
          </h2>
          <div className="webinar-hero-button-wrapper animated fadeInDown" data-animate-immediate="true">
            <a 
              href="https://qckinetix.ink/webinar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="webinar-register-button"
            >
              Register Here
            </a>
          </div>
        </div>
        <div className="webinar-hero-right">
          <div className="webinar-hero-image-wrapper">
            <img
              className="webinar-hero-image animated fadeInDown"
              src="https://qckinetix.com/wp-content/smush-webp/2025/08/ac468007-f3ec-4a82-9b0e-cccaded55527-768x240.png.webp"
              alt="QC Kinetix Webinar"
              loading="lazy"
              data-animate-immediate="true"
            />
          </div>
          <div className="webinar-share-buttons-top">
            <WebinarShareButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarHero;

