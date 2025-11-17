import './WebinarShareButtons.css';

export const WebinarShareButtons = () => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = "QC Kinetix Webinar: The Truth About Stem Cells and PRP";
  
  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;
        break;
      case 'print':
        window.print();
        return;
      default:
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="webinar-share-buttons">
      <div 
        className="webinar-share-btn webinar-share-btn_facebook" 
        role="button" 
        tabIndex={0}
        onClick={() => handleShare('facebook')}
        onKeyDown={(e) => e.key === 'Enter' && handleShare('facebook')}
        aria-label="Share on Facebook"
      >
        <svg aria-hidden="true" className="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
        </svg>
      </div>
      <div 
        className="webinar-share-btn webinar-share-btn_x-twitter" 
        role="button" 
        tabIndex={0}
        onClick={() => handleShare('twitter')}
        onKeyDown={(e) => e.key === 'Enter' && handleShare('twitter')}
        aria-label="Share on X (Twitter)"
      >
        <svg aria-hidden="true" className="e-font-icon-svg e-fab-x-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
        </svg>
      </div>
      <div 
        className="webinar-share-btn webinar-share-btn_linkedin" 
        role="button" 
        tabIndex={0}
        onClick={() => handleShare('linkedin')}
        onKeyDown={(e) => e.key === 'Enter' && handleShare('linkedin')}
        aria-label="Share on LinkedIn"
      >
        <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
        </svg>
      </div>
      <div 
        className="webinar-share-btn webinar-share-btn_email" 
        role="button" 
        tabIndex={0}
        onClick={() => handleShare('email')}
        onKeyDown={(e) => e.key === 'Enter' && handleShare('email')}
        aria-label="Share via Email"
      >
        <svg aria-hidden="true" className="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
        </svg>
      </div>
      <div 
        className="webinar-share-btn webinar-share-btn_print" 
        role="button" 
        tabIndex={0}
        onClick={() => handleShare('print')}
        onKeyDown={(e) => e.key === 'Enter' && handleShare('print')}
        aria-label="Print"
      >
        <svg aria-hidden="true" className="e-font-icon-svg e-fas-print" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path>
        </svg>
      </div>
    </div>
  );
};

