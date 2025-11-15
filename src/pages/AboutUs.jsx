import AboutHero from '../components/Sections/AboutHero';
import QCKinetixDifference from '../components/Sections/QCKinetixDifference';
import RegenerativeProviders from '../components/Sections/RegenerativeProviders';
import MedicalManagementTeam from '../components/Sections/MedicalManagementTeam';
import AboutStats from '../components/Sections/AboutStats';
import RegenerativeExplainer from '../components/Sections/RegenerativeExplainer';
import LocationsFinder from '../components/Sections/LocationsFinder';
import NewsStoryHighlight from '../components/Sections/NewsStoryHighlight';
import ContactForm from '../components/Forms/ContactForm';

const AboutUs = () => {
  return (
    <main>
      <AboutHero />
      <QCKinetixDifference hideButton />
      <RegenerativeProviders />
      <MedicalManagementTeam />
      <AboutStats />
      <RegenerativeExplainer />
      <LocationsFinder />
      <NewsStoryHighlight />
      <ContactForm />
    </main>
  );
};

export default AboutUs;

