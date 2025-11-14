import TendonLigamentPainHero from '../components/Sections/TendonLigamentPainHero';
import RegenerativeTherapyForTendonLigamentPain from '../components/Sections/RegenerativeTherapyForTendonLigamentPain';
import WhatIsRegenerativeTendonLigamentPainTherapy from '../components/Sections/WhatIsRegenerativeTendonLigamentPainTherapy';
import TendonLigamentCandidate from '../components/Sections/TendonLigamentCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalTendonLigamentTreatments from '../components/Sections/BenefitsOfNonsurgicalTendonLigamentTreatments';
import ReadyToReduceTendonLigamentPain from '../components/Sections/ReadyToReduceTendonLigamentPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const TendonLigamentPain = () => {
  return (
    <main>
      <TendonLigamentPainHero />
      <RegenerativeTherapyForTendonLigamentPain />
      <WhatIsRegenerativeTendonLigamentPainTherapy />
      <TendonLigamentCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalTendonLigamentTreatments />
      <ReadyToReduceTendonLigamentPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default TendonLigamentPain;


