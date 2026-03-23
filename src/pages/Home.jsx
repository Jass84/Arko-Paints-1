import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaMobileAlt, FaVideo, FaCamera, FaCheckCircle, FaBullhorn, FaLanguage, FaMicrophone, FaFilm, FaGraduationCap, FaStar } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title fade-in">Professional Staff & Media Services Across India</h1>
          <p className="hero-subtitle fade-in">
            Connecting licensed companies with skilled manpower and quality professional services
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/staff-services" className="btn btn-large">Explore Staff Services</Link>
            <Link to="/contact" className="btn btn-secondary btn-large">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card scroll-animate">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>11 Month Guarantee</h3>
              <p>Minimum 11 months guaranteed staff for your business needs</p>
            </div>
            <div className="feature-card scroll-animate">
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>Verified Professionals</h3>
              <p>Skilled, educated, and experienced professionals only</p>
            </div>
            <div className="feature-card scroll-animate">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>Licensed Companies Only</h3>
              <p>Services exclusively for licensed businesses and organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title scroll-animate">Our Services</h2>
          <p className="section-subtitle scroll-animate">
            Comprehensive solutions for your business growth and professional needs
          </p>

          <div className="services-grid">
            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Staff Providing Services</h3>
              <p>
                Skilled & unskilled manpower, educated freshers, experienced professionals, 
                office staff, industry workers, and retail staff for licensed companies.
              </p>
              <Link to="/staff-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaMobileAlt />
              </div>
              <h3>Mobile App Development</h3>
              <p>
                Professional mobile application development for your brand and business growth. 
                Custom solutions tailored to your needs.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaVideo />
              </div>
              <h3>Video Production</h3>
              <p>
                Professional video shoots for e-commerce, advertisements, web series, 
                and movie production with experienced teams.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <FaCamera />
              </div>
              <h3>Modeling & Fashion</h3>
              <p>
                Professional modeling services for fashion shows, promotional events, 
                and brand campaigns across India.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaStar />
              </div>
              <h3>Ramp Show & Events</h3>
              <p>
                Professional ramp shows, fashion events, and product launches with skilled models and event management.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaLanguage />
              </div>
              <h3>English Language Training</h3>
              <p>
                Comprehensive English language training programs for professional development and communication skills.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaBullhorn />
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Complete digital marketing solutions including social media advertising, brand promotion, and online campaigns.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaGraduationCap />
              </div>
              <h3>Job Interview Preparation</h3>
              <p>
                Expert guidance and training for job interviews, resume building, and career preparation for professionals.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaFilm />
              </div>
              <h3>Acting & Web Series</h3>
              <p>
                Professional acting services, web series production, and movie casting with experienced directors and producers.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>

            <div className="service-card scroll-animate">
              <div className="service-icon">
                <FaMicrophone />
              </div>
              <h3>Social Media & Brand Promotion</h3>
              <p>
                Strategic brand promotion services including social media advertising, influencer marketing, and brand awareness campaigns.
              </p>
              <Link to="/professional-services" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title scroll-animate">Meet Our Director</h2>
          <p className="section-subtitle scroll-animate">
            Visionary leadership driving excellence in professional services
          </p>
          <div className="leadership-content">
            <div className="manager-image-container scroll-animate">
              <img src="/Manager.webp" alt="Ravi Sharma - Director" className="manager-image" />
            </div>
            <div className="manager-caption">
              <h4>Ravi Sharma</h4>
              <p>Director</p>
            </div>
            <div className="manager-info scroll-animate">
              <h3>Ravi Sharma</h3>
              <p className="manager-title">Director</p>
              <p>
                Under the visionary leadership of Ravi Sharma, our company has established itself 
                as a trusted provider of staff solutions and media services across India. With extensive 
                experience in the industry, Mr. Sharma ensures that every client receives professional, 
                quality service backed by a commitment to excellence and long-term partnerships.
              </p>
              <ul className="manager-highlights">
                <li>✓ 10+ Years of Industry Experience</li>
                <li>✓ Pan-India Service Network</li>
                <li>✓ 500+ Successful Partnerships</li>
                <li>✓ Quality Assured Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title scroll-animate">Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-item scroll-animate">
              <h3>🎯 Professional Approach</h3>
              <p>We only work with licensed companies ensuring professional standards</p>
            </div>
            <div className="why-item scroll-animate">
              <h3>✅ Quality Assurance</h3>
              <p>All staff and services are verified and quality-checked</p>
            </div>
            <div className="why-item scroll-animate">
              <h3>🇮🇳 Pan-India Services</h3>
              <p>Providing services across India with local expertise</p>
            </div>
            <div className="why-item scroll-animate">
              <h3>🤝 Long-term Partnership</h3>
              <p>Minimum 11-month guarantee builds lasting business relationships</p>
            </div>
            <div className="why-item scroll-animate">
              <h3>💼 Diverse Solutions</h3>
              <p>From manpower to media services - all under one roof</p>
            </div>
            <div className="why-item scroll-animate">
              <h3>⚡ Quick Response</h3>
              <p>Fast and efficient service delivery for all your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title scroll-animate">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card scroll-animate">
              <p className="testimonial-text">
                “We were struggling to find reliable staff for our retail outlets.
                EEC Brand Promoter provided trained manpower with an 11-month
                guarantee, which helped stabilize our operations.”
              </p>
              <p className="testimonial-name">Rahul Verma</p>
              <p className="testimonial-role">HR Manager, Retail Chain</p>
            </div>

            <div className="testimonial-card scroll-animate">
              <p className="testimonial-text">
                “Their media and video production team delivered exactly what
                we needed for our brand campaign. Professional team and on-time
                delivery across locations.”
              </p>
              <p className="testimonial-name">Priya Singh</p>
              <p className="testimonial-role">Marketing Head, FMCG Brand</p>
            </div>

            <div className="testimonial-card scroll-animate">
              <p className="testimonial-text">
                “From app development to promotional shoots, having all services
                under one roof saved us both time and cost. Highly recommended
                for licensed companies.”
              </p>
              <p className="testimonial-name">Ankit Mehta</p>
              <p className="testimonial-role">Director, Startup Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Connect with us today for professional staff and media services</p>
          <Link to="/contact" className="btn btn-large">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
