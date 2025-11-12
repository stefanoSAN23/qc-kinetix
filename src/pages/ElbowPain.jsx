import ElbowPainHero from '../components/Sections/ElbowPainHero';
import NonsurgicalElbowTreatments from '../components/Sections/NonsurgicalElbowTreatments';
import WhatIsRegenerativeElbowTherapy from '../components/Sections/WhatIsRegenerativeElbowTherapy';
import ElbowCandidate from '../components/Sections/ElbowCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalElbowTreatments from '../components/Sections/BenefitsOfNonsurgicalElbowTreatments';
import ReadyToReduceElbowPain from '../components/Sections/ReadyToReduceElbowPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const ElbowPain = () => {
  return (
    <main>
      <ElbowPainHero />
      <NonsurgicalElbowTreatments />
      <WhatIsRegenerativeElbowTherapy />
      <ElbowCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalElbowTreatments />
      <ReadyToReduceElbowPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default ElbowPain;


