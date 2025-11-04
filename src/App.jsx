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
import './App.css';

function App() {
  return (
    <div className="App">
      <FloatingBanner />
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
