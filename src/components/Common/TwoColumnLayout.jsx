import './TwoColumnLayout.css';

const TwoColumnLayout = ({ 
  leftContent,
  rightContent,
  leftWidth = "1fr",
  rightWidth = "1fr",
  gap = "80px",
  alignItems = "start",
  reverseOnMobile = true,
  className = ""
}) => {
  return (
    <div 
      className={`qc-two-column-layout ${className}`}
      style={{
        '--left-width': leftWidth,
        '--right-width': rightWidth,
        '--gap': gap,
        '--align-items': alignItems
      }}
    >
      <div className={`qc-two-column-left ${reverseOnMobile ? 'qc-reverse-mobile' : ''}`}>
        {leftContent}
      </div>
      <div className={`qc-two-column-right ${reverseOnMobile ? 'qc-reverse-mobile' : ''}`}>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;

