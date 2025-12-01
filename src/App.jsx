import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Hero from './components/Sections/Home/Hero';
import Stats from './components/Sections/Home/Stats';
import WhatIsRegenerative from './components/Sections/Home/WhatIsRegenerative';
import BodyPainMap from './components/Sections/Home/BodyPainMap';
import QCKinetixDifference from './components/Sections/Home/QCKinetixDifference';
import Benefits from './components/Sections/Home/Benefits';
import Testimonials from './components/Sections/Home/Testimonials';
import ContactForm from './components/Forms/ContactForm';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import SEO from './components/SEO/SEO';
import RegenerativeMedicine from './pages/RegenerativeMedicine';
import StemCellTreatments from './pages/StemCellTreatments';
import PRPTreatments from './pages/PRPTreatments';
import ClassIVLaserTreatment from './pages/ClassIVLaserTreatment';
import Conditions from './pages/Conditions';
import KneePain from './pages/KneePain';
import ShoulderPain from './pages/ShoulderPain';
import ElbowPain from './pages/ElbowPain';
import WristPain from './pages/WristPain';
import BackPain from './pages/BackPain';
import HipPain from './pages/HipPain';
import AnklePain from './pages/AnklePain';
import ArthritisPain from './pages/ArthritisPain';
import FingerToePain from './pages/FingerToePain';
import FootHandPain from './pages/FootHandPain';
import TendonLigamentPain from './pages/TendonLigamentPain';
import JointPain from './pages/JointPain';
import WhatToExpect from './pages/WhatToExpect';
import AboutUs from './pages/AboutUs';
import SuccessStories from './pages/SuccessStories';
import RegenerativeMedicineBlog from './pages/RegenerativeMedicineBlog';
import StemCellCategoryTreatmentProtocol from './pages/StemCellCategoryTreatmentProtocol';
import NewsAndPress from './pages/NewsAndPress';
import FAQ from './pages/FAQ';
import Webinars from './pages/Webinars';
import QCLocations from './pages/QCLocations';
import RequestAppointmentPage from './pages/RequestAppointment';
import PostPage from './pages/PostPage';
import TreatmentPage from './pages/TreatmentPage';
import './App.css';

const HeaderManager = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  return <Header variant={isHome ? 'main' : 'regenerative'} />;
};

function HomePage() {
  return (
    <>
      <SEO />
      <main>
        <Hero />
        <Stats />
        <WhatIsRegenerative />
        <BodyPainMap />
        <QCKinetixDifference />
        <Benefits />
        <Testimonials />
        <ContactForm />
      </main>
    </>
  );
}

const AnimationInitializer = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const animatedElements = Array.from(document.querySelectorAll('.animated'));
    if (!animatedElements.length) {
      return undefined;
    }

    const interactiveElements = [];

    animatedElements.forEach((element) => {
      if (element.dataset.animateImmediate === 'true') {
        element.classList.add('animated-active');
        element.dataset.animated = 'true';
        return;
      }

      element.classList.remove('animated-active');
      element.dataset.animated = 'false';
      interactiveElements.push(element);
    });

    if (!interactiveElements.length) {
      return undefined;
    }

    let observer;
    let started = false;

    const revealElement = (element) => {
      element.classList.add('animated-active');
      element.dataset.animated = 'true';
    };

    const startObserving = () => {
      if (started) {
        return;
      }

      started = true;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            revealElement(entry.target);
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -20% 0px',
        },
      );

      interactiveElements.forEach((element) => {
        observer.observe(element);
      });
    };

    const interactionEvents = ['wheel', 'touchstart', 'touchmove', 'keydown', 'pointerdown'];
    const interactionOptions = {
      wheel: { passive: true },
      touchstart: { passive: true },
      touchmove: { passive: true },
      keydown: false,
      pointerdown: false,
    };

    const handleFirstInteraction = (event) => {
      if (started) {
        return;
      }

      if (event?.type === 'keydown' && (event.metaKey || event.ctrlKey || event.altKey)) {
        return;
      }

      startObserving();
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleFirstInteraction, interactionOptions[eventName]);
      });
    };

    if (window.scrollY > 0) {
      startObserving();
    } else {
      interactionEvents.forEach((eventName) => {
        window.addEventListener(eventName, handleFirstInteraction, interactionOptions[eventName]);
      });
    }

    return () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, handleFirstInteraction, interactionOptions[eventName]);
      });

      if (observer) {
        observer.disconnect();
      }
    };
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <HeaderManager />
          <AnimationInitializer />
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regenerative-medicine" element={<RegenerativeMedicine />} />
          <Route path="/regenerative-medicine/stem-cell-treatments" element={<StemCellTreatments />} />
          <Route path="/regenerative-medicine/prp-treatments" element={<PRPTreatments />} />
          <Route path="/regenerative-medicine/class-iv-laser-treatment" element={<ClassIVLaserTreatment />} />
          <Route path="/conditions/" element={<Conditions />} />
          <Route path="/knee-pain/" element={<KneePain />} />
          <Route path="/shoulder-pain/" element={<ShoulderPain />} />
          <Route path="/elbow-pain/" element={<ElbowPain />} />
          <Route path="/wrist-pain/" element={<WristPain />} />
          <Route path="/back-pain/" element={<BackPain />} />
          <Route path="/hip-pain/" element={<HipPain />} />
          <Route path="/ankle-pain/" element={<AnklePain />} />
          <Route path="/arthritis-pain/" element={<ArthritisPain />} />
          <Route path="/finger-toe-pain/" element={<FingerToePain />} />
          <Route path="/foot-hand-pain/" element={<FootHandPain />} />
          <Route path="/tendon-and-ligament-pain/" element={<TendonLigamentPain />} />
          <Route path="/joint-pain-treatments/" element={<JointPain />} />
              <Route path="/what-to-expect/" element={<WhatToExpect />} />
              <Route path="/about-us/" element={<AboutUs />} />
              <Route path="/success-stories/" element={<SuccessStories />} />
              <Route path="/regenerative-medicine-blog/" element={<RegenerativeMedicineBlog />} />
              <Route path="/stem-cell-category-treatment-protocol" element={<StemCellCategoryTreatmentProtocol />} />
              <Route path="/news-and-press/" element={<NewsAndPress />} />
              <Route path="/faq/" element={<FAQ />} />
              <Route path="/webinars/" element={<Webinars />} />
              <Route path="/qc-locations/" element={<QCLocations />} />
              <Route path="/request-your-first-appointment/" element={<RequestAppointmentPage />} />
              <Route path="/blog/:slug" element={<PostPage />} />
              <Route path="/blog/:slug/" element={<PostPage />} />
              <Route path="/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/:slug" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/stem-cell-articulation-treatments/:slug/" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/:slug" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/stem-cell-autoimmune-treatments/:slug/" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/:slug" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/stem-cell-anti-aging-treatments/:slug/" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/regenerative-medications/:slug" element={<TreatmentPage />} />
              <Route path="/stem-cell-category-treatment-protocol/regenerative-medications/:slug/" element={<TreatmentPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
