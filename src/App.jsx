import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import WhatIsRegenerative from './components/Sections/WhatIsRegenerative';
import BodyPainMap from './components/Sections/BodyPainMap';
import QCKinetixDifference from './components/Sections/QCKinetixDifference';
import Benefits from './components/Sections/Benefits';
import Testimonials from './components/Sections/Testimonials';
import ContactForm from './components/Forms/ContactForm';
import Footer from './components/Footer/Footer';
import FloatingBanner from './components/Common/FloatingBanner';
import ScrollToTop from './components/Common/ScrollToTop';
import RegenerativeMedicine from './pages/RegenerativeMedicine';
import StemCellTreatments from './pages/StemCellTreatments';
import PRPTreatments from './pages/PRPTreatments';
import ClassIVLaserTreatment from './pages/ClassIVLaserTreatment';
import Conditions from './pages/Conditions';
import KneePain from './pages/KneePain';
import ShoulderPain from './pages/ShoulderPain';
import ElbowPain from './pages/ElbowPain';
import './App.css';

const HeaderManager = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  return <Header variant={isHome ? 'main' : 'regenerative'} />;
};

function HomePage() {
  return (
    <>
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
    <Router>
      <ScrollToTop />
      <div className="App">
        <FloatingBanner />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
