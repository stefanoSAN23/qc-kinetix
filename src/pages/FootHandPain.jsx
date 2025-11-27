import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import FootHandPainHero from '../components/Sections/FootHandPain/FootHandPainHero';
import RegenerativeTherapyForFootHandPain from '../components/Sections/FootHandPain/RegenerativeTherapyForFootHandPain';
import WhatIsRegenerativeFootHandPainTherapy from '../components/Sections/FootHandPain/WhatIsRegenerativeFootHandPainTherapy';
import FootHandCandidate from '../components/Sections/FootHandPain/FootHandCandidate';
import BenefitsOfNonsurgicalFootHandTreatments from '../components/Sections/FootHandPain/BenefitsOfNonsurgicalFootHandTreatments';
import ReadyToReduceFootHandPain from '../components/Sections/FootHandPain/ReadyToReduceFootHandPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const FootHandPain = () => {
  return (
    <>
      <SEO />
      <main>
      <FootHandPainHero />
      <RegenerativeTherapyForFootHandPain />
      <WhatIsRegenerativeFootHandPainTherapy />
      <FootHandCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalFootHandTreatments />
      <ReadyToReduceFootHandPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default FootHandPain;


