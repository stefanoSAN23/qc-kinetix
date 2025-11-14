import ArthritisPainHero from '../components/Sections/ArthritisPainHero';
import RegenerativeTherapyForArthritisPain from '../components/Sections/RegenerativeTherapyForArthritisPain';
import WhatIsRegenerativeArthritisPainTherapy from '../components/Sections/WhatIsRegenerativeArthritisPainTherapy';
import ArthritisCandidate from '../components/Sections/ArthritisCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalArthritisTreatments from '../components/Sections/BenefitsOfNonsurgicalArthritisTreatments';
import ReadyToReduceArthritisPain from '../components/Sections/ReadyToReduceArthritisPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const ArthritisPain = () => {
  return (
    <main>
      <ArthritisPainHero />
      <RegenerativeTherapyForArthritisPain />
      <WhatIsRegenerativeArthritisPainTherapy />
      <ArthritisCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalArthritisTreatments />
      <ReadyToReduceArthritisPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default ArthritisPain;


