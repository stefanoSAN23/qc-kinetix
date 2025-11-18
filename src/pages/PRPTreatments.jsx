import PRPHero from '../components/Sections/PRPTreatments/PRPHero';
import WhatIsPRP from '../components/Sections/PRPTreatments/WhatIsPRP';
import PRPForBackPain from '../components/Sections/PRPTreatments/PRPForBackPain';
import PRPForKneePain from '../components/Sections/PRPTreatments/PRPForKneePain';
import FindPRPTreatment from '../components/Sections/PRPTreatments/FindPRPTreatment';
import BenefitsOfPRP from '../components/Sections/PRPTreatments/BenefitsOfPRP';
import WhyConsiderPRP from '../components/Sections/PRPTreatments/WhyConsiderPRP';
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

