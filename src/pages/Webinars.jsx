import { useEffect } from 'react';
import WebinarHero from '../components/Sections/WebinarHero';
import WebinarContent from '../components/Sections/WebinarContent';
import ContactForm from '../components/Forms/ContactForm';

const Webinars = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <WebinarHero />
      <WebinarContent />
      <ContactForm />
    </main>
  );
};

export default Webinars;

