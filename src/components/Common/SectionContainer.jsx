import './SectionContainer.css';

const SectionContainer = ({ 
  children, 
  className = "",
  maxWidth = "1400px",
  padding = "80px 20px",
  background = "#fff"
}) => {
  const containerStyle = {
    padding,
    background
  };

  return (
    <section className={`qc-section-container ${className}`} style={containerStyle}>
      <div className="qc-section-wrapper" style={{ maxWidth }}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;

