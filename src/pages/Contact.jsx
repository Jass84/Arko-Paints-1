import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaBuilding, FaPaperPlane, FaCreditCard } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    const prepareCheckout = async () => {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        setPaymentStatus('Payment gateway could not be initialized. Please refresh and try again.');
      }
    };

    prepareCheckout();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormStatus('Thank you for contacting us! We will get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handlePayment = () => {
    setPaymentStatus('Initiating secure payment gateway...');

    // Simulate network request to payment gateway
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1; // 90% chance of success for demo
      
      if (isSuccess) {
        const txId = 'pay_' + Math.random().toString(36).substr(2, 9);
        setPaymentStatus(`✅ Payment successful! Transaction ID: ${txId}`);
      } else {
        setPaymentStatus('❌ Payment cancelled or failed. Please try again.');
      }
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in Touch with Our Professional Team</p>
        </div>
      </div>

      <section className="page contact">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                We're here to help your business grow. Contact us for professional 
                staff providing and media services. Services available only for 
                licensed companies and organizations.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h3>Office Address</h3>
                    <p>
                      Building No. 561/A<br />
                      Shiv Mandir Main Road<br />
                      Near Metro Station Gate No. 1/5<br />
                      Chirag Delhi, South Delhi<br />
                      PIN Code: 110017<br />
                      Delhi, India
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Phone Number</h3>
                    <p>
                      <a href="tel:+919990572225">+91 9990572225</a><br />
                      for Candidates <br />
                      <a href="tel:+918384088123">+91 8384088123</a> (looking for job)
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h3>Email Address</h3>
                    <p>
                      <a href="mailto:promoter@businesseasy24.com">promoter@businesseasy24.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-text">
                    <h3>Business Hours</h3>
                    <p>
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="map-container">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8976235!2d77.2127!3d28.5386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMyJzE5LjAiTiA3N8KwMTInNDUuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p className="form-intro">
                Fill out the form below and our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company/Organization Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your licensed company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="staff-providing">Staff Providing Services</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="video-production">Video Production</option>
                    <option value="modeling">Modeling Services</option>
                    <option value="web-series">Web Series & Movies</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="form-notice">
                  <FaBuilding />
                  <p>
                    <strong>Important:</strong> Services are available only for 
                    licensed companies and registered organizations. Please provide 
                    your valid business registration details.
                  </p>
                </div>

                {formStatus && (
                  <div className="form-success">
                    {formStatus}
                  </div>
                )}

                <button type="submit" className="submit-btn">
                  <FaPaperPlane /> Send Message
                </button>
              </form>

              <div className="payment-gateway-box">
                <h3><FaCreditCard /> Payment Gateway</h3>
                <p>
                  Pay securely online to confirm your service booking.
                  Current demo amount: ₹1,999.
                </p>
                <button type="button" className="payment-btn" onClick={handlePayment}>
                  <FaCreditCard /> Pay Now
                </button>
                <p className="payment-note">
                  This is a demo payment integration. No real money will be deducted.
                </p>
                {paymentStatus && (
                  <div className="payment-status">
                    {paymentStatus}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="additional-info">
            <h2>Why Contact Us?</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>🎯 Professional Service</h3>
                <p>Dedicated support for licensed businesses only</p>
              </div>
              <div className="info-card">
                <h3>⚡ Quick Response</h3>
                <p>Get replies within 24 hours on business days</p>
              </div>
              <div className="info-card">
                <h3>🤝 Trusted Partner</h3>
                <p>Long-term partnerships with quality guarantee</p>
              </div>
              <div className="info-card">
                <h3>🇮🇳 Pan-India Service</h3>
                <p>Services available across all major cities in India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
