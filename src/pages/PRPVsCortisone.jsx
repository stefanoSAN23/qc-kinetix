import { useEffect } from 'react';
import PRPVsCortisoneHero from '../components/Sections/PRPVsCortisone/PRPVsCortisoneHero';
import PRPVsCortisoneContent from '../components/Sections/PRPVsCortisone/PRPVsCortisoneContent';
import PRPVsCortisoneShare from '../components/Sections/PRPVsCortisone/PRPVsCortisoneShare';
import PRPVsCortisoneNavigation from '../components/Sections/PRPVsCortisone/PRPVsCortisoneNavigation';
import PRPVsCortisoneRelated from '../components/Sections/PRPVsCortisone/PRPVsCortisoneRelated';
import ContactForm from '../components/Forms/ContactForm';

const PRPVsCortisone = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <PRPVsCortisoneHero />
      <PRPVsCortisoneContent />
      <PRPVsCortisoneShare />
      <PRPVsCortisoneNavigation />
      <PRPVsCortisoneRelated />
      <ContactForm />
    </main>
  );
};

export default PRPVsCortisone;

