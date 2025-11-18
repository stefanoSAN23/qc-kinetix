import { useEffect } from 'react';
import QCLocationsHero from '../components/Sections/Locations/QCLocationsHero';
import QCLocationsInfo from '../components/Sections/Locations/QCLocationsInfo';
import QCKinetixDifference from '../components/Sections/QCKinetixDifference';
import ContactForm from '../components/Forms/ContactForm';

const QCLocations = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main>
      <QCLocationsHero />
      <QCLocationsInfo />
      <QCKinetixDifference />
      <ContactForm />
    </main>
  );
};

export default QCLocations;

