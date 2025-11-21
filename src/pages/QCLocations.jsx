import { useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import QCLocationsHero from '../components/Sections/Locations/QCLocationsHero';
import QCLocationsInfo from '../components/Sections/Locations/QCLocationsInfo';
import QCKinetixDifference from '../components/Sections/QCKinetixDifference';
import ContactForm from '../components/Forms/ContactForm';

const QCLocations = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO />
      <main>
      <QCLocationsHero />
      <QCLocationsInfo />
      <QCKinetixDifference />
      <ContactForm />
      </main>
    </>
  );
};

export default QCLocations;

