import SEO from '../components/SEO/SEO';
import AboutHero from '../components/Sections/AboutUs/AboutHero';
import QCKinetixDifference from '../components/Sections/QCKinetixDifference';
import RegenerativeProviders from '../components/Sections/AboutUs/RegenerativeProviders';
import MedicalManagementTeam from '../components/Sections/AboutUs/MedicalManagementTeam';
import Stats from '../components/Stats/Stats';
import WhatIsRegenerative from '../components/Sections/WhatIsRegenerative';
import FindLocation from '../components/Sections/Conditions/FindLocation';
import NewsStoryHighlight from '../components/Sections/AboutUs/NewsStoryHighlight';
import ContactForm from '../components/Forms/ContactForm';

const AboutUs = () => {
  return (
    <>
      <SEO />
      <main>
      <AboutHero />
      <QCKinetixDifference hideButton />
      <RegenerativeProviders />
      <MedicalManagementTeam />
      <Stats />
          <WhatIsRegenerative hideConsultationButton />
          <FindLocation />
      <NewsStoryHighlight />
      <ContactForm />
      </main>
    </>
  );
};

export default AboutUs;

