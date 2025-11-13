import BackPainHero from '../components/Sections/BackPainHero';
import RegenerativeTherapyForBackPain from '../components/Sections/RegenerativeTherapyForBackPain';
import WhatIsRegenerativeBackPainTherapy from '../components/Sections/WhatIsRegenerativeBackPainTherapy';
import BackCandidate from '../components/Sections/BackCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalBackTreatments from '../components/Sections/BenefitsOfNonsurgicalBackTreatments';
import ReadyToReduceBackPain from '../components/Sections/ReadyToReduceBackPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const BackPain = () => {
  return (
    <main>
      <BackPainHero />
      <RegenerativeTherapyForBackPain />
      <WhatIsRegenerativeBackPainTherapy />
      <BackCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalBackTreatments />
      <ReadyToReduceBackPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default BackPain;

