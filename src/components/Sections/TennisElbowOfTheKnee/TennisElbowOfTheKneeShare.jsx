import './TennisElbowOfTheKneeShare.css';

const TennisElbowOfTheKneeShare = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = encodeURIComponent("Tennis Elbow of the Knee: Understanding Medial Knee Pain");
  const encodedUrl = encodeURIComponent(currentUrl);

  const handleShare = (platform) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${title}`;
        break;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="tennis-elbow-of-the-knee-share-section">
      <div className="tennis-elbow-of-the-knee-share-container">
        <span className="tennis-elbow-of-the-knee-share-label">Share the Post:</span>
        <div className="tennis-elbow-of-the-knee-share-buttons">
          <button
            className="tennis-elbow-of-the-knee-share-btn tennis-elbow-of-the-knee-share-btn_facebook"
            onClick={() => handleShare('facebook')}
            aria-label="Share on facebook"
          >
            <span className="tennis-elbow-of-the-knee-share-btn-icon">
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </span>
          </button>
          
          <button
            className="tennis-elbow-of-the-knee-share-btn tennis-elbow-of-the-knee-share-btn_x-twitter"
            onClick={() => handleShare('twitter')}
            aria-label="Share on x-twitter"
          >
            <span className="tennis-elbow-of-the-knee-share-btn-icon">
              <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </span>
          </button>
          
          <button
            className="tennis-elbow-of-the-knee-share-btn tennis-elbow-of-the-knee-share-btn_linkedin"
            onClick={() => handleShare('linkedin')}
            aria-label="Share on linkedin"
          >
            <span className="tennis-elbow-of-the-knee-share-btn-icon">
              <svg aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </span>
          </button>
          
          <button
            className="tennis-elbow-of-the-knee-share-btn tennis-elbow-of-the-knee-share-btn_pinterest"
            onClick={() => handleShare('pinterest')}
            aria-label="Share on pinterest"
          >
            <span className="tennis-elbow-of-the-knee-share-btn-icon">
              <svg aria-hidden="true" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TennisElbowOfTheKneeShare;


