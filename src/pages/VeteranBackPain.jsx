import { useEffect } from 'react';
import VeteranBackPainHero from '../components/Sections/VeteranBackPain/VeteranBackPainHero';
import VeteranBackPainContent from '../components/Sections/VeteranBackPain/VeteranBackPainContent';
import VeteranBackPainShare from '../components/Sections/VeteranBackPain/VeteranBackPainShare';
import VeteranBackPainNavigation from '../components/Sections/VeteranBackPain/VeteranBackPainNavigation';
import VeteranBackPainRelated from '../components/Sections/VeteranBackPain/VeteranBackPainRelated';
import ContactForm from '../components/Forms/ContactForm';

const VeteranBackPain = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <VeteranBackPainHero />
      <VeteranBackPainContent />
      <VeteranBackPainShare />
      <VeteranBackPainNavigation />
      <VeteranBackPainRelated />
      <ContactForm />
    </main>
  );
};

export default VeteranBackPain;

