import AnklePainHero from '../components/Sections/AnklePainHero';
import RegenerativeTherapyForAnklePain from '../components/Sections/RegenerativeTherapyForAnklePain';
import WhatIsRegenerativeAnklePainTherapy from '../components/Sections/WhatIsRegenerativeAnklePainTherapy';
import AnkleCandidate from '../components/Sections/AnkleCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalAnkleTreatments from '../components/Sections/BenefitsOfNonsurgicalAnkleTreatments';
import ReadyToReduceAnklePain from '../components/Sections/ReadyToReduceAnklePain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const AnklePain = () => {
  return (
    <main>
      <AnklePainHero />
      <RegenerativeTherapyForAnklePain />
      <WhatIsRegenerativeAnklePainTherapy />
      <AnkleCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalAnkleTreatments />
      <ReadyToReduceAnklePain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default AnklePain;


