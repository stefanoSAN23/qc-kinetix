import PRPHero from '../components/Sections/PRPHero';
import WhatIsPRP from '../components/Sections/WhatIsPRP';
import PRPForBackPain from '../components/Sections/PRPForBackPain';
import PRPForKneePain from '../components/Sections/PRPForKneePain';
import FindPRPTreatment from '../components/Sections/FindPRPTreatment';
import BenefitsOfPRP from '../components/Sections/BenefitsOfPRP';
import WhyConsiderPRP from '../components/Sections/WhyConsiderPRP';
import ContactForm from '../components/Forms/ContactForm';

function PRPTreatments() {
  return (
    <main>
      <PRPHero />
      <WhatIsPRP />
      <PRPForBackPain />
      <PRPForKneePain />
      <FindPRPTreatment />
      <BenefitsOfPRP />
      <WhyConsiderPRP />
      <ContactForm />
    </main>
  );
}

export default PRPTreatments;

