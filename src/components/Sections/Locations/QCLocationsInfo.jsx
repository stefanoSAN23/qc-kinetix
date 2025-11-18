import './QCLocationsInfo.css';

const QCLocationsInfo = () => {
  const paragraphs = [
    "If you're living with chronic or severe pain, you may think surgery is your only option, but QC Kinetix offers a better treatment option through regenerative medicine. Whether you're suffering from back pain, joint pain, or knee pain that makes daily movement difficult, our non-surgical solutions are designed to work with the body's own healing processes to improve mobility.",
    "Our clinics across the country specialize in advanced regenerative medicine treatments, including platelet-rich plasma (PRP) therapy and stem cell therapy. These biologic therapies are designed to address the root cause of your pain by targeting damaged tissue with precision to work with the body's own healing processes, rather than just masking symptoms with medication.",
    'For patients looking for regenerative medicine clinics nearby, QC Kinetix is the trusted name in non-invasive pain relief. Our regenerative medicine procedures offer a modern, effective alternative to surgery, helping you reclaim your mobility and live without limits.'
  ];

  return (
    <section className="qc-locations-info-section">
      <div className="qc-locations-info-container">
        <div className="qc-locations-info-header">
          <h2 className="qc-locations-info-title animated fadeInDown" data-animate-immediate="true">
            QC Kinetix: Revolutionary Local Regenerative Medicine
          </h2>
          <img
            className="qc-locations-info-divider animated fadeInLeft"
            data-animate-immediate="true"
            src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
            width="177"
            height="8"
            alt="Decorative divider"
            loading="lazy"
          />
        </div>

        <div className="qc-locations-info-text">
          {paragraphs.map((copy, index) => (
            <p key={index}>
              {copy}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QCLocationsInfo;

