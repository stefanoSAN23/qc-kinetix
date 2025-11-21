import SEO from '../components/SEO/SEO';
import SuccessHero from '../components/Sections/SuccessStories/SuccessHero';
import Stats from '../components/Stats/Stats';
import SuccessStoriesGrid from '../components/Sections/SuccessStories/SuccessStoriesGrid';
import ContactForm from '../components/Forms/ContactForm';

const SuccessStories = () => {
  return (
    <>
      <SEO />
      <main>
      <SuccessHero />
      <Stats animateImmediate />
      <SuccessStoriesGrid />
      <ContactForm />
      </main>
    </>
  );
};

export default SuccessStories;


