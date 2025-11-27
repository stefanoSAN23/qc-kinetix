import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import TendonLigamentPainHero from '../components/Sections/TendonLigamentPain/TendonLigamentPainHero';
import RegenerativeTherapyForTendonLigamentPain from '../components/Sections/TendonLigamentPain/RegenerativeTherapyForTendonLigamentPain';
import WhatIsRegenerativeTendonLigamentPainTherapy from '../components/Sections/TendonLigamentPain/WhatIsRegenerativeTendonLigamentPainTherapy';
import TendonLigamentCandidate from '../components/Sections/TendonLigamentPain/TendonLigamentCandidate';
import BenefitsOfNonsurgicalTendonLigamentTreatments from '../components/Sections/TendonLigamentPain/BenefitsOfNonsurgicalTendonLigamentTreatments';
import ReadyToReduceTendonLigamentPain from '../components/Sections/TendonLigamentPain/ReadyToReduceTendonLigamentPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const TendonLigamentPain = () => {
  return (
    <>
      <SEO />
      <main>
      <TendonLigamentPainHero />
      <RegenerativeTherapyForTendonLigamentPain />
      <WhatIsRegenerativeTendonLigamentPainTherapy />
      <TendonLigamentCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalTendonLigamentTreatments />
      <ReadyToReduceTendonLigamentPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default TendonLigamentPain;


