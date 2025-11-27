import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import WristPainHero from '../components/Sections/WristPain/WristPainHero';
import NonsurgicalWristTreatments from '../components/Sections/WristPain/NonsurgicalWristTreatments';
import WhatIsRegenerativeWristTherapy from '../components/Sections/WristPain/WhatIsRegenerativeWristTherapy';
import WristCandidate from '../components/Sections/WristPain/WristCandidate';
import BenefitsOfNonsurgicalWristTreatments from '../components/Sections/WristPain/BenefitsOfNonsurgicalWristTreatments';
import ReadyToReduceWristPain from '../components/Sections/WristPain/ReadyToReduceWristPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const WristPain = () => {
  return (
    <>
      <SEO />
      <main>
      <WristPainHero />
      <NonsurgicalWristTreatments />
      <WhatIsRegenerativeWristTherapy />
      <WristCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalWristTreatments />
      <ReadyToReduceWristPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default WristPain;


