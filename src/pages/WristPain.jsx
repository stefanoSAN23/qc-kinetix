import WristPainHero from '../components/Sections/WristPain/WristPainHero';
import NonsurgicalWristTreatments from '../components/Sections/WristPain/NonsurgicalWristTreatments';
import WhatIsRegenerativeWristTherapy from '../components/Sections/WristPain/WhatIsRegenerativeWristTherapy';
import WristCandidate from '../components/Sections/WristPain/WristCandidate';
import SectionDivider from '../components/Sections/WristPain/SectionDivider';
import BenefitsOfNonsurgicalWristTreatments from '../components/Sections/WristPain/BenefitsOfNonsurgicalWristTreatments';
import ReadyToReduceWristPain from '../components/Sections/WristPain/ReadyToReduceWristPain';
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


