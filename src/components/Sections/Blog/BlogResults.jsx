import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogResults.css';

const BlogResults = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const resultsSectionRef = useRef(null);

  // All blog posts
  const allPosts = [
    {
      id: 1,
      title: "Combat & Service-Related Back Pain: Regenerative Treatment for Veterans",
      url: "/blog/veteran-back-pain-without-surgery",
      image: "https://qckinetix.com/wp-content/uploads/2025/04/back-pain-6949392_1920.png",
      imageWidth: 453,
      imageHeight: 632,
      author: "QC Kinetix",
      date: "November 12, 2025"
    },
    {
      id: 2,
      title: "Advanced Neck Pain Relief: How Regenerative Medicine Outperforms Surgery",
      url: "/blog/neck-pain-relief-near-me-regenerative-solutions",
      image: "https://qckinetix.com/wp-content/uploads/2025/10/AdobeStock_127286389-scaled.jpeg",
      imageWidth: 2560,
      imageHeight: 1810,
      author: "QC Kinetix",
      date: "October 26, 2025"
    },
    {
      id: 3,
      title: "How to Soothe Achilles Tendon Pain Fast: Regenerative Medicine Solutions",
      url: "/blog/non-surgical-achilles-tendonitis-treatment",
      image: "https://qckinetix.com/wp-content/uploads/2025/09/achilles-tendonities-001.jpg",
      imageWidth: 1000,
      imageHeight: 667,
      author: "QC Kinetix",
      date: "September 20, 2025"
    },
    {
      id: 4,
      title: "Runner's Knee Treatment: Regenerative Sports Medicine Solutions for Fall Marathon Training",
      url: "/blog/runners-knee-regenerative-sports-medicine",
      image: "https://qckinetix.com/wp-content/uploads/2025/09/knee-pain-01.jpg",
      imageWidth: 945,
      imageHeight: 650,
      author: "QC Kinetix",
      date: "September 16, 2025"
    },
    {
      id: 5,
      title: "Regenerative Sciatica Therapy: Natural Relief Without Surgery or Medication",
      url: "/blog/non-surgical-sciatica-treatment-regenerative-medicine",
      image: "https://qckinetix.com/wp-content/uploads/2025/08/sciatica-image.jpg",
      imageWidth: 1200,
      imageHeight: 658,
      author: "QC Kinetix",
      date: "August 19, 2025"
    },
    {
      id: 6,
      title: "PRP Injection vs. Cortisone: The Natural Path to Long-Term Joint Health",
      url: "/blog/prp-vs-cortisone-regenerative-medicine",
      image: "https://qckinetix.com/wp-content/uploads/2025/08/prp-treatment.jpg",
      imageWidth: 1000,
      imageHeight: 668,
      author: "QC Kinetix",
      date: "August 14, 2025"
    },
    {
      id: 7,
      title: "Tennis Elbow of the Knee: Understanding Medial Knee Pain",
      url: "/blog/tennis-elbow-of-the-knee",
      image: "https://qckinetix.com/wp-content/uploads/2025/07/knee-pain.jpg",
      imageWidth: 512,
      imageHeight: 236,
      author: "QC Kinetix",
      date: "July 25, 2025"
    },
    {
      id: 8,
      title: "Non-Surgical Regenerative Treatments for Carpal Tunnel Syndrome",
      url: "/blog/non-surgical-regenerative-carpal-tunnel-treatment",
      image: "https://qckinetix.com/wp-content/uploads/2025/07/carpal-tunnel-image.jpg",
      imageWidth: 512,
      imageHeight: 341,
      author: "QC Kinetix",
      date: "July 23, 2025"
    },
    {
      id: 9,
      title: "QC Kinetix Sponsors National Pickleball League",
      url: "/blog/qc-kinetix-sponsors-national-pickleball-league",
      image: "https://qckinetix.com/wp-content/uploads/2025/07/pickleball.jpg",
      imageWidth: 512,
      imageHeight: 341,
      author: "QC Kinetix",
      date: "July 11, 2025"
    },
    {
      id: 10,
      title: "Regenerative Medicine Statistics & Facts 2025: Market Size, Growth & Outcomes",
      url: "/blog/regenerative-medicine-statistics",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/QC-Kinetix-What-Is-Regenerative-Medicine-Used-For-Blog-Image-1536x864-1.webp",
      imageWidth: 1536,
      imageHeight: 864,
      author: "QC Kinetix",
      date: "June 24, 2025"
    },
    {
      id: 11,
      title: "Safety & Side Effects of Regenerative Injections: What Patients Should Know",
      url: "/blog/regenerative-medicine-safety-side-effects",
      image: "https://qckinetix.com/wp-content/uploads/2025/06/knee-joint-injection.jpg",
      imageWidth: 800,
      imageHeight: 533,
      author: "QC Kinetix",
      date: "June 17, 2025"
    },
    {
      id: 12,
      title: "6 Myths About Regenerative Medicine You Need to Know",
      url: "/blog/6-regenerative-medicine-myths",
      image: "https://qckinetix.com/wp-content/uploads/2025/04/Mask-Group-47.png",
      imageWidth: 690,
      imageHeight: 607,
      author: "QC Kinetix",
      date: "June 16, 2025"
    },
    {
      id: 13,
      title: "Regenerative Therapy Aftercare: Best Practices & Exercises for Long-Term Pain Relief",
      url: "/blog/regenerative-therapy-aftercare",
      image: "https://qckinetix.com/wp-content/uploads/2025/06/AdobeStock_545046120-fotor.jpg",
      imageWidth: 1000,
      imageHeight: 624,
      author: "QC Kinetix",
      date: "June 12, 2025"
    },
    {
      id: 14,
      title: "Sports Injury Statistics 2025: Trends, Rates & Facts",
      url: "/blog/sports-injury-statistics",
      image: "https://qckinetix.com/wp-content/uploads/2025/06/AdobeStock_570149247-1024x532.jpeg",
      imageWidth: 1024,
      imageHeight: 532,
      author: "QC Kinetix",
      date: "June 1, 2025"
    },
    {
      id: 15,
      title: "Why Your Back Makes Your IT Band Hurt",
      url: "/blog/why-your-back-makes-your-it-band-hurt",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/lower-back-pain-in-the-morning-2048x1366.jpg.webp",
      imageWidth: 2048,
      imageHeight: 1366,
      author: "QC Kinetix",
      date: "May 29, 2025"
    },
    {
      id: 16,
      title: "What are the Biggest Challenges in Regenerative Medicine?",
      url: "https://qckinetix.com/blog/biggest-challenges-in-regenerative-medicine/",
      image: "https://qckinetix.com/wp-content/uploads/2025/04/DSC_3465.png",
      imageWidth: 453,
      imageHeight: 680,
      author: "QC Kinetix",
      date: "May 20, 2025"
    },
    {
      id: 17,
      title: "Back Pain Statistics & Facts You Need to Know in 2025",
      url: "/blog/back-pain-statistics",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/back-pain-1-2048x1365.jpg-1024x683.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "May 14, 2025"
    },
    {
      id: 18,
      title: "Can Interstitial Cystitis Cause Back Pain?",
      url: "/blog/lower-back-pain-and-interstitial-cystitis",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/back-pain-supplements.jpg-1.webp",
      imageWidth: 1430,
      imageHeight: 928,
      author: "QC Kinetix",
      date: "May 9, 2025"
    },
    {
      id: 19,
      title: "How Much Does Regenerative Medicine Cost?",
      url: "/blog/how-much-does-regenerative-medicine-cost",
      image: "https://qckinetix.com/wp-content/uploads/2025/05/regenerative.jpg",
      imageWidth: 1000,
      imageHeight: 800,
      author: "QC Kinetix",
      date: "May 8, 2025"
    },
    {
      id: 20,
      title: "What is PRP Therapy?",
      url: "/blog/blog-what-is-prp-therapy",
      image: "https://qckinetix.com/wp-content/uploads/2025/05/prp-therapy-fotor.jpg",
      imageWidth: 1012,
      imageHeight: 746,
      author: "QC Kinetix",
      date: "May 7, 2025"
    },
    {
      id: 21,
      title: "What is Stem Cell Therapy?",
      url: "/blog/blog-what-is-stem-cell-therapy",
      image: "https://qckinetix.com/wp-content/uploads/2025/05/DSC_4237-fotor-2025050712212.jpg",
      imageWidth: 1200,
      imageHeight: 798,
      author: "QC Kinetix",
      date: "May 7, 2025"
    },
    {
      id: 22,
      title: "Joint Pain Relief in Bentonville",
      url: "/blog/joint-pain-relief-in-bentonville",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/iStock-1471995039-scaled-1-1024x683.jpg",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "April 19, 2025"
    },
    {
      id: 23,
      title: "Knee Pain Statistics & Facts You Need to Know in 2025",
      url: "/blog/knee-pain-statistics-facts",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/Who-To-See-for-Knee-Pain.jpg.webp",
      imageWidth: 936,
      imageHeight: 614,
      author: "QC Kinetix",
      date: "March 10, 2025"
    },
    {
      id: 24,
      title: "Using Your HSA or FSA to Pay for QC Kinetix Regenerative Treatments",
      url: "/blog/using-your-hsa-or-fsa-to-pay-for-qc-kinetix-regenerative-treatments",
      image: "https://qckinetix.com/wp-content/uploads/2025/02/HSA-Blog-Photo-1-1024x683.jpg",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "February 28, 2025"
    },
    {
      id: 25,
      title: "The Most Common Uses of PRP: Pain Relief & Regenerative Health",
      url: "/blog/the-most-common-uses-of-prp",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/iStock-1471995039-scaled-1-1024x683.jpg",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "January 28, 2025"
    },
    {
      id: 26,
      title: "Platelet-Rich Plasma: What is PRP?",
      url: "/blog/what-is-prp",
      image: "https://qckinetix.com/wp-content/uploads/2025/01/what-is-prp.jpg",
      imageWidth: 1000,
      imageHeight: 667,
      author: "QC Kinetix",
      date: "January 28, 2025"
    },
    {
      id: 27,
      title: "Why Patients are Choosing Regenerative Over Surgery",
      url: "/blog/why-patients-are-choosing-regenerative-over-surgery",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/torn-labrum-shoulder-recovery-without-surgery-1024x683.jpg.webp",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "January 9, 2025"
    },
    {
      id: 28,
      title: "Why Does Your Shoulder Hurt When You Sleep and What Helps?",
      url: "/blog/why-does-your-shoulder-hurt-when-you-sleep-and-what-helps",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/shoulder-bursitis-1-1024x744-1.jpg",
      imageWidth: 1024,
      imageHeight: 744,
      author: "QC Kinetix",
      date: "July 24, 2024"
    },
    {
      id: 29,
      title: "Back Pain from Sitting at Your Desk: What to Do About It",
      url: "/blog/back-pain-from-sitting-at-your-desk-what-to-do-about-it",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/back-pain-1-2048x1365.jpg.webp",
      imageWidth: 2048,
      imageHeight: 1365,
      author: "QC Kinetix",
      date: "July 24, 2024"
    },
    {
      id: 30,
      title: "9 Early Signs of Arthritis You Should Never Ignore",
      url: "/blog/9-early-signs-of-arthritis-you-should-never-ignore",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/tingling-in-hands-1024x683.jpg.webp",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "July 24, 2024"
    },
    {
      id: 31,
      title: "How Long Does Wrist Surgery Take to Heal",
      url: "/blog/how-long-does-wrist-surgery-take-to-heal",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/arthritis-pain-circle-73e45dc5d2c4961820fecc72ea47a8c7-1bho35deurmp.jpg",
      imageWidth: 667,
      imageHeight: 667,
      author: "QC Kinetix",
      date: "July 24, 2024"
    },
    {
      id: 32,
      title: "How Much Does Wrist Surgery Cost",
      url: "/blog/how-much-does-wrist-surgery-cost",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/joint-pain-2048x2048.jpg.webp",
      imageWidth: 2048,
      imageHeight: 2048,
      author: "QC Kinetix",
      date: "June 6, 2024"
    },
    {
      id: 33,
      title: "What Causes Wrist Pain",
      url: "/blog/what-causes-wrist-pain",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/sports-franchise-1024x685.jpg.webp",
      imageWidth: 1024,
      imageHeight: 685,
      author: "QC Kinetix",
      date: "June 6, 2024"
    },
    {
      id: 34,
      title: "Medicina Regenerativa: Cómo puede ayudarle y qué debe sabe",
      url: "/blog/el-medico-de-cabecera-que-es-y-como-funciona",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/regenerative-therapy.jpg.webp",
      imageWidth: 1430,
      imageHeight: 1078,
      author: "QC Kinetix",
      date: "March 12, 2024"
    },
    {
      id: 35,
      title: "Alternativas a los AINEs",
      url: "/blog/alternativas-a-nsaids",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/regenerative-therapy.jpg.webp",
      imageWidth: 1430,
      imageHeight: 1078,
      author: "QC Kinetix",
      date: "March 12, 2024"
    },
    {
      id: 36,
      title: "¿Cuánto cuesta un trasplante de pelo y es su mejor opción?",
      url: "/blog/coste-del-trasplante-capilar",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/hair-transplant-cost.jpg.jpg",
      imageWidth: 1100,
      imageHeight: 1100,
      author: "QC Kinetix",
      date: "March 12, 2024"
    },
    {
      id: 37,
      title: "Is Elbow Surgery Painful? What You Need to Know",
      url: "/blog/is-elbow-surgery-painful",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/pexels-shvetsa-4483327-scaled-1.jpg",
      imageWidth: 2560,
      imageHeight: 1706,
      author: "QC Kinetix",
      date: "February 21, 2024"
    },
    {
      id: 38,
      title: "Esteemed Orthopedic Surgeon Joins QC Kinetix as National Medical Director",
      url: "/blog/esteemed-orthopedic-surgeon-joins-qc-kinetix-as-national-medical-director",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/qckinetix_dr_sheinkop.webp",
      imageWidth: 600,
      imageHeight: 900,
      author: "QC Kinetix",
      date: "February 16, 2024"
    },
    {
      id: 39,
      title: "How Much Does Elbow Surgery Cost?",
      url: "/blog/how-much-does-elbow-surgery-cost",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/pexels-1222300-2324837-scaled-1.jpg",
      imageWidth: 2560,
      imageHeight: 1707,
      author: "QC Kinetix",
      date: "February 11, 2024"
    },
    {
      id: 40,
      title: "Why Biofreeze Isn't the Best Choice for Long-term Pain Relief (& What Is)",
      url: "/blog/why-biofreeze-isnt-the-best-choice-for-long-term-pain-relief-what-is",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/biofreeze-1024x685.jpg.webp",
      imageWidth: 1024,
      imageHeight: 685,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 41,
      title: "What Is Regenerative Medicine Used For? – QC Kinetix",
      url: "/blog/what-is-regenerative-medicine-used-for",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/QC-Kinetix-What-Is-Regenerative-Medicine-Used-For-Blog-Image-1024x576-1.webp",
      imageWidth: 1024,
      imageHeight: 576,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 42,
      title: "Tingling in Hands: What Could It Be? – QC Kinetix",
      url: "/blog/tingling-in-hands",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/tingling-in-hands-1024x683.jpg.webp",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 43,
      title: "Tennis Elbow Treatment: Why Regenerative Medicine Works",
      url: "/blog/tennis-elbow-treatment",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/tennis-elbow-treatment-1024x771.jpg.webp",
      imageWidth: 1024,
      imageHeight: 771,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 44,
      title: "Shoulder Pain Supplement: What Ingredients to Look For & Which to Avoid",
      url: "/blog/shoulder-pain-supplement",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/shoulder-pain-supplement-1024x684.jpg.webp",
      imageWidth: 1024,
      imageHeight: 684,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 45,
      title: "Shoulder Bursitis: Symptoms, Causes, and Treatment Options",
      url: "/blog/shoulder-bursitis",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/shoulder-bursitis-1-1024x744-1.jpg",
      imageWidth: 1024,
      imageHeight: 744,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 46,
      title: "Regenerative Sports Medicine | QC Kinetix",
      url: "https://qckinetix.com/blog/regenerative-sports-medicine/",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/QC-Kinetix-What-Is-Regenerative-Medicine-Used-For-Blog-Image-1536x864-1.webp",
      imageWidth: 1536,
      imageHeight: 864,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 47,
      title: "Regenerative Medicine: How It Can Help You and What You Should Know",
      url: "/blog/regenerative-medicine-how-it-can-help-you-and-what-you-should-know",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/Regenerative-Medicine-How-It-Can-Help-You-and-What-You-Should-Know.webp",
      imageWidth: 1024,
      imageHeight: 772,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 48,
      title: "Examples of Regenerative Medicine",
      url: "/blog/regenerative-medicine-examples",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/Regenerative-Medicine-2048x1365.jpg.webp",
      imageWidth: 2048,
      imageHeight: 1365,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 49,
      title: "Recovery Time of Torn Meniscus: How It Varies and Alternatives to Surgery",
      url: "/blog/recovery-time-of-torn-meniscus",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/recovery-time-of-torn-meniscus.jpg.webp",
      imageWidth: 1430,
      imageHeight: 825,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 50,
      title: "QC Kinetix Debuts on Franchise Times Top 500 List",
      url: "/blog/qc-kinetix-debuts-on-franchise-times-top-500-list",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/franchise-times-top-500-2048x684.png.webp",
      imageWidth: 2048,
      imageHeight: 684,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 51,
      title: "QC Kinetix Celebrates 100th Clinic Opening! – QC Kinetix",
      url: "/blog/qc-kinetix-celebrates-100th-clinic-opening",
      image: "",
      imageWidth: 0,
      imageHeight: 0,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 52,
      title: "Plantar Fasciitis Physical Therapy: Does It Help?",
      url: "/blog/plantar-fasciitis-physical-therapy",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/plantar-fasciitis-physical-therapy.jpg.webp",
      imageWidth: 1924,
      imageHeight: 849,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 53,
      title: "Osteoarthritis Physical Therapy: What Are My Options?",
      url: "/blog/osteoarthritis-physical-therapy",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/arthritis-pain-circle-73e45dc5d2c4961820fecc72ea47a8c7-1bho35deurmp.jpg",
      imageWidth: 667,
      imageHeight: 667,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 54,
      title: "Orthobiologics Can Help You Heal Faster: Here's How – QC Kinetix",
      url: "/blog/orthobiologics",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/orthopedic-business-1024x656.jpg.webp",
      imageWidth: 1024,
      imageHeight: 656,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 55,
      title: "Lumbar Rhizotomy: Risks & Alternatives to Surgery",
      url: "/blog/lumbar-rhizotomy",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/lumbar-rhizotomy.jpg.webp",
      imageWidth: 1692,
      imageHeight: 1084,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 56,
      title: "Lower Back Pain in the Morning: What Could It Be & How Do You Treat It?",
      url: "/blog/lower-back-pain-in-the-morning",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/lower-back-pain-in-the-morning-2048x1366.jpg.webp",
      imageWidth: 2048,
      imageHeight: 1366,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 57,
      title: "Knee Replacement Alternatives: What to Know",
      url: "/blog/knee-replacement-alternatives",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/knee-replacement-alternatives.jpg.webp",
      imageWidth: 1411,
      imageHeight: 944,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 58,
      title: "Knee Pain Supplements: A Guide to Choosing",
      url: "/blog/knee-pain-supplements",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/JOINT-BONE-HEALTH.jpg",
      imageWidth: 1263,
      imageHeight: 1200,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 59,
      title: "What to Do When Your Knee Is Locking Up – Could It Be Something Serious?",
      url: "/blog/knee-is-locking-up",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/blog1-copia.png",
      imageWidth: 727,
      imageHeight: 698,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 60,
      title: "Joint Health Supplements | QC Kinetix",
      url: "/blog/joint-health-supplements",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/YellowQuickStartJointBoneHealthProductPage_720x.webp",
      imageWidth: 720,
      imageHeight: 720,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 61,
      title: "Is Regenerative Medicine Legitimate?",
      url: "/blog/is-regenerative-medicine-legitimate",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/knee-replacement-alternatives.jpg.webp",
      imageWidth: 1411,
      imageHeight: 944,
      author: "QC Kinetix",
      date: "February 3, 2024"
    },
    {
      id: 62,
      title: "Hip Pain in Women: Possible Causes & Treatment Options",
      url: "/blog/hip-pain-in-women",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/Hip-pain-in-women-2048x1368.jpg.webp",
      imageWidth: 2048,
      imageHeight: 1368,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 63,
      title: "Hair Health Supplements | QC Kinetix",
      url: "/blog/hair-health-supplements",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/YellowQuickStartHairHealthProductPage_720x.webp",
      imageWidth: 720,
      imageHeight: 720,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 64,
      title: "Gluteal Tendinopathy: Description and Treatment Options",
      url: "/blog/gluteal-tendinopathy",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/shutterstock_1318269503-2.png",
      imageWidth: 674,
      imageHeight: 577,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 65,
      title: "Disc Arthroplasty Surgery: Risks, Recovery, and Other Options",
      url: "/blog/disc-arthroplasty",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/arthritis-pain-circle-73e45dc5d2c4961820fecc72ea47a8c7-1bho35deurmp.jpg",
      imageWidth: 667,
      imageHeight: 667,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 66,
      title: "CBD Pain Relief Cream | QC Kinetix",
      url: "/blog/cbd-pain-relief-cream",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/CBD.jpg",
      imageWidth: 1263,
      imageHeight: 1200,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 67,
      title: "Concierge Doctor: What is It and How Does It Work?",
      url: "/blog/concierge-doctor",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/Screenshot-2023-12-27-231522.png",
      imageWidth: 806,
      imageHeight: 737,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 68,
      title: "Can Tendons Heal Naturally? 4 Myths and Truths",
      url: "/blog/can-tendons-heal-naturally",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/gluteal-tendinopathy.jpg-1.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 69,
      title: "Can a Torn Rotator Cuff Heal on Its Own? Four Treatments for Shoulder Pain",
      url: "/blog/can-a-torn-rotator-cuff-heal-on-its-own",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/shutterstock_2040685961.png",
      imageWidth: 325,
      imageHeight: 207,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 70,
      title: "All Bone Health Supplements Are NOT the Same: Here's How to Choose",
      url: "/blog/bone-health-supplements",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/shutterstock_1318269503-2.png",
      imageWidth: 674,
      imageHeight: 577,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 71,
      title: "Best Supplements for Men: What to Take for Bone & Joint Health",
      url: "/blog/best-supplements-for-men",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/shutterstock_735675031.png",
      imageWidth: 325,
      imageHeight: 207,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 72,
      title: "Benefits of Regenerative Medicine",
      url: "/blog/benefits-of-regenerative-medicine",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/tingling-in-hands-2048x1366.jpg.webp",
      imageWidth: 2048,
      imageHeight: 1366,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 73,
      title: "Alternatives to NSAIDS: 6 Options Instead of Ibuprofen",
      url: "/blog/alternatives-to-nsaids",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/Alternatives-to-NSAIDS-6-Options-Instead-of-Ibuprofen.png",
      imageWidth: 536,
      imageHeight: 447,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 74,
      title: "Back Pain Supplements: What to Know & How They Can Help You",
      url: "/blog/back-pain-supplements",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/Alternatives-to-NSAIDS-6-Options-Instead-of-Ibuprofen.png",
      imageWidth: 536,
      imageHeight: 447,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 75,
      title: "How Can QC Kinetix Help?",
      url: "/blog/advancing-patient-care-through-regenerative-medicine",
      image: "https://qckinetix.com/wp-content/uploads/2023/12/d1c82d7e2d0307b5240a39f315505280.png",
      imageWidth: 324,
      imageHeight: 238,
      author: "QC Kinetix",
      date: "February 2, 2024"
    },
    {
      id: 76,
      title: "What Causes Elbow Pain?",
      url: "/blog/what-causes-elbow-pain",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/QC_Kinetix_Cheyenne_clinic_sign.jpg.webp",
      imageWidth: 640,
      imageHeight: 427,
      author: "QC Kinetix",
      date: "February 1, 2024"
    },
    {
      id: 77,
      title: "What Causes Numbness in Hands While Sleeping?",
      url: "/blog/what-causes-numbness-in-hands-while-sleeping",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/pexels-juanpphotoandvideo-1257770-1-scaled-1.jpg",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "January 31, 2024"
    },
    {
      id: 78,
      title: "How Much Does Shoulder Surgery Cost?",
      url: "/blog/how-much-does-shoulder-surgery-cost",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/pexels-karolina-grabowska-4968630-scaled-1.jpg",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "January 21, 2024"
    },
    {
      id: 79,
      title: "What Can Cause Shoulder Joint Pain Without Injury?",
      url: "/blog/what-can-cause-shoulder-joint-pain",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/pexels-kampus-8638036-scaled-1-1024x683.jpg",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "January 1, 2024"
    },
    {
      id: 80,
      title: "Suplementos para la salud articular",
      url: "/blog/suplementos-para-las-articulaciones",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/gluteal-tendinopathy.jpg-1.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "December 13, 2023"
    },
    {
      id: 81,
      title: "What Causes Pain on the Top of the Foot?",
      url: "/blog/what-causes-pain-on-the-top-of-the-foot",
      image: "https://qckinetix.com/wp-content/uploads/2023/12/pexels-katya-wolf-8728667-scaled-1-1024x683.jpg",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "December 12, 2023"
    },
    {
      id: 82,
      title: "What Causes Stabbing Pain in the Ankle?",
      url: "/blog/what-causes-stabbing-pain-in-the-ankle",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/plantar-fasciitis-physical-therapy.jpg.webp",
      imageWidth: 1924,
      imageHeight: 849,
      author: "QC Kinetix",
      date: "December 10, 2023"
    },
    {
      id: 83,
      title: "Who To See for Ankle Pain",
      url: "/blog/who-to-see-for-ankle-pain",
      image: "https://qckinetix.com/wp-content/uploads/2023/12/pexels-kindelmedia-7298678-scaled-1-1024x577.jpg",
      imageWidth: 800,
      imageHeight: 451,
      author: "QC Kinetix",
      date: "December 1, 2023"
    },
    {
      id: 84,
      title: "What Does Ligament Pain Feel Like",
      url: "/blog/what-does-ligament-pain-feel-like",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/pexels-shvets-production-6991889-scaled-1-684x1024.jpg",
      imageWidth: 684,
      imageHeight: 1024,
      author: "QC Kinetix",
      date: "November 29, 2023"
    },
    {
      id: 85,
      title: "¿La prótesis de rodilla es ambulatoria?",
      url: "/blog/la-protesis-de-rodilla-es-ambulatoria",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/Is-Knee-Replacement-Outpatient.jpg.webp",
      imageWidth: 936,
      imageHeight: 636,
      author: "QC Kinetix",
      date: "November 28, 2023"
    },
    {
      id: 86,
      title: "Cómo evitar la artroplastia de rodilla",
      url: "/blog/como-evitar-la-protesis-de-rodilla",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/b1a7845e08c732574739e67b6752b565.png",
      imageWidth: 536,
      imageHeight: 447,
      author: "QC Kinetix",
      date: "November 23, 2023"
    },
    {
      id: 87,
      title: "¿Es legítima la medicina regenerativa?",
      url: "/blog/legitima-la-medicina-regenerativa",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/Is-Regenerative-Medicine-Legit.png.webp",
      imageWidth: 1248,
      imageHeight: 710,
      author: "QC Kinetix",
      date: "November 13, 2023"
    },
    {
      id: 88,
      title: "Crema analgésica de CBD",
      url: "/blog/crema-analgesica-de-cbd",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/SorenessCream-mockup_1oz-2oz-bowl.png.webp",
      imageWidth: 1440,
      imageHeight: 1800,
      author: "QC Kinetix",
      date: "November 13, 2023"
    },
    {
      id: 89,
      title: "What Causes Round Ligament Pain?",
      url: "/blog/what-causes-round-ligament-pain",
      image: "https://qckinetix.com/wp-content/uploads/2023/11/pexels-mart-production-7088530-scaled-1-1024x683.jpg",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "November 11, 2023"
    },
    {
      id: 90,
      title: "Why Do Tendons Take So Long To Heal?",
      url: "/blog/why-do-tendons-take-so-long-to-heal",
      image: "https://qckinetix.com/wp-content/uploads/2024/01/7a5041d5fb808fe25b46ed1b1f19e62f.png",
      imageWidth: 324,
      imageHeight: 238,
      author: "QC Kinetix",
      date: "November 1, 2023"
    },
    {
      id: 91,
      title: "Who To See for Knee Pain",
      url: "/blog/who-to-see-for-knee-pain",
      image: "https://qckinetix.com/wp-content/uploads/2023/10/elderly-man-having-knee-injury-scaled-1-1024x683.jpg",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "October 21, 2023"
    },
    {
      id: 92,
      title: "Is Knee Replacement Outpatient?",
      url: "/blog/is-knee-replacement-outpatient",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/orthopedic-business-1024x656.jpg.webp",
      imageWidth: 1024,
      imageHeight: 656,
      author: "QC Kinetix",
      date: "October 11, 2023"
    },
    {
      id: 93,
      title: "How To Avoid Knee Replacement",
      url: "/blog/how-to-avoid-knee-replacement",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/sports-franchise-1024x685.jpg.webp",
      imageWidth: 1024,
      imageHeight: 685,
      author: "QC Kinetix",
      date: "October 1, 2023"
    },
    {
      id: 94,
      title: "Torn Labrum Shoulder Recovery Without Surgery: 6 Alternatives",
      url: "/blog/torn-labrum-shoulder-recovery-without-surgery",
      image: "https://qckinetix.com/wp-content/uploads/2024/02/torn-labrum-shoulder-recovery-without-surgery-1024x683.jpg.webp",
      imageWidth: 1024,
      imageHeight: 683,
      author: "QC Kinetix",
      date: "September 3, 2023"
    },
    {
      id: 95,
      title: "Hormigueo en las manos: ¿Qué puede ser?",
      url: "/blog/hormigueo-en-las-manos",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/tingling-in-hands-2048x1366.jpg-1024x683.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "August 31, 2023"
    },
    {
      id: 96,
      title: "Alternativas a la prótesis de rodilla: Lo que hay que saber",
      url: "/blog/protesis-de-rodilla-alternativas",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/knee-replacement-alternatives.jpg.webp",
      imageWidth: 1411,
      imageHeight: 944,
      author: "QC Kinetix",
      date: "July 26, 2023"
    },
    {
      id: 100,
      title: "Dolor de espalda por las mañanas: ¿Qué puede ser y cómo tratarlo?",
      url: "/blog/dolor-lumbar-matutino",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/lower-back-pain-in-the-morning-2048x1366.jpg-1024x683.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "June 23, 2023"
    },
    {
      id: 99,
      title: "Dolor de cadera en las mujeres: Posibles causas y opciones de tratamiento",
      url: "/blog/dolor-de-cadera-en-las-mujeres",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/Hip-pain-in-women-2048x1368.jpg-1024x684.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "June 5, 2023"
    },
    {
      id: 98,
      title: "Bursitis de hombro: Síntomas, causas y opciones de tratamiento",
      url: "/blog/hombro-bursitis",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/shoulder-bursitis-1-1.jpg",
      imageWidth: 1417,
      imageHeight: 1029,
      author: "QC Kinetix",
      date: "April 19, 2023"
    },
    {
      id: 97,
      title: "Suplemento para el dolor de hombro: Qué ingredientes buscar y cuáles evitar",
      url: "/blog/suplemento-para-el-dolor-de-hombro",
      image: "https://qckinetix.com/wp-content/uploads/2024/04/shoulder-pain-supplement.jpg.webp",
      imageWidth: 1870,
      imageHeight: 1249,
      author: "QC Kinetix",
      date: "April 6, 2023"
    },
    {
      id: 96,
      title: "Lumbar rhizotomy: Risks and alternatives to surgery",
      url: "/blog/rizotomia-lumbar",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/lumbar-rhizotomy.jpg.webp",
      imageWidth: 1692,
      imageHeight: 1084,
      author: "QC Kinetix",
      date: "February 22, 2023"
    },
    {
      id: 95,
      title: "Tendinopatía glútea: Descripción y opciones de tratamiento",
      url: "/blog/gluteo-tendinopatia",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/gluteal-tendinopathy.jpg-1.webp",
      imageWidth: 800,
      imageHeight: 534,
      author: "QC Kinetix",
      date: "December 8, 2022"
    },
    {
      id: 94,
      title: "Tiempo de recuperación de la rotura de menisco: Cómo varía y alternativas a la cirugía",
      url: "/blog/recuperacion-tiempo-de-menisco-roto",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/recovery-time-of-torn-meniscus.jpg.webp",
      imageWidth: 1430,
      imageHeight: 825,
      author: "QC Kinetix",
      date: "November 14, 2022"
    },
    {
      id: 93,
      title: "Fisioterapia para la fascitis plantar: ¿Ayuda?",
      url: "/blog/terapia-fisica-de-la-fascitis-plantar",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/plantar-fasciitis-physical-therapy.jpg.webp",
      imageWidth: 1924,
      imageHeight: 849,
      author: "QC Kinetix",
      date: "October 21, 2022"
    },
    {
      id: 92,
      title: "Todos los suplementos para la salud ósea NO son iguales: así se elige",
      url: "/blog/suplementos-para-la-salud-osea",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/bone-health-supplements.jpg-1.webp",
      imageWidth: 1524,
      imageHeight: 1014,
      author: "QC Kinetix",
      date: "October 20, 2022"
    },
    {
      id: 91,
      title: "Supplements for Back Pain: What You Need to Know and How They Can Help You",
      url: "/blog/complementos-dolor-de-espalda",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/back-pain-supplements.jpg-1.webp",
      imageWidth: 1430,
      imageHeight: 928,
      author: "QC Kinetix",
      date: "September 22, 2022"
    },
    {
      id: 90,
      title: "Medicina Regenerativa: Cómo puede ayudarle y qué debe saber",
      url: "/blog/medicina-regenerativa-como-puede-ayudarle-y-lo-que-debe-saber",
      image: "https://qckinetix.com/wp-content/uploads/2024/03/regenerative-therapy.jpg.webp",
      imageWidth: 1430,
      imageHeight: 1078,
      author: "QC Kinetix",
      date: "July 26, 2022"
    },
    {
      id: 89,
      title: "QC Kinetix celebra la apertura de su clínica número 100",
      url: "/blog/qc-kinetix-celebra-la-apertura-de-su-clinica-numero-100",
      image: "",
      imageWidth: 0,
      imageHeight: 0,
      author: "QC Kinetix",
      date: "April 1, 2022"
    }
  ];

  // Function to determine post categories based on title and URL
  const getPostCategories = (post) => {
    const categories = [];
    const titleLower = post.title.toLowerCase();
    const urlLower = post.url.toLowerCase();

    // Detect conditions
    if (titleLower.includes('knee') || urlLower.includes('knee')) {
      categories.push('knee-pain');
    }
    if (titleLower.includes('shoulder') || urlLower.includes('shoulder')) {
      categories.push('shoulder-pain');
    }
    if (titleLower.includes('back') || urlLower.includes('back')) {
      categories.push('back-pain');
    }
    if (titleLower.includes('hip') || urlLower.includes('hip')) {
      categories.push('hip-pain');
    }
    if (titleLower.includes('neck') || urlLower.includes('neck')) {
      categories.push('neck-pain');
    }
    if (titleLower.includes('hand') || urlLower.includes('hand')) {
      categories.push('hand-pain');
    }
    if (titleLower.includes('arm') || urlLower.includes('arm')) {
      categories.push('arm-pain');
    }
    if (titleLower.includes('arthritis') || urlLower.includes('arthritis')) {
      categories.push('arthritis-pain');
    }
    if (titleLower.includes('elbow') || urlLower.includes('elbow')) {
      categories.push('elbow-pain');
    }
    if (titleLower.includes('ankle') || urlLower.includes('ankle')) {
      categories.push('ankle-pain');
    }
    if (titleLower.includes('leg') || urlLower.includes('leg')) {
      categories.push('leg-pain');
    }
    if (titleLower.includes('foot') || urlLower.includes('foot')) {
      categories.push('foot-pain');
    }
    if (titleLower.includes('wrist') || urlLower.includes('wrist')) {
      categories.push('wrist-pain');
    }

    // Detect language
    const spanishKeywords = ['dolor', 'medicina', 'regenerativa', 'tratamiento', 'terapia', 'suplemento', 'salud', 'articulaciones', 'protesis', 'cadera', 'rodilla', 'hombro', 'codo', 'muñeca', 'espalda', 'cuello', 'mano', 'brazo', 'tobillo', 'pie', 'pierna', 'artritis'];
    const hasSpanish = spanishKeywords.some(keyword => titleLower.includes(keyword));
    
    if (hasSpanish) {
      categories.push('espanol');
    } else {
      categories.push('english');
    }

    return categories;
  };

  // Filter posts according to applied filters
  const getFilteredPosts = () => {
    let filtered = [...allPosts];

    // Filter by conditions
    if (filters.conditions && filters.conditions.length > 0) {
      filtered = filtered.filter(post => {
        const postCategories = getPostCategories(post);
        return filters.conditions.some(condition => postCategories.includes(condition));
      });
    }

    // Filter by language
    if (filters.languages && filters.languages.length > 0) {
      filtered = filtered.filter(post => {
        const postCategories = getPostCategories(post);
        return filters.languages.some(language => postCategories.includes(language));
      });
    }

    // Sort by date
    if (filters.dateOrder) {
      filtered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return filters.dateOrder === 'oldest' ? dateA - dateB : dateB - dateA;
      });
    }

    return filtered;
  };

  const filteredPosts = getFilteredPosts();
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // When filters change, scroll only to the results section
  useEffect(() => {
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [filters]);

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    // Scroll only to results section, not to top
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPagination = () => {
    const pages = [];

    // If there are 4 or fewer pages, show all
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <a
            key={i}
            href="#"
            className={currentPage === i ? 'active' : ''}
            onClick={(e) => handlePageChange(e, i)}
            data-page={i}
          >
            {i}
          </a>
        );
      }
      return pages;
    }

    // Determine the last page number to show before ellipsis
    // Always show from 1 to currentPage + 1 (or currentPage if it's the last page)
    let lastPageToShow = currentPage === totalPages ? currentPage : currentPage + 1;
    
    // Ensure we show at least the first 3 pages
    lastPageToShow = Math.max(3, lastPageToShow);
    
    // If we're near the end, adjust to avoid showing ellipsis unnecessarily
    if (lastPageToShow >= totalPages - 1) {
      lastPageToShow = totalPages - 1;
    }

    // Show all pages from 1 to lastPageToShow
    for (let i = 1; i <= lastPageToShow; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={currentPage === i ? 'active' : ''}
          onClick={(e) => handlePageChange(e, i)}
          data-page={i}
        >
          {i}
        </a>
      );
    }

    // Ellipsis before last page (only if we're not near the end)
    if (lastPageToShow < totalPages - 1) {
      pages.push(<span key="dots-end" className="dots">...</span>);
    }

    // Last page (always show if there's more than one page)
    if (totalPages > 1) {
      pages.push(
        <a
          key={totalPages}
          href="#"
          className={currentPage === totalPages ? 'active' : ''}
          onClick={(e) => handlePageChange(e, totalPages)}
          data-page={totalPages}
        >
          {totalPages}
        </a>
      );
    }

    return pages;
  };

  return (
    <section className="blog-results-section" ref={resultsSectionRef}>
      <div className="blog-results-container">
        <div id="filter-results" style={{ opacity: 1 }}>
          <div className="posts-grid">
            {currentPosts.map((post) => {
              const isExternal = post.url.startsWith('http');
              const cleanUrl = isExternal ? post.url : post.url.replace(/\/$/, '');
              
              return (
                <div key={post.id} className="post-item">
                  <div className="thumbnail">
                    {post.image && (
                      isExternal ? (
                        <a href={cleanUrl} target="_blank" rel="noopener noreferrer">
                          <img
                            src={post.image}
                            className="attachment-full size-full wp-post-image"
                            alt={post.title || 'Blog post image'}
                            decoding="async"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <Link to={cleanUrl}>
                          <img
                            src={post.image}
                            className="attachment-full size-full wp-post-image"
                            alt={post.title || 'Blog post image'}
                            decoding="async"
                            loading="lazy"
                          />
                        </Link>
                      )
                    )}
                  </div>
                  <h3 className="title">
                    {isExternal ? (
                      <a href={cleanUrl} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: post.title }} />
                    ) : (
                      <Link to={cleanUrl} dangerouslySetInnerHTML={{ __html: post.title }} />
                    )}
                  </h3>
                  <div className="meta">
                    <span className="author">{post.author}</span> | <span className="date">{post.date}</span>
                  </div>
                  {isExternal ? (
                    <a href={cleanUrl} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read More{' '}
                      <img
                        src="https://qckinetix.com/wp-content/uploads/2025/04/Group-503.svg"
                        alt="Arrow Icon"
                        style={{ marginLeft: '8px', width: '13px', height: '11px' }}
                      />
                    </a>
                  ) : (
                    <Link className="read-more" to={cleanUrl}>
                      Read More{' '}
                      <img
                        src="https://qckinetix.com/wp-content/uploads/2025/04/Group-503.svg"
                        alt="Arrow Icon"
                        style={{ marginLeft: '8px', width: '13px', height: '11px' }}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
          <div className="pagination">{renderPagination()}</div>
        </div>
      </div>
    </section>
  );
};

export default BlogResults;


