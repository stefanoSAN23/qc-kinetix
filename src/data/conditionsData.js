/**
 * Datos centralizados para todas las páginas de condiciones/dolor
 * Cada condición tiene la misma estructura para usar componentes reutilizables
 */

export const conditionsData = {
  knee: {
    slug: 'knee-pain',
    name: 'Knee',
    title: 'Knee Pain',
    breadcrumb: 'Knee Pain',
    
    // Hero Section
    hero: {
      backgroundImage: null, // Usar imagen de fondo CSS
    },
    
    // Regenerative Therapy Section
    regenerativeTherapy: {
      title: 'Regenerative Therapy for Knee Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/QC-Kinetix9852.png.webp',
      imageAlt: 'Knee Pain Treatment',
      imageWidth: 453,
      imageHeight: 687,
      intro: 'Regenerative medicine offers exciting promise for those with knee pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative knee pain therapy that activates your body\'s own ability to revitalize its tissues so you can experience genuine pain relief from conditions like:',
      conditions: [
        'Osteoarthritis (OA)',
        { text: 'Meniscus tear', link: '/knee-pain/meniscus-treatment/' },
        'Tendonitis',
        'Damaged cartilage',
        'Ligament injuries',
        'Bursitis',
        'Tendonitis',
        { text: 'ACL injuries', link: '/knee-pain/acl-treatment/' }
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the primary solutions for chronic knee pain. But imagine alleviating your knee pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix\'s regenerative alternatives to knee surgery can help you reclaim your lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to the knee joint.'
    },
    
    // What Is Regenerative Therapy Section
    whatIsTherapy: {
      title: 'Regenerative Knee Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775.png.webp',
      description: 'Our regenerative knee pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix, we customize orthobiologic therapies for each patient to stimulate the body\'s natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient\'s pain, promoting targeted recovery.',
      benefitsIntro: 'Regenerative knee treatment without surgery can alleviate your pain without:',
      benefits: [
        'Additional damage to your tissues',
        'Risking the complications of surgery',
        'Experiencing additional pain',
        'Building up scar tissue',
        'Developing post-traumatic arthritis',
        'Taking opioids',
        'Having to miss work'
      ],
      conclusion: 'Consider regenerative alternatives to knee surgery before you have the meniscectomy, meniscus repair, lateral release, tendon repair, arthrotomy, or knee replacements your surgeon advises.'
    },
    
    // Are You a Candidate Section
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Knee Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative knee restoration without surgery is to come in for your free consultation at your local QC Kinetix clinic. We meet with you, review your medical records, answer all your questions, and conduct a thorough examination.',
      factorsIntro: 'Factors that make you a good candidate for regenerative alternatives to knee surgery include:',
      factors: [
        'You experience chronic knee pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'You want to avoid joint replacement surgery',
        'You may not be a good candidate for surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical knee repair can decrease your pain.'
    },
    
    // Benefits Section
    benefits: {
      title: 'Nonsurgical Knee Treatments',
      intro: 'Regenerative knee pain treatments offer the benefits of knee surgery without a hospital stay, loss of work, added pain, risk of complications, and a lengthy recovery.',
      leftContent: [
        'Unlike traditional knee replacement surgery, which addresses symptoms by replacing the joint, our non-surgical treatments focus on the root cause of your pain. Whether your knee pain is the result of arthritis, worn cartilage, or joint inflammation, our regenerative therapies work with your body\'s own healing processes to revitalize tissues and improve function without invasive procedures or long recovery times.',
        'If you\'ve been told by an orthopedic surgeon that surgery is your only option, consider exploring knee replacement alternatives. Many patients experience reduced pain and improved mobility.'
      ],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Regenerative knee pain therapy is a minimally invasive treatment option that offers a less invasive alternative to knee surgery. Unlike surgery, which typically requires anesthesia and involves more extensive procedures, regenerative therapy focuses on restoring and healing the knee with minimal disruption to the surrounding tissues.',
          'Knee surgery involves a recovery process, with no guarantee of you being pain free or without limitations. In contrast, regenerative medicine offers a more effective solution with minimal to no downtime, allowing you to resume your daily activities immediately without the same recovery concerns.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with knee surgery include:',
        risks: [
          'Additional pain',
          'Excessive bleeding',
          'Blood clots',
          'Nerve damage',
          'Infection',
          'Joint stiffening',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    
    // Ready to Reduce Section
    readyToReduce: {
      text: 'Ready to reduce your knee pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  ankle: {
    slug: 'ankle-pain',
    name: 'Ankle',
    title: 'Ankle Pain',
    breadcrumb: 'Ankle Pain',
    
    hero: {
      backgroundImage: null,
    },
    
    regenerativeTherapy: {
      title: 'Regenerative Treatments for Ankle Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/erik-mclean-zJHQTqVpf1c-unsplash.png.webp',
      imageAlt: 'Ankle pain treatment',
      imageWidth: 453,
      imageHeight: 642,
      intro: 'Regenerative medicine offers exciting promise for those with ankle pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative ankle pain therapy that activates your body\'s own ability to revitalize its tissues so you experience genuine pain relief from conditions like:',
      conditions: [
        'Ankle sprain',
        'Osteoarthritis (OA)',
        'Ankle replacement',
        'Peroneal tendonitis',
        'Achilles tendon injury',
        'Torn ligament',
        'Ankle impingement',
        'Gout'
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the primary solutions for chronic ankle pain. But imagine alleviating your ankle pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix\'s regenerative alternatives to ankle surgery can help you reclaim your lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to the ankle joint.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Ankle Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775-1.png.webp',
      description: 'Our regenerative ankle pain treatments without surgery avoid additional damage to the joint and cartilage by focusing directly on healing. At QC Kinetix®, we customize biologic therapies for each patient to stimulate the body\'s innate ability to revive and revitalize its tissues. We then guide these self-healing mechanisms to target the source of each patient\'s pain.',
      benefitsIntro: 'Regenerative ankle treatment without surgery can reduce your pain without:',
      benefits: [
        'Further injury to your tissues',
        'Surgical complication risks',
        'A long, painful recovery',
        'Scar tissue',
        'Post-surgical arthritis',
        'Prescription pain medication',
        'Absence from work'
      ],
      conclusion: 'Consider regenerative alternatives to ankle surgery before having the ankle fusion, ligament reconstruction, or ankle replacement your surgeon recommends.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Ankle Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative ankle repair without surgery is to come in for your free consultation at your local QC Kinetix clinic. We\'ll meet with you, review your medical records, answer all your questions, and conduct a thorough examination.',
      factorsIntro: 'Factors that make you a good candidate for regenerative alternatives to ankle surgery include:',
      factors: [
        'You experience chronic ankle pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'You want to avoid joint replacement surgery',
        'You may not be a good candidate for surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical ankle repair can decrease your pain.'
    },
    
    benefits: {
      title: 'Nonsurgical Ankle Treatments',
      intro: 'Regenerative ankle pain treatments offer the benefits of ankle surgery without a hospital stay, lost work, additional pain, surgical risk, or a lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Ankle surgery requires general anesthesia and invasive procedures. Regenerative ankle pain therapy is noninvasive, focusing on healing the tissues without creating further trauma.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Ankle surgery demands a long, painful recovery that can stretch from weeks to months and usually involves prescription pain medications. The ankle must remain immobilized and non-weight-bearing for an extended period, and even daily routines like bathing can be difficult with a cast. With regenerative medicine, none of these limitations apply—you won\'t miss a day of work.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with ankle surgery include:',
        risks: [
          'Additional pain',
          'Excessive bleeding',
          'Blood clots',
          'Nerve damage',
          'Infection',
          'Joint stiffening',
          'Pneumonia',
          'Post-surgical arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a safer and less invasive option for lasting pain relief.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your ankle pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  back: {
    slug: 'back-pain',
    name: 'Back',
    title: 'Back Pain',
    breadcrumb: 'Back Pain',
    
    hero: {
      backgroundImage: null,
    },
    
    regenerativeTherapy: {
      title: 'Regenerative Medicine for Back Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/back-pain-6949392_1920.png.webp',
      imageAlt: 'Back pain treatment',
      imageWidth: 453,
      imageHeight: 632,
      intro: 'Regenerative medicine offers exciting promise for those with back pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative lower back pain therapy that activates your body\'s healing ability so you experience lasting pain relief from conditions like:',
      conditions: [
        'Sciatica',
        'Osteoarthritis (OA)',
        'Herniated disc',
        'Sprains & strains',
        'Lumbar spinal stenosis',
        'Scoliosis'
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the primary solutions for chronic back pain. But imagine alleviating your back pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix\'s regenerative alternatives to back surgery can help you reclaim your lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to the back.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Back Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775-2.png.webp',
      description: 'Our regenerative back pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix®, we customize orthobiologic therapies for each patient to stimulate the body\'s natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient\'s pain, promoting targeted recovery.',
      benefitsIntro: 'Regenerative back treatment without surgery can alleviate your pain without:',
      benefits: [
        'Additional damage to the tissue of your back',
        'Risks of complications',
        'Added pain',
        'Scar tissue buildup',
        'Developing post-traumatic arthritis',
        'Pain medications',
        'Missing work',
        'Loss of independence'
      ],
      conclusion: 'Investigate regenerative nonsurgical back pain treatment before you undergo the discectomy, laminectomy, or artificial disk replacement your surgeon recommends.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Lower Back Treatment?',
      description: 'Scheduling your free consultation at your local QC Kinetix clinic is the best way to learn whether you\'re a good candidate for regenerative lower back pain relief. We meet with you, review your symptoms and medical records, conduct a thorough examination, and answer all your questions.',
      factorsIntro: 'Factors that make you a good candidate for regenerative lower back treatment include:',
      factors: [
        'You experience chronic back pain',
        'Your pain results from injury, repetitive stress, or joint degeneration',
        'You want to avoid back surgery',
        'You\'re not considered a good candidate for back surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'Do any of these statements describe you? If so, we look forward to meeting with you to learn how regenerative, nonsurgical back pain treatment can decrease your pain.'
    },
    
    benefits: {
      title: 'Nonsurgical Back Treatments',
      intro: 'Regenerative back pain treatments offer the benefits of lower back surgery without a hospital stay, loss of work, added pain, risk of complications, and a lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Back surgery requires general anesthesia and invasive surgery. Regenerative back pain therapy is noninvasive.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Back surgery requires a long recovery. With regenerative medicine, you won\'t miss a day of work.'
        ],
        recoveryList: [
          ['Hospital stay: typically, 1-3 days', 'Opioid pain relief: about 1 week', 'Subsequent pain meds: 4-12 weeks', 'Use of walker/cane: 1-10 weeks'],
          ['Return to work: typically, 6-8 weeks', 'Return to full activity: 3-12 months']
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with back surgery include:',
        risks: [
          'Additional pain',
          'Excessive bleeding',
          'Blood clots',
          'Nerve damage',
          'Infection',
          'Joint stiffening',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your lower back pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  hip: {
    slug: 'hip-pain',
    name: 'Hip',
    title: 'Hip Pain',
    breadcrumb: 'Hip Pain',
    
    hero: {
      backgroundImage: null,
    },
    
    regenerativeTherapy: {
      title: 'Hip Pain Treatment Without Surgery',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/pexels-kampus-8638041.png.webp',
      imageAlt: 'Hip pain treatment',
      imageWidth: 453,
      imageHeight: 713,
      intro: 'Regenerative treatments for hip pain offer an exciting alternative to hip surgery. At QC Kinetix®, we provide natural regenerative hip pain therapy that activates your body\'s ability to revitalize its tissues so you experience genuine pain relief from conditions like:',
      conditions: [
        'Bursitis',
        { text: 'Tendonitis', link: 'https://qckinetix.com/hip-pain/hip-tendonitis-treatment/' },
        'Hip impingement',
        { text: 'Labral tears', link: 'https://qckinetix.com/hip-pain/hip-labrum-treatment/' },
        'Ligament injuries',
        'Osteoarthritis (OA)'
      ],
      conclusion: 'Traditionally, hip surgery or a life of "pain management" were the only options for someone suffering from chronic hip pain. Managing pain through medication has left millions of Americans addicted without ever resolving the pain. Physical therapy can strengthen healthy muscles, tendons, and ligaments to help support the damaged ones but does nothing to revitalize the damaged tissues. QC Kinetix\'s regenerative alternatives to hip surgery can help you regain your lost lifestyle and enjoy lasting pain relief, better range of motion, and improved functionality of your hip joint.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Hip Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775-3.png.webp',
      description: 'Our regenerative hip pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix®, we customize orthobiologic therapies for each patient to stimulate the body\'s natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient\'s pain, promoting targeted recovery.',
      benefitsIntro: 'Unlike surgery, pain relief through regenerative medicine involves:',
      benefits: [
        'No additional damage to your body',
        'No additional pain',
        'No scar tissue buildup',
        'No drugs',
        'No risk of complications',
        'No lengthy and painful recovery'
      ],
      conclusion: 'Yet regenerative hip pain therapy and surgery actually have a lot in common. Both approaches rely on the body to heal its damaged tissues. It\'s just that surgery causes additional damage and pain before the body heals.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Hip Treatment?',
      description: 'In some cases, hip surgery is necessary. In many cases, regenerative medicine is a viable alternative to hip surgery. To discover whether you\'re a candidate for regenerative hip repair without surgery, come in for a free consultation at your local QC Kinetix clinic. We will meet with you, review your medical records, answer all your questions, and conduct a thorough examination.',
      factorsIntro: 'You are a good candidate for nonsurgical hip pain treatment if:',
      factors: [
        'Your chronic hip pain has not responded well to conventional treatments.',
        'You have osteoarthritis (OA).',
        'You want to be able to do your favorite activities again.',
        'You want to avoid the pain and potential complications of surgery.',
        'Steroid injection(s) and over-the-counter medications have not worked for you.'
      ],
      conclusion: 'If any of these describe you, we look forward to meeting with you to explore our regenerative alternatives to hip surgery.'
    },
    
    benefits: {
      title: 'Nonsurgical Hip Treatments',
      intro: 'There are multiple benefits to our regenerative hip pain treatments without surgery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Regenerative hip pain therapy is a minimally invasive treatment option, offering a less invasive alternative to hip surgery. Unlike surgery, which typically requires anesthesia and involves more extensive procedures, regenerative therapy focuses on healing and restoring the hip with minimal disruption to the surrounding tissues.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Hip surgery causes major trauma to the body, requiring a lengthy recovery:'
        ],
        recoveryList: [
          ['Hospital stay: typically, 1-4 days', 'Opioid pain relief: about 1 week', 'Subsequent pain meds: 3-4 months', 'Use of walker/cane: 1-4 weeks'],
          ['Return to work: typically, 6-12 weeks', 'Return to full activity: 6-12 months']
        ],
        afterList: 'With our regenerative alternatives to hip surgery, there is no need for pain medications or missing a day of work.'
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The risks of hip surgery include:',
        risks: [
          'Bleeding',
          'Blood clots',
          'Infection',
          'Nerve damage',
          'Stiffening joint',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your hip pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  shoulder: {
    slug: 'shoulder-pain',
    name: 'Shoulder',
    title: 'Shoulder Pain',
    breadcrumb: 'Shoulder Pain',
    
    hero: {
      backgroundImage: null,
    },
    
    regenerativeTherapy: {
      title: 'Nonsurgical Shoulder Pain Treatments',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/DSC_3429.png.webp',
      imageAlt: 'Patient receiving shoulder treatment',
      imageWidth: 453,
      imageHeight: 706,
      intro: 'Regenerative medicine offers exciting promise for those with shoulder pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative shoulder pain therapy that activates your body\'s own ability to revitalize its tissues so you can experience genuine pain relief from conditions like:',
      conditions: [
        { text: 'Rotator cuff tear', link: '/blog/can-a-torn-rotator-cuff-heal-on-its-own/' },
        { text: 'Bursitis', link: '/blog/shoulder-bursitis/' },
        'Osteoarthritis (OA)',
        'Frozen shoulder (adhesive capsulitis)',
        'Tendonitis',
        { text: 'Labral tear', link: '/blog/torn-labrum-shoulder-recovery-without-surgery/' },
        'Shoulder impingement',
        'Bicep injuries'
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the primary solutions for chronic shoulder pain. But imagine reducing your shoulder pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix\'s regenerative alternatives to shoulder surgery offer a safe and effective way to regain your active lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to your shoulder joint.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Shoulder Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/uploads/2025/04/Mask-Group-41.jpg',
      description: 'Our regenerative shoulder pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix, we customize orthobiologic therapies for each patient to stimulate the body\'s natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient\'s pain, promoting targeted recovery.',
      benefitsIntro: 'Our regenerative shoulder pain treatments relieve your pain and improve joint functionality without these drawbacks related to surgery:',
      benefits: [
        'No additional tissue damage',
        'No added pain',
        'No development of scar tissue',
        'No narcotics',
        'No risks of complications',
        'No risk of post-traumatic arthritis',
        'No lengthy and painful recovery'
      ],
      conclusion: 'Before you undergo the rotator cuff repair, joint replacement, or labrum repair your surgeon recommends, consider regenerative nonsurgical shoulder repair.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Shoulder Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative shoulder repair without surgery is to come in for your free consultation at your local QC Kinetix clinic. We meet with you, review your medical records, answer all your questions, and conduct a thorough examination.',
      factorsIntro: 'Factors that make you a good candidate for regenerative alternatives to shoulder surgery include:',
      factors: [
        'You experience chronic shoulder pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'You want to avoid joint replacement surgery',
        'You may not be a good candidate for surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical shoulder repair can decrease your pain.'
    },
    
    benefits: {
      title: 'Nonsurgical Shoulder Treatments',
      intro: 'The benefits of regenerative, nonsurgical shoulder treatments can be profound. Imagine relieving your shoulder pain and restoring joint function without the need for time off work, added pain, the use of narcotics, or the risks and complications associated with surgery. Plus, you can avoid a lengthy and painful recovery process.',
      leftContent: [
        'Unlike traditional surgical procedures that often require prolonged downtime and carry the risk of complications, our regenerative therapies focus on the root cause of your shoulder pain. Whether the discomfort is due to arthritis, worn cartilage, or repetitive strain, our treatments work with your body\'s own healing processes to revitalize tissues and improve function without invasive procedures or long recovery times.',
        'If you\'ve been told by an orthopedic surgeon that surgery is your only option, consider exploring shoulder surgery alternatives. Many patients experience reduced pain and improved mobility.'
      ],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Shoulder surgery requires general anesthesia and invasive surgery. Regenerative shoulder pain treatments do not require general anesthesia and cause no additional tissue damage.',
          'Regenerative medicine offers a more effective solution with minimal to no downtime, allowing you to resume your daily activities immediately without the same recovery concerns.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Shoulder surgery requires a long recovery:'
        ],
        list: [
          'Hospital stay: typically, outpatient or 1 day',
          'Opioid pain relief: about 1 week',
          'Subsequent pain meds: 4-8 weeks',
          'Use of sling: 2-6 weeks',
          'Return to work: typically, 2 weeks to 6 months depending on the work',
          'Return to full activity: 4-6 months (longer for strenuous activity)'
        ],
        afterList: 'With regenerative medicine, you won\'t miss a day of work.'
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with shoulder surgery include:',
        risks: [
          'Excess bleeding',
          'Blood clots',
          'Infections',
          'Nerve damage',
          'Stiffening of the joint (frozen shoulder)',
          'Damage to blood vessels disrupting blood flow to the shoulder',
          'Cartilage damage',
          'Joint instability',
          'Post-traumatic arthritis',
          'Implant failure (for shoulder replacement)',
          'Scarring',
          'Pneumonia'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your shoulder pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  elbow: {
    slug: 'elbow-pain',
    name: 'Elbow',
    title: 'Elbow Pain',
    breadcrumb: 'Elbow Pain',
    
    hero: {
      backgroundImage: null,
    },
    
    regenerativeTherapy: {
      title: 'Regenerative Medicine for Elbow Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/QC-Kinetix9808.png.webp',
      imageAlt: 'Patient receiving elbow treatment',
      imageWidth: 453,
      imageHeight: 663,
      intro: 'Regenerative medicine offers exciting promise for those with elbow pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative elbow pain therapy that activates your body\'s own ability to revitalize its tissues so you experience genuine pain relief from conditions like:',
      conditions: [
        'Bursitis',
        'Osteoarthritis (OA)',
        'Cubital tunnel syndrome',
        'Radial tunnel syndrome',
        'UCL injury',
        { text: 'Tennis elbow', link: 'https://qckinetix.com/blog/tennis-elbow-treatment/' },
        'Golfer\'s elbow'
      ],
      conclusion: 'In some cases, successful elbow pain treatment requires surgery. However, in most cases, nonsurgical elbow pain relief is the best approach. Regenerative medicine provides a genuine elbow pain solution so you can reclaim your independence and resume the activities you love.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Elbow Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/uploads/2025/04/Group-775-4.png',
      description: 'Regenerative elbow pain therapy harnesses your body\'s natural healing mechanisms to relieve pain and improve joint function. While the goal of regenerative treatments is the same as elbow surgery — to reduce pain and enhance mobility — our biologic therapies avoid the numerous risks associated with surgery, offering a less invasive and therefore safer alternative.',
      benefitsIntro: 'Our regenerative elbow treatment without surgery can alleviate your pain without:',
      benefits: [
        'Additional damage to your tissues',
        'Risking the complications of surgery',
        'Experiencing additional pain',
        'Building up scar tissue',
        'Developing post-traumatic arthritis',
        'Having to take medications',
        'Missing work'
      ],
      conclusion: 'Consider regenerative alternatives to elbow surgery before you have the arthroplasty, carpal tunnel release, or elbow replacement your surgeon advises.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Elbow Treatment?',
      description: 'To determine whether you\'re a candidate for regenerative elbow pain treatment, ask yourself whether the benefits of nonsurgical elbow pain relief appeal to you. If they do, schedule your free consultation at your local QC Kinetix clinic. We will thoroughly examine you and your medical records to learn how we can help you.',
      factorsIntro: 'Some of the factors that make you a good candidate for regenerative therapy include:',
      factors: [
        'You experience severe elbow pain',
        'Your pain results from overuse, an injury, or a degenerative condition',
        'You\'re anxious to avoid elbow surgery',
        'You\'re not considered a good candidate for surgery',
        'The extensive recovery time would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'Do any of these circumstances describe you? If so, we look forward to meeting with you to explore your candidacy for our regenerative treatment for elbow pain.'
    },
    
    benefits: {
      title: 'Nonsurgical Elbow Treatments',
      intro: 'Regenerative elbow pain treatments offer the benefits of elbow surgery without a hospital stay, loss of work, added pain, risk of complications, and a lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Elbow surgery requires general anesthesia and invasive techniques. Regenerative elbow pain therapy is noninvasive.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Elbow surgery can cause significant damage to the tissues it aims to repair, as it may involve cutting through bone, cartilage, and muscle, leading to intense pain and a prolonged recovery period. After tennis elbow surgery, you may need 3 to 12 weeks to return to work. With regenerative elbow pain treatments, you won\'t have to miss a single day of work, offering a faster, less invasive alternative for pain relief and recovery.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: { html: '<a href="https://qckinetix.com/blog/is-elbow-surgery-painful/">Elbow surgery is painful</a> and carries significant risks.' },
        risks: [
          'Infection',
          'Joint stiffness',
          'Increased pain',
          'Scarring',
          'Nerve damage',
          'Post-traumatic arthritis',
          'Blood clots',
          'Failure to relieve pain',
          'Anesthesia complications'
        ],
        conclusion: 'With regenerative elbow pain treatment, you face none of these risks.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your elbow pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  wrist: {
    slug: 'wrist-pain',
    name: 'Wrist',
    title: 'Wrist Pain',
    breadcrumb: 'Wrist Pain',
    
    hero: { backgroundImage: null },
    
    regenerativeTherapy: {
      title: 'Regenerative Treatment for Wrist Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/DSC_3465.png.webp',
      imageAlt: 'Patient receiving wrist treatment',
      imageWidth: 600,
      imageHeight: 900,
      intro: 'Regenerative medicine offers exciting promise for those with wrist pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative wrist pain therapy that activates your body\'s own ability to revitalize its tissues so you experience wrist pain relief from conditions like:',
      conditions: [
        'Repetitive strain injuries',
        'Osteoarthritis (OA)',
        'Fractures',
        'Infections',
        'Nerve compression',
        'Ligamentous injury'
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the go-to solutions for chronic wrist pain. Now, imagine reducing your pain and returning to your favorite activities without the risks associated with wrist surgery. QC Kinetix\'s regenerative alternatives to wrist surgery can help you reclaim your lifestyle, offering lasting pain relief, improved range of motion, and restored functionality to your wrist joint.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Wrist Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775-5.png.webp',
      description: 'While surgery may be required in some cases for wrist pain relief, nonsurgical treatments are often an effective, less invasive option. Regenerative medicine utilizes your body\'s natural healing processes, promoting tissue repair, reducing inflammation, and stimulating the regeneration of damaged tissues to improve function and alleviate pain.',
      benefitsIntro: 'Regenerative wrist treatment without surgery can alleviate your pain without:',
      benefits: [
        'Additional damage to your tissues',
        'Risking the complications of surgery',
        'Experiencing additional pain',
        'Building up scar tissue',
        'Developing post-traumatic arthritis',
        'Having to take opioids',
        'Missing work'
      ],
      conclusion: 'Consider regenerative alternatives to wrist surgery before you have the arthrodesis, carpal tunnel release, or wrist replacement your surgeon advises.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Wrist Treatment?',
      description: 'Do the benefits of regenerative wrist pain treatment, as opposed to the pain and risks of surgery, appeal to you? If so, you owe it to yourself to learn whether you\'re a good candidate for our concentrated platelet-rich plasma therapies. Schedule your free consultation and examination at your local QC Kinetix clinic.',
      factorsIntro: 'What makes someone a good candidate for regenerative wrist pain treatment without surgery? Following are some factors we consider:',
      factors: [
        'You have chronic wrist pain',
        'Your pain is the result of injury, overuse, repetitive stress, or degeneration',
        'You\'re eager to avoid wrist surgery',
        'Your surgeon advises you\'re not a good candidate for surgery',
        'The lengthy recovery time would be a hardship for you',
        'You wish to avoid opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical wrist repair can decrease your pain.'
    },
    
    benefits: {
      title: 'Nonsurgical Wrist Treatments',
      intro: 'Regenerative wrist pain treatments offer the benefits of wrist surgery without a hospital stay, loss of work, added pain, risk of complications, and a lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Wrist surgery often involves cutting through soft tissue, ligaments, tendons, muscles, and even bone. Surgeons may need to manipulate nerves, arteries, and veins or insert pins, screws, or implants, which makes recovery a painful and lengthy process. In contrast, our wrist pain treatment only requires a simple injection, offering a minimally invasive alternative with less pain and quicker recovery.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          { html: 'Wrist surgery causes considerable damage to the wrist it repairs. <a href="https://qckinetix.com/blog/how-long-does-wrist-surgery-take-to-heal/">Healing from wrist surgery</a> can take up to 12 painful weeks. With regenerative treatment for wrist pain, you won\'t miss a day of work.' }
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'Wrist surgery carries several risks, including infection, nerve damage, joint stiffness, and scarring. Complications such as anesthesia issues, blood clots, and post-traumatic arthritis are also possible.',
        risks: [],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your wrist pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  joint: {
    slug: 'joint-pain',
    name: 'Joint',
    title: 'Joint Pain',
    breadcrumb: 'Joint Pain',
    
    hero: { backgroundImage: null },
    
    regenerativeTherapy: {
      title: 'Regenerative Medicine for Joint Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/pexels-kindelmedia-7298631.png.webp',
      imageAlt: 'Joint pain treatment',
      imageWidth: 453,
      imageHeight: 622,
      intro: 'Regenerative medicine offers exciting promise for those with joint pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative joint pain therapy that activates your body\'s ability to revitalize its tissues so you experience genuine pain relief from conditions like:',
      conditions: [
        'Bursitis',
        'Osteoarthritis (OA)',
        'Torn ligament',
        'Tendonitis',
        'Torn cartilage',
        'Gout'
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the primary solutions for chronic joint pain. But imagine alleviating your joint pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix\'s regenerative alternatives to surgery can help you reclaim your lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to the joint.'
    },
    
    whatIsTherapy: {
      title: 'Regenerative Joint Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775555.png.webp',
      description: 'Our regenerative joint pain treatments without surgery avoid additional damage to the joint and cartilage, going straight to the healing. At QC Kinetix, we offer advanced regenerative medicine treatments for joint pain designed to stimulate your body\'s natural healing and reduce pain. Our biologic therapies harness the body\'s own healing mechanisms to promote healthy restoration, leading to lasting pain relief.',
      benefitsIntro: 'Regenerative joint treatment without surgery can alleviate your pain without:',
      benefits: [
        'Additional damage to your tissues',
        'Experiencing additional pain',
        'Risking the complications of surgery',
        'Building up scar tissue',
        'Developing post-traumatic arthritis',
        'Having to take opioids',
        'Missing work'
      ],
      conclusion: 'Consider regenerative alternatives to joint surgery before you have the joint replacement your surgeon advises.'
    },
    
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Joint Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative joint repair without surgery is to come in for your free consultation at your local QC Kinetix clinic. We meet with you, review your medical records, answer your questions, and conduct a thorough examination.',
      factorsIntro: 'What makes you a good candidate for regenerative alternatives to joint surgery?',
      factors: [
        'You experience chronic joint pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'You want to avoid joint replacement surgery',
        'You may not be a good candidate for surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical joint repair can decrease your pain.'
    },
    
    benefits: {
      title: 'Nonsurgical Joint Treatments',
      intro: 'Regenerative joint pain treatments offer the benefits of joint surgery without the hospital stay, loss of work, added pain, risk of complications, and lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Joint surgery requires invasive surgery and general anesthesia. Regenerative joint pain therapy is noninvasive.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Joint surgery requires a long recovery. You may have to stay in the hospital for a night or two, and you will likely need prescription pain medication for at least a week. You will need to use a walker, a boot, a splint, or a sling for several weeks, depending on the joint involved. You may miss weeks of work; it could be a few months before you are able to return to normal activities. With regenerative medicine, you won\'t miss a day of work.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with joint surgery include:',
        risks: [
          'Postsurgical pain',
          'Pneumonia',
          'Excessive bleeding',
          'Infection',
          'Blood clots',
          'Nerve damage',
          'Joint stiffening',
          'Post-traumatic arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    
    readyToReduce: {
      text: 'Ready to reduce your joint pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  arthritis: {
    slug: 'arthritis-pain',
    name: 'Arthritis',
    title: 'Arthritis Pain',
    breadcrumb: 'Arthritis Pain',
    hero: { backgroundImage: null },
    regenerativeTherapy: {
      title: 'Regenerative Arthritis Pain Treatment',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/mhrezaa-oydOFpht1QU-unsplash.png.webp',
      imageAlt: 'Arthritis pain treatment',
      imageWidth: 453,
      imageHeight: 697,
      intro: 'Regenerative medicine offers exciting promise for those with arthritis pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative arthritis pain therapy that activates your body\'s own ability to revitalize its tissues so you experience genuine pain relief from rheumatoid arthritis (RA) or osteoarthritis (OA) in areas such as:',
      conditions: [
        'Hips',
        'Knees',
        'Ankles',
        'Feet',
        'Toes',
        'Shoulders',
        'Elbows',
        'Wrists',
        'Hands',
        'Fingers',
        'Neck',
        'Lower back'
      ],
      conclusion: 'Traditional arthritis pain relief often relies on heat, anti-inflammatory medications, steroid shots, massage, and physical therapy. When those options fail, surgery is typically recommended. QC Kinetix\'s regenerative alternatives to surgery can help you regain your lifestyle with lasting pain relief, improved movement, and enhanced functionality.'
    },
    whatIsTherapy: {
      title: 'Regenerative Arthritis Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-41.png.webp',
      description: 'Our regenerative arthritis pain treatments avoid the damage surgery does to the body, going straight to the healing. Our nonsurgical methods for treating arthritis go to the source of your pain, employing a variety of natural and biologic arthritis pain relief treatments. Rather than mask your pain, our therapies work to rebuild the damaged joint tissues to resolve the pain at its source.',
      benefitsIntro: 'Regenerative arthritis treatment without surgery can reduce your pain without:',
      benefits: [
        'Additional tissue damage',
        'Potential surgical complications',
        'Additional pain',
        'Scar tissue buildup',
        'Strong prescription pain medications',
        'Lengthy recovery'
      ],
      conclusion: 'Consider regenerative alternatives to surgery before undergoing joint repair, replacement, or fusion as recommended by your surgeon.'
    },
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Arthritis Pain Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative arthritis pain relief without surgery is to come in for your free consultation at your local QC Kinetix clinic. We\'ll meet with you, review your medical records, answer your questions, and conduct a thorough examination.',
      factorsIntro: 'You are a candidate for regenerative alternatives to arthritis pain relief surgery if:',
      factors: [
        'You experience chronic arthritis pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'You want to avoid surgery',
        'You may not be a good candidate for surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these apply to you, schedule an appointment to learn how regenerative nonsurgical arthritis pain treatment can decrease your pain.'
    },
    benefits: {
      title: 'Benefits of Nonsurgical Arthritis Treatments',
      intro: 'Regenerative arthritis pain treatments offer the benefits of pain-relief surgery without the hospital stay, loss of work, added pain, risk of complications, and lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Arthritis surgery requires general anesthesia and invasive surgery that your body must heal from. Regenerative arthritis pain therapy is noninvasive.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Surgeries to treat arthritis pain, such as joint repair, replacement, or fusion, require recovery time. You will likely need prescription pain medication for at least one week and nonprescription pain relief for weeks after that. You may need to use a brace, splint, sling, cast, boot, or walker for several weeks, depending on the surgical site. You will miss some work, and it can take several weeks to months to resume normal activities. With regenerative medicine, none of this is necessary—you do not need to miss even one day of work.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with arthritis surgery include:',
        risks: [
          'Additional pain',
          'Excessive bleeding',
          'Blood clots',
          'Nerve damage',
          'Infection',
          'Joint stiffening',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    readyToReduce: {
      text: 'Ready to reduce your arthritis pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  'tendon-ligament': {
    slug: 'tendon-ligament-pain',
    name: 'Tendon & Ligament',
    title: 'Tendon & Ligament Pain',
    breadcrumb: 'Tendon & Ligament Pain',
    hero: { backgroundImage: null },
    regenerativeTherapy: {
      title: 'Non Surgical Tendon & Ligament Pain Treatments',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/pexels-kindelmedia-7298407.png.webp',
      imageAlt: 'Tendon and ligament pain treatment',
      imageWidth: 453,
      imageHeight: 662,
      intro: 'Regenerative medicine treatments revolutionize the treatment of tendon and ligament pain. The biologic therapies at QC Kinetix® leverage your body\'s innate capacity for self-repair, promoting natural healing and regeneration of injured tendons and ligaments. With this approach, we provide natural tendon and ligament pain relief, targeting the root cause of your pain to improve function. This approach activates your body\'s ability to revitalize its tissues so you experience genuine pain relief from conditions like:',
      conditions: [
        'Tendonitis',
        'Tendinosis',
        'Tennis elbow',
        'Golfer\'s elbow',
        'Hamstring injuries',
        'Achilles tendon injuries',
        'Rotator cuff tendonitis',
        'Patellar tendon tear',
        { text: 'ACL sprains and strains', link: '/knee-pain/acl-treatment/' },
        'MCL sprains and strains'
      ],
      conclusion: 'When rest, ice, compression, and elevation (RICE) cannot provide sufficient relief and you want to avoid surgery, regenerative tendon or ligament pain treatment may be an option for you. QC Kinetix\'s regenerative alternatives to tendon and ligament surgery can help you regain your lost lifestyle and enjoy lasting pain relief, improved range of motion, and improved functionality.'
    },
    whatIsTherapy: {
      title: 'Regenerative Tendon & Ligament Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-775122.png.webp',
      description: 'QC Kinetix delivers genuine relief from tendon and ligament pain. Rather than cause additional harm to your body, we skip invasive surgery and go straight to healing and relief for tendon pain. Our nonsurgical, drug-free regenerative therapies focus your body\'s ability to heal and repair itself at the pain\'s source. We don\'t mask or manage your pain - instead, we stimulate your own innate healing mechanisms to achieve genuine tendon and ligament pain relief.',
      benefitsIntro: 'Regenerative tendon and ligament treatment without surgery can reduce your pain without:',
      benefits: [
        'Additional damage to your tissues',
        'Risking the complications of surgery',
        'Experiencing additional pain',
        'Building up scar tissue',
        'Developing post-traumatic arthritis',
        'Having to take opioids',
        'Missing work'
      ],
      conclusion: 'Consider regenerative alternatives to surgery before you have the tendon or ligament repair or replacement your surgeon advises.'
    },
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Tendon or Ligament Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative tendon or ligament repair without surgery is to come in for your free consultation at your local QC Kinetix clinic. We meet with you, review your medical records, answer all your questions, and conduct a thorough examination.',
      factorsIntro: 'Factors that make you a good candidate for regenerative alternatives to tendon or ligament surgery include:',
      factors: [
        'You experience chronic tendon or ligament pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'You want to avoid joint replacement surgery',
        'You may not be a good candidate for surgery',
        'The extensive recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical tendon or ligament repair can decrease your pain.'
    },
    benefits: {
      title: 'Nonsurgical Tendon & Ligament Treatments',
      intro: 'Regenerative tendon and ligament pain treatments offer the benefits of surgery without a hospital stay, loss of work, added pain, risk of complications, and a lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Tendon or ligament surgery requires general anesthesia and invasive surgery. Regenerative medicine treatments for tendon or ligament pain are noninvasive.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Tendon or ligament surgery involves recovery time. You will probably need prescription pain relief for a few days. You may use a sling, a splint, a cast, a boot, or a walker for a time, depending on the type of surgery you have. You will need to miss work and limit your activities. With regenerative medicine, none of this is necessary.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The medical risks of tendon or ligament surgery include:',
        risks: [
          'Additional pain',
          'Excessive bleeding',
          'Blood clots',
          'Nerve damage',
          'Infection',
          'Joint stiffening',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'The primary risk associated with regenerative medicine is fatigue for one to two days.'
      }
    },
    readyToReduce: {
      text: 'Ready to reduce your tendon and ligament pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  'foot-hand': {
    slug: 'foot-hand-pain',
    name: 'Foot & Hand',
    title: 'Foot & Hand Pain',
    breadcrumb: 'Foot & Hand Pain',
    hero: { backgroundImage: null },
    regenerativeTherapy: {
      title: 'Regenerative Medicine for Hand & Foot Pain',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/towfiqu-barbhuiya-v47ltneXusM-unsplash.png.webp',
      imageAlt: 'Foot and hand pain treatment',
      imageWidth: 453,
      imageHeight: 662,
      intro: 'Regenerative medicine offers exciting promise for those with foot or hand pain: nonsurgical pain relief. At QC Kinetix®, we provide natural regenerative foot or hand pain therapy that activates your body\'s own ability to revitalize its tissues so you experience genuine pain relief from conditions like:',
      conditions: [
        'Osteoarthritis (OA)',
        'Carpal tunnel syndrome and tarsal tunnel syndrome',
        'Neuromas',
        'Tendonitis',
        'Nerve compression or damage'
      ],
      conclusion: 'Traditionally, steroid injections and surgery have been the primary solutions for chronic foot or hand pain. But imagine alleviating your foot or hand pain and returning to your favorite activities without the risks associated with surgery. QC Kinetix\'s regenerative alternatives to foot or hand surgery can help you reclaim your lifestyle, providing lasting pain relief, improved range of motion, and restored functionality to your feet, hands, toes, or fingers.'
    },
    whatIsTherapy: {
      title: 'Regenerative Foot & Hand Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-77544.png.webp',
      description: 'Our regenerative foot and hand pain treatments avoid the risk of further damage to the joint and cartilage by targeting healing directly. At QC Kinetix, we customize orthobiologic therapies for each patient to stimulate the body\'s natural ability to repair and revitalize its own tissues. We then guide these self-healing mechanisms to focus specifically on the source of the patient\'s pain, promoting targeted recovery.',
      benefitsIntro: 'Regenerative hand and foot pain treatments can reduce your pain and improve function without:',
      benefits: [
        'Causing additional tissue damage',
        'Risking surgical complications',
        'Causing additional pain',
        'Creating scar tissue',
        'Taking pharmaceutical pain medications',
        'Developing post-traumatic arthritis',
        'Missing work'
      ],
      conclusion: 'Before undergoing surgery, explore the possibilities of regenerative treatment for pain in the foot or hand.'
    },
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Foot or Hand Treatment?',
      description: 'In some cases, hand or foot surgery is truly necessary. For most cases, regenerative therapy is a better solution.',
      factorsIntro: 'The factors that make you a good candidate for regenerative treatment for pain in the foot or hand include:',
      factors: [
        'You have severe or chronic pain in the foot or hand',
        'You are anxious to avoid surgery',
        'You want surgery but are not considered a good candidate for it',
        'A lengthy recovery would be a hardship for you',
        'You wish to avoid opioids and/or pain medications'
      ],
      conclusion: 'If any describe you, please schedule a free consultation at your local QC Kinetix clinic. It\'s the best way to learn whether you\'re a good candidate for regenerative alternatives to foot surgery or hand surgery.'
    },
    benefits: {
      title: 'Nonsurgical Foot & Hand Treatments',
      intro: 'Regenerative foot and hand pain treatments offer the benefits of foot and hand surgery without the hospital stay, loss of work, added pain, risk of complications, and lengthy recovery.',
      leftContent: [],
      lessInvasive: {
        title: 'Less Invasive',
        content: [
          'Foot or hand surgery requires general anesthesia and invasive surgery. Regenerative foot or hand pain therapy is noninvasive.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'With regenerative hand and foot pain treatments, we skip the trauma of surgery and go straight to the healing process. You do not need to lose a day at work, and your pain starts to lessen right away.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'With regenerative treatments for pain in the foot or hand, you will have none of the risks for postsurgical complications, which include:',
        risks: [
          'Blood clots',
          'Infection',
          'Nerve damage',
          'Stiffening of the joints',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'Instead of the risks associated with surgery, with regenerative medicine, you can return to doing what you love without the excessive recovery time.'
      }
    },
    readyToReduce: {
      text: 'Ready to reduce your foot or hand pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  },
  
  'finger-toe': {
    slug: 'finger-toe-pain',
    name: 'Finger & Toe',
    title: 'Finger & Toe Pain',
    breadcrumb: 'Finger & Toe Pain',
    hero: { backgroundImage: null },
    regenerativeTherapy: {
      title: 'Finger & Toe Pain Relief',
      image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/nguy-n-hi-p-XRzuBW1w6f4-unsplash.png.webp',
      imageAlt: 'Finger and toe pain treatment',
      imageWidth: 453,
      imageHeight: 653,
      intro: 'Many who suffer from finger or toe pain seek a natural solution. They shy away from the pain and lengthy recovery involved in surgery and are anxious to avoid potential complications. QC Kinetix® clinics offer another solution for finger and toe joint pain treatment: regenerative medicine. This therapy harnesses the body\'s innate healing mechanisms, offering a natural way to help toe and finger pain. With regenerative medicine, you can experience genuine pain relief from conditions like:',
      conditions: [
        'Osteoarthritis (OA)',
        'Pain',
        'Injuries'
      ],
      conclusion: 'When rest, ice, compression, and elevation (RICE) cannot provide sufficient relief and you want to avoid surgery, regenerative finger or toe joint pain treatment may be the best choice.'
    },
    whatIsTherapy: {
      title: 'Regenerative Finger & Toe Pain Therapy?',
      backgroundImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Group-7753.png.webp',
      description: 'Our regenerative finger and toe pain treatments avoid additional damage to the joint and cartilage, going straight to the healing. QC Kinetix customizes biologic therapies for each patient to stimulate their body\'s innate abilities to revive and revitalize its own tissues. We then guide the self-healing mechanisms and train them to focus on the source of the patient\'s pain.',
      benefitsIntro: 'Regenerative finger or toe treatment without surgery can reduce your pain without:',
      benefits: [
        'Additional damage to your tissues',
        'Risking the complications of surgery',
        'Experiencing additional pain',
        'Building up scar tissue',
        'Developing post-traumatic arthritis',
        'Having to take opioids',
        'Missing work'
      ],
      conclusion: 'Consider regenerative alternatives to surgery before you have the osteotomy, arthroplasty, or joint fusion your surgeon advises.'
    },
    candidate: {
      title: 'Are You a Candidate for<br />Regenerative Finger or Toe Pain Treatment?',
      description: 'The best way to discover whether you\'re a candidate for regenerative finger or toe pain relief is to come in for your free consultation at your local QC Kinetix clinic. We meet with you, review your medical records, answer all your questions, and conduct a thorough examination.',
      factorsIntro: 'Factors that make you a good candidate for regenerative alternatives to finger or toe joint surgery include:',
      factors: [
        'You experience chronic finger or toe pain',
        'Your pain is the result of injury, repetitive stress, or joint degeneration',
        'Rest, ice, compression, and elevation (RICE) cannot provide sufficient relief',
        'You want to avoid surgery',
        'You may not be a good candidate for surgery',
        'The recovery from surgery would be a hardship for you',
        'You wish to avoid taking opioids and/or pain medications'
      ],
      conclusion: 'If any of these circumstances describe you, we look forward to meeting with you to learn how regenerative nonsurgical finger or toe pain relief can decrease your pain.'
    },
    benefits: {
      title: 'Benefits of Nonsurgical Finger & Toe Treatments',
      intro: 'Rather than simply masking symptoms, regenerative medicine eases your pain at its source. The many benefits of regenerative finger and toe joint pain natural treatment include:',
      leftContent: [],
      lessInvasive: {
        title: 'Noninvasive',
        content: [
          'Regenerative treatments are nonsurgical, drug free, and noninvasive, reducing the risks and downtime associated with traditional surgical interventions.'
        ]
      },
      fasterRecovery: {
        title: 'Faster Recovery',
        content: [
          'Finger or toe surgery requires recovery time. You will likely need prescription pain medication for a few days. You may need to use a boot, a splint, or a cast for a few weeks, depending on the joint involved. You will need to take some time away from work to recover. And it could be a few months before you are able to return to normal activities. With regenerative medicine, you won\'t miss a day of work.'
        ]
      },
      lowerRisks: {
        title: 'Lower Risks',
        intro: 'The inherent medical risks with finger or toe surgery include:',
        risks: [
          'Additional pain',
          'Excessive bleeding',
          'Blood clots',
          'Nerve damage',
          'Infection',
          'Joint stiffening',
          'Pneumonia',
          'Post-traumatic arthritis'
        ],
        conclusion: 'In contrast, the primary risk associated with regenerative medicine is mild soreness for one to two days, making it a less invasive and therefore safer option for pain relief.'
      }
    },
    readyToReduce: {
      text: 'Ready to reduce your finger or toe pain without surgery? Getting started is simple:<br />Just schedule your free consultation at your local QC Kinetix clinic. Be sure to bring your medical<br />records and a list of questions. Before your appointment, learn what to expect from QC Kinetix.'
    }
  }
};

/**
 * Obtiene los datos de una condición por su slug
 * @param {string} slug - El slug de la condición (ej: 'knee', 'ankle')
 * @returns {Object|null} Los datos de la condición o null si no existe
 */
export const getConditionBySlug = (slug) => {
  return conditionsData[slug] || null;
};

/**
 * Obtiene todas las condiciones como array
 * @returns {Array} Array de condiciones con sus datos
 */
export const getAllConditions = () => {
  return Object.entries(conditionsData).map(([key, value]) => ({
    key,
    ...value
  }));
};

export default conditionsData;

