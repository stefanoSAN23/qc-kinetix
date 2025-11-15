import WhatToExpectHero from '../components/Sections/WhatToExpectHero';
import PainReliefJourney from '../components/Sections/PainReliefJourney';
import BodyPainMap from '../components/Sections/BodyPainMap';
import BecomingPatientSection from '../components/Sections/BecomingPatientSection';
import Testimonials from '../components/Sections/Testimonials';
import WhatToExpectFAQs from '../components/Sections/WhatToExpectFAQs';
import ContactForm from '../components/Forms/ContactForm';

const WhatToExpect = () => {
  return (
    <main>
      <WhatToExpectHero />
      <PainReliefJourney />
      <BodyPainMap hideConsultationButton />
      <BecomingPatientSection />
      <Testimonials />
      <WhatToExpectFAQs />
      <ContactForm />
    </main>
  );
};

export default WhatToExpect;

