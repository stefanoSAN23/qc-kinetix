import ConditionsHero from '../components/Sections/Conditions/ConditionsHero';
import HowRegenerativeTreatsPain from '../components/Sections/Conditions/HowRegenerativeTreatsPain';
import AllConditionsTreated from '../components/Sections/Conditions/AllConditionsTreated';
import ResearchSection from '../components/Sections/Conditions/ResearchSection';
import FindLocation from '../components/Sections/Conditions/FindLocation';
import ConditionsFAQs from '../components/Sections/Conditions/ConditionsFAQs';
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

