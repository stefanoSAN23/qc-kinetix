import './WebinarContent.css';
import { WebinarShareButtons } from './WebinarShareButtons';
import WebinarSidebar from './WebinarSidebar';
import WebinarSpeaker from './WebinarSpeaker';

const WebinarContent = () => {
  return (
    <section className="webinar-content-section">
      <div className="webinar-content-container">
        <div className="webinar-content-main">
          <h2 className="webinar-content-title">
            QC Kinetix Webinar: The Truth About Stem Cells and PRP: Hype or Hope? Why surgery isn't your only option for joint pain.
          </h2>
          
          <div className="qc-webinar-divider"></div>
          
          <h2 className="webinar-content-date">
            Date & Time Sep 23, 2025 01:00 PM<br />
            Eastern Time (US and Canada)
          </h2>
          
          <div className="qc-webinar-divider"></div>
          
          <div className="webinar-content-text">
            <p><strong>QC Kinetix Webinar: The Truth About Stem Cells and PRP: Hype or Hope? Why surgery isn't your only option for joint pain.</strong></p>
            <p>This Webinar Could Change Your Next 10 Years.</p>
            <p>Still living with joint pain, arthritis, a sports injury, or chronic back pain? You're not alone—and you may have more options than you think.</p>
            <p>Join us for an eye-opening session where we break down the basics of regenerative medicine and explore how advanced, drug-free, non-surgical treatments—like platelet-rich plasma (PRP) therapy and stem cell therapies—are helping patients heal pain at the source.</p>
            <p>We'll cover:</p>
            <ul>
              <li>Why surgery isn't your only option (and often not the best one).</li>
              <li>The truth about PRP and stem cell treatments—and what's real vs. hype.</li>
              <li>What you need to know before committing to surgery, injections, or long-term medications.</li>
              <li>Whether you're seeking relief for yourself or supporting someone you love, this webinar will give you the knowledge and confidence to take the next step.</li>
            </ul>
            <p>Because life's too short to live in pain—and relief may be closer than you think.</p>
            <p>Better starts TODAY.</p>
          </div>
          
          <div className="qc-webinar-divider"></div>
          
          <div className="webinar-share-buttons-desktop">
            <WebinarShareButtons />
          </div>
        </div>
        
        <div className="webinar-content-sidebar-desktop">
          <WebinarSidebar />
        </div>
        
        <div className="webinar-content-sidebar-tablet">
          <WebinarSpeaker />
        </div>
      </div>
    </section>
  );
};

export default WebinarContent;

