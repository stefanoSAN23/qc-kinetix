// SEO Configuration for all pages
// This file contains meta tags, titles, descriptions, and structured data for each page

const baseUrl = 'https://qckinetix.com';
const defaultImage = 'https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg';

export const seoData = {
  // Home Page
  '/': {
    title: 'QC Kinetix: Local Regenerative Medicine - PRP & Stem Cells',
    description: 'Improve your quality of life with non surgical regenerative medicine and biologic therapies. We put patients-first with drug-free care. Learn more.',
    keywords: 'regenerative medicine, PRP therapy, stem cell therapy, pain relief, non-surgical treatment, QC Kinetix, platelet rich plasma, biologic therapy, joint pain treatment, knee pain, shoulder pain, back pain',
    canonical: baseUrl,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'QC Kinetix',
      description: 'Regenerative medicine treatments using PRP and stem cell therapy for pain relief',
      url: baseUrl,
      logo: defaultImage
    }
  },

  // Regenerative Medicine
  '/regenerative-medicine': {
    title: 'Regenerative Medicine Treatments & Therapy | QC Kinetix',
    description: 'QC Kinetix is the leader in regenerative medicine, utilizing your own natural biologics like PRP and Stem Cells to reduce pain, improve mobility, and support long-term recovery without surgery.',
    keywords: 'regenerative medicine, regenerative therapy, PRP therapy, stem cell therapy, non-surgical treatment, pain relief, joint pain treatment',
    canonical: `${baseUrl}/regenerative-medicine`,
    ogImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-47.png.webp',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Regenerative Medicine Treatments',
      description: 'Non-surgical regenerative medicine treatments using PRP and stem cell therapy',
      provider: {
        '@type': 'MedicalBusiness',
        name: 'QC Kinetix'
      }
    }
  },

  // Stem Cell Treatments
  '/regenerative-medicine/stem-cell-treatments': {
    title: 'Stem Cell Therapy & Treatments | QC Kinetix',
    description: 'Learn about stem cell therapy treatments at QC Kinetix. Non-surgical regenerative medicine using your body\'s own stem cells to heal and repair damaged tissues.',
    keywords: 'stem cell therapy, stem cell treatment, regenerative medicine, non-surgical treatment, pain relief, tissue repair',
    canonical: `${baseUrl}/regenerative-medicine/stem-cell-treatments`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Stem Cell Therapy',
      description: 'Stem cell treatments for pain relief and tissue regeneration'
    }
  },

  // PRP Treatments
  '/regenerative-medicine/prp-treatments': {
    title: 'PRP Therapy & Platelet Rich Plasma Treatments | QC Kinetix',
    description: 'PRP (Platelet Rich Plasma) therapy uses your own blood to promote healing and reduce pain. Learn about non-surgical PRP treatments at QC Kinetix.',
    keywords: 'PRP therapy, platelet rich plasma, PRP treatment, regenerative medicine, non-surgical treatment, pain relief',
    canonical: `${baseUrl}/regenerative-medicine/prp-treatments`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'PRP Therapy',
      description: 'Platelet Rich Plasma treatments for pain relief and healing'
    }
  },

  // Class IV Laser Treatment
  '/regenerative-medicine/class-iv-laser-treatment': {
    title: 'Class IV Laser Therapy Treatment | QC Kinetix',
    description: 'Class IV laser therapy is a non-invasive treatment that uses light energy to reduce pain and inflammation, promote healing, and improve mobility.',
    keywords: 'class IV laser therapy, laser treatment, non-invasive treatment, pain relief, inflammation reduction',
    canonical: `${baseUrl}/regenerative-medicine/class-iv-laser-treatment`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: 'Class IV Laser Therapy',
      description: 'Non-invasive laser therapy for pain relief and healing'
    }
  },

  // Conditions
  '/conditions/': {
    title: 'Conditions Treated with Regenerative Medicine | QC Kinetix',
    description: 'QC Kinetix treats various conditions including joint pain, arthritis, tendon injuries, and more using non-surgical regenerative medicine treatments.',
    keywords: 'conditions treated, joint pain, arthritis, tendon injuries, regenerative medicine, pain treatment',
    canonical: `${baseUrl}/conditions/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'QC Kinetix - Conditions Treated',
      description: 'Medical conditions treated with regenerative medicine'
    }
  },

  // Knee Pain
  '/knee-pain/': {
    title: 'Knee Pain Treatment & Relief | QC Kinetix',
    description: 'Non-surgical knee pain treatment using regenerative medicine. Get relief from knee pain, arthritis, and injuries with PRP and stem cell therapy at QC Kinetix.',
    keywords: 'knee pain, knee pain treatment, knee arthritis, knee injury, regenerative medicine, PRP knee, stem cell knee',
    canonical: `${baseUrl}/knee-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Knee Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Knee Pain'
      }
    }
  },

  // Shoulder Pain
  '/shoulder-pain/': {
    title: 'Natural Shoulder Pain Relief | QC Kinetix',
    description: 'Get natural shoulder pain relief without surgery. QC Kinetix offers regenerative medicine treatments for shoulder pain, rotator cuff injuries, and arthritis.',
    keywords: 'shoulder pain, shoulder pain treatment, rotator cuff injury, shoulder arthritis, regenerative medicine, PRP shoulder',
    canonical: `${baseUrl}/shoulder-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Shoulder Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Shoulder Pain'
      }
    }
  },

  // Elbow Pain
  '/elbow-pain/': {
    title: 'Elbow Pain Treatment | QC Kinetix',
    description: 'Non-surgical elbow pain treatment using regenerative medicine. Get relief from tennis elbow, golfer\'s elbow, and other elbow conditions.',
    keywords: 'elbow pain, tennis elbow, golfer\'s elbow, elbow pain treatment, regenerative medicine',
    canonical: `${baseUrl}/elbow-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Elbow Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Elbow Pain'
      }
    }
  },

  // Wrist Pain
  '/wrist-pain/': {
    title: 'Wrist Pain Treatment | QC Kinetix',
    description: 'Get relief from wrist pain with non-surgical regenerative medicine treatments. QC Kinetix offers PRP and stem cell therapy for wrist injuries and conditions.',
    keywords: 'wrist pain, wrist pain treatment, carpal tunnel, wrist injury, regenerative medicine',
    canonical: `${baseUrl}/wrist-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Wrist Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Wrist Pain'
      }
    }
  },

  // Back Pain
  '/back-pain/': {
    title: 'Back Pain Treatment & Relief | QC Kinetix',
    description: 'Non-surgical back pain treatment using regenerative medicine. Get relief from lower back pain, sciatica, and spinal conditions without surgery.',
    keywords: 'back pain, lower back pain, back pain treatment, sciatica, spinal pain, regenerative medicine',
    canonical: `${baseUrl}/back-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Back Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Back Pain'
      }
    }
  },

  // Hip Pain
  '/hip-pain/': {
    title: 'Hip Pain Relief & Treatment | QC Kinetix',
    description: 'Get hip pain relief without surgery. QC Kinetix offers regenerative medicine treatments for hip pain, hip arthritis, and hip injuries.',
    keywords: 'hip pain, hip pain treatment, hip arthritis, hip injury, regenerative medicine, PRP hip',
    canonical: `${baseUrl}/hip-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Hip Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Hip Pain'
      }
    }
  },

  // Ankle Pain
  '/ankle-pain/': {
    title: 'Ankle Pain Treatment | QC Kinetix',
    description: 'Non-surgical ankle pain treatment using regenerative medicine. Get relief from ankle injuries, sprains, and arthritis with PRP and stem cell therapy.',
    keywords: 'ankle pain, ankle pain treatment, ankle injury, ankle sprain, ankle arthritis, regenerative medicine',
    canonical: `${baseUrl}/ankle-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Ankle Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Ankle Pain'
      }
    }
  },

  // Arthritis Pain
  '/arthritis-pain/': {
    title: 'Arthritis Pain Treatment | QC Kinetix',
    description: 'Get relief from arthritis pain without surgery. QC Kinetix offers regenerative medicine treatments for osteoarthritis, rheumatoid arthritis, and other arthritis conditions.',
    keywords: 'arthritis pain, arthritis treatment, osteoarthritis, rheumatoid arthritis, regenerative medicine, PRP arthritis',
    canonical: `${baseUrl}/arthritis-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Arthritis Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Arthritis'
      }
    }
  },

  // Finger/Toe Pain
  '/finger-toe-pain/': {
    title: 'Finger & Toe Pain Treatment | QC Kinetix',
    description: 'Get relief from finger and toe pain with non-surgical regenerative medicine treatments. QC Kinetix treats joint pain, injuries, and arthritis in fingers and toes.',
    keywords: 'finger pain, toe pain, finger joint pain, toe joint pain, regenerative medicine',
    canonical: `${baseUrl}/finger-toe-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Finger and Toe Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Finger and Toe Pain'
      }
    }
  },

  // Foot/Hand Pain
  '/foot-hand-pain/': {
    title: 'Foot & Hand Pain Treatment | QC Kinetix',
    description: 'Non-surgical foot and hand pain treatment using regenerative medicine. Get relief from plantar fasciitis, carpal tunnel, and other foot and hand conditions.',
    keywords: 'foot pain, hand pain, foot pain treatment, hand pain treatment, plantar fasciitis, carpal tunnel, regenerative medicine',
    canonical: `${baseUrl}/foot-hand-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Foot and Hand Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Foot and Hand Pain'
      }
    }
  },

  // Tendon & Ligament Pain
  '/tendon-and-ligament-pain/': {
    title: 'Tendon & Ligament Pain Treatment | QC Kinetix',
    description: 'Get relief from tendon and ligament pain with regenerative medicine. QC Kinetix treats tendonitis, ligament injuries, and soft tissue damage without surgery.',
    keywords: 'tendon pain, ligament pain, tendonitis, ligament injury, regenerative medicine, PRP tendon',
    canonical: `${baseUrl}/tendon-and-ligament-pain/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Tendon and Ligament Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Tendon and Ligament Pain'
      }
    }
  },

  // Joint Pain
  '/joint-pain-treatments/': {
    title: 'Joint Pain Treatments | QC Kinetix',
    description: 'Comprehensive joint pain treatment using regenerative medicine. QC Kinetix offers non-surgical solutions for all types of joint pain and arthritis.',
    keywords: 'joint pain, joint pain treatment, joint arthritis, regenerative medicine, PRP joint, stem cell joint',
    canonical: `${baseUrl}/joint-pain-treatments/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalCondition',
      name: 'Joint Pain',
      treatment: {
        '@type': 'MedicalProcedure',
        name: 'Regenerative Medicine for Joint Pain'
      }
    }
  },

  // What to Expect
  '/what-to-expect/': {
    title: 'What to Expect from Regenerative Medicine | QC Kinetix',
    description: 'Learn what to expect from regenerative medicine treatments at QC Kinetix. Understand the process, recovery time, and results of PRP and stem cell therapy.',
    keywords: 'what to expect, regenerative medicine process, PRP process, stem cell process, treatment expectations',
    canonical: `${baseUrl}/what-to-expect/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'What to Expect',
      description: 'Information about regenerative medicine treatment process'
    }
  },

  // About Us
  '/about-us/': {
    title: 'About QC Kinetix | Advancing Regenerative Medicine',
    description: 'Learn about QC Kinetix, a leader in regenerative medicine. Our mission is to improve quality of life through non-surgical, drug-free treatments using your body\'s natural healing abilities.',
    keywords: 'about QC Kinetix, regenerative medicine company, medical professionals, patient-first care',
    canonical: `${baseUrl}/about-us/`,
    ogImage: 'https://qckinetix.com/wp-content/smush-webp/2025/04/couple-running-1-1024x553.jpg.webp',
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'QC Kinetix',
      description: 'Leader in regenerative medicine treatments',
      url: baseUrl
    }
  },

  // Success Stories
  '/success-stories/': {
    title: 'Success Stories & Patient Testimonials | QC Kinetix',
    description: 'Read success stories and testimonials from QC Kinetix patients who found relief from pain using regenerative medicine treatments.',
    keywords: 'success stories, patient testimonials, regenerative medicine success, pain relief stories',
    canonical: `${baseUrl}/success-stories/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Success Stories',
      description: 'Patient success stories and testimonials'
    }
  },

  // Blog
  '/regenerative-medicine-blog/': {
    title: 'Regenerative Medicine Blog | QC Kinetix',
    description: 'Read the latest articles about regenerative medicine, pain relief, and non-surgical treatments from QC Kinetix.',
    keywords: 'regenerative medicine blog, pain relief articles, health blog, medical blog',
    canonical: `${baseUrl}/regenerative-medicine-blog/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'QC Kinetix Blog',
      description: 'Regenerative medicine and health blog'
    }
  },

  // Stem Cell Category Treatment Protocol
  '/stem-cell-category-treatment-protocol': {
    title: 'Stem Cell Category Treatment Protocol | QC Kinetix',
    description: 'Explore our comprehensive stem cell category treatment protocols including articulation treatments, autoimmune treatments, anti-aging treatments, and regenerative medications.',
    keywords: 'stem cell treatment protocol, stem cell articulation treatments, stem cell autoimmune treatments, stem cell anti-aging, regenerative medications, legal fly and buy program',
    canonical: `${baseUrl}/stem-cell-category-treatment-protocol`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Stem Cell Category Treatment Protocol',
      description: 'Stem cell category treatment protocols and regenerative medicine treatments'
    }
  },

  // News and Press
  '/news-and-press/': {
    title: 'News & Press | QC Kinetix',
    description: 'Stay updated with the latest news and press releases from QC Kinetix about regenerative medicine and healthcare innovations.',
    keywords: 'QC Kinetix news, press releases, medical news, regenerative medicine news',
    canonical: `${baseUrl}/news-and-press/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      name: 'QC Kinetix News and Press'
    }
  },

  // FAQ
  '/faq/': {
    title: 'Frequently Asked Questions | QC Kinetix',
    description: 'Find answers to frequently asked questions about regenerative medicine, PRP therapy, stem cell treatments, and QC Kinetix services.',
    keywords: 'FAQ, frequently asked questions, regenerative medicine FAQ, PRP FAQ, stem cell FAQ',
    canonical: `${baseUrl}/faq/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      name: 'Frequently Asked Questions',
      description: 'Common questions about regenerative medicine treatments'
    }
  },

  // Webinars
  '/webinars/': {
    title: 'Educational Webinars | QC Kinetix',
    description: 'Watch educational webinars about regenerative medicine, pain relief, and non-surgical treatment options from QC Kinetix medical professionals.',
    keywords: 'webinars, educational webinars, regenerative medicine webinars, medical education',
    canonical: `${baseUrl}/webinars/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'QC Kinetix Webinars',
      description: 'Educational webinars about regenerative medicine'
    }
  },

  // Locations
  '/qc-locations/': {
    title: 'Find a QC Kinetix Location Near You',
    description: 'Find a QC Kinetix location near you. We have multiple locations across the United States offering regenerative medicine treatments.',
    keywords: 'QC Kinetix locations, find location, regenerative medicine locations, clinic locations',
    canonical: `${baseUrl}/qc-locations/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'QC Kinetix Locations',
      description: 'Find a QC Kinetix location'
    }
  },

  // Request Appointment
  '/request-your-first-appointment/': {
    title: 'Request Your First Appointment | QC Kinetix',
    description: 'Schedule your free consultation at QC Kinetix. Request your first appointment to learn about regenerative medicine treatments for your pain.',
    keywords: 'request appointment, schedule consultation, free consultation, book appointment',
    canonical: `${baseUrl}/request-your-first-appointment/`,
    ogImage: defaultImage,
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Request Appointment',
      description: 'Schedule a consultation at QC Kinetix'
    }
  }
};

// Helper function to get SEO data for a path
export const getSeoData = (path) => {
  // Normalize path (remove trailing slash, handle both with and without)
  const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '') || '/';
  
  // Try exact match first
  if (seoData[normalizedPath]) {
    return seoData[normalizedPath];
  }
  
  // Try with trailing slash
  if (seoData[`${normalizedPath}/`]) {
    return seoData[`${normalizedPath}/`];
  }
  
  // Return default/homepage SEO if not found
  return seoData['/'];
};

