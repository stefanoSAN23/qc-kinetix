import { useEffect } from 'react';
import TennisElbowOfTheKneeHero from '../components/Sections/TennisElbowOfTheKnee/TennisElbowOfTheKneeHero';
import TennisElbowOfTheKneeContent from '../components/Sections/TennisElbowOfTheKnee/TennisElbowOfTheKneeContent';
import TennisElbowOfTheKneeShare from '../components/Sections/TennisElbowOfTheKnee/TennisElbowOfTheKneeShare';
import TennisElbowOfTheKneeNavigation from '../components/Sections/TennisElbowOfTheKnee/TennisElbowOfTheKneeNavigation';
import TennisElbowOfTheKneeRelated from '../components/Sections/TennisElbowOfTheKnee/TennisElbowOfTheKneeRelated';
import ContactForm from '../components/Forms/ContactForm';

const TennisElbowOfTheKnee = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <TennisElbowOfTheKneeHero />
      <TennisElbowOfTheKneeContent />
      <TennisElbowOfTheKneeShare />
      <TennisElbowOfTheKneeNavigation />
      <TennisElbowOfTheKneeRelated />
      <ContactForm />
    </main>
  );
};

export default TennisElbowOfTheKnee;

