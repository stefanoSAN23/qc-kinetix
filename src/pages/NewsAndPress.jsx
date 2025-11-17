import { useEffect } from 'react';
import NewsHero from '../components/Sections/NewsHero';
import NewsResults from '../components/Sections/NewsResults';
import ContactForm from '../components/Forms/ContactForm';

const NewsAndPress = () => {
  // Ensure page starts from top on load, especially for responsive
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <NewsHero />
      <NewsResults />
      <ContactForm />
    </main>
  );
};

export default NewsAndPress;

