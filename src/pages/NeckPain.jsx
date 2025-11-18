import { useEffect } from 'react';
import NeckPainHero from '../components/Sections/NeckPain/NeckPainHero';
import NeckPainContent from '../components/Sections/NeckPain/NeckPainContent';
import NeckPainShare from '../components/Sections/NeckPain/NeckPainShare';
import NeckPainNavigation from '../components/Sections/NeckPain/NeckPainNavigation';
import NeckPainRelated from '../components/Sections/NeckPain/NeckPainRelated';
import ContactForm from '../components/Forms/ContactForm';

const NeckPain = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <NeckPainHero />
      <NeckPainContent />
      <NeckPainShare />
      <NeckPainNavigation />
      <NeckPainRelated />
      <ContactForm />
    </main>
  );
};

export default NeckPain;

