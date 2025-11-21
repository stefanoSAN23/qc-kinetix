import SEO from '../components/SEO/SEO';
import FingerToePainHero from '../components/Sections/FingerToePain/FingerToePainHero';
import RegenerativeTherapyForFingerToePain from '../components/Sections/FingerToePain/RegenerativeTherapyForFingerToePain';
import WhatIsRegenerativeFingerToePainTherapy from '../components/Sections/FingerToePain/WhatIsRegenerativeFingerToePainTherapy';
import FingerToeCandidate from '../components/Sections/FingerToePain/FingerToeCandidate';
import SectionDivider from '../components/Sections/FingerToePain/SectionDivider';
import BenefitsOfNonsurgicalFingerToeTreatments from '../components/Sections/FingerToePain/BenefitsOfNonsurgicalFingerToeTreatments';
import ReadyToReduceFingerToePain from '../components/Sections/FingerToePain/ReadyToReduceFingerToePain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const FingerToePain = () => {
  return (
    <>
      <SEO />
      <main>
      <FingerToePainHero />
      <RegenerativeTherapyForFingerToePain />
      <WhatIsRegenerativeFingerToePainTherapy />
      <FingerToeCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalFingerToeTreatments />
      <ReadyToReduceFingerToePain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default FingerToePain;


