import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import JointPainHero from '../components/Sections/JointPain/JointPainHero';
import RegenerativeTherapyForJointPain from '../components/Sections/JointPain/RegenerativeTherapyForJointPain';
import WhatIsRegenerativeJointPainTherapy from '../components/Sections/JointPain/WhatIsRegenerativeJointPainTherapy';
import JointCandidate from '../components/Sections/JointPain/JointCandidate';
import BenefitsOfNonsurgicalJointTreatments from '../components/Sections/JointPain/BenefitsOfNonsurgicalJointTreatments';
import ReadyToReduceJointPain from '../components/Sections/JointPain/ReadyToReduceJointPain';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';

const JointPain = () => {
  return (
    <>
      <SEO />
      <main>
      <JointPainHero />
      <RegenerativeTherapyForJointPain />
      <WhatIsRegenerativeJointPainTherapy />
      <JointCandidate />
      <Divider variant="default" />
      <BenefitsOfNonsurgicalJointTreatments />
      <ReadyToReduceJointPain />
      <Testimonials />
      <ContactForm />
      </main>
    </>
  );
};

export default JointPain;


