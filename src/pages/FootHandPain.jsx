import FootHandPainHero from '../components/Sections/FootHandPainHero';
import RegenerativeTherapyForFootHandPain from '../components/Sections/RegenerativeTherapyForFootHandPain';
import WhatIsRegenerativeFootHandPainTherapy from '../components/Sections/WhatIsRegenerativeFootHandPainTherapy';
import FootHandCandidate from '../components/Sections/FootHandCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalFootHandTreatments from '../components/Sections/BenefitsOfNonsurgicalFootHandTreatments';
import ReadyToReduceFootHandPain from '../components/Sections/ReadyToReduceFootHandPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const FootHandPain = () => {
  return (
    <main>
      <FootHandPainHero />
      <RegenerativeTherapyForFootHandPain />
      <WhatIsRegenerativeFootHandPainTherapy />
      <FootHandCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalFootHandTreatments />
      <ReadyToReduceFootHandPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default FootHandPain;


