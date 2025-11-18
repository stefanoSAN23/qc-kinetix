import RegenerativeHero from '../components/Sections/RegenerativeMedicine/RegenerativeHero';
import WhatIsRegenerativeUsedFor from '../components/Sections/RegenerativeMedicine/WhatIsRegenerativeUsedFor';
import AlternativesToSurgery from '../components/Sections/RegenerativeMedicine/AlternativesToSurgery';
import RegenerativeProcess from '../components/Sections/RegenerativeMedicine/RegenerativeProcess';
import Benefits from '../components/Sections/Benefits';
import GreatCandidate from '../components/Sections/RegenerativeMedicine/GreatCandidate';
import FAQs from '../components/Sections/RegenerativeMedicine/FAQs';
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

