import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="about-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>About</span>
        </div>
        <h1 className="about-hero-title">About Us</h1>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          <h1 className="about-title">OUR COMPANY</h1>
          
          <h2 className="about-tagline">The ultimate source for specialty chemicals</h2>
          
          <p className="about-text">
            Auropol is a leading manufacturer of specialty chemicals for rubber and plastic industries. With 
            emphasis on quality and innovative product development, Auropol aims to become the preferred 
            supplier by remaining alert to customer's changing needs and responding with <strong>SPEED, SKILL 
            and ASSURANCE</strong>.
          </p>

          <p className="about-text">
            The backbone of Auropol's growth is the partnership between Auropol's personnel and its 
            Customers. Through exchange of information with customers, Auropol identifies the best 
            product, the best services and the best package.
          </p>

          <p className="about-text">
            This practise has led Auropol to the path of continual improvement. Auropol is involved and 
            committed to help customers make better and more economical products.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

