import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    phone: '',
    hearAbout: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title fade-in-down">Contact Us</h2>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="firstName">First Name <span className="required">(Required)</span></label>
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
            
            <div className="form-group half">
              <label htmlFor="lastName">Last Name <span className="required">(Required)</span></label>
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
            <div className="form-group half">
              <label htmlFor="email">Email <span className="required">(Required)</span></label>
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
            
            <div className="form-group half">
              <label htmlFor="zipCode">ZIP Code <span className="required">(Required)</span></label>
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

          <div className="form-group full">
            <label htmlFor="location">Chosen Location <span className="required">(Required)</span></label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <div className="field-description">Chosen Location</div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="phone">Phone <span className="required">(Required)</span></label>
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
            
            <div className="form-group half">
              <label htmlFor="hearAbout">How did you hear about us? <span className="required">(Required)</span></label>
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

          <div className="form-group consent">
            <label className="consent-label">
              <input
                type="checkbox"
                name="consent"
                required
              />
              <span>
                By submitting my contact information above, I consent to receive SMS from QC Kinetix. 
                Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; 
                Messaging frequency may vary. Please refer to our Privacy Policy and Terms of Use for more information.
                <span className="required">*</span>
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

