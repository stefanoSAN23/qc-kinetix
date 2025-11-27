import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import KneePainHero from '../components/Sections/KneePain/KneePainHero';
import RegenerativeTherapyForKneePain from '../components/Sections/KneePain/RegenerativeTherapyForKneePain';
import WhatIsRegenerativeKneePainTherapy from '../components/Sections/KneePain/WhatIsRegenerativeKneePainTherapy';
import AreYouACandidate from '../components/Sections/KneePain/AreYouACandidate';
import BenefitsOfNonsurgicalKneeTreatments from '../components/Sections/KneePain/BenefitsOfNonsurgicalKneeTreatments';
import ReadyToReduceKneePain from '../components/Sections/KneePain/ReadyToReduceKneePain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

function KneePain() {
  return (
    <>
      <SEO />
      <main>
        <KneePainHero />
        <RegenerativeTherapyForKneePain />
        <WhatIsRegenerativeKneePainTherapy />
        <AreYouACandidate />
        <Divider variant="default" />
        <BenefitsOfNonsurgicalKneeTreatments />
        <ReadyToReduceKneePain />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}

export default KneePain;

