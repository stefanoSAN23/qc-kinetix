import JointPainHero from '../components/Sections/JointPainHero';
import RegenerativeTherapyForJointPain from '../components/Sections/RegenerativeTherapyForJointPain';
import WhatIsRegenerativeJointPainTherapy from '../components/Sections/WhatIsRegenerativeJointPainTherapy';
import JointCandidate from '../components/Sections/JointCandidate';
import SectionDivider from '../components/Sections/SectionDivider';
import BenefitsOfNonsurgicalJointTreatments from '../components/Sections/BenefitsOfNonsurgicalJointTreatments';
import ReadyToReduceJointPain from '../components/Sections/ReadyToReduceJointPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const JointPain = () => {
  return (
    <main>
      <JointPainHero />
      <RegenerativeTherapyForJointPain />
      <WhatIsRegenerativeJointPainTherapy />
      <JointCandidate />
      <SectionDivider />
      <BenefitsOfNonsurgicalJointTreatments />
      <ReadyToReduceJointPain />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default JointPain;


