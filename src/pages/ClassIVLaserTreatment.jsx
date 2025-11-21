import SEO from '../components/SEO/SEO';
import LaserTherapyHero from '../components/Sections/ClassIVLaserTreatment/LaserTherapyHero';
import WhatIsLaserTherapy from '../components/Sections/ClassIVLaserTreatment/WhatIsLaserTherapy';
import LaserTherapyCandidate from '../components/Sections/ClassIVLaserTreatment/LaserTherapyCandidate';
import BenefitsOfLaserTherapy from '../components/Sections/ClassIVLaserTreatment/BenefitsOfLaserTherapy';
import LaserTherapyResults from '../components/Sections/ClassIVLaserTreatment/LaserTherapyResults';
import ContactForm from '../components/Forms/ContactForm';

function ClassIVLaserTreatment() {
  return (
    <>
      <SEO />
      <main>
      <LaserTherapyHero />
      <WhatIsLaserTherapy />
      <LaserTherapyCandidate />
      <BenefitsOfLaserTherapy />
      <LaserTherapyResults />
      <ContactForm />
      </main>
    </>
  );
}

export default ClassIVLaserTreatment;

