import React from 'react';
import { FaMobileAlt, FaVideo, FaCamera, FaFilm, FaPalette, FaRocket } from 'react-icons/fa';
import './ProfessionalServices.css';

const ProfessionalServices = () => {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for Android and iOS platforms to boost your brand and business growth.',
      features: [
        'Native & Cross-platform apps',
        'User-friendly interface design',
        'E-commerce integration',
        'Maintenance & support',
        'App store deployment'
      ]
    },
    {
      icon: <FaVideo />,
      title: 'Video Production',
      description: 'Professional video shoots for e-commerce, advertisements, promotional content, and brand storytelling.',
      features: [
        'E-commerce product videos',
        'Advertisement commercials',
        'Corporate videos',
        'Social media content',
        'Professional editing'
      ]
    },
    {
      icon: <FaCamera />,
      title: 'Modeling Services',
      description: 'Professional models for fashion shows, promotional events, brand campaigns, and commercial shoots.',
      features: [
        'Fashion show models',
        'Brand ambassadors',
        'Promotional events',
        'Print & digital campaigns',
        'Product launches'
      ]
    },
    {
      icon: <FaFilm />,
      title: 'Web Series & Movies',
      description: 'Complete production services for web series and movies, from concept to final delivery.',
      features: [
        'Script development',
        'Actor management',
        'Location scouting',
        'Post-production',
        'Distribution support'
      ]
    },
    {
      icon: <FaPalette />,
      title: 'Creative Design',
      description: 'Professional graphic design, branding, and visual content creation for your business needs.',
      features: [
        'Brand identity design',
        'Marketing materials',
        'Social media graphics',
        'UI/UX design',
        'Print design'
      ]
    },
    {
      icon: <FaRocket />,
      title: 'Business Growth Services',
      description: 'Strategic services to help your business expand and reach new heights in the digital landscape.',
      features: [
        'Digital marketing strategy',
        'Brand positioning',
        'Market analysis',
        'Growth consulting',
        'Performance tracking'
      ]
    }
  ];

  return (
    <div className="professional-services-page">
      <div className="page-header">
        <div className="container">
          <h1>Professional Services</h1>
          <p>Quality Media & Digital Solutions for Modern Businesses</p>
        </div>
      </div>

      <section className="page professional-services">
        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <h2>Elevate Your Brand with Professional Services</h2>
            <p>
              From mobile app development to video production and modeling services, we provide 
              comprehensive solutions to help your business stand out in today's competitive market. 
              Our experienced team delivers quality results that drive growth and engagement.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid-detailed">
            {services.map((service, index) => (
              <div key={index} className="service-card-detailed">
                <div className="service-header">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Services */}
          <section className="why-section">
            <h2 className="section-title">Why Choose Our Professional Services?</h2>
            <div className="why-grid-detailed">
              <div className="why-card">
                <h3>🎯 Experienced Team</h3>
                <p>Work with professionals who have years of industry experience and expertise</p>
              </div>
              <div className="why-card">
                <h3>💼 End-to-End Solutions</h3>
                <p>Complete service delivery from concept to execution and beyond</p>
              </div>
              <div className="why-card">
                <h3>⚡ Quick Turnaround</h3>
                <p>Efficient project management ensuring timely delivery without compromising quality</p>
              </div>
              <div className="why-card">
                <h3>💎 Quality Assurance</h3>
                <p>Rigorous quality checks at every stage to ensure excellence</p>
              </div>
              <div className="why-card">
                <h3>🎨 Creative Excellence</h3>
                <p>Innovative and creative solutions that make your brand memorable</p>
              </div>
              <div className="why-card">
                <h3>📈 Measurable Results</h3>
                <p>Data-driven approach with trackable outcomes and ROI</p>
              </div>
            </div>
          </section>

          {/* Industry Focus */}
          <section className="industry-section">
            <h2 className="section-title">Industries We Serve</h2>
            <div className="industry-grid">
              <div className="industry-item">E-Commerce</div>
              <div className="industry-item">Fashion & Lifestyle</div>
              <div className="industry-item">Entertainment</div>
              <div className="industry-item">Retail</div>
              <div className="industry-item">Technology</div>
              <div className="industry-item">Healthcare</div>
              <div className="industry-item">Education</div>
              <div className="industry-item">Real Estate</div>
            </div>
          </section>

          {/* CTA */}
          <div className="cta-box-professional">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our professional services can help you achieve your goals</p>
            <a href="/contact" className="btn btn-large">Start Your Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalServices;
