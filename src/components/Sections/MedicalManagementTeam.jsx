import { useState } from 'react';
import './MedicalManagementTeam.css';

const teamMembers = [
  {
    name: 'Mitchell Sheinkop, MD',
    role: 'National Medical Director',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-44.png.webp',
    description:
      'Dr. Sheinkop is a board-certified orthopedic surgeon with decades of experience in joint replacement and regenerative medicine. He served as Director of the Joint Replacement Program and Professor of Orthopedic Surgery at Rush University Medical Center.',
    details:
      'Dr. Sheinkop has performed more than 20,000 joint replacements and is recognized for pioneering computer-assisted navigation and minimally invasive techniques. He remains a leading voice in evidence-based regenerative medicine with hundreds of patients treated via stem cell therapy.',
  },
  {
    name: 'Justin Garzone, DO, FACP, FACOI, FHM',
    role: 'Physician Leader',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-50.png.webp',
    description:
      'Dr. Garzone is board-certified in internal medicine with fellowships in multiple national societies. He blends functional, regenerative, and anti-aging medicine to deliver comprehensive care.',
    details:
      'He has served as principal investigator in regenerative medicine clinical trials and holds numerous medical directorships. Certified in shockwave therapy, he has performed thousands of bone marrow aspirations and joint injections.',
  },
  {
    name: 'Aaron Wolkoff, DO CAQSM',
    role: 'Medical Director, QC Kinetix Cleveland',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-51.png.webp',
    description:
      'Dr. Wolkoff is a board-certified, fellowship-trained orthopedic sports medicine specialist focusing on nonsurgical treatments.',
    details:
      'He specializes in ultrasound-guided regenerative procedures including PRP, prolotherapy, and bone marrow concentrate injections to treat athletes and patients with chronic injuries.',
  },
  {
    name: 'Ashley Caravelli, DO',
    role: 'Medical Director, QC Kinetix Chicagoland',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-52.png.webp',
    description:
      'Dr. Caravelli is a board-certified family medicine physician with a strong foundation in osteopathic principles and regenerative care.',
    details:
      'She oversees multiple Chicagoland clinics, guiding patients through innovative nonsurgical options and mentoring future physicians as an adjunct professor.',
  },
  {
    name: 'Theodore Sand, PhD',
    role: 'Biotechnology & Regenerative Medicine Senior Consultant',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-53.png.webp',
    description:
      'Dr. Sand is a scientist and regenerative medicine expert who pioneered veterinary and human stem cell applications.',
    details:
      'He holds 21 patents, has authored 25 publications, and has developed PRP and bone marrow technologies used worldwide.',
  },
  {
    name: 'Ali White, PA-C',
    role: 'Vice President of Medical Operations',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/04/Mask-Group-54.png.webp',
    description:
      'Ali is a seasoned healthcare leader with deep expertise in orthopedic regenerative medicine and clinic operations.',
    details:
      'She standardizes medical practices across the QC Kinetix network, elevating provider training and patient experience.',
  },
  {
    name: 'Ginger Arntz, MSN, FNP-C',
    role: 'Vice President of Innovation, QC Kinetix',
    image: 'https://qckinetix.com/wp-content/smush-webp/2025/05/Ginger_Arntz_1x.png.webp',
    description:
      'Ginger drives innovation across orthopedic regenerative medicine, making treatments more standardized and accessible.',
    details:
      'Since 2021 she has led initiatives in clinical care, franchise development, and patient experience to scale regenerative solutions.',
  },
];

const MedicalManagementTeam = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleCard = (name) => {
    setExpanded((prev) => (prev === name ? null : name));
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
                  <p>{member.description}</p>

                  <button
                    type="button"
                    className="medical-team-toggle"
                    onClick={() => toggleCard(member.name)}
                    aria-expanded={expanded === member.name}
                  >
                    {expanded === member.name ? 'Show Less' : 'Read More'}
                    <span aria-hidden="true">⌄</span>
                  </button>

                  {expanded === member.name && (
                    <div className="medical-team-details">
                      <p>{member.details}</p>
                    </div>
                  )}
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

