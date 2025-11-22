import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import BlogFilters from '../components/Sections/Blog/BlogFilters';
import StemCellResults from '../components/Sections/Blog/StemCellResults';
import ContactForm from '../components/Forms/ContactForm';
import '../components/Sections/Blog/BlogHero.css';

const StemCellCategoryTreatmentProtocol = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [filters, setFilters] = useState({
    conditions: categoryFromUrl ? [categoryFromUrl] : [],
    dateOrder: '',
    languages: []
  });

  // Update filters when URL parameter changes
  useEffect(() => {
    if (categoryFromUrl) {
      setFilters(prev => ({
        ...prev,
        conditions: [categoryFromUrl]
      }));
    }
  }, [categoryFromUrl]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update URL when filters change
    if (newFilters.conditions && newFilters.conditions.length > 0) {
      setSearchParams({ category: newFilters.conditions[0] });
    } else {
      setSearchParams({});
    }
  };

  // Custom categories for Stem Cell Category Treatment Protocol page
  const customCategories = [
    { id: 'stem-cell-articulation', label: 'Stem Cell Articulation Treatments', value: 'stem-cell-articulation' },
    { id: 'stem-cell-autoimmune', label: 'Stem Cell Autoimmune & Chronic Degenerative Treatments', value: 'stem-cell-autoimmune' },
    { id: 'stem-cell-anti-aging', label: 'Stem Cell Anti-Aging Treatments', value: 'stem-cell-anti-aging' },
    { id: 'regenerative-medications', label: 'Regenerative Medications for Legal Fly and Buy Program', value: 'regenerative-medications' }
  ];

  // Ensure page starts from top on load, especially for responsive
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO pagePath="/stem-cell-category-treatment-protocol" />
      <main>
        {/* Custom Hero Section with different title */}
        <section className="blog-hero-section">
          <div className="blog-hero-container">
            <h1 className="blog-hero-title animated fadeInDown" data-animate-immediate="true">
              Stem Cell Category Treatment Protocol
            </h1>
            <img
              className="blog-hero-divider animated fadeInLeft"
              src="https://qckinetix.com/wp-content/smush-webp/2025/04/Group-530.png.webp"
              width="177"
              height="8"
              alt="Decorative divider"
              loading="lazy"
              data-animate-immediate="true"
            />
          </div>
        </section>
        <BlogFilters 
          onFilterChange={handleFilterChange} 
          customCategories={customCategories}
          hideDateFilters={true}
          hideLanguageFilters={true}
          horizontalCategories={true}
          initialConditions={filters.conditions}
        />
        <StemCellResults filters={filters} />
        <ContactForm />
      </main>
    </>
  );
};

export default StemCellCategoryTreatmentProtocol;
