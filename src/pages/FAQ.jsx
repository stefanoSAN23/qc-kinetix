import { useEffect } from 'react';
import FAQHero from '../components/Sections/FAQ/FAQHero';
import FAQAccordion from '../components/Sections/FAQ/FAQAccordion';
import FAQImageSection from '../components/Sections/FAQ/FAQImageSection';
import FAQResources from '../components/Sections/FAQ/FAQResources';
import ContactForm from '../components/Forms/ContactForm';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // FAQs About Our Clinic
  const clinicFAQs = [
    {
      question: 'Does your local pain clinic have age restrictions?',
      answer: '<p>Yes, age restrictions are clinic dependent. Most clinics require you to be 18 years old to be a QC Kinetix Patient. As long as you meet the local clinic age requirement and our minimum health requirements, you can be considered as a candidate for regenerative medicine treatment.</p>'
    },
    {
      question: 'Is there any reason I may not be a candidate for regenerative treatment?',
      answer: '<p>Regenerative medicine is not appropriate for every cause of pain. Further, there are some conditions in which treatment is contraindicated. These are:</p><ul><li>Women who are pregnant or nursing</li><li>Anyone with a compromised immune system</li><li>Anyone with active cancer</li><li>Anyone currently going through a chemotherapy or radiation therapy regimen</li><li>If your pain comes from a total joint replacement</li><li>If you have kidney failure and require dialysis</li></ul><p>If you are unsure whether you would be an ideal candidate for treatment at our clinic, <a href="https://qckinetix.com/qc-locations/">contact us today</a>.</p>'
    },
    {
      question: 'What if I have been treated elsewhere before?',
      answer: '<p>If you have been treated for pain before visiting QC Kinetix, please bring any diagnostic study films or reports to your free consultation so we can review them and avoid repeating any tests unnecessarily. In addition, we always welcome the opportunity to provide a second opinion on a case or help you understand whether you are eligible for any of our alternative therapies for pain.</p>'
    },
    {
      question: 'Does QC Kinetix provide non-surgical treatments for other issues?',
      answer: '<p>We currently offer regenerative medicine treatment to patients who suffer from pain, discomfort, or lack of mobility. Schedule your free consultation today to see how we can jump-start your healing process.</p><p></p>'
    },
    {
      question: 'What is the expected expense for my regenerative medicine treatment?',
      answer: '<p>At QC Kinetix, we provide various regenerative medicine treatments for a wide range of conditions. We will need to examine you to learn about your issues before determining which therapies and how many treatments you need. At your free consultation, we will provide you with the exact price for the treatments we recommend. We also offer affordable payment plans with approved credit.</p>'
    }
  ];

  // FAQs About Regenerative Medicine
  const regenerativeFAQs = [
    {
      question: 'What is regenerative medicine?',
      answer: '<p><a href="https://qckinetix.com/regenerative-medicine/">Regenerative medicine</a> is an exciting medical field that harnesses the human body\'s natural abilities to repair and restore itself. It includes several alternative therapies for pain that utilize natural biologics to reduce inflammation and help injured tissues heal and repair.</p>'
    },
    {
      question: 'Are your regenerative treatments safe?',
      answer: '<p>We have found regenerative treatments to be safe and effective when used locally for musculoskeletal injections (in and around joints and soft tissues). This has also been verified in multiple medical studies. We do not condone the use of any of these regenerative therapies for any systemic disease or administration intravenously.</p>'
    },
    {
      question: 'What are the risks and side effects associated with your natural treatments?',
      answer: '<p>Our natural pain treatments are injected at or near the site of the pain. Of course, as with any injection, there is always the risk of bleeding, local soreness, minor bruising, and possibly infection. But, in our experience, other than some localized soreness for a day or two, most people don\'t experience any significant issues with regenerative medicine treatments.</p>'
    },
    {
      question: 'What is the recovery time after regenerative medicine treatments?',
      answer: '<p>There is no significant downtime after the treatments. You may experience some minor soreness at the site for a day or two, but nothing that would impair your ability to work or move.</p>'
    },
    {
      question: 'How long does it take for QC Kinetix alternative pain therapies to show results?',
      answer: '<p>You may experience positive results from regenerative treatments within just a few days or weeks. However, the results of the regenerative medicine protocol continue to build over time and are typically not fully realized for 6 to 9 months.</p><p>Visit our <a href="https://qckinetix.com/success-stories/">Patient Testimonials</a> page to hear what others are saying about their experiences with QC Kinetix.</p>'
    },
    {
      question: 'Is there a Medical Director involved with our treatment plans?',
      answer: '<p>Treatments are specially created by Dr. Mitchell Sheinkop, a board-certified orthopedic surgeon with decades of experience in joint replacement and regenerative medicine.</p>'
    },
    {
      question: 'Is Regenerative Medicine FDA Approved?',
      answer: '<p>At QC Kinetix, we believe the most effective healing comes from your body\'s natural ability to heal. Because these treatments are derived from your body, they are not regulated by the Food and Drug Administration (FDA). Unlike traditional medications, they do not need to go through the FDA drug approval process. The devices used at QC Kinetix are FDA cleared</p>'
    }
  ];

  // Additional FAQs
  const additionalFAQs = [
    {
      question: 'What is the main use of regenerative medicine?',
      answer: '<p>The main use of regenerative medicine is to help restore and revitalize damaged tissues. It aims to revitalize parts of the body that have been hurt by injury, disease, or aging. Instead of just treating symptoms, regenerative medicine tries to restore normal function by stimulating the body\'s own healing powers.</p>'
    },
    {
      question: 'How does regenerative medicine work?',
      answer: '<p>Regenerative medicine uses your body\'s own orthobiologics – stem cells and Platelet Rich Plasma– to assist the body in healing. These cells are put into injured areas to help them heal. The main goal is to boost the body\'s natural healing powers and fix the root cause of health problems.</p>'
    },
    {
      question: 'What is the goal of regenerative medicine?',
      answer: '<p>Regenerative medicine aims to relieve pain and improve mobility by using the body\'s own natural biologics to stimulate and revitalize itself, instead of just treating the symptoms of joint pain, injuries, or chronic conditions. Regenerative medicine uses your body\'s PRP (Platelet Rich Plasma) and Stem Cells and requires no surgery, no drugs, and no downtime. When your pain improves, you will be able to resume your favorite activities like playing with your grandkids, getting back to the golf course, hiking, or traveling to exotic destinations. Pain shouldn\'t keep you from enjoying the pastimes that make life worth living.</p>'
    },
    {
      question: 'What can regenerative medicine cure?',
      answer: '<p>QC Kinetix uses regenerative medicine to reduce pain and inflammation in the hips, knees, shoulders, elbows, wrists, hands, fingers, feet, and other joints. People who suffer from pain due to injury or age-related changes, such as arthritis, have experienced improvement after going through regenerative medicine programs and are now able to return to the activities they have been unable to participate in. We have treated over 35,000 patients and have given them back their quality of life.</p>'
    },
    {
      question: 'Who is a good candidate for regenerative medicine?',
      answer: '<p>People with joint problems, such as arthritis pain in the hips, knees, and shoulders, are good candidates for regenerative medicine. People with pain from sports injuries like rotator cuff or meniscus tears, and individuals with tendonitis may also experience pain relief and revitalization with regenerative medicine.</p><p>Good candidates are often those who have an unhealed musculoskeletal injury or a degenerative condition, and who are not good candidates for or who wish to avoid the risks, pain, and inconvenience of surgery. It\'s important to note that a person\'s overall health, the severity of their condition, and other factors can affect how well regenerative treatments work. This is something our Provider will review and discuss during your initial consultation.</p>'
    },
    {
      question: 'How long does regenerative medicine take to work?',
      answer: '<p>Most patients can resume normal activities immediately or within a few days after treatment. Many patients start to see improvements in function and/or pain within two to eight weeks. Those undergoing stem cell therapy may see improvement within three to six months. It\'s important to note that results can vary between individuals, and some patients may experience longer-lasting effects. Many people report improvements that last for years. Patients should follow their providers\' post-treatment guidelines and attend follow-up appointments to monitor progress.</p>'
    },
    {
      question: 'How does QC Kinetix pricing compare to the cost of surgery?',
      answer: '<p>QC Kinetix <a href="https://qckinetix.com/blog/how-much-does-regenerative-medicine-cost/">pricing for regenerative treatments</a> is generally lower than surgery costs. Prices vary by geographic location, area of the body treated, and the patient\'s type and severity of pain. In comparison, knee replacement surgery can cost $19,000 to $30,000, while shoulder or elbow surgeries may exceed $40,000. No Insurance is necessary to receive QC Kinetix treatments, and no physician referral is needed.</p>'
    },
    {
      question: 'How much do regenerative medicine treatments at QC Kinetix cost?',
      answer: '<p>Typically less than the cost of surgery, <a href="https://qckinetix.com/blog/how-much-does-regenerative-medicine-cost/">pricing for QC Kinetix\'s regenerative medicine treatments</a> varies based on the patient\'s condition, treatment plan, and location. Prices are determined during the free initial consultation, and a custom treatment plan is built specifically for you. If you are seeking regenerative medicine treatments at QC Kinetix, keep in mind that you do not need to have insurance to receive treatment, and no physician referral is needed.</p>'
    },
    {
      question: 'Does QC Kinetix offer payment plans or financing options?',
      answer: '<p>Yes, QC Kinetix offers payment plans and financing options to make their treatments more accessible. QC Kinetix prices vary based on individual treatment plans, and the cost of QC Kinetix services is determined during the free initial consultation. We work with third-party financial institutions to help patients explore financing options for their regenerative medicine treatments.</p><p>Both Health Savings Accounts (HSAs) and Flexible Spending Accounts (FSAs) offer a smart way to manage your healthcare expenses. They let you use pre-tax money to cover eligible medical costs, including certain regenerative medicine treatments like those offered at QC Kinetix.</p><p>Many regenerative medicine treatments, including those for joint pain, muscle injuries, and chronic inflammation, are considered qualified medical expenses by the IRS. This means you can often use your HSA or FSA funds to cover the costs. At QC Kinetix, we gladly accept both HSA and FSA funds for our treatments. However, we always recommend confirming coverage with your specific HSA/FSA provider beforehand.</p>'
    }
  ];

  return (
    <main>
      <FAQHero />
      <FAQAccordion
        title="FAQs About Our Clinic"
        items={clinicFAQs}
        id="aboutClinic"
      />
      <FAQImageSection />
      <FAQAccordion
        title="FAQs About Regenerative Medicine"
        items={regenerativeFAQs}
        id="regMed"
      />
      <FAQAccordion
        title="Additional FAQs"
        items={additionalFAQs}
        id="additionalFAQs"
      />
      <FAQResources />
      <ContactForm />
    </main>
  );
};

export default FAQ;

