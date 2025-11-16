import SuccessHero from '../components/Sections/SuccessHero';
import Stats from '../components/Stats/Stats';
import SuccessStoriesGrid from '../components/Sections/SuccessStoriesGrid';
import ContactForm from '../components/Forms/ContactForm';

const SuccessStories = () => {
  return (
    <main>
      <SuccessHero />
      <Stats animateImmediate />
      <SuccessStoriesGrid />
      <ContactForm />
    </main>
  );
};

export default SuccessStories;


