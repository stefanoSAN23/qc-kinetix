import './WebinarSpeaker.css';
import { WebinarShareButtons } from './WebinarShareButtons';

const WebinarSpeaker = () => {
  return (
    <div className="webinar-speaker-section">
      <h2 className="webinar-speaker-title">Speaker</h2>
      <div className="webinar-speaker-image-wrapper">
        <img
          className="webinar-speaker-image"
          src="https://qckinetix.com/wp-content/smush-webp/2025/04/Ashley_Caravelli_QCK.jpg.webp"
          alt="Dr. Ashley Caravelli"
          loading="lazy"
        />
      </div>
      <div className="webinar-speaker-info">
        <p>
          <strong>Dr. Ashley Caravelli</strong><br />
          Board-Certified Physician &<br />
          Regenerative Medicine Expert
        </p>
      </div>
      <div className="webinar-speaker-share">
        <WebinarShareButtons />
      </div>
    </div>
  );
};

export default WebinarSpeaker;

