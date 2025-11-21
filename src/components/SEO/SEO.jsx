import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoData } from '../../data/seoData';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  schema 
}) => {
  const location = useLocation();
  const path = location.pathname;
  
  // Get default SEO data for this path
  const defaultSeo = getSeoData(path);
  
  // Use provided props or fall back to default SEO data
  const finalTitle = title || defaultSeo.title;
  const finalDescription = description || defaultSeo.description;
  const finalKeywords = keywords || defaultSeo.keywords;
  const finalCanonical = canonical || defaultSeo.canonical;
  const finalOgImage = ogImage || defaultSeo.ogImage;
  const finalOgType = ogType || defaultSeo.ogType;
  const finalSchema = schema || defaultSeo.schema;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="QC Kinetix" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Schema.org JSON-LD */}
      {finalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

