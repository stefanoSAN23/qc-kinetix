import { useState } from 'react';
import './MedicalManagementTeam.css';

const teamMembers = [
  {
    name: 'Mitchell Sheinkop, MD',
    role: 'National Medical Director',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-44.png.webp',
    description:
      'Dr. Mitchell Sheinkop is a board-certified orthopedic surgeon with decades of experience in joint replacement and regenerative medicine.',
    details:
      'He spent 37 years at Rush University Medical Center in Chicago, where he served as Director of the Joint Replacement Program and Professor of Orthopedic Surgery before transitioning to Professor Emeritus.\n\nA graduate of Chicago Medical School, Dr. Sheinkop completed fellowships in pediatric orthopedics and hand surgery. He is recognized for his pioneering work in complex hip and knee disorders, as well as early adoption of computer-assisted navigation, minimally invasive techniques, and hip resurfacing.\n\nDr. Sheinkop has performed over 20,000 joint replacements and is a leading figure in evidence-based regenerative medicine, having treated more than 500 patients with stem cell therapy. His clinical research and numerous publications continue to influence advancements in patient care and regenerative therapies.',
  },
  {
    name: 'Justin Garzone, DO, FACP, FACOI, FHM',
    role: 'Physician Leader',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-50.png.webp',
    description:
      'Dr. Justin Garzone is board-certified in internal medicine and holds fellowships with the American College of Physicians, American College of Osteopathic Internists, and the Society of Hospital Medicine.',
    details:
      'He received his medical degree from Lake Erie College of Osteopathic Medicine and completed his internship and residency at St. Michael’s Medical Center through Seton Hall University.\n\nDr. Garzone’s clinical expertise spans internal, functional, regenerative, and anti-aging medicine, as well as critical care, geriatrics, addiction, and hospice/palliative care. He has worked in diverse care settings including inpatient, outpatient, long-term, and post-acute care.\n\nHe is certified in shockwave therapy and has performed thousands of bone marrow aspirations and joint injections. As a principal investigator in regenerative medicine clinical trials, he plays a key role in advancing the field.\n\nDr. Garzone has held several medical directorships, received a Physician of Excellence Award, and serves as a collaborative supervising physician for numerous nurse practitioners and physician assistants. He holds medical licenses in more than a dozen states and is a member of multiple professional societies including the American Society of Regenerative Medicine, the Regenerative Medicine Foundation, and others.',
  },
  {
    name: 'Aaron Wolkoff, DO CAQSM',
    role: 'Medical Director, QC Kinetix Cleveland',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-51.png.webp',
    description:
      'Dr. Aaron Wolkoff is a board-certified, fellowship-trained orthopedic sports medicine specialist with a focus on nonsurgical treatments.',
    details:
      'He uses his osteopathic background to help patients improve function and quality of life through regenerative therapies.\n\nDr. Wolkoff earned his medical degree from Ohio University Heritage College of Osteopathic Medicine and completed both his residency and fellowship at South Pointe Hospital, a Cleveland Clinic regional facility.\n\nHe specializes in ultrasound-guided regenerative procedures including prolotherapy, platelet-rich plasma (PRP), and bone marrow concentrate (adult stem cell) injections to treat a range of musculoskeletal injuries.\n\nOriginally from Cleveland, Ohio, Dr. Wolkoff is a former collegiate soccer player at Kenyon College. His interests include soccer, swimming, cycling, Cleveland sports, and playing softball with his family.',
  },
  {
    name: 'Ashley Caravelli, DO',
    role: 'Medical Director, QC Kinetix Chicagoland',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-52.png.webp',
    description:
      'Dr. Ashley Caravelli is a board-certified family medicine physician with a strong foundation in osteopathic principles and a focus on regenerative medicine.',
    details:
      'She combines her training with advanced treatments to provide holistic solutions for chronic pain and musculoskeletal conditions.\n\nA native of the Chicagoland area, Dr. Caravelli earned her medical degree from Midwestern University Chicago College of Osteopathic Medicine and completed her residency at the MacNeal Family Medicine Residency Program.\n\nIn her role as Medical Director at QC Kinetix, she oversees clinics across the Chicagoland region, offering innovative, nonsurgical options that support the body’s natural healing process. She also serves as an adjunct professor at Midwestern University, mentoring future physicians.\n\nOutside of her clinical work, Dr. Caravelli enjoys traveling, cooking, and spending time with her family. She is committed to a balanced lifestyle and compassionate, evidence-based care.',
  },
  {
    name: 'Theodore Sand, PhD',
    role: 'Biotechnology & Regenerative Medicine Senior Consultant',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-53.png.webp',
    description:
      'Dr. Theodore Sand is a scientist and regenerative medicine expert who has helped pioneer both veterinary and human applications of stem cell therapy.',
    details:
      'He earned a B.S. in Microbiology and a Ph.D. in Biochemistry from the University of Minnesota, and completed postdoctoral research in immunology at Scripps Clinic and Research Foundation.\n\nDr. Sand began his career developing in vitro diagnostics at Ortho Diagnostics, Baxter Diagnostics, and Quidel Corporation before joining Vet-Stem, Inc. in 2003. There, he launched the world’s first fat tissue-derived stem cell therapy for veterinary use, helping establish foundational data for later human applications.\n\nHe has since held roles at Celling Biosciences, Greyledge Technologies, and Gallant Pet, where he focused on developing PRP and bone marrow concentrate devices and therapies. Dr. Sand currently serves as a regulatory and scientific consultant and joined an Institutional Review Board in 2024.\n\nHe holds 21 patents and has co-authored 25 publications, including five book chapters, contributing significantly to translational regenerative medicine.',
  },
  {
    name: 'Ali White, PA-C',
    role: 'Vice President of Medical Operations',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-54.png.webp',
    description:
      'Ali White is a seasoned healthcare leader with expertise in orthopedic regenerative medicine and clinical operations.',
    details:
      'As Vice President of Medical Operations at QC Kinetix, she drives the development and execution of medical strategies, ensuring clinical excellence and operational efficiency across the organization’s national network of regenerative medicine clinics.\n\nAli began her career as a Physician Assistant, refining her procedural skills and witnessing firsthand the transformative impact of nonsurgical Orthobiologic treatments. Her dedication to advancing patient care and optimizing clinical performance led her to senior leadership roles where she played a key role in standardizing medical practices, enhancing provider training, and scaling sustainable operational models.\n\nIn her current role, Ali oversees national clinic performance, medical execution, and compliance, ensuring that franchise partners are equipped with best practices in Orthopedic Regenerative Medicine. She is committed to expanding patient access to innovative, noninvasive treatments while maintaining the highest standards of care. Above all, Ali is focused on ensuring that patients receive compassionate, high-quality care in a seamless and supportive environment.\n\nWith a unique combination of clinical expertise and business acumen, Ali is dedicated to empowering clinical teams, optimizing medical operations, and leading the future of regenerative medicine.',
  },
  {
    name: 'Ginger Arntz, MSN, FNP-C',
    role: 'Vice President of Innovation, QC Kinetix',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/05/Ginger_Arntz_1x.png.webp',
    description:
      'Ginger Arntz is a dynamic healthcare leader with a proven track record across strategy, operations, and innovation.',
    details:
      'As Vice President of Innovation at QC Kinetix, she is focused on transforming the orthopedic regenerative medicine space—making treatments more standardized, scalable, and accessible to patients nationwide.\n\nSince joining QC Kinetix in 2021, Ginger has contributed across nearly every aspect of the business, from clinical care and field operations to franchise and business development. Her leadership now centers on driving innovation that improves outcomes, enhances the patient experience, and supports long-term growth for the brand.\n\nWith a passion for expanding access to non-surgical treatment options, Ginger is helping to shape a future where regenerative medicine plays a central role in healthcare.',
  },
];

const MedicalManagementTeam = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (name) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  const renderDetails = (text) => {
    return text.split('\n\n').map((para, idx) => (
      <p key={idx}>{para}</p>
    ));
  };

  return (
    <section className="medical-team-section">
      <div className="medical-team-container">
        <div className="medical-team-header">
          <h2>Medical Management Team</h2>
          <p>
            Meet the physicians, scientists, and clinical leaders guiding QC Kinetix forward in
            regenerative medicine.
          </p>
        </div>

        <div className="medical-team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="medical-team-card">
              <div className="medical-team-card-inner">
                <img src={member.image} alt={member.name} width="192" height="192" loading="lazy" />
                <div className="medical-team-card-body">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p className="member-description">{member.description}</p>

                  <div className={`additional-content ${expanded === member.name ? 'show' : ''}`}>
                    {renderDetails(member.details)}
                  </div>

                  <div className="button-container">
                    <button
                      type="button"
                      className={`read-more-btn ${expanded === member.name ? 'active' : ''}`}
                      onClick={() => toggleCard(member.name)}
                      aria-expanded={expanded === member.name}
                    >
                      <span className="btn-text">
                        {expanded === member.name ? 'Collapse' : 'Read More'}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" aria-hidden="true">
                        <path d="M1 1l5 5 5-5" fill="none" stroke="#159b00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalManagementTeam;

