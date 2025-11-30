import { ImageDivider } from '../../Common';
import './BlogHero.css';

const BlogHero = () => {
  return (
    <section className="blog-hero-section">
      <div className="blog-hero-container">
        <h1 className="blog-hero-title animated fadeInDown" data-animate-immediate="true">
          QC Kinetix Blog
        </h1>
        <ImageDivider 
          variant="white"
          animated={true}
          animation="fadeInLeft"
          animateImmediate={true}
          className="blog-hero-divider"
        />
      </div>
    </section>
  );
};

export default BlogHero;


