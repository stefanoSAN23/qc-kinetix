import ConditionsHero from '../components/Sections/ConditionsHero';
import HowRegenerativeTreatsPain from '../components/Sections/HowRegenerativeTreatsPain';
import AllConditionsTreated from '../components/Sections/AllConditionsTreated';
import ResearchSection from '../components/Sections/ResearchSection';
import FindLocation from '../components/Sections/FindLocation';
import ConditionsFAQs from '../components/Sections/ConditionsFAQs';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

function Conditions() {
  return (
    <main>
      <ConditionsHero />
      <HowRegenerativeTreatsPain />
      <AllConditionsTreated />
      <ResearchSection />
      <FindLocation />
      <ConditionsFAQs />
      <Testimonials />
      <ContactForm />
    </main>
  );
}

export default Conditions;

