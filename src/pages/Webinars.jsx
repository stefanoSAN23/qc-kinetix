import { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import WebinarHero from '../components/Sections/Webinars/WebinarHero';
import WebinarContent from '../components/Sections/Webinars/WebinarContent';
import ContactForm from '../components/Forms/ContactForm';

const Webinars = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO />
      <main>
      <WebinarHero />
      <WebinarContent />
      <ContactForm />
      </main>
    </>
  );
};

export default Webinars;

