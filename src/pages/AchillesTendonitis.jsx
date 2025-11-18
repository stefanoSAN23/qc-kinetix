import { useEffect } from 'react';
import AchillesTendonitisHero from '../components/Sections/AchillesTendonitis/AchillesTendonitisHero';
import AchillesTendonitisContent from '../components/Sections/AchillesTendonitis/AchillesTendonitisContent';
import AchillesTendonitisShare from '../components/Sections/AchillesTendonitis/AchillesTendonitisShare';
import AchillesTendonitisNavigation from '../components/Sections/AchillesTendonitis/AchillesTendonitisNavigation';
import AchillesTendonitisRelated from '../components/Sections/AchillesTendonitis/AchillesTendonitisRelated';
import ContactForm from '../components/Forms/ContactForm';

const AchillesTendonitis = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <AchillesTendonitisHero />
      <AchillesTendonitisContent />
      <AchillesTendonitisShare />
      <AchillesTendonitisNavigation />
      <AchillesTendonitisRelated />
      <ContactForm />
    </main>
  );
};

export default AchillesTendonitis;

