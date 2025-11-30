import SEO from '../components/SEO/SEO';
import { Divider } from '../components/Common';
import {
  ConditionHero,
  RegenerativeTherapySection,
  WhatIsTherapySection,
  CandidateSection,
  BenefitsSection,
  ReadyToReduceSection
} from '../components/Conditions';
import Testimonials from '../components/Sections/Testimonials';
import ContactForm from '../components/Forms/ContactForm';
import { conditionsData } from '../data/conditionsData';

function KneePain() {
  const data = conditionsData.knee;

  return (
    <>
      <SEO />
      <main>
        <ConditionHero 
          title={data.title} 
          breadcrumb={data.breadcrumb} 
        />
        <RegenerativeTherapySection data={data.regenerativeTherapy} />
        <WhatIsTherapySection data={data.whatIsTherapy} />
        <CandidateSection data={data.candidate} />
        <Divider variant="default" />
        <BenefitsSection data={data.benefits} />
        <ReadyToReduceSection data={data.readyToReduce} />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}

export default KneePain;
