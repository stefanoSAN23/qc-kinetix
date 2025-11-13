import HipPainHero from '../components/Sections/HipPainHero';
import RegenerativeTherapyForHipPain from '../components/Sections/RegenerativeTherapyForHipPain';
import WhatIsRegenerativeHipPainTherapy from '../components/Sections/WhatIsRegenerativeHipPainTherapy';
import HipCandidate from '../components/Sections/HipCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalHipTreatments from '../components/Sections/BenefitsOfNonsurgicalHipTreatments';
import ReadyToReduceHipPain from '../components/Sections/ReadyToReduceHipPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const HipPain = () => {
  return (
    <main>
      <HipPainHero />
      <RegenerativeTherapyForHipPain />
      <WhatIsRegenerativeHipPainTherapy />
      <HipCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalHipTreatments />
      <ReadyToReduceHipPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default HipPain;


