import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import BackPainHero from '../components/Sections/BackPain/BackPainHero';
import RegenerativeTherapyForBackPain from '../components/Sections/BackPain/RegenerativeTherapyForBackPain';
import WhatIsRegenerativeBackPainTherapy from '../components/Sections/BackPain/WhatIsRegenerativeBackPainTherapy';
import BackCandidate from '../components/Sections/BackPain/BackCandidate';
import BenefitsOfNonsurgicalBackTreatments from '../components/Sections/BackPain/BenefitsOfNonsurgicalBackTreatments';
import ReadyToReduceBackPain from '../components/Sections/BackPain/ReadyToReduceBackPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const BackPain = () => {
  return (
    <>
      <SEO />
      <main>
      <BackPainHero />
      <RegenerativeTherapyForBackPain />
      <WhatIsRegenerativeBackPainTherapy />
      <BackCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalBackTreatments />
      <ReadyToReduceBackPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default BackPain;

