import KneePainHero from '../components/Sections/KneePainHero';
import RegenerativeTherapyForKneePain from '../components/Sections/RegenerativeTherapyForKneePain';
import WhatIsRegenerativeKneePainTherapy from '../components/Sections/WhatIsRegenerativeKneePainTherapy';
import AreYouACandidate from '../components/Sections/AreYouACandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalKneeTreatments from '../components/Sections/BenefitsOfNonsurgicalKneeTreatments';
import ReadyToReduceKneePain from '../components/Sections/ReadyToReduceKneePain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

function KneePain() {
  return (
    <main>
      <KneePainHero />
      <RegenerativeTherapyForKneePain />
      <WhatIsRegenerativeKneePainTherapy />
      <AreYouACandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalKneeTreatments />
      <ReadyToReduceKneePain />
      <Testimonials />
      <ContactForm />
    </main>
  );
}

export default KneePain;

