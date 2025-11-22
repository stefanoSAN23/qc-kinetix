import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogResults.css';

const stemCellArticulationTreatments = [
  {
    id: 1,
    title: 'Knee Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/knee-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 2,
    title: 'Shoulder Stem Cell Treatment – 50 Million Mesenchymal Stem Cells + PRP & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/shoulder-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 3,
    title: 'Thumb Stem Cell Treatment – 25 Million Mesenchymal Stem Cells',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/thumb-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 4,
    title: 'Fingers Stem Cell Treatment – 10 Million Mesenchymal Stem Cells per finger',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/fingers-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 5,
    title: 'Big Toe Stem Cell Treatment – 25 Million Mesenchymal Stem Cells',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/big-toe-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 6,
    title: 'Hip Stem Cell Treatment – 50 Million Mesenchymal Stem Cells + PRP & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/hip-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 7,
    title: 'Elbow Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/elbow-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 8,
    title: 'Tennis Elbow Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/tennis-elbow-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 9,
    title: 'Golfer\'s Elbow Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/golfers-elbow-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 10,
    title: 'Ankle Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & and MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/ankle-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 11,
    title: 'Foot Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/foot-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 12,
    title: 'Plantar Fasciitis Stem Cell Treatment – 50 Million Mesenchymal Stem Cells & an MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/plantar-fasciitis-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 13,
    title: 'Wrist Stem Cell Treatment – 25 Million Mesenchymal Stem Cells & an MRI',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/wrist-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 14,
    title: 'Neck Pain Stem Cell Treatment – 100 Million MSC around most affected Vertebrae + 100 Million MSC IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/neck-pain-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 15,
    title: 'Middle Back Stem Cell Treatment – 100 Million MSC around most affected Vertebrae + 100 Million MSC IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/middle-back-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 16,
    title: 'Lower Back Stem Cell Treatment – 100 Million MSC around most affected Vertebrae + 100 Million MSC IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/lower-back-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  },
  {
    id: 17,
    title: 'Sciatica Stem Cell Treatment – 100 Million MSCs direct into the lower back + 100 Million MSCs IV',
    url: '/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/sciatica-stem-cell-treatment',
    image: 'https://dreambody.clinic/wp-content/uploads/2021/11/Dream-Body-Clinic-Stem-Cell-Treatment-Banner-1.webp',
    imageWidth: 1200,
    imageHeight: 300
  }
];

const StemCellResults = ({ filters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const resultsSectionRef = useRef(null);

  // Filter posts by selected category
  const getFilteredPosts = () => {
    let filtered = [...stemCellArticulationTreatments];
    
    // Show all posts if no filter is selected, or if stem-cell-articulation is selected
    if (filters && filters.conditions && filters.conditions.length > 0) {
      // Only show if stem-cell-articulation is selected
      if (!filters.conditions.includes('stem-cell-articulation')) {
        return []; // Return empty if not the right category
      }
    } else {
      // If no filters selected, show all posts (they are all stem cell articulation treatments)
      return filtered;
    }
    
    return filtered;
  };

  const filteredPosts = getFilteredPosts();
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // When filters change, scroll to results section
  useEffect(() => {
    if (resultsSectionRef.current && filters) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setCurrentPage(1);
  }, [filters]);

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderPagination = () => {
    const pages = [];

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

    let lastPageToShow = currentPage === totalPages ? currentPage : currentPage + 1;
    lastPageToShow = Math.max(3, lastPageToShow);
    
    if (lastPageToShow >= totalPages - 1) {
      lastPageToShow = totalPages - 1;
    }

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

    if (lastPageToShow < totalPages - 1) {
      pages.push(<span key="dots-end" className="dots">...</span>);
    }

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

  // Don't render if no posts match the filter
  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <section className="blog-results-section" ref={resultsSectionRef}>
      <div className="blog-results-container">
        <div id="filter-results" style={{ opacity: 1 }}>
          <div className="posts-grid">
            {currentPosts.map((post) => {
              const cleanUrl = post.url.replace(/\/$/, '');
              
              return (
                <div key={post.id} className="post-item">
                  <div className="thumbnail">
                    <Link to={cleanUrl}>
                      <img
                        src={post.image}
                        className="attachment-full size-full wp-post-image"
                        alt={post.title || 'Stem Cell Treatment'}
                        decoding="async"
                        loading="lazy"
                        width={post.imageWidth || 1200}
                        height={post.imageHeight || 300}
                      />
                    </Link>
                  </div>
                  <h3 className="title" style={{ marginBottom: '20px' }}>
                    <Link to={cleanUrl}>
                      {post.title}
                    </Link>
                  </h3>
                  {/* No meta section (no author or date) */}
                  <Link className="read-more" to={cleanUrl} style={{ marginTop: 'auto' }}>
                    Read More{' '}
                    <img
                      src="https://qckinetix.com/wp-content/uploads/2025/04/Group-503.svg"
                      alt="Arrow Icon"
                      style={{ marginLeft: '8px', width: '13px', height: '11px' }}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
          {totalPages > 1 && (
            <div className="pagination">{renderPagination()}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StemCellResults;

