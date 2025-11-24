import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function QualityPolicyPage() {
  return (
    <div className="quality-policy-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="quality-policy-hero">
        <div className="quality-policy-hero-overlay"></div>
        <div className="quality-policy-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Quality Policy</span>
        </div>
        <h1 className="quality-policy-hero-title">Quality Policy</h1>
      </section>

      {/* Main Content */}
      <section className="quality-policy-content">
        <div className="quality-policy-grid">
          
          {/* Left Side - Quality Policy */}
          <div className="quality-policy-card">
            <h1 className="policy-main-title">
              <span className="title-teal">QUALITY</span> <span className="title-red">POLICY</span>
            </h1>
            
            <p className="policy-intro">
              Our policy is to distinguish ourselves as the industry leader by providing superior, cost effective, quality products and services to our customers.
            </p>

            <h2 className="policy-section-subtitle">To achieve this we will</h2>

            <ul className="policy-list">
              <li>Provide training, tools and motivation to each employee to produce high quality products and services to meet or exceed our customers' satisfaction.</li>
              <li>Continuously improve our existing products and develop new products through the involvement of our employees and our customers.</li>
              <li>Give quality and customer service the same importance as the financial and productivity aspect of the business.</li>
            </ul>

            <div className="policy-certifications-box">
              <h3>Our Certifications</h3>
              <div className="policy-certifications-grid">
                <div className="policy-cert-card">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_328_cmfdmq.png" alt="ISO Certification" />
                </div>
                <div className="policy-cert-card">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Certification 2" />
                </div>
                <div className="policy-cert-card">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Certification 3" />
                </div>
              </div>
            </div>

            <div className="policy-query-box">
              <p className="policy-query-label">For queries</p>
              <a href="mailto:marketing@auropolindia.com" className="policy-query-email">marketing@auropolindia.com</a>
            </div>
          </div>

          {/* Right Side - Environmental & Safety Policies */}
          <div className="policy-right-section">
            
            {/* Environmental Policy */}
            <div className="policy-secondary-card">
              <div className="policy-card-header">
                <div className="policy-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C10.55 2 9.17 2.46 8 3.24V8C8 9.66 9.34 11 11 11H13C14.66 11 16 9.66 16 8V3.24C14.83 2.46 13.45 2 12 2ZM11 9C10.45 9 10 8.55 10 8V5C10 4.45 10.45 4 11 4C11.55 4 12 4.45 12 5V8C12 8.55 11.55 9 11 9ZM13 9C12.45 9 12 8.55 12 8V5C12 4.45 12.45 4 13 4C13.55 4 14 4.45 14 5V8C14 8.55 13.55 9 13 9ZM17 11C17 13.21 15.21 15 13 15H11C8.79 15 7 13.21 7 11V9.29C5.17 10.91 4 13.33 4 16C4 19.87 7.13 23 11 23H13C16.87 23 20 19.87 20 16C20 13.33 18.83 10.91 17 9.29V11Z" fill="#147368"/>
                  </svg>
                </div>
                <h2 className="policy-card-title">
                  <span className="title-teal">ENVIRONMENTAL</span> <span className="title-red">POLICY</span>
                </h2>
              </div>

              <p className="policy-card-intro">
                We are committed to protect the environment in and around our factory premises with prior, proper documentation and consideration to
              </p>

              <ul className="policy-card-list">
                <li>Take all the environmental aspects in manufacturing and related areas of activities to minimize the adverse impacts arising out of processing, product or services and also communicate with the concerned agency.</li>
                <li>Entrust continual improvement on environmental performances through proper protective action, waste minimization, utilization of energy and resources.</li>
                <li>Comply with relevant and applicable national environment standard/statutory requirements.</li>
                <li>Impart training to the concerned personnel's for effective implementation of the standard.</li>
              </ul>
            </div>

            {/* Safety Policy */}
            <div className="policy-secondary-card">
              <div className="policy-card-header">
                <div className="policy-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="#147368"/>
                  </svg>
                </div>
                <h2 className="policy-card-title">
                  <span className="title-teal">SAFETY</span> <span className="title-red">POLICY</span>
                </h2>
              </div>

              <p className="policy-card-intro">
                We believe that no job or task is more important than Worker's health and safety.
              </p>

              <h3 className="policy-commitment">OUR COMMITMENT:</h3>
              <h2 className="policy-vision">'VISION ZERO'</h2>

              <p className="policy-vision-detail">
                <span className="highlight-zero">Zero</span> Tolerance of Unsafe Behavior and Practice, <span className="highlight-zero">Zero</span> Injuries, <span className="highlight-zero">Zero</span> Fatalities <span className="highlight-zero">Zero</span> Impact on Environment
              </p>

              <h3 className="policy-actions">OUR ACTIONS: We will achieve 'VISION ZERO' by</h3>

              <ul className="policy-card-list">
                <li>Executing all our activities though a strong and uncompromising leadership towards safety & health</li>
                <li>Consulting with our people when making decisions or proposing changes in safety and/or health related matters</li>
                <li>Developing, Implementing, Monitoring and Reviewing our safety as well health standards and management system at a regular interval</li>
                <li>Complying with our legislative obligations and industry standards those are applicable to us</li>
                <li>Identifying safety & health hazards and assessing risks involved in all our processes and taking proper arrangement for mitigating potential risks</li>
                <li>Ensuring safety is a line management responsibility and encouraging a reporting culture</li>
                <li>Imparting training to our people to work safely and making a healthy environment</li>
                <li>Holding our people accountable for their actions and behaviors towards their own safety and health</li>
                <li>Celebrating our milestones and rewarding system for safety & health achievements within our business</li>
              </ul>

              <p className="policy-conclusion">
                We will truly succeed when we achieve <span className="highlight-vision">'VISION ZERO'</span> and this is valued by our people, our customers and the community in which we operate
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

