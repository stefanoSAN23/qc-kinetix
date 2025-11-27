import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import HipPainHero from '../components/Sections/HipPain/HipPainHero';
import RegenerativeTherapyForHipPain from '../components/Sections/HipPain/RegenerativeTherapyForHipPain';
import WhatIsRegenerativeHipPainTherapy from '../components/Sections/HipPain/WhatIsRegenerativeHipPainTherapy';
import HipCandidate from '../components/Sections/HipPain/HipCandidate';
import BenefitsOfNonsurgicalHipTreatments from '../components/Sections/HipPain/BenefitsOfNonsurgicalHipTreatments';
import ReadyToReduceHipPain from '../components/Sections/HipPain/ReadyToReduceHipPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const HipPain = () => {
  return (
    <>
      <SEO />
      <main>
      <HipPainHero />
      <RegenerativeTherapyForHipPain />
      <WhatIsRegenerativeHipPainTherapy />
      <HipCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalHipTreatments />
      <ReadyToReduceHipPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default HipPain;


