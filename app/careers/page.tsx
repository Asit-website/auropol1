import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div className="careers-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>
        <div className="careers-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Career</span>
        </div>
        <h1 className="careers-hero-title">Career</h1>
      </section>

      {/* Main Content */}
      <section className="careers-content">
        <div className="careers-grid">
          {/* Left Side - Company Culture */}
          <div className="careers-info-card">
            <h1 className="careers-main-title">CAREER</h1>
            
            <h2 className="careers-tagline">
              If you can discover your passion, we can match it with an opportunity.
            </h2>
            
            <div className="careers-description">
              <div className="careers-feature-item">
                <div className="careers-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="careers-feature-text">
                  <h3>World-Class Environment</h3>
                  <p>
                    At AUROPOL, we are committed to creating one of the world's most people-friendly working 
                    organisations, where the best and the brightest work together to create a responsive, respectful 
                    and delightful work environment.
                  </p>
                </div>
              </div>

              <div className="careers-feature-item">
                <div className="careers-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="careers-feature-text">
                  <h3>Individual Growth</h3>
                  <p>
                    We recognise the value of each and every individual, because we strongly believe that only great 
                    people make great organisations. Right from our mentoring to our networking programs, you 
                    meet people who help you discover your way in AUROPOL and to find your designated place in 
                    the Auropol Team.
                  </p>
                </div>
              </div>
            </div>

            <div className="careers-cta">
              <p>Ready to join our team?</p>
              <Link href="/enquiry" className="careers-cta-button">
                Apply Now
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Openings */}
          <div className="careers-openings-card">
            <div className="careers-image-wrapper">
              <img 
                src="https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg" 
                alt="Laboratory Equipment" 
                className="careers-main-image"
              />
            </div>

            <div className="careers-openings-section">
              <h2 className="careers-openings-title">Current Openings</h2>
              
              <p className="careers-openings-text">
                We are pleased that you have taken the first step in finding out about a career at AUROPOL. We 
                offer you the opportunity of an exciting career in our Company.
              </p>

              {/* <div className="careers-positions-grid">
                <div className="career-position-card">
                  <div className="position-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.27002 6.96L12 12.01L20.73 6.96" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22.08V12" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Business Development</h3>
                  <p>International & Domestic</p>
                </div>

                <div className="career-position-card">
                  <div className="position-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.05 11C3.5 6.5 7.36 3 12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.36 21 3.5 17.5 3.05 13" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>R & D</h3>
                  <p>Research & Development</p>
                </div>

                <div className="career-position-card">
                  <div className="position-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.7 6.3C15.1 5.9 15.1 5.3 14.7 4.9L13.3 3.5C12.9 3.1 12.3 3.1 11.9 3.5L10.5 4.9L13.3 7.7L14.7 6.3Z" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 17.25V20H5.75L15.81 9.94L13.06 7.19L3 17.25Z" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Project Engineer</h3>
                  <p>Engineering Projects</p>
                </div>

                <div className="career-position-card">
                  <div className="position-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2V6" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 18V22" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.93 4.93L7.76 7.76" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.24 16.24L19.07 19.07" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H6" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 12H22" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.93 19.07L7.76 16.24" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16.24 7.76L19.07 4.93" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Finance</h3>
                  <p>Financial Management</p>
                </div>

                <div className="career-position-card">
                  <div className="position-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#147368" strokeWidth="2"/>
                      <path d="M9 12L11 14L15 10" stroke="#147368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Business Operations</h3>
                  <p>Operations Management</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

