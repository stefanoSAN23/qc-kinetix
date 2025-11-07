import { useEffect, useRef } from 'react';
import SectionHeader from '../Common/SectionHeader';
import './WhatIsPRP.css';

const WhatIsPRP = () => {
  useEffect(() => {
    // Animations handled by SectionHeader component
  }, []);

  return (
    <section className="what-is-prp-section">
      <div className="what-is-prp-container">
        <SectionHeader
          titlePart="What is"
          mainTitle="Platelet-Rich Plasma (PRP) Therapy ?"
          dividerType="image"
          className="what-is-prp-header-component"
        />

        <div className="what-is-prp-text">
          <p>PRP, or Platelet-Rich Plasma therapy, is a treatment that uses a patient's own blood cells to promote healing. Think of it like a natural, super-concentrated boost for your body's repair system.</p>
          <p>First, there is a blood draw to collect the cells.. It's then placed in a centrifuge, a machine that spins at high speed to concentrate the blood's components. This process collects the platelets, which are rich in growth factors—proteins that stimulate healing and restoration. The cells are then carefully injected into the injured or painful area.</p>
          <p><a href="https://qckinetixsidev.wpenginepowered.com/blog/regenerative-medicine-safety-side-effects/" rel="noopener">The PRP injection</a> delivers a powerful dose of your body's own healing properties directly to the source of the problem, helping to reduce pain and inflammation while encouraging the restoration of tissue. It's a non-surgical option that works with your body to accelerate the natural healing process.</p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPRP;

