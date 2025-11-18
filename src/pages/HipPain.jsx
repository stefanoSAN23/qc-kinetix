import HipPainHero from '../components/Sections/HipPain/HipPainHero';
import RegenerativeTherapyForHipPain from '../components/Sections/HipPain/RegenerativeTherapyForHipPain';
import WhatIsRegenerativeHipPainTherapy from '../components/Sections/HipPain/WhatIsRegenerativeHipPainTherapy';
import HipCandidate from '../components/Sections/HipPain/HipCandidate';
import SectionDivider from '../components/Sections/HipPain/SectionDivider';
import BenefitsOfNonsurgicalHipTreatments from '../components/Sections/HipPain/BenefitsOfNonsurgicalHipTreatments';
import ReadyToReduceHipPain from '../components/Sections/HipPain/ReadyToReduceHipPain';
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


