import WristPainHero from '../components/Sections/WristPainHero';
import NonsurgicalWristTreatments from '../components/Sections/NonsurgicalWristTreatments';
import WhatIsRegenerativeWristTherapy from '../components/Sections/WhatIsRegenerativeWristTherapy';
import WristCandidate from '../components/Sections/WristCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalWristTreatments from '../components/Sections/BenefitsOfNonsurgicalWristTreatments';
import ReadyToReduceWristPain from '../components/Sections/ReadyToReduceWristPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const WristPain = () => {
  return (
    <main>
      <WristPainHero />
      <NonsurgicalWristTreatments />
      <WhatIsRegenerativeWristTherapy />
      <WristCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalWristTreatments />
      <ReadyToReduceWristPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default WristPain;


