import SEO from '../components/SEO/SEO';
import ShoulderPainHero from '../components/Sections/ShoulderPain/ShoulderPainHero';
import NonsurgicalShoulderTreatments from '../components/Sections/ShoulderPain/NonsurgicalShoulderTreatments';
import WhatIsRegenerativeShoulderTherapy from '../components/Sections/ShoulderPain/WhatIsRegenerativeShoulderTherapy';
import ShoulderCandidate from '../components/Sections/ShoulderPain/ShoulderCandidate';
import SectionDivider from '../components/Sections/ShoulderPain/SectionDivider';
import BenefitsOfNonsurgicalShoulderTreatments from '../components/Sections/ShoulderPain/BenefitsOfNonsurgicalShoulderTreatments';
import ReadyToReduceShoulderPain from '../components/Sections/ShoulderPain/ReadyToReduceShoulderPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const ShoulderPain = () => {
  return (
    <>
      <SEO />
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
    </>
  );
};

export default ShoulderPain;


