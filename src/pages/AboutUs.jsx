import AboutHero from '../components/Sections/AboutHero';
import QCKinetixDifference from '../components/Sections/QCKinetixDifference';
import RegenerativeProviders from '../components/Sections/RegenerativeProviders';
import MedicalManagementTeam from '../components/Sections/MedicalManagementTeam';
import Stats from '../components/Stats/Stats';
import WhatIsRegenerative from '../components/Sections/WhatIsRegenerative';
import FindLocation from '../components/Sections/FindLocation';
import NewsStoryHighlight from '../components/Sections/NewsStoryHighlight';
import ContactForm from '../components/Forms/ContactForm';

const AboutUs = () => {
  return (
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
  );
};

export default AboutUs;

