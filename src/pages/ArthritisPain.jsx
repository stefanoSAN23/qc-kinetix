import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import ArthritisPainHero from '../components/Sections/ArthritisPain/ArthritisPainHero';
import RegenerativeTherapyForArthritisPain from '../components/Sections/ArthritisPain/RegenerativeTherapyForArthritisPain';
import WhatIsRegenerativeArthritisPainTherapy from '../components/Sections/ArthritisPain/WhatIsRegenerativeArthritisPainTherapy';
import ArthritisCandidate from '../components/Sections/ArthritisPain/ArthritisCandidate';
import BenefitsOfNonsurgicalArthritisTreatments from '../components/Sections/ArthritisPain/BenefitsOfNonsurgicalArthritisTreatments';
import ReadyToReduceArthritisPain from '../components/Sections/ArthritisPain/ReadyToReduceArthritisPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const ArthritisPain = () => {
  return (
    <>
      <SEO />
      <main>
      <ArthritisPainHero />
      <RegenerativeTherapyForArthritisPain />
      <WhatIsRegenerativeArthritisPainTherapy />
      <ArthritisCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalArthritisTreatments />
      <ReadyToReduceArthritisPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default ArthritisPain;


