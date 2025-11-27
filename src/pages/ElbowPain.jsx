import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import ElbowPainHero from '../components/Sections/ElbowPain/ElbowPainHero';
import NonsurgicalElbowTreatments from '../components/Sections/ElbowPain/NonsurgicalElbowTreatments';
import WhatIsRegenerativeElbowTherapy from '../components/Sections/ElbowPain/WhatIsRegenerativeElbowTherapy';
import ElbowCandidate from '../components/Sections/ElbowPain/ElbowCandidate';
import BenefitsOfNonsurgicalElbowTreatments from '../components/Sections/ElbowPain/BenefitsOfNonsurgicalElbowTreatments';
import ReadyToReduceElbowPain from '../components/Sections/ElbowPain/ReadyToReduceElbowPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const ElbowPain = () => {
  return (
    <>
      <SEO />
      <main>
      <ElbowPainHero />
      <NonsurgicalElbowTreatments />
      <WhatIsRegenerativeElbowTherapy />
      <ElbowCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalElbowTreatments />
      <ReadyToReduceElbowPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default ElbowPain;


