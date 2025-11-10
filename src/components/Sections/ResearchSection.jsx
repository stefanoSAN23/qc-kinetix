import { useState, useEffect } from 'react';
import './ResearchSection.css';

const ResearchSection = () => {
  // Active filters (applied)
  const [categories, setCategories] = useState([]);
  const [dateOrder, setDateOrder] = useState('newest');
  
  // Temporary filters (not applied until Apply Filter is clicked)
  const [tempCategories, setTempCategories] = useState([]);
  const [tempDateOrder, setTempDateOrder] = useState('newest');
  
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(6);

  // All posts data - 6 pages total
  const allPosts = [
    // Page 1
    {
      id: 1,
      date: '2025',
      title: 'Intradiscal Mesenchymal Stromal Cell Therapy for the Treatment of Chronic Low Back Pain (Phase IIB randomized controlled trial)',
      results: 'Phase IIB RCT evaluating autologous BM-MSC intradiscal injections in patients with chronic disc degeneration; reported safety and efficacy signals (improvements in pain/function) vs control in selected cohorts — represents one of the higher-level randomized MSC trials for discogenic LBP.',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/intradiscal-mesenchymal-stromal-cell-therapy-for-the-treatment-of-chronic-low-back-pain-phase-iib-randomized-controlled-trial/',
      category: 'back'
    },
    {
      id: 2,
      date: 'May 14, 2025',
      title: 'The role of adipose-derived stem cells in knee osteoarthritis treatment: insights from a triple-blind clinical study',
      results: 'The trial tested allogeneic adipose-derived mesenchymal stem cells (ADMSCs) injected intra-articularly into knees of patients with idiopathic knee osteoarthritis (OA). The ADMSC group showed significant reductions in pain scores over time compared to baseline. The authors conclude that allogeneic ADMSCs appear to be safe for intra-articular use in knee OA, with evidence of pain relief and some regenerative (cartilage-thickening) effects.',
      logo: 'https://qckinetix.com/wp-content/uploads/2020/04/logo-bmc-white-aj-be532aa3f0.svg',
      logoWidth: 'auto',
      link: 'https://qckinetix.com/blog/research/the-role-of-adipose-derived-stem-cells-in-knee-osteoarthritis-treatment-insights-from-a-triple-blind-clinical-study/',
      category: 'knee-osteoarthritis'
    },
    {
      id: 3,
      date: 'May 12, 2025',
      title: 'Regenerative Medicine in Orthopaedic Surgery: Pioneering Advances and Their Applications',
      results: 'The combination of stem cell therapy and PRP injections has shown better results in the progression of OA and cartilage repair compared to conventional treatments in recent studies. A clinical trial demonstrated that patients receiving PRP combined with arthroscopic debridement provided better results than using PRP alone. Another study showed significant improvement in joint conditions by using the combination of stem cells with PRP.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/05/emg-logo.svg',
      logoWidth: 'auto',
      logoHeight: '30px',
      link: 'https://qckinetix.com/blog/research/regenerative-medicine-in-orthopaedic-surgery-pioneering-advances-and-their-applications/',
      category: 'general-multi-site-rcts-and-comparative-trials'
    },
    {
      id: 4,
      date: 'April, 9 2025',
      title: 'Advances in cell therapy for orthopedic diseases: bridging immune modulation and regeneration',
      results: '(Mesenchymal stroma cell therapy) for orthopedic diseases have shown promising results in preclinical studies and early-phase clinical trials. MSCs are being investigated as a potential therapy for (osteoarthritis) OA, with clinical trials in phase I/II showing pain relief and functional improvement.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/04/frontiers.svg',
      logoWidth: '200px',
      link: 'https://qckinetix.com/blog/research/advances-in-cell-therapy-for-orthopedic-diseases-bridging-immune-modulation-and-regeneration/',
      category: 'knee-osteoarthritis'
    },
    // Page 2
    {
      id: 5,
      date: '2025',
      title: 'Effectiveness of platelet-rich plasma in hip pain due to osteoarthritis secondary to developmental dysplasia of the hip (Okanoue et al.)',
      results: 'PRP treatment was at least as effective as hyaluronic acid in reducing hip pain in this cohort; RCT evidence for hip MSC injections is limited and heterogenous, so PRP has more randomized data for hip pain at present.',
      note: 'High-quality RCT data for intra-articular MSCs in hip OA remain sparse; reviews summarize limited RCTs and many small nonrandomized cohorts.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/03/download-2.svg',
      logoWidth: '150px',
      link: 'https://qckinetix.com/blog/research/effectiveness-of-platelet-rich-plasma-in-hip-pain-due-to-osteoarthritis-secondary-to-developmental-dysplasia-of-the-hip-okanoue-et-al/',
      category: 'hip'
    },
    {
      id: 6,
      date: '2019',
      title: 'Adipose-derived mesenchymal stem cell therapy in the treatment of knee osteoarthritis: a randomized controlled trial (Freitag et al.)',
      results: 'Autologous adipose-derived MSC therapy produced improvements in pain and function compared with controls; the trial supported safety and clinical benefit signals for ADMSC injections in knee OA.',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/adipose-derived-mesenchymal-stem-cell-therapy-in-the-treatment-of-knee-osteoarthritis-a-randomized-controlled-trial-freitag-et-al/',
      category: 'knee-osteoarthritis'
    },
    {
      id: 7,
      date: '2010–2024 (various)',
      title: 'High-concentrated platelet-rich plasma (PRP) versus placebo in osteoarthritis in the thumb base: study protocol for an assessor-blinded randomized controlled trial',
      results: 'For chronic tendinopathies, several RCTs show PRP is superior to corticosteroids for medium/long-term relief (e.g., lateral epicondylitis), while results for Achilles and patellar tendinopathies are mixed — PRP product and protocol heterogeneity matter.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: '203px',
      link: 'https://qckinetix.com/blog/research/50335/',
      category: 'hand'
    },
    {
      id: 8,
      date: '2024',
      title: 'High-concentration platelet-rich plasma vs saline for thumb base osteoarthritis (randomized double-blinded trial) (von Kieseritzky et al.)',
      results: 'This randomized, double-blind controlled trial evaluated a high-concentration PRP preparation for thumb base OA vs placebo; it provides higher-level randomized data for small-joint PRP use in the hand. (Study is a step toward RCT evidence for small-joint PRP.)',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/high-concentration-platelet-rich-plasma-vs-saline-for-thumb-base-osteoarthritis-randomized-double-blinded-trial-von-kieseritzky-et-al/',
      category: 'hand'
    },
    // Page 3
    {
      id: 9,
      date: '2024',
      title: "Platelet-Rich Plasma for de Quervain's Tenosynovitis (review & RCTs summary) (Hidajat et al.)",
      results: "PRP is reported as a safe and effective option in the literature for De Quervain's, with randomized trials and comparative studies suggesting benefit vs steroid in some cohorts — higher-quality RCTs still helpful.",
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: 'auto',
      logoHeight: '40px',
      link: 'https://qckinetix.com/blog/research/platelet-rich-plasma-for-de-quervains-tenosynovitis-review-rcts-summary-hidajat-et-al/',
      category: 'wrist'
    },
    {
      id: 10,
      date: '2024',
      title: 'The safety and effectiveness of orthobiologic injections for musculoskeletal pain: systematic review and meta-analysis (Navani et al.)',
      results: 'PRP and bone-marrow concentrates were often superior to placebo/controls for pain and function across some indications, but heterogeneity and small trial sizes limit strong conclusions; highlights need for larger RCTs.',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/the-safety-and-effectiveness-of-orthobiologic-injections-for-musculoskeletal-pain-systematic-review-and-meta-analysis-navani-et-al/',
      category: 'general-multi-site-rcts-and-comparative-trials'
    },
    {
      id: 11,
      date: '2023',
      title: 'Regenerative therapies for basal thumb arthritis — review of PRP, fat grafting, and MSC approaches (Hasiba-Pappas et al.)',
      results: 'Randomized trials exist for some PRP preparations in thumb base OA (see high-concentration PRP trial above), but MSC RCTs for small hand joints are scarce — most evidence is small series or pilot studies.',
      logo: 'https://qckinetix.com/wp-content/uploads/2023/10/download-1.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/regenerative-therapies-for-basal-thumb-arthritis-review-of-prp-fat-grafting-and-msc-approaches-hasiba-pappas-et-al/',
      category: 'hand'
    },
    {
      id: 12,
      date: '2022',
      title: 'Efficacy and safety of platelet-rich plasma for low back pain: a systematic review and meta-analysis of randomized controlled trials',
      results: 'The meta-analysis pooled multiple RCTs of PRP versus controls in low back pain and found that PRP provided significantly greater pain relief and functional improvement at intermediate follow-ups (e.g. 3–12 months) with a favorable safety profile; the authors concluded PRP appears promising for LBP but called for larger, more standardized RCTs.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: 'auto',
      logoHeight: '40px',
      link: 'https://qckinetix.com/blog/research/efficacy-and-safety-of-platelet-rich-plasma-for-low-back-pain-a-systematic-review-and-meta-analysis-of-randomized-controlled-trials/',
      category: 'back'
    },
    // Page 4
    {
      id: 13,
      date: 'July 28, 2022',
      title: 'Clinical application of mesenchymal stem cell in regenerative medicine: a narrative review',
      results: 'MSCs injected into bone defects or fractures improved healing scores and reduced pain; in osteoarthritis, intra-articular MSCs improved pain, function, MRI or biomarker indicators; in some contexts, MSCs delayed or avoided need for more invasive surgery.',
      logo: 'https://qckinetix.com/wp-content/uploads/2020/04/logo-bmc-white-aj-be532aa3f0.svg',
      logoWidth: 'auto',
      link: 'https://qckinetix.com/blog/research/clinical-application-of-mesenchymal-stem-cell-in-regenerative-medicine-a-narrative-review/',
      category: 'general-multi-site-rcts-and-comparative-trials'
    },
    {
      id: 14,
      date: '2021',
      title: 'Effect of platelet-rich plasma injections vs placebo on symptoms and function in ankle osteoarthritis (Paget et al.)',
      results: 'In a randomized placebo-controlled study, intra-articular PRP did not significantly improve ankle symptoms and function over 26 weeks compared with placebo. The study does not support routine PRP for ankle OA.',
      logo: 'https://qckinetix.com/wp-content/uploads/2021/10/download-3.svg',
      logoWidth: '150px',
      link: 'https://qckinetix.com/blog/research/effect-of-platelet-rich-plasma-injections-vs-placebo-on-symptoms-and-function-in-ankle-osteoarthritis-paget-et-al/',
      category: 'ankle'
    },
    {
      id: 15,
      date: '2020 (case/cohort)',
      title: 'Use of adipose-derived MSCs in ankle osteochondral lesions (Freitag et al. / case reports)',
      results: 'Small case series report improved pain/function and healing in OCLs after ADMSC therapy — encouraging but not randomized; stronger RCT evidence is needed for MSCs in ankle indications.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: '203px',
      link: 'https://qckinetix.com/blog/research/use-of-adipose-derived-mscs-in-ankle-osteochondral-lesions-freitag-et-al-case-reports/',
      category: 'ankle'
    },
    {
      id: 16,
      date: 'April 2020',
      title: 'Phase II multicenter randomized controlled clinical trial on the efficacy of intra-articular injection of autologous bone marrow mesenchymal stem cells with platelet-rich plasma for knee osteoarthritis',
      results: 'A randomized phase II study testing 100×10⁶ autologous BM-MSCs + PRP as adjunct showed symptomatic improvements and acceptable safety versus control/adjuvant arms; helped establish tolerability and suggested clinical benefit at medium-term follow-up.',
      logo: 'https://qckinetix.com/wp-content/uploads/2020/04/logo-bmc-white-aj-be532aa3f0.svg',
      logoWidth: 'auto',
      link: 'https://qckinetix.com/blog/research/phase-ii-multicenter-randomized-controlled-clinical-trial-on-the-efficacy-of-intra-articular-injection-of-autologous-bone-marrow-mesenchymal-stem-cells-with-platelet-rich-plasma-for-knee-osteoarthriti/',
      category: 'knee-osteoarthritis'
    },
    // Page 5
    {
      id: 17,
      date: '2017',
      title: 'Intra-articular injection of mesenchymal stem cells for the treatment of osteoarthritis of the knee: 2-year follow-up (Jo et al.)',
      results: 'This proof-of-concept clinical study (follow-up study of intra-articular ADMSC injection) showed sustained improvements in pain and function up to 2 years and evidence of structural improvements on imaging in some patients; the authors called for larger RCTs.',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/intra-articular-injection-of-mesenchymal-stem-cells-for-the-treatment-of-osteoarthritis-of-the-knee-2-year-follow-up-jo-et-al/',
      category: 'knee-osteoarthritis'
    },
    {
      id: 18,
      date: '2016',
      title: 'Intradiscal platelet-rich plasma injection for chronic discogenic low back pain: a prospective randomized trial (Levi et al.)',
      results: 'Intradiscal PRP injections produced encouraging 6-month improvements by predefined categorical success criteria compared with baseline; authors concluded PRP is promising for discogenic LBP but randomized placebo-controlled trials with larger samples are needed.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: 'auto',
      logoHeight: '40px',
      link: 'https://qckinetix.com/blog/research/intradiscal-platelet-rich-plasma-injection-for-chronic-discogenic-low-back-pain-a-prospective-randomized-trial-levi-et-al/',
      category: 'back'
    },
    {
      id: 19,
      date: '2014',
      title: 'Platelet-rich plasma vs corticosteroid injection for chronic plantar fasciitis: randomized comparative study (Monto et al.)',
      results: 'PRP produced more durable long-term pain relief than corticosteroid injections in chronic, recalcitrant plantar fasciitis patients; PRP appears beneficial for refractory plantar fasciitis based on RCTs and meta-analyses.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: 'auto',
      logoHeight: '40px',
      link: 'https://qckinetix.com/blog/research/platelet-rich-plasma-vs-corticosteroid-injection-for-chronic-plantar-fasciitis-randomized-comparative-study-monto-et-al/',
      category: 'foot-plantar'
    },
    {
      id: 20,
      date: '2011',
      title: 'Platelet-rich plasma augmentation for arthroscopic rotator cuff repair: a randomized controlled trial (Castricini et al.)',
      results: 'RCT showed early postoperative pain reduction with PRP augmentation; long-term structural and functional benefits were mixed and other RCTs/meta-analyses find variable results dependent on PRP type and tear size.',
      logo: 'https://qckinetix.com/wp-content/uploads/2025/10/download.svg',
      logoWidth: 'auto',
      logoHeight: '40px',
      link: 'https://qckinetix.com/blog/research/platelet-rich-plasma-augmentation-for-arthroscopic-rotator-cuff-repair-a-randomized-controlled-trial-castricini-et-al/',
      category: 'shoulder'
    },
    // Page 6
    {
      id: 21,
      date: '2011',
      title: 'PRP in arthroscopic rotator cuff repair: prospective randomized study (Randelli et al.)',
      results: 'PRP decreased pain in early months and suggested improved healing for some subgroups (smaller tears) though long-term functional differences were not uniformly significant — overall RCT evidence for rotator-cuff PRP is mixed.',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/prp-in-arthroscopic-rotator-cuff-repair-prospective-randomized-study-randelli-et-al/',
      category: 'shoulder'
    },
    {
      id: 22,
      date: '2010',
      title: 'Platelet-rich plasma versus corticosteroid injection for chronic lateral epicondylitis: randomized controlled trial (Peerbooms et al.)',
      results: 'PRP showed superior long-term pain relief and function compared with corticosteroid injection for chronic lateral epicondylitis (durable benefits at 1–2 years).',
      logo: 'https://qckinetix.com/wp-content/uploads/2017/07/pubmed-logo-blue.svg',
      logoWidth: '100px',
      link: 'https://qckinetix.com/blog/research/platelet-rich-plasma-versus-corticosteroid-injection-for-chronic-lateral-epicondylitis-randomized-controlled-trial-peerbooms-et-al/',
      category: 'elbow'
    }
  ];

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    
    let filteredPosts = [...allPosts];
    
    // Filter by categories
    if (categories.length > 0) {
      filteredPosts = filteredPosts.filter(post => 
        categories.includes(post.category)
      );
      // Sort by date when filters are applied
      filteredPosts.sort((a, b) => {
        const getYear = (dateStr) => {
          const yearMatch = dateStr.match(/\d{4}/);
          return yearMatch ? parseInt(yearMatch[0]) : 0;
        };
        const yearA = getYear(a.date);
        const yearB = getYear(b.date);
        return dateOrder === 'newest' ? yearB - yearA : yearA - yearB;
      });
    }
    // When no filters, keep original order from array (no sorting)
    
    // Pagination - 4 posts per page
    const postsPerPage = 4;
    const calculatedTotalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);
    
    setPosts(paginatedPosts);
    setTotalPages(calculatedTotalPages > 0 ? calculatedTotalPages : 1);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, categories, dateOrder]);

  // Sync temp filters with active filters when active filters change
  useEffect(() => {
    setTempCategories([...categories]);
    setTempDateOrder(dateOrder);
  }, [categories, dateOrder]);

  const handleCategoryChange = (category) => {
    setTempCategories(prev => {
      return prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category];
    });
  };

  const handleDateOrderChange = (order) => {
    setTempDateOrder(order);
  };

  const handleApplyFilter = () => {
    // Apply temporary filters to active filters
    setCategories([...tempCategories]);
    setDateOrder(tempDateOrder);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    // Clear both temporary and active filters
    setTempCategories([]);
    setTempDateOrder('newest');
    setCategories([]);
    setDateOrder('newest');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    
    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        // Show: 1, 2, 3, ..., last (original format)
        pages.push(1, 2, 3);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage === 3) {
        // Show: 1, 2, 3, 4, ..., last (show 4 when on page 3)
        pages.push(1, 2, 3, 4);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage === 4) {
        // Show: 1, 2, 3, 4, 5, ..., last (show 5 when on page 4)
        pages.push(1, 2, 3, 4, 5);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show: 1, ..., last-2, last-1, last
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show: 1, ..., current-1, current, current+1, ..., last
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages.map((page, index) => {
      if (page === '...') {
        return <span key={index} className="dots">...</span>;
      }
      return (
        <button
          key={index}
          type="button"
          className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageChange(page)}
          data-page={page}
        >
          {page}
        </button>
      );
    });
  };

  return (
    <section className="research-section">
      <div className="research-container">
        <div className="research-header">
          <h2 className="research-title">Explore Regenerative Medicine Research</h2>
        </div>

        <div className="research-filters">
          <div className="filter-group category-filters">
            <p>Sort Research</p>
            <div className="row">
              <div className="fields category-fields">
                <div className="column-sm-4">
                  <div className="field">
                    <input
                      type="checkbox"
                      value="knee-osteoarthritis"
                      id="knee-osteoarthritis"
                      className="category"
                      checked={tempCategories.includes('knee-osteoarthritis')}
                      onChange={() => handleCategoryChange('knee-osteoarthritis')}
                    />
                    <label htmlFor="knee-osteoarthritis">Knee / Osteoarthritis</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="shoulder"
                      id="shoulder"
                      className="category"
                      checked={tempCategories.includes('shoulder')}
                      onChange={() => handleCategoryChange('shoulder')}
                    />
                    <label htmlFor="shoulder">Shoulder</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="back"
                      id="back"
                      className="category"
                      checked={tempCategories.includes('back')}
                      onChange={() => handleCategoryChange('back')}
                    />
                    <label htmlFor="back">Back</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="hip"
                      id="hip"
                      className="category"
                      checked={tempCategories.includes('hip')}
                      onChange={() => handleCategoryChange('hip')}
                    />
                    <label htmlFor="hip">Hip</label>
                  </div>
                </div>
                <div className="column-sm-4">
                  <div className="field">
                    <input
                      type="checkbox"
                      value="spine"
                      id="spine"
                      className="category"
                      checked={tempCategories.includes('spine')}
                      onChange={() => handleCategoryChange('spine')}
                    />
                    <label htmlFor="spine">Spine</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="hand"
                      id="hand"
                      className="category"
                      checked={tempCategories.includes('hand')}
                      onChange={() => handleCategoryChange('hand')}
                    />
                    <label htmlFor="hand">Hand</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="tendon-ligament"
                      id="tendon-ligament"
                      className="category"
                      checked={tempCategories.includes('tendon-ligament')}
                      onChange={() => handleCategoryChange('tendon-ligament')}
                    />
                    <label htmlFor="tendon-ligament">Tendon & Ligament</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="general-multi-site-rcts-and-comparative-trials"
                      id="general-multi-site-rcts-and-comparative-trials"
                      className="category"
                      checked={tempCategories.includes('general-multi-site-rcts-and-comparative-trials')}
                      onChange={() => handleCategoryChange('general-multi-site-rcts-and-comparative-trials')}
                    />
                    <label htmlFor="general-multi-site-rcts-and-comparative-trials">General</label>
                  </div>
                </div>
                <div className="column-sm-4">
                  <div className="field">
                    <input
                      type="checkbox"
                      value="elbow"
                      id="elbow"
                      className="category"
                      checked={tempCategories.includes('elbow')}
                      onChange={() => handleCategoryChange('elbow')}
                    />
                    <label htmlFor="elbow">Elbow</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="ankle"
                      id="ankle"
                      className="category"
                      checked={tempCategories.includes('ankle')}
                      onChange={() => handleCategoryChange('ankle')}
                    />
                    <label htmlFor="ankle">Ankle</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="wrist"
                      id="wrist"
                      className="category"
                      checked={tempCategories.includes('wrist')}
                      onChange={() => handleCategoryChange('wrist')}
                    />
                    <label htmlFor="wrist">Wrist</label>
                  </div>
                  <div className="field">
                    <input
                      type="checkbox"
                      value="foot-plantar"
                      id="foot-plantar"
                      className="category"
                      checked={tempCategories.includes('foot-plantar')}
                      onChange={() => handleCategoryChange('foot-plantar')}
                    />
                    <label htmlFor="foot-plantar">Foot & Plantar</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter-group date-filters">
            <p>Sort Date</p>
            <div className="row">
              <div className="fields date-fields">
                <div className="column-sm-12">
                  <div className="field">
                    <input
                      type="radio"
                      name="dateOrder"
                      value="newest"
                      id="newest"
                      checked={tempDateOrder === 'newest'}
                      onChange={(e) => handleDateOrderChange(e.target.value)}
                    />
                    <label htmlFor="newest">Newest</label>
                  </div>
                  <div className="field">
                    <input
                      type="radio"
                      name="dateOrder"
                      value="oldest"
                      id="oldest"
                      checked={tempDateOrder === 'oldest'}
                      onChange={(e) => handleDateOrderChange(e.target.value)}
                    />
                    <label htmlFor="oldest">Oldest</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="filter-buttons">
            <button className="apply_filter_btn" onClick={handleApplyFilter}>
              Apply Filter
            </button>
            <button className="clear_filter_btn" onClick={handleClearFilter}>
              Clear Filter
            </button>
          </div>
        </div>

        <div className="research-results">
          <div id="filter-results" style={{ opacity: loading ? 0.3 : 1 }}>
            {loading ? (
              <div className="ajax-loader">Loading research...</div>
            ) : (
              <>
                <div className="posts-grid">
                  {posts.map((post) => (
                    <div key={post.id} className="post-item">
                      <div className="meta">
                        <figure className="wp-block-image size-large is-resized">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={post.logo}
                            alt=""
                            style={{ 
                              width: post.logoWidth || '100px',
                              height: post.logoHeight || 'auto'
                            }}
                          />
                        </figure>
                        <p><strong>Date Published:</strong> {post.date}</p>
                        <p><strong>Study Title:</strong> <em>{post.title}</em></p>
                        <p><strong>Results:</strong> {post.results}</p>
                        {post.note && (
                          <p><strong>Note:</strong> {post.note}</p>
                        )}
                      </div>
                      <a
                        className="read-more"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={post.link}
                      >
                        View Full Research Study{' '}
                        <img
                          src="https://qckinetix.com/wp-content/uploads/2025/04/Group-503.svg"
                          alt="Arrow Icon"
                          style={{ marginLeft: '8px', width: '13px', height: '11px' }}
                        />
                      </a>
                    </div>
                  ))}
                </div>
                {posts.length > 0 && (
                  <div className="pagination">{renderPagination()}</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
