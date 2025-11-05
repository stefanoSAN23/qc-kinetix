import RegenerativeHero from '../components/Hero/RegenerativeHero';
import WhatIsRegenerativeUsedFor from '../components/Sections/WhatIsRegenerativeUsedFor';
import AlternativesToSurgery from '../components/Sections/AlternativesToSurgery';
import RegenerativeProcess from '../components/Sections/RegenerativeProcess';
import Benefits from '../components/Sections/Benefits';
import GreatCandidate from '../components/Sections/GreatCandidate';
import FAQs from '../components/Sections/FAQs';
import ContactForm from '../components/Forms/ContactForm';

function RegenerativeMedicine() {
  return (
    <main>
      <RegenerativeHero />
      <WhatIsRegenerativeUsedFor />
      <AlternativesToSurgery />
      <RegenerativeProcess />
      <Benefits />
      <GreatCandidate />
      <FAQs />
      <ContactForm />
    </main>
  );
}

export default RegenerativeMedicine;

