import BackPainHero from '../components/Sections/BackPain/BackPainHero';
import RegenerativeTherapyForBackPain from '../components/Sections/BackPain/RegenerativeTherapyForBackPain';
import WhatIsRegenerativeBackPainTherapy from '../components/Sections/BackPain/WhatIsRegenerativeBackPainTherapy';
import BackCandidate from '../components/Sections/BackPain/BackCandidate';
import SectionDivider from '../components/Sections/BackPain/SectionDivider';
import BenefitsOfNonsurgicalBackTreatments from '../components/Sections/BackPain/BenefitsOfNonsurgicalBackTreatments';
import ReadyToReduceBackPain from '../components/Sections/BackPain/ReadyToReduceBackPain';
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

