import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function RDTechnologyPage() {
  return (
    <div className="rd-technology-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="rd-technology-hero">
        <div className="rd-technology-hero-overlay"></div>
        <div className="rd-technology-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>R & D and Technology</span>
        </div>
        <h1 className="rd-technology-hero-title">R & D and Technology</h1>
      </section>

      {/* Main Content */}
      <section className="rd-technology-content">
        <div className="rd-technology-grid">
          {/* Left Side - R&D Innovation */}
          <div className="rd-innovation-card">
            <h1 className="rd-main-title">
              <span className="title-teal">R & D AND</span>
              <br />
              <span className="title-black">INNOVATION</span>
            </h1>
            
            <p className="rd-simple-text">
              {/* AUROPOL's R&D is not just an initiative, it is a norm. Year after year since its incorporation, 
              the company has emphasized on R&D for new product development & innovations for their valued 
              customers.The results are tremendous, AUROPOL's R&D team has many advancements and 
              innovations to its credit. */}
              Auropol has been catering to the needs of the industry for more than 25 years and with its rich experience and qualified technical team , Auropol leverages its in-house R&D to develop innovative, safer, and more efficient specialty chemicals for the rubber and plastics industries. Its focus on sustainable formulations, process optimization, and customer collaboration sets it apart.
            </p>
          </div>

          {/* Right Side - Technology Licensing */}
          <div className="rd-licensing-card">
            <div className="rd-image-wrapper">
              <img 
                src="https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg" 
                alt="Auropol R&D Facility" 
                className="rd-main-image"
              />
            </div>

            <div className="rd-licensing-section">
              <h2 className="rd-licensing-title">
                <span className="title-teal">TECHNOLOGY</span>
                <br />
                <span className="title-black">LICENSING</span>
              </h2>
              
              <p className="rd-licensing-text">
                We have many technologies that are available for licensing.
              </p>

              <div className="rd-certifications-section">
                <div className="rd-certifications-grid">
                  <div className="certification-card">
                    <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_328_cmfdmq.png" alt="ISO Certification" />
                  </div>
                  <div className="certification-card">
                    <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Quality Certification" />
                  </div>
                  <div className="certification-card">
                    <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Industry Certification" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

