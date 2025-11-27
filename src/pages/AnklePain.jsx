import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import AnklePainHero from '../components/Sections/AnklePain/AnklePainHero';
import RegenerativeTherapyForAnklePain from '../components/Sections/AnklePain/RegenerativeTherapyForAnklePain';
import WhatIsRegenerativeAnklePainTherapy from '../components/Sections/AnklePain/WhatIsRegenerativeAnklePainTherapy';
import AnkleCandidate from '../components/Sections/AnklePain/AnkleCandidate';
import BenefitsOfNonsurgicalAnkleTreatments from '../components/Sections/AnklePain/BenefitsOfNonsurgicalAnkleTreatments';
import ReadyToReduceAnklePain from '../components/Sections/AnklePain/ReadyToReduceAnklePain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const AnklePain = () => {
  return (
    <>
      <SEO />
      <main>
      <AnklePainHero />
      <RegenerativeTherapyForAnklePain />
      <WhatIsRegenerativeAnklePainTherapy />
      <AnkleCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalAnkleTreatments />
      <ReadyToReduceAnklePain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default AnklePain;


