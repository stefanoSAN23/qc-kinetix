import './WebinarSidebar.css';
import { WebinarShareButtons } from './WebinarShareButtons';

const WebinarSidebar = () => {
  return (
    <div className="webinar-sidebar-wrapper">
      <div className="webinar-sidebar">
        <h2 className="webinar-sidebar-title">Speaker</h2>
        <div className="webinar-sidebar-image-wrapper">
          <img
            className="webinar-sidebar-image"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Ashley_Caravelli_QCK.jpg.webp"
            alt="Dr. Ashley Caravelli"
            loading="lazy"
          />
        </div>
        <div className="webinar-sidebar-info">
          <p>
            <strong>Dr. Ashley Caravelli</strong><br />
            Board-Certified Physician & <br />
            Regenerative Medicine Expert
          </p>
        </div>
        <div className="webinar-sidebar-share">
          <WebinarShareButtons />
        </div>
      </div>
    </div>
  );
};

export default WebinarSidebar;

