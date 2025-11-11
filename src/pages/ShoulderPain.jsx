import ShoulderPainHero from '../components/Sections/ShoulderPainHero';
import NonsurgicalShoulderTreatments from '../components/Sections/NonsurgicalShoulderTreatments';
import WhatIsRegenerativeShoulderTherapy from '../components/Sections/WhatIsRegenerativeShoulderTherapy';
import ShoulderCandidate from '../components/Sections/ShoulderCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalShoulderTreatments from '../components/Sections/BenefitsOfNonsurgicalShoulderTreatments';
import ReadyToReduceShoulderPain from '../components/Sections/ReadyToReduceShoulderPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const ShoulderPain = () => {
  return (
    <main>
      <ShoulderPainHero />
      <NonsurgicalShoulderTreatments />
      <WhatIsRegenerativeShoulderTherapy />
      <ShoulderCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalShoulderTreatments />
      <ReadyToReduceShoulderPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default ShoulderPain;


