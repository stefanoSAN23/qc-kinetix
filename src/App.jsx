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
import './App.css';

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

const HeaderManager = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '';
  return <Header variant={isHome ? 'main' : 'regenerative'} />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <FloatingBanner />
        <HeaderManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regenerative-medicine" element={<RegenerativeMedicine />} />
          <Route path="/regenerative-medicine/stem-cell-treatments" element={<StemCellTreatments />} />
          <Route path="/regenerative-medicine/prp-treatments" element={<PRPTreatments />} />
          <Route path="/regenerative-medicine/class-iv-laser-treatment" element={<ClassIVLaserTreatment />} />
          <Route path="/conditions/" element={<Conditions />} />
          <Route path="/knee-pain/" element={<KneePain />} />
          <Route path="/shoulder-pain/" element={<ShoulderPain />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
