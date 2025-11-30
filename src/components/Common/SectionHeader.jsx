import ImageDivider from './ImageDivider';
import './SectionHeader.css';

const SectionHeader = ({ 
  titlePart = "What is",
  mainTitle,
  dividerType = "image", // "image" | "dots" | "none"
  dividerImage = "https://qckinetix.com/wp-content/uploads/2025/03/Group-69.svg",
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
          {(dividerType === "image" || dividerType === "dots") && (
            <ImageDivider 
              src={dividerImage}
              variant="green"
              animated={true}
              animation={animation}
              animateImmediate={animateImmediate}
              className="qc-section-header-divider-container"
            />
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

