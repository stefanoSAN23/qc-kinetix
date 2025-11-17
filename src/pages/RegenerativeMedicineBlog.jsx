import { useState, useEffect } from 'react';
import BlogHero from '../components/Sections/BlogHero';
import BlogFilters from '../components/Sections/BlogFilters';
import BlogResults from '../components/Sections/BlogResults';
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
    <main>
      <BlogHero />
      <BlogFilters onFilterChange={handleFilterChange} />
      <BlogResults filters={filters} />
      <ContactForm />
    </main>
  );
};

export default RegenerativeMedicineBlog;

