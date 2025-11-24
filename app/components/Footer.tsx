export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Side - Company Info (White Background) */}
        <div className="footer-left">
          <div className="footer-logo-section">
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763203612/image_355_dg139c.svg" alt="Auropol Group" className="footer-logo-img" />
          </div>
          {/* <h3 className="footer-company-name">AUROPOL INDIA PVT LTD</h3> */}
          
          <p className="footer-description">
            Auropol manufactures specialty rubber chemicals and plastic additives, driven by innovation, quality, and customer-focused R&D.
          </p>
          
          <div className="footer-address">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#4b5563"/>
            </svg>
            <div>
              <p>Mktg & Admin Office:</p>
              <p>67, Humayun Kabir Sarani, Block-G</p>
              <p>New Alipore, Kolkata 700053, India</p>
            </div>
          </div>
          
          <div className="footer-certifications">
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_328_cmfdmq.png" alt="ISO Certification" />
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Zeq Certification" />
            {/* <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="Other Certification" /> */}
          </div>
        </div>

        {/* Right Side - Follow Us & Enquiry (Teal Background) */}
        <div className="footer-right">
          <div className="footer-right-content">
            {/* Follow Us */}
            <div className="footer-section">
              <h3 className="footer-heading">Follow us</h3>
              <div className="footer-social">
                <a href="https://www.facebook.com/auropol" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/auropol" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/auropol" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white"/>
                  </svg>
                </a>
                <a href="mailto:info@auropol.com" className="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Enquiry */}
            <div className="footer-section">
              <h3 className="footer-heading">Enquiry</h3>
              <p className="footer-enquiry-text">
                For queries regarding our products please contact us or enter your email and our team will reach out to you.
              </p>
              <div className="footer-enquiry-form">
                <input type="email" placeholder="Enter your email Address" className="footer-email-input" />
                <a href="/enquiry" className="footer-enquiry-btn">
                  Enquire Now
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#105B4E"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Footer Links */}
          <div className="footer-links-container">
            <div className="footer-links-column">
              <h3 className="footer-links-heading">Products</h3>
              <ul className="footer-links">
                <li><a href="/products?category=rubber">Specialty Rubber Chemicals</a></li>
                <li><a href="/products?category=plastic">Plastic Additives</a></li>
              </ul>
              <h3 className="footer-links-heading" style={{ marginTop: '24px' }}>
                <a href="/careers">Careers</a>
              </h3>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-heading">R & D Technology</h3>
              <ul className="footer-links">
                <li><a href="/rd-technology">R & D and Innovation</a></li>
                <li><a href="/rd-technology">Technology Licensing</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-links-heading"><a href="/contact">Contact US</a></h3>
              <ul className="footer-links footer-contact">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                  </svg>
                  <a href="tel:+919007743206"><span>+91-90077 43206</span></a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                  </svg>
                  <a href="tel:+919007743206"><span>+91-90077 43206</span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@2025 All Rights Reserved. Auropol India Pvt. Ltd.</p>
        <p>Website Design & Developed by <a href="https://thinktechsoftware.com" target="_blank" rel="noopener noreferrer">Thinktech Software</a></p>
      </div>
    </footer>
  );
}

