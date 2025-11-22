import { useEffect, useMemo } from 'react';
import './TreatmentContent.css';

// Helper function to clean HTML content by removing empty Rumble video sections and renaming Elementor classes
const cleanTreatmentContent = (htmlContent) => {
  if (!htmlContent) return '';
  
  // List of section data-ids that contain empty/non-working Rumble videos
  const emptySections = [
    '38da0fa', // rumble_v1ipofz
    'b567b72', // rumble_v1k76tj
    '18f0000', // rumble_v23eo1d
    '6c61147', // rumble_vig1p3, rumble_voor7u
    'e86640a', // rumble_v5byqcl, rumble_v1fuzzw
    '9e9d642', // rumble_vkp3zg, rumble_vkp2ac
    '4c88a08'  // Bitchute iframe with empty column
  ];
  
  let cleanedContent = htmlContent;
  
  // Remove each empty section
  emptySections.forEach(sectionId => {
    // Pattern to match the entire section with this data-id
    const sectionPattern = new RegExp(
      `<section[^>]*data-id="${sectionId}"[^>]*>[\\s\\S]*?<\\/section>`,
      'gi'
    );
    cleanedContent = cleanedContent.replace(sectionPattern, '');
  });
  
  // Remove the "5" at the end of MRI images paragraph
  cleanedContent = cleanedContent.replace(/>5<\/span><\/p>/g, '></span></p>');
  
  // Rename Elementor classes to descriptive names
  const classReplacements = [
    // Sections and containers
    { from: /elementor-section/g, to: 'content-section' },
    { from: /elementor-container/g, to: 'content-container' },
    { from: /elementor-column/g, to: 'content-column' },
    { from: /elementor-col-50/g, to: 'column-50' },
    { from: /elementor-col-100/g, to: 'column-100' },
    { from: /elementor-top-section/g, to: 'top-section' },
    { from: /elementor-top-column/g, to: 'top-column' },
    { from: /elementor-section-boxed/g, to: 'section-boxed' },
    { from: /elementor-section-height-default/g, to: 'section-height-default' },
    { from: /elementor-column-gap-default/g, to: 'column-gap-default' },
    // Widgets and components
    { from: /elementor-widget/g, to: 'content-component' },
    { from: /elementor-widget-container/g, to: 'component-container' },
    { from: /elementor-widget-text-editor/g, to: 'text-component' },
    { from: /elementor-widget-heading/g, to: 'heading-component' },
    { from: /elementor-widget-html/g, to: 'html-component' },
    { from: /elementor-element-populated/g, to: 'component-populated' },
    // Headings
    { from: /elementor-heading-title/g, to: 'section-heading-title' },
    { from: /elementor-size-default/g, to: 'heading-size-default' },
    // Element IDs (keep data-id attributes but rename class prefixes)
    { from: /elementor-element-([a-z0-9]+)/g, to: 'component-$1' }
  ];
  
  // Apply all class replacements
  classReplacements.forEach(({ from, to }) => {
    cleanedContent = cleanedContent.replace(from, to);
  });
  
  return cleanedContent;
};

const TreatmentContent = ({ treatment }) => {
  if (!treatment) return null;

  // Clean the content to remove empty sections
  const cleanedContent = useMemo(() => {
    return cleanTreatmentContent(treatment.content);
  }, [treatment.content]);

  // Load Rumble scripts dynamically when component mounts
  useEffect(() => {
    // Wait for DOM to be ready
    const initRumbleEmbeds = () => {
      // Check if Rumble script is already loaded
      if (window.Rumble) {
        // Initialize all Rumble embeds after a short delay to ensure DOM is ready
        setTimeout(() => {
          const rumbleEmbeds = document.querySelectorAll('[id^="rumble_"]');
          rumbleEmbeds.forEach(embed => {
            const videoId = embed.id.replace('rumble_', '');
            if (!embed.dataset.initialized) {
              try {
                window.Rumble("play", {"video": videoId, "div": embed.id});
                embed.dataset.initialized = 'true';
              } catch (e) {
                console.log('Rumble embed error:', e);
              }
            }
          });
        }, 100);
        return;
      }

      // Load Rumble script if not already loaded
      const existingScript = document.querySelector('script[src*="rumble.com/embedJS"]');
      if (existingScript) {
        // Script already exists, just wait for it to load
        setTimeout(() => {
          if (window.Rumble) {
            initRumbleEmbeds();
          }
        }, 500);
        return;
      }

      const script = document.createElement('script');
      script.innerHTML = `!function(r,u,m,b,l,e){r._Rumble=b,r[b]||(r[b]=function(){(r[b]._=r[b]._||[]).push(arguments);if(r[b]._.length==1){l=u.createElement(m),e=u.getElementsByTagName(m)[0],l.async=1,l.src="https://rumble.com/embedJS/uopcxj"+(arguments[1].video?'.'+arguments[1].video:'')+"/?url="+encodeURIComponent(location.href)+"&args="+encodeURIComponent(JSON.stringify([].slice.apply(arguments))),e.parentNode.insertBefore(l,e)}})}(window, document, "script", "Rumble");`;
      document.head.appendChild(script);

      // After script loads, initialize embeds
      script.onload = () => {
        setTimeout(() => {
          const rumbleEmbeds = document.querySelectorAll('[id^="rumble_"]');
          rumbleEmbeds.forEach(embed => {
            const videoId = embed.id.replace('rumble_', '');
            if (!embed.dataset.initialized) {
              try {
                window.Rumble("play", {"video": videoId, "div": embed.id});
                embed.dataset.initialized = 'true';
              } catch (e) {
                console.log('Rumble embed error:', e);
              }
            }
          });
        }, 100);
      };
    };

    // Initialize when content is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initRumbleEmbeds);
    } else {
      initRumbleEmbeds();
    }

    // Also try after a delay to catch dynamic content
    const timeoutId = setTimeout(initRumbleEmbeds, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [treatment]);

  return (
    <section className="treatment-content-section">
      <div className="treatment-content-container">
        <h1 className="treatment-title">
          {treatment.title}
        </h1>
        
        <div 
          className="treatment-article-content"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />
      </div>
    </section>
  );
};

export default TreatmentContent;

