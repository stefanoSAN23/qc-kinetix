import { useEffect, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug } from '../data/postsData';
import PostHero from '../components/Sections/Post/PostHero';
import PostContent from '../components/Sections/Post/PostContent';
import PostShare from '../components/Sections/Post/PostShare';
import PostNavigation from '../components/Sections/Post/PostNavigation';
import PostRelated from '../components/Sections/Post/PostRelated';
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
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
  
  // Limit to 160 characters
  if (text.length > 160) {
    text = text.substring(0, 157) + '...';
  }
  return text;
};

// Helper function to format date for article:published_time
const formatDateForMeta = (dateString) => {
  if (!dateString) return '';
  try {
    // Try parsing the date string (handles formats like "July 26, 2022")
    const date = new Date(dateString);
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return '';
    }
    return date.toISOString();
  } catch (e) {
    return '';
  }
};

const PostPage = () => {
  const { slug } = useParams();
  
  // Ensure page starts from top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Remove trailing slash from slug if present
  const cleanSlug = slug?.replace(/\/$/, '') || '';
  const post = getPostBySlug(cleanSlug);

  // Extract meta description from content
  const metaDescription = useMemo(() => {
    return post ? extractFirstParagraph(post.content) : '';
  }, [post]);

  // Generate canonical URL
  const canonicalUrl = `https://qckinetix.com/blog/${cleanSlug}`;
  
  // Generate full image URL if relative
  const imageUrl = post?.image 
    ? (post.image.startsWith('http') ? post.image : `https://qckinetix.com${post.image}`)
    : 'https://qckinetix.com/wp-content/uploads/2025/04/QC-Kinetix-Logo-White.svg';

  // Format date for article schema
  const publishedDate = post?.date ? formatDateForMeta(post.date) : '';

  // If post not found, redirect to 404 or blog page
  if (!post) {
    return <Navigate to="/regenerative-medicine-blog/" replace />;
  }

  // Generate Schema.org JSON-LD for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: metaDescription,
    image: imageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Organization',
      name: post.author || 'QC Kinetix',
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
        <title>{post.title} | QC Kinetix Blog</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={metaDescription} />
        <meta name="author" content={post.author || 'QC Kinetix'} />
        {post.categories && post.categories.length > 0 && (
          <meta name="keywords" content={post.categories.join(', ')} />
        )}
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        {post.imageWidth && post.imageHeight && (
          <>
            <meta property="og:image:width" content={post.imageWidth.toString()} />
            <meta property="og:image:height" content={post.imageHeight.toString()} />
          </>
        )}
        <meta property="og:site_name" content="QC Kinetix" />
        <meta property="og:locale" content="en_US" />
        {publishedDate && <meta property="article:published_time" content={publishedDate} />}
        {post.author && <meta property="article:author" content={post.author} />}
        {post.categories && post.categories.map((category, index) => (
          <meta key={index} property="article:tag" content={category} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={imageUrl} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>
      
      <main>
        <PostHero post={post} />
        <PostContent post={post} />
        <PostShare post={post} />
        <PostNavigation previousPost={post.previousPost} nextPost={post.nextPost} />
        <PostRelated relatedPosts={post.relatedPosts} />
        <ContactForm />
      </main>
    </>
  );
};

export default PostPage;

