import { useEffect } from 'react';
import SciaticaHero from '../components/Sections/Sciatica/SciaticaHero';
import SciaticaContent from '../components/Sections/Sciatica/SciaticaContent';
import SciaticaShare from '../components/Sections/Sciatica/SciaticaShare';
import SciaticaNavigation from '../components/Sections/Sciatica/SciaticaNavigation';
import SciaticaRelated from '../components/Sections/Sciatica/SciaticaRelated';
import ContactForm from '../components/Forms/ContactForm';

const Sciatica = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <SciaticaHero />
      <SciaticaContent />
      <SciaticaShare />
      <SciaticaNavigation />
      <SciaticaRelated />
      <ContactForm />
    </main>
  );
};

export default Sciatica;

