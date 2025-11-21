import SEO from '../components/SEO/SEO';
import WhatToExpectHero from '../components/Sections/WhatToExpect/WhatToExpectHero';
import PainReliefJourney from '../components/Sections/WhatToExpect/PainReliefJourney';
import BodyPainMap from '../components/Sections/BodyPainMap';
import BecomingPatientSection from '../components/Sections/WhatToExpect/BecomingPatientSection';
import Testimonials from '../components/Sections/Testimonials';
import WhatToExpectFAQs from '../components/Sections/WhatToExpect/WhatToExpectFAQs';
import ContactForm from '../components/Forms/ContactForm';

const WhatToExpect = () => {
  return (
    <>
      <SEO />
      <main>
      <WhatToExpectHero />
      <PainReliefJourney />
      <BodyPainMap hideConsultationButton />
      <BecomingPatientSection />
      <Testimonials />
      <WhatToExpectFAQs />
      <ContactForm />
      </main>
    </>
  );
};

export default WhatToExpect;

