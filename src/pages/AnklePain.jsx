import AnklePainHero from '../components/Sections/AnklePain/AnklePainHero';
import RegenerativeTherapyForAnklePain from '../components/Sections/AnklePain/RegenerativeTherapyForAnklePain';
import WhatIsRegenerativeAnklePainTherapy from '../components/Sections/AnklePain/WhatIsRegenerativeAnklePainTherapy';
import AnkleCandidate from '../components/Sections/AnklePain/AnkleCandidate';
import SectionDivider from '../components/Sections/AnklePain/SectionDivider';
import BenefitsOfNonsurgicalAnkleTreatments from '../components/Sections/AnklePain/BenefitsOfNonsurgicalAnkleTreatments';
import ReadyToReduceAnklePain from '../components/Sections/AnklePain/ReadyToReduceAnklePain';
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


