import ElbowPainHero from '../components/Sections/ElbowPain/ElbowPainHero';
import NonsurgicalElbowTreatments from '../components/Sections/ElbowPain/NonsurgicalElbowTreatments';
import WhatIsRegenerativeElbowTherapy from '../components/Sections/ElbowPain/WhatIsRegenerativeElbowTherapy';
import ElbowCandidate from '../components/Sections/ElbowPain/ElbowCandidate';
import SectionDivider from '../components/Sections/ElbowPain/SectionDivider';
import BenefitsOfNonsurgicalElbowTreatments from '../components/Sections/ElbowPain/BenefitsOfNonsurgicalElbowTreatments';
import ReadyToReduceElbowPain from '../components/Sections/ElbowPain/ReadyToReduceElbowPain';
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


