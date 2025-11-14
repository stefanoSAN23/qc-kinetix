import FingerToePainHero from '../components/Sections/FingerToePainHero';
import RegenerativeTherapyForFingerToePain from '../components/Sections/RegenerativeTherapyForFingerToePain';
import WhatIsRegenerativeFingerToePainTherapy from '../components/Sections/WhatIsRegenerativeFingerToePainTherapy';
import FingerToeCandidate from '../components/Sections/FingerToeCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalFingerToeTreatments from '../components/Sections/BenefitsOfNonsurgicalFingerToeTreatments';
import ReadyToReduceFingerToePain from '../components/Sections/ReadyToReduceFingerToePain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const FingerToePain = () => {
  return (
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
  );
};

export default FingerToePain;


