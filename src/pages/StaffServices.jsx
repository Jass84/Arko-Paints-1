import React from 'react';
import { FaUsers, FaBriefcase, FaIndustry, FaStore, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import './StaffServices.css';

const StaffServices = () => {
  const staffCategories = [
    {
      icon: <FaBriefcase />,
      title: 'Office Staff',
      description: 'Administrative assistants, receptionists, data entry operators, accounts staff, HR professionals',
      features: ['Educated professionals', 'Computer literate', 'Good communication skills']
    },
    {
      icon: <FaIndustry />,
      title: 'Industry Staff',
      description: 'Production workers, technicians, machine operators, quality controllers, supervisors',
      features: ['Skilled workers', 'Safety trained', 'Experience in manufacturing']
    },
    {
      icon: <FaStore />,
      title: 'Retail Staff',
      description: 'Sales associates, cashiers, store managers, inventory staff, customer service representatives',
      features: ['Customer-focused', 'Product knowledge', 'Sales experience']
    },
    {
      icon: <FaUsers />,
      title: 'Skilled Manpower',
      description: 'Electricians, plumbers, carpenters, mechanics, technicians with specific expertise',
      features: ['Certified professionals', 'Hands-on experience', 'Problem solvers']
    },
    {
      icon: <FaUsers />,
      title: 'Educated Freshers',
      description: 'Recent graduates ready to start their career with enthusiasm and modern education',
      features: ['Latest knowledge', 'Trainable', 'Tech-savvy']
    },
    {
      icon: <FaUsers />,
      title: 'Experienced Professionals',
      description: 'Seasoned experts with years of industry experience in various domains',
      features: ['Proven track record', 'Industry insights', 'Leadership skills']
    }
  ];

  return (
    <div className="staff-services-page">
      <div className="page-header">
        <div className="container">
          <h1>Staff Providing Services</h1>
          <p>Professional Manpower Solutions for Licensed Companies Across India</p>
        </div>
      </div>

      <section className="page staff-services">
        <div className="container">
          {/* Introduction */}
          <div className="intro-section">
            <h2>Reliable Manpower for Your Business Growth</h2>
            <p>
              We provide skilled and unskilled staff, educated freshers, and experienced professionals 
              to licensed companies and offices across India. Our services come with a minimum 
              <strong> 11-month guarantee</strong>, ensuring long-term stability for your business.
            </p>
          </div>

          {/* Key Features */}
          <div className="key-features">
            <div className="feature-box">
              <FaCheckCircle className="feature-icon-large" />
              <h3>11 Month Guarantee</h3>
              <p>Minimum 11 months guaranteed staff commitment</p>
            </div>
            <div className="feature-box">
              <FaShieldAlt className="feature-icon-large" />
              <h3>Verified Professionals</h3>
              <p>All staff thoroughly verified and background checked</p>
            </div>
            <div className="feature-box">
              <FaUsers className="feature-icon-large" />
              <h3>Licensed Companies Only</h3>
              <p>Services exclusively for registered businesses</p>
            </div>
          </div>

          {/* Staff Categories */}
          <h2 className="section-title">Our Staff Categories</h2>
          <div className="staff-grid">
            {staffCategories.map((category, index) => (
              <div key={index} className="staff-card">
                <div className="staff-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul className="features-list">
                  {category.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process */}
          <section className="process-section">
            <h2 className="section-title">Our Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Requirement Analysis</h3>
                <p>We understand your specific manpower needs and job requirements</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Candidate Selection</h3>
                <p>We source and screen candidates matching your criteria</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Verification Process</h3>
                <p>Background checks and skill assessments are conducted</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Deployment</h3>
                <p>Selected candidates are deployed with 11-month guarantee</p>
              </div>
            </div>
          </section>

          {/* Important Notice */}
          <div className="notice-box">
            <h3>⚠️ Important Notice</h3>
            <p>
              Our staff providing services are <strong>strictly available for licensed companies, 
              offices, and registered organizations only.</strong> We do not provide services for 
              non-professional or personal requests. All client organizations must provide valid 
              business registration and licensing documentation.
            </p>
          </div>

          {/* CTA */}
          <div className="cta-box">
            <h2>Need Professional Staff for Your Organization?</h2>
            <p>Contact us today to discuss your manpower requirements</p>
            <a href="/contact" className="btn btn-large">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffServices;
