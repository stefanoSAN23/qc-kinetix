import { useState, useEffect } from 'react';
import SEO from '../components/SEO/SEO';
import BlogHero from '../components/Sections/Blog/BlogHero';
import BlogFilters from '../components/Sections/Blog/BlogFilters';
import BlogResults from '../components/Sections/Blog/BlogResults';
import ContactForm from '../components/Forms/ContactForm';

const RegenerativeMedicineBlog = () => {
  const [filters, setFilters] = useState({
    conditions: [],
    dateOrder: '',
    languages: []
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Ensure page starts from top on load, especially for responsive
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <SEO />
      <main>
      <BlogHero />
      <BlogFilters onFilterChange={handleFilterChange} />
      <BlogResults filters={filters} />
      <ContactForm />
      </main>
    </>
  );
};

export default RegenerativeMedicineBlog;

