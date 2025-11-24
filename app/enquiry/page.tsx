'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    designation: '',
    companyName: '',
    address: '',
    email: '',
    phone: '',
    rubberChemicals: false,
    plasticAdditives: false,
    documentType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="enquiry-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="enquiry-hero">
        <div className="enquiry-hero-overlay"></div>
        <div className="enquiry-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Enquiry</span>
        </div>
        <h1 className="enquiry-hero-title">Enquiry</h1>
      </section>

      {/* Main Content */}
      <section className="enquiry-content">
        <div className="enquiry-grid">
          {/* Left Side - Company Info */}
          <div className="enquiry-info-card">
            <h2 className="enquiry-card-subtitle">ENQUIRY</h2>
            <h1 className="enquiry-card-title">AUROPOL INDIA PVT. LTD.</h1>
            
            <p className="enquiry-description">
              We are here to assist you with all your product inquiries and technical support needs. 
              Our team of experts is ready to provide you with detailed information about our rubber 
              chemicals and plastic additives.
            </p>

            <div className="enquiry-contact-info">
              <div className="enquiry-contact-item">
                <div className="enquiry-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#147368"/>
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+919007743206">+91 90077 43206</a><br />
                    <a href="tel:+913335503614">+91 33 3550 3614</a>
                  </p>
                </div>
              </div>

              <div className="enquiry-contact-item">
                <div className="enquiry-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#147368"/>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:marketing@auropolindia.com">marketing@auropolindia.com</a>
                  </p>
                </div>
              </div>

              <div className="enquiry-contact-item">
                <div className="enquiry-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#147368"/>
                  </svg>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>
                    67, Humayun Kabir Sarani<br />
                    Block-G, New Alipore<br />
                    Kolkata - 700 053, India
                  </p>
                </div>
              </div>
            </div>

            <div className="enquiry-info-box">
              <h3>Why Enquire With Us?</h3>
              <ul>
                <li>Expert Technical Support</li>
                <li>Custom Product Solutions</li>
                <li>Quick Response Time</li>
                <li>Comprehensive Documentation</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="enquiry-form-card">
            <h2 className="enquiry-form-title">Send Your Enquiry</h2>
            <form className="enquiry-form" onSubmit={handleSubmit}>
            {/* Title Dropdown */}
            <div className="form-group">
              <select 
                name="title" 
                value={formData.title} 
                onChange={handleChange}
                className="form-input"
              >
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>

            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Designation */}
            <div className="form-group">
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={formData.designation}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Company Name */}
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="E-mail Id"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Products */}
            <div className="form-group products-group">
              <label className="products-label">Products:</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rubberChemicals"
                    checked={formData.rubberChemicals}
                    onChange={handleChange}
                  />
                  <span>Rubber Chemicals</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="plasticAdditives"
                    checked={formData.plasticAdditives}
                    onChange={handleChange}
                  />
                  <span>Plastic Additives</span>
                </label>
              </div>
            </div>

            {/* Company Name Section */}
            <div className="form-section-title">Company Name.</div>
            <div className="form-section-subtitle">Select the following choices:</div>

            {/* Document Type Radio Buttons */}
            <div className="form-group radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="documentType"
                  value="Technical Data Sheet"
                  checked={formData.documentType === 'Technical Data Sheet'}
                  onChange={handleChange}
                />
                <span>Technical Data Sheet</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="documentType"
                  value="MSDS"
                  checked={formData.documentType === 'MSDS'}
                  onChange={handleChange}
                />
                <span>MSDS</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="documentType"
                  value="Other"
                  checked={formData.documentType === 'Other'}
                  onChange={handleChange}
                />
                <span>Other</span>
              </label>
            </div>

            {/* Message */}
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={6}
              />
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="form-group recaptcha-placeholder">
              <div className="recaptcha-box">
                <input type="checkbox" id="recaptcha" />
                <label htmlFor="recaptcha">I'm not a robot</label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit-enquiry">
              SUBMIT
            </button>
          </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

