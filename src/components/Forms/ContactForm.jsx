import { useState, useEffect, useRef } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-active');
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    phone: '',
    hearAbout: '',
    location: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title animated fadeInDown" ref={titleRef}>Contact Us</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group-full">
            <input
              type="text"
              id="location"
              name="location"
              placeholder=""
              value={formData.location}
              onChange={handleChange}
              required
            />
            <span className="location-label">Chosen Location</span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <select
                id="hearAbout"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                required
              >
                <option value="">How did you hear about us?</option>
                <option value="Referral">Referral</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Event">Event</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Radio">Radio</option>
                <option value="Targeted Email">Targeted Email</option>
                <option value="Direct Mail">Direct Mail</option>
                <option value="Television">Television</option>
                <option value="YouTube">YouTube</option>
              </select>
            </div>
          </div>

          <div className="consent-group">
            <label className="consent-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span className="consent-text">
                By submitting my contact information above, I consent to receive SMS from QC Kinetix. 
                Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; 
                Messaging frequency may vary. Please refer to our Privacy Policy and Terms of Use for more information.
              </span>
            </label>
          </div>

          <div className="form-submit">
            <button type="submit" className="submit-button">
              Request a Free Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
