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
  schema,
  noIndex = false,
  pagePath
}) => {
  const location = useLocation();
  const path = pagePath || location.pathname;
  
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

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://qckinetix.com/'
      },
      ...(path !== '/' ? [{
        '@type': 'ListItem',
        position: 2,
        name: finalTitle.split('|')[0].trim(),
        item: finalCanonical
      }] : [])
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <meta name="author" content="QC Kinetix" />
      <meta name="publisher" content="QC Kinetix" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:site_name" content="QC Kinetix" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@qckinetix" />
      <meta name="twitter:creator" content="@qckinetix" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      <meta name="twitter:image:alt" content={finalTitle} />
      
      {/* Schema.org JSON-LD for Page */}
      {finalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;

