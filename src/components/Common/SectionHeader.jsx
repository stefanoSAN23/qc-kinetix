import './SectionHeader.css';

const SectionHeader = ({ 
  titlePart = "What is",
  mainTitle,
  dividerType = "image", // "image" | "dots" | "none"
  dividerImage = "https://qckinetix.com/wp-content/smush-webp/2025/04/Group-747.png.webp",
  dotsCount = 7,
  className = "",
  animation = "fadeInDown",
  animateImmediate = false,
}) => {
  return (
    <div className={`qc-section-header ${className}`}>
      {(titlePart || dividerType === "dots" || dividerType === "image") && (
        <div
          className={`qc-section-header-top animated ${className.includes('benefits-of-laser-therapy') ? 'fadeInDown' : ''}`}
          data-animate-immediate={animateImmediate ? 'true' : undefined}
        >
          {titlePart && (
            <h2
              className="qc-section-header-title-part animated"
              data-animate-immediate={animateImmediate ? 'true' : undefined}
            >
              {titlePart}
            </h2>
          )}
          {dividerType === "image" && (
            <div className="qc-section-header-divider-container">
              <img
                src={dividerImage}
                alt="Decorative divider"
                width="177"
                height="8"
                loading="lazy"
                className={`qc-section-header-divider animated ${animation}`}
                data-animate-immediate={animateImmediate ? 'true' : undefined}
              />
            </div>
          )}
          {dividerType === "dots" && (
            <div
              className={`qc-section-header-dots animated ${animation}`}
              data-animate-immediate={animateImmediate ? 'true' : undefined}
            >
              {Array.from({ length: dotsCount }).map((_, index) => (
                <div key={index} className="qc-section-header-dot dot-green"></div>
              ))}
            </div>
          )}
        </div>
      )}
      {mainTitle && (
        <h2
          className={`qc-section-header-main-title animated fadeInUp`}
          data-animate-immediate={animateImmediate ? 'true' : undefined}
        >
          {mainTitle}
        </h2>
      )}
    </div>
  );
};

export default SectionHeader;

