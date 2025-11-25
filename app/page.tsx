'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroSliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [canScrollHeroLeft, setCanScrollHeroLeft] = useState(false);
  const [canScrollHeroRight, setCanScrollHeroRight] = useState(true);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  
  // Products slider state
  const productsSliderRef = useRef<HTMLDivElement>(null);
  const [isProductAutoSlidePaused, setIsProductAutoSlidePaused] = useState(false);
  const [isProductDragging, setIsProductDragging] = useState(false);
  const [productStartX, setProductStartX] = useState(0);
  const [productScrollLeft, setProductScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollPosition = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.offsetWidth;
    const currentSlide = Math.round(scrollPosition / cardWidth);
    setActiveSlide(currentSlide);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const checkHeroScrollability = () => {
    if (heroSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = heroSliderRef.current;
      setCanScrollHeroLeft(scrollLeft > 0);
      setCanScrollHeroRight(scrollLeft < scrollWidth - clientWidth - 10);
      const slideWidth = clientWidth;
      const currentSlide = Math.round(scrollLeft / slideWidth);
      setCurrentHeroSlide(currentSlide);
    }
  };

  useEffect(() => {
    checkHeroScrollability();
    const slider = heroSliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkHeroScrollability);
      window.addEventListener('resize', checkHeroScrollability);
      return () => {
        slider.removeEventListener('scroll', checkHeroScrollability);
        window.removeEventListener('resize', checkHeroScrollability);
      };
    }
  }, []);

  const scrollHeroLeft = () => {
    if (heroSliderRef.current) {
      const slideWidth = heroSliderRef.current.clientWidth;
      heroSliderRef.current.scrollBy({
        left: -slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollHeroRight = () => {
    if (heroSliderRef.current) {
      const slideWidth = heroSliderRef.current.clientWidth;
      heroSliderRef.current.scrollBy({
        left: slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (heroSliderRef.current) {
      const slideWidth = heroSliderRef.current.clientWidth;
      heroSliderRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoSlidePaused) return;

    const autoSlideInterval = setInterval(() => {
      if (heroSliderRef.current) {
        const { scrollLeft, clientWidth } = heroSliderRef.current;
        const slideWidth = clientWidth;
        const currentSlide = Math.round(scrollLeft / slideWidth);
        const totalSlides = 3;
        
        if (currentSlide < totalSlides - 1) {
          // Move to next slide
          goToSlide(currentSlide + 1);
        } else {
          // Loop back to first slide
          goToSlide(0);
        }
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoSlideInterval);
  }, [isAutoSlidePaused]);

  const goToProductSlide = (slideIndex: number) => {
    if (productsSliderRef.current) {
      const slideWidth = productsSliderRef.current.clientWidth;
      productsSliderRef.current.scrollTo({
        left: slideIndex * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  // Products slider drag handlers
  const handleProductMouseDown = (e: React.MouseEvent) => {
    if (!productsSliderRef.current) return;
    setIsProductDragging(true);
    setIsProductAutoSlidePaused(true);
    setProductStartX(e.pageX - productsSliderRef.current.offsetLeft);
    setProductScrollLeft(productsSliderRef.current.scrollLeft);
    productsSliderRef.current.style.cursor = 'grabbing';
    productsSliderRef.current.style.scrollBehavior = 'auto';
  };

  const handleProductMouseMove = (e: React.MouseEvent) => {
    if (!isProductDragging || !productsSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - productsSliderRef.current.offsetLeft;
    const walk = (x - productStartX) * 2;
    productsSliderRef.current.scrollLeft = productScrollLeft - walk;
  };

  const snapToNearestProductSlide = () => {
    if (!productsSliderRef.current) return;
    const { scrollLeft, clientWidth } = productsSliderRef.current;
    const slideWidth = clientWidth;
    const nearestSlide = Math.round(scrollLeft / slideWidth);
    goToProductSlide(Math.min(nearestSlide, productSlides.length - 1));
  };

  const handleProductMouseUp = () => {
    if (!productsSliderRef.current) return;
    setIsProductDragging(false);
    setIsProductAutoSlidePaused(false);
    productsSliderRef.current.style.cursor = 'grab';
    productsSliderRef.current.style.scrollBehavior = 'smooth';
    snapToNearestProductSlide();
  };

  const handleProductMouseLeave = () => {
    if (!productsSliderRef.current) return;
    setIsProductDragging(false);
    setIsProductAutoSlidePaused(false);
    productsSliderRef.current.style.cursor = 'grab';
    productsSliderRef.current.style.scrollBehavior = 'smooth';
    snapToNearestProductSlide();
  };

  // Touch handlers for mobile
  const handleProductTouchStart = (e: React.TouchEvent) => {
    if (!productsSliderRef.current) return;
    setIsProductDragging(true);
    setIsProductAutoSlidePaused(true);
    setProductStartX(e.touches[0].pageX - productsSliderRef.current.offsetLeft);
    setProductScrollLeft(productsSliderRef.current.scrollLeft);
  };

  const handleProductTouchMove = (e: React.TouchEvent) => {
    if (!isProductDragging || !productsSliderRef.current) return;
    const x = e.touches[0].pageX - productsSliderRef.current.offsetLeft;
    const walk = (x - productStartX) * 2;
    productsSliderRef.current.scrollLeft = productScrollLeft - walk;
  };

  const handleProductTouchEnd = () => {
    setIsProductDragging(false);
    setIsProductAutoSlidePaused(false);
    snapToNearestProductSlide();
  };

  type FeaturedProduct = {
    name: string;
    image: string;
  };

  const featuredProducts: FeaturedProduct[] = [
    {
      name: 'Modified DCPD Polymer',
      image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392804/unsplash_x8ZStukS2PM_2_idqnag.svg'
    },
    {
      name: 'Resorcinol Dispersions',
      image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_3_bkvewj.svg'
    },
    {
      name: 'Resorcinol Formaldehyde Resin',
      image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392804/unsplash_x8ZStukS2PM_2_idqnag.svg'
    },
    {
      name: 'Super Tackifier Resin',
      image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392805/unsplash_x8ZStukS2PM_4_uqyhj5.svg'
    },
    {
      name: 'Antisticking Agent',
      image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_6_f9uw5k.svg'
    },
    {
      name: 'Peroxide Co Agent',
      image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392804/unsplash_x8ZStukS2PM_2_idqnag.svg'
    }
  ];

  // Create slides: 3 cards per slide on desktop, 1 card per slide on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const productSlides: FeaturedProduct[][] = [];
  if (isMobile) {
    // Mobile: one card per slide
    featuredProducts.forEach(product => {
      productSlides.push([product]);
    });
  } else {
    // Desktop: 3 cards per slide
    for (let i = 0; i < featuredProducts.length; i += 3) {
      productSlides.push(featuredProducts.slice(i, i + 3));
    }
  }

  // Products auto-slide functionality
  useEffect(() => {
    if (isProductAutoSlidePaused) return;

    const autoSlideInterval = setInterval(() => {
      if (productsSliderRef.current) {
        const { scrollLeft, clientWidth } = productsSliderRef.current;
        const slideWidth = clientWidth;
        const currentSlide = Math.round(scrollLeft / slideWidth);
        const totalSlides = productSlides.length;

        if (currentSlide < totalSlides - 1) {
          goToProductSlide(currentSlide + 1);
        } else {
          goToProductSlide(0);
        }
      }
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [isProductAutoSlidePaused, productSlides.length, isMobile]);

  return (
    <div>
      {/* Header */}
      {/* <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <div className="logo-icon"></div>
            <span className="logo">AUROPOL</span>
          </div>

          <nav>
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">About Us</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link has-dropdown">Products</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">R & D Technology</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Quality Policy</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Blogs</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link has-dropdown">Careers</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact Us</a>
              </li>
            </ul>
          </nav>

          <a href="#" className="enquire-btn">
            Enquire Now
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </header> */}
      <Header/>

      {/* Hero Slider Section */}
      <div 
        className="hero-slider-wrapper"
        onMouseEnter={() => setIsAutoSlidePaused(true)}
        onMouseLeave={() => setIsAutoSlidePaused(false)}
      >
        <button 
          className={`hero-slider-nav-btn hero-slider-nav-left ${!canScrollHeroLeft ? 'disabled' : ''}`}
          onClick={scrollHeroLeft}
          aria-label="Previous slide"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="hero-slider" ref={heroSliderRef}>
          <div className="hero-slider-track">

            {/* Slide 2 */}
            <section className="hero-section her-sec1">
              <div className="hero-container">
                <div className="hero-content">
                  <p className="hero-tagline">Speed. Skill. Assurance</p>
                  
                  <h1 className="hero-title">
                    Exceptional Quality, performance & sustainability
                </h1>
                  
                  <p className="hero-description">
                    We manufacture high-performance chemical solutions tailored for the{' '}
                    <strong>rubber and plastic industries</strong> — ensuring exceptional adhesion, 
                    durability, and compliance.
                  </p>
                  
                  <div className="hero-buttons">
                    <Link href="/enquiry" className="btn-primary">
                      Enquire Now
                      <span className="btn-arrow">→</span>
                    </Link>
                    <Link href="/products" className="btn-secondary">
                      View Products
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>


            {/* Slide 1 */}
            <section className="hero-section her-sec11">
              <div className="hero-container">
                <div className="hero-content">
                  <p className="hero-tagline">Speed. Skill. Assurance</p>
                  
                  <h1 className="hero-title">
                    Exceptional Quality, performance & sustainability
                </h1>
                  
                  <p className="hero-description">
                    We manufacture high-performance chemical solutions tailored for the{' '}
                    <strong>rubber and plastic industries</strong> — ensuring exceptional adhesion, 
                    durability, and compliance.
                  </p>
                  
                  <div className="hero-buttons">
                    <Link href="/enquiry" className="btn-primary">
                      Enquire Now
                      <span className="btn-arrow">→</span>
                    </Link>
                    <Link href="/products" className="btn-secondary">
                      View Products
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            

            {/* Slide 3 */}
            <section className="hero-section her-sec111">
              <div className="hero-container">
                <div className="hero-content">
                  <p className="hero-tagline">Speed. Skill. Assurance</p>
                  
                  <h1 className="hero-title">
                    Exceptional Quality, performance & sustainability
                </h1>
                  
                  <p className="hero-description">
                    We manufacture high-performance chemical solutions tailored for the{' '}
                    <strong>rubber and plastic industries</strong> — ensuring exceptional adhesion, 
                    durability, and compliance.
                  </p>
                  
                  <div className="hero-buttons">
                    <Link href="/enquiry" className="btn-primary">
                      Enquire Now
                      <span className="btn-arrow">→</span>
                    </Link>
                    <Link href="/products" className="btn-secondary">
                      View Products
                      <span className="btn-arrow">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <button 
          className={`hero-slider-nav-btn hero-slider-nav-right ${!canScrollHeroRight ? 'disabled' : ''}`}
          onClick={scrollHeroRight}
          aria-label="Next slide"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slider Indicators */}
        <div className="hero-slider-indicators">
          <div 
            className={`hero-indicator ${currentHeroSlide === 0 ? 'active' : ''}`}
            onClick={() => goToSlide(0)}
          ></div>
          <div 
            className={`hero-indicator ${currentHeroSlide === 1 ? 'active' : ''}`}
            onClick={() => goToSlide(1)}
          ></div>
          <div 
            className={`hero-indicator ${currentHeroSlide === 2 ? 'active' : ''}`}
            onClick={() => goToSlide(2)}
          ></div>
        </div>
      </div>

     

      {/* Quality Section */}
      <section className="quality-section">
        <div className="quality_sect">
          {/* Left Side - Content Panel */}
          <div className="quality-content-panel">
            <p className="quality-tagline">Quality</p>
            <h2 className="quality-title">
              Quality Without Compromise
            </h2>
            <p className="quality-description">
              We manufacture and supply all products under stringent quality norms, 
              ensuring consistency, safety, and performance across every batch.
            </p>
            
            {/* Certification Logos */}
            <div className="quality-logos">
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_328_cmfdmq.png" alt="ISO Certification" />
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763189820/image_329_cxr9t1.png" alt="ZED Certification" />
            </div>

            <Link href="/quality-policy" className="btn-read-more">
              Read More About Our Quality Standards
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
              </svg>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="quality-image-container"></div>
        </div>
      </section>

      {/* Specialty Additives Section */}
      {/* <section className="specialty-section">
        <div className="specialty-header">
          <h2 className="specialty-heading">
            Specialty Additives for Rubber & <br /> Plastics
          </h2>
          <p className="specialty-intro">
            We offer a full portfolio of specialty chemicals designed to solve critical problems in rubber 
            and plastic manufacturing — from bonding to flame resistance, and beyond.
          </p>
        </div>
        <div className="adaptive">
        <div className="specialty-cards">
         
          <div className="specialty-card specialty-card-rubber">
            <div className="specialty-card-content">
              <h3 className="specialty-card-title">Specialty Rubber Chemicals</h3>
              <p className="specialty-card-subtitle">
                High-performance chemical solutions for rubber compounding and bonding
              </p>
            </div>
            
            <div className="specialty-card-overlay">
              <h3 className="specialty-overlay-title">Specialty Rubber Chemicals</h3>
              <p className="specialty-overlay-text">
                Auropol's specialty rubber chemicals enhance performance and processability in applications 
                such as tires, belts, hoses, footwear, and industrial rubber products. Our portfolio includes 
                bonding agents, peroxide co-agents, flame retardants, antitack agents, tackifiers, and processing 
                aids designed to deliver durability, adhesion, and efficiency
              </p>
              <Link href="/products?category=rubber" className="btn-explore">
                Explore Full Product Range
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#7FFFDD"/>
                </svg>
              </Link>
            </div>
          </div>

        
          <div className="specialty-card specialty-card-plastic">
            <div className="specialty-card-content">
              <h3 className="specialty-card-title">Plastic Additives</h3>
              <p className="specialty-card-subtitle">
                Additives that enhance processing and performance in plastic applications
              </p>
            </div>
            
            <div className="specialty-card-overlay">
              <h3 className="specialty-overlay-title">Plastic Additives</h3>
              <p className="specialty-overlay-text">
                Our plastic additives are designed to improve processability, enhance physical properties, 
                and extend product life in diverse applications. From processing aids and heat stabilizers 
                to impact modifiers and flame retardants, Auropol's solutions support manufacturers in 
                achieving optimal performance and regulatory compliance.
              </p>
              <Link href="/products?category=plastic" className="btn-explore">
                Explore Full Product Range
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#7FFFDD"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section> */}

    
      <section className="products-slider-section">
        <div className="products-slider-header">
          <p className="products-slider-eyebrow">OUR PRODUCTS</p>
          <h2 className="products-slider-title">Specialty Rubber Chemicals and Plastic Additives</h2>
        </div>

        <div 
          className="products-slider-wrapper"
          onMouseEnter={() => setIsProductAutoSlidePaused(true)}
          onMouseLeave={() => setIsProductAutoSlidePaused(false)}
        >
          <div 
            className="products-slider" 
            ref={productsSliderRef}
            onMouseDown={handleProductMouseDown}
            onMouseMove={handleProductMouseMove}
            onMouseUp={handleProductMouseUp}
            onMouseLeave={handleProductMouseLeave}
            onTouchStart={handleProductTouchStart}
            onTouchMove={handleProductTouchMove}
            onTouchEnd={handleProductTouchEnd}
          >
            <div className="products-slider-track">
              {productSlides.map((slide, slideIndex) => (
                <div className="product-slide" key={`product-slide-${slideIndex}`}>
                  {slide.map((product) => (
                    <div className="product-card" key={`${slideIndex}-${product.name}`}>
                      <div className="product-card-imagess">
                        <img src={product.image} alt={product.name} />
                      </div>
                      <p className="product-card-name">{product.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="brochure-section">
        {/* Left Side - Content */}
        <div className="brochure-content">
          <p className="brochure-tagline">Brochure</p>
          
          <h2 className="brochure-section-title">
            Specialty Rubber Chemicals
          </h2>
          
          <p className="brochure-description">
            Browse our product-specific brochures and get the technical data you need — delivered to your inbox upon enquiry.
          </p>
          
          <div className="brochure-buttons">
            <Link href="/products?category=plastic" className="btn-request">
              Request Brochure
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
              </svg>
            </Link>
            
            <Link href="/products?category=plastic" className="btn-brochure-link">
              Read More
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
              </svg>
            </Link>
          </div>
          
          <div className="brochure-divider"></div>
          
          {/* <h3 className="brochure-secondary-title">Plastic Additives</h3> */}
        </div>

        {/* Right Side - Content (same format) */}
        <div className="brochure-content">
          <p className="brochure-tagline">Brochure</p>
          
          <h2 className="brochure-section-title">
          Plastic Additives
          </h2>
          
          <p className="brochure-description">
          Browse our product-specific brochures and get the technical data you need — delivered to your inbox upon enquiry.
          </p>
          
          <div className="brochure-buttons">
            <Link href="/enquiry" className="btn-request">
              Request Brochure
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
              </svg>
            </Link>
            
            <Link href="/products?category=rubber" className="btn-brochure-link">
              Read More
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
              </svg>
            </Link>
          </div>
          
          <div className="brochure-divider"></div>
          
          {/* <h3 className="brochure-secondary-title">Plastic Additives</h3> */}
        </div>
      </section>

      {/* Insights & Updates Section */}
      {/* <section className="insights-section">
        <div className="insights-container">
          <p className="insights-tagline">Insights & Updates</p>
          
          <h2 className="insights-title">
            From Lab Bench to Industry Benchmarks
          </h2>
          
          <p className="insights-description">
            Stay updated with technical insights, formulation tips, and trends in rubber & plastic chemistry.
          </p>
          
          <div className="insights-slider-wrapper">
            <div 
              className="insights-cards"
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">SUSTAINABILITY</span>
                    <span className="insights-card-author">By Ruchika Pal</span>
                  </div>
                  <h3 className="insights-card-title">
                    Innovations around eco-friendly chemistry
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

            
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">PRODUCT SPOTLIGHT</span>
                    <span className="insights-card-author">By Abhishek Dubey</span>
                  </div>
                  <h3 className="insights-card-title">
                    Deep dives into Auropol additives
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

             
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">R&D PERSPECTIVE</span>
                    <span className="insights-card-author">By Sushant Mishra</span>
                  </div>
                  <h3 className="insights-card-title">
                    Thought leadership by in-house scientists
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

             
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">SUSTAINABILITY</span>
                    <span className="insights-card-author">By Ruchika Pal</span>
                  </div>
                  <h3 className="insights-card-title">
                    Innovations around eco-friendly chemistry
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

             
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">PRODUCT SPOTLIGHT</span>
                    <span className="insights-card-author">By Abhishek Dubey</span>
                  </div>
                  <h3 className="insights-card-title">
                    Deep dives into Auropol additives
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

             
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">R&D PERSPECTIVE</span>
                    <span className="insights-card-author">By Sushant Mishra</span>
                  </div>
                  <h3 className="insights-card-title">
                    Thought leadership by in-house scientists
                  </h3>
                </div>
              </div>

             
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763193971/unsplash_6q5QG8iIgRo_amumf4.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">SUSTAINABILITY</span>
                    <span className="insights-card-author">By Ruchika Pal</span>
                  </div>
                  <h3 className="insights-card-title">
                    Innovations around eco-friendly chemistry
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

            
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763193938/image_312_esb4zb.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">PRODUCT SPOTLIGHT</span>
                    <span className="insights-card-author">By Abhishek Dubey</span>
                  </div>
                  <h3 className="insights-card-title">
                    Deep dives into Auropol additives
                  </h3>
                  <div className="card-separator"></div>
                </div>
              </div>

             
              <div className="insights-card">
                <div className="insights-card-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763191434/image_370_lyuvme.svg)'}}>
                </div>
                <div className="insights-card-content">
                  <div className="insights-card-meta">
                    <span className="insights-card-category">R&D PERSPECTIVE</span>
                    <span className="insights-card-author">By Sushant Mishra</span>
                  </div>
                  <h3 className="insights-card-title">
                    Thought leadership by in-house scientists
                  </h3>
                </div>
              </div>
            </div>
            
            
            <div className="insights-pagination">
              <div className="pagination-line-container">
                <div className="pagination-line-bg"></div>
                <div 
                  className="pagination-line-active" 
                  style={{
                    transform: `translateX(${activeSlide * 100}%)`,
                    width: '33.333%'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Enquiry Section */}
      {/* <section className="enquiry-section">
        <div className="enquiry-container">
         
          <div className="enquiry-content">
            <p className="enquiry-tagline">Enquiry</p>
            
            <h2 className="enquiry-title">
              Need a Custom <br /> Solution?
            </h2>
            
            <p className="enquiry-description">
              We are dedicated to supply specialty products through our wide spread network. For queries regarding our products please contact us.
            </p>
            
            <Link href="/enquiry" className="btn-enquire">
              Enquire Now
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#105B4E"/>
              </svg>
            </Link>
          </div>

         
          <div className="enquiry-images">
            <div className="enquiry-image-large" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763200686/image_332_avbs2x.png)'}}></div>
            <div className="enquiry-image-small" style={{backgroundImage: 'url(https://res.cloudinary.com/dgif730br/image/upload/v1763200686/image_333_v7bs1m.png)'}}></div>
          </div>
        </div>
      </section> */}

      {/* Footer */}

      {/* <footer className="footer">
        <div className="footer-top">
          
          <div className="footer-left">
            <div className="footer-logo-section">
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763203612/image_355_dg139c.svg" alt="Auropol Group" className="footer-logo-img" />
            </div>
            
            
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
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763204150/image_354_fmsgym.svg" alt="Other Certification" />
            </div>
          </div>

          
          <div className="footer-right">
            <div className="footer-right-content">
            
              <div className="footer-section">
                <h3 className="footer-heading">Follow us</h3>
                <div className="footer-social">
                  <a href="#" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>

             
              <div className="footer-section">
                <h3 className="footer-heading">Enquiry</h3>
                <p className="footer-enquiry-text">
                  For queries regarding our products please contact us or enter your email and our team will reach out to you.
                </p>
                <div className="footer-enquiry-form">
                  <input type="email" placeholder="Enter your email Address" className="footer-email-input" />
                  <button className="footer-enquiry-btn">
                    Enquire Now
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#105B4E"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="footer-divider"></div>

            
            <div className="footer-links-container">
              <div className="footer-links-column">
                <h3 className="footer-links-heading">Products</h3>
                <ul className="footer-links">
                  <li><a href="#">Specialty Rubber Chemicals</a></li>
                  <li><a href="#">Plastic Additives</a></li>
                </ul>
                <h3 className="footer-links-heading" style={{ marginTop: '24px' }}>Careers</h3>
              </div>

              <div className="footer-links-column">
                <h3 className="footer-links-heading">R & D Technology</h3>
                <ul className="footer-links">
                  <li><a href="#">R & D and Innovation</a></li>
                  <li><a href="#">Technology Licensing</a></li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3 className="footer-links-heading">Contact US</h3>
                <ul className="footer-links footer-contact">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                    </svg>
                    <span>+91-90077 43206</span>
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="white"/>
                    </svg>
                    <span>+91-90077 43206</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>@2025 All Rights Reserved. Auropol India Pvt. Ltd.</p>
          <p>Website Design & Developed by <a href="#" target="_blank" rel="noopener noreferrer">Thinktech Software</a></p>
        </div>
      </footer> */}
       {/* About Section with Hover Effect */}
       <section className="about-section">
        <div className="about_sect">
        {/* Left Side - Image with Hover Overlay */}
        <div className="about-image-container">
          <div className="about-overlay">
            <div className="about-overlay-content">
              <p>
                Auropol is a leading manufacturer of specialty chemicals for rubber 
                and plastic industries. With emphasis on quality and innovative 
                product development, Auropol aims to become the preferred supplier 
                by remaining alert to customer's changing needs and responding 
                with speed, skill and assurance.
              </p>
              <Link href="/about" className="btn-know-more">
                Know More
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Teal Panel with Title */}
        <div className="about-content-panel">
          <p className="about-panel-tagline">Speed. Skill. Assurance</p>
          <h2 className="about-panel-title">
            The ultimate source for specialty chemicals
          </h2>
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
