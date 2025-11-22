import { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getTreatmentBySlug } from '../data/treatmentsData';
import TreatmentContent from '../components/Sections/Treatment/TreatmentContent';
import ContactForm from '../components/Forms/ContactForm';

// Helper function to extract first paragraph text from HTML content
const extractFirstParagraph = (htmlContent) => {
  if (!htmlContent) return '';
  
  // Use regex to extract first <p> tag content
  const paragraphMatch = htmlContent.match(/<p[^>]*>(.*?)<\/p>/i);
  if (paragraphMatch && paragraphMatch[1]) {
    // Remove HTML tags from the paragraph content
    let text = paragraphMatch[1]
      .replace(/<[^>]+>/g, '') // Remove all HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
      .replace(/&amp;/g, '&') // Replace &amp; with &
      .replace(/&lt;/g, '<') // Replace &lt; with <
      .replace(/&gt;/g, '>') // Replace &gt; with >
      .replace(/&quot;/g, '"') // Replace &quot; with "
      .replace(/&#39;/g, "'") // Replace &#39; with '
      .replace(/&#8211;/g, '-') // Replace &#8211; with -
      .replace(/&#8217;/g, "'") // Replace &#8217; with '
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
    
    // Limit to 160 characters for meta description
    if (text.length > 160) {
      text = text.substring(0, 157) + '...';
    }
    return text;
  }
  
  // Fallback: extract any text content (remove all HTML tags)
  let text = htmlContent
    .replace(/<[^>]+>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  // Limit to 160 characters
  if (text.length > 160) {
    text = text.substring(0, 157) + '...';
  }
  return text;
};

const TreatmentPage = () => {
  const { slug } = useParams();
  
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Remove trailing slash from slug if present
  const cleanSlug = slug?.replace(/\/$/, '') || '';
  const treatment = getTreatmentBySlug(cleanSlug);

  // Extract meta description from content
  const metaDescription = useMemo(() => {
    return treatment ? extractFirstParagraph(treatment.content) : '';
  }, [treatment]);

  // Generate canonical URL
  const canonicalUrl = `https://qckinetix.com/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/${cleanSlug}`;
  
  // Generate full image URL if relative
  const imageUrl = treatment?.image 
    ? (treatment.image.startsWith('http') ? treatment.image : `https://qckinetix.com${treatment.image}`)
    : 'https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg';

  // If treatment not found, redirect to category page
  if (!treatment) {
    return <Navigate to="/stem-cell-category-treatment-protocol?category=stem-cell-articulation" replace />;
  }

  // Generate Schema.org JSON-LD for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: treatment.title,
    description: metaDescription,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: 'QC Kinetix',
      url: 'https://qckinetix.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'QC Kinetix',
      url: 'https://qckinetix.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{treatment.title} | QC Kinetix</title>
        <meta name="title" content={treatment.title} />
        <meta name="description" content={metaDescription} />
        <meta name="author" content="QC Kinetix" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={treatment.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        {treatment.imageWidth && treatment.imageHeight && (
          <>
            <meta property="og:image:width" content={treatment.imageWidth.toString()} />
            <meta property="og:image:height" content={treatment.imageHeight.toString()} />
          </>
        )}
        <meta property="og:site_name" content="QC Kinetix" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={treatment.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      
      <main>
        <TreatmentContent treatment={treatment} />
        <ContactForm />
      </main>
    </>
  );
};

export default TreatmentPage;

