import { useEffect } from 'react';
import RunnersKneeHero from '../components/Sections/RunnersKnee/RunnersKneeHero';
import RunnersKneeContent from '../components/Sections/RunnersKnee/RunnersKneeContent';
import RunnersKneeShare from '../components/Sections/RunnersKnee/RunnersKneeShare';
import RunnersKneeNavigation from '../components/Sections/RunnersKnee/RunnersKneeNavigation';
import RunnersKneeRelated from '../components/Sections/RunnersKnee/RunnersKneeRelated';
import ContactForm from '../components/Forms/ContactForm';

const RunnersKnee = () => {
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <RunnersKneeHero />
      <RunnersKneeContent />
      <RunnersKneeShare />
      <RunnersKneeNavigation />
      <RunnersKneeRelated />
      <ContactForm />
    </main>
  );
};

export default RunnersKnee;

