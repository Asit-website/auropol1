'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const rubberProducts = [
  { slug: 'single-component-bonding-agent', name: 'Single Component Bonding Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_1_flkza9.svg', category: 'rubber' },
  { slug: 'two-component-bonding-agent', name: 'Two Component Bonding Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763393226/unsplash_x8ZStukS2PM_15_oecjh1.svg', category: 'rubber' },
  { slug: 'peroxide-co-agent', name: 'Peroxide Co Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392804/unsplash_x8ZStukS2PM_2_idqnag.svg', category: 'rubber' },
  { slug: 'antisticking-agent', name: 'Antisticking Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_3_bkvewj.svg', category: 'rubber' },
  { slug: 'tackifying-agent', name: 'Tackifying Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392805/unsplash_x8ZStukS2PM_4_uqyhj5.svg', category: 'rubber' },
  { slug: 'physical-modifiers', name: 'Physical Peptizer', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392802/unsplash_x8ZStukS2PM_5_jhmms9.svg', category: 'rubber' },
  { slug: 'homogenizing-agent', name: 'Homogenizing Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_6_f9uw5k.svg', category: 'rubber' },
  { slug: 'anti-abrasion', name: 'Anti-Abrasion Additive', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_7_jnqkaw.svg', category: 'rubber' },
  { slug: 'flame', name: 'Flame Retardants', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392802/unsplash_x8ZStukS2PM_8_mrdg6d.svg', category: 'rubber' },
  { slug: 'dispersing-processing-additives', name: 'Dispersing & Processing Additives', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392864/unsplash_x8ZStukS2PM_9_zqbywg.svg', category: 'rubber' },
  { slug: 'desiccant-agent-silica', name: 'Desiccant Agent for Silica', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392866/unsplash_x8ZStukS2PM_10_urq8xs.svg', category: 'rubber' },
  { slug: 'desiccant-rubber', name: 'Desiccant for Rubber', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392863/unsplash_x8ZStukS2PM_11_joqvsp.svg', category: 'rubber' },
  { slug: 'antistatic-agent', name: 'Antistatic Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392862/unsplash_x8ZStukS2PM_12_zhr7mu.svg', category: 'rubber' },
  { slug: 'smoke-suppressant', name: 'Smoke Suppressant', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392861/unsplash_x8ZStukS2PM_13_xg94ad.svg', category: 'rubber' }
];

const plasticProducts = [
  { slug: 'multifunctional-process-aids', name: 'Multifunctional Process Aids', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/product-pic13-big_pfk4mr.jpg', category: 'plastic' },
  { slug: 'process-aids-vinyl', name: 'Process Aids for Vinyl compounds', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/product-pic18_exrhdn.jpg', category: 'plastic' },
  { slug: 'antiblock-additive', name: 'Antiblock Additive', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/antiblock_eyewow.jpg', category: 'plastic' },
  { slug: 'dispersing-wetting-agent', name: 'Dispersing & Wetting Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452038/dispersing_wetting_pspy8c.jpg', category: 'plastic' },
  { slug: 'dispersing-additive-anti-fibrillation', name: 'Dispersing Additive for Anti-fibrillation', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452037/product-pic40_wyrbov.jpg', category: 'plastic' },
  { slug: 'plastic-smoke-suppressant', name: 'Smoke Suppressant', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392861/unsplash_x8ZStukS2PM_13_xg94ad.svg', category: 'plastic' },
  { slug: 'polymer-processing-additives', name: 'Polymer Processing Additives ( PPA)', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/ppa_f5gzqm.jpg', category: 'plastic' },
  { slug: 'plastic-anti-abrasion', name: 'Anti-Abrasion Additives', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452038/antiabbrasion_k7esih.jpg', category: 'plastic' },
  { slug: 'plastic-flame-retardants', name: 'Flame Retardants', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452038/product-pic12-big_tovbya.jpg', category: 'plastic' },
  { slug: 'plastic-peroxide-co-agent', name: 'Peroxide Co Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452037/z_collage_with_border_o1cnx7.jpg', category: 'plastic' },
  { slug: 'processing-dispersing-additives', name: 'Processing & Dispersing Additives', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392864/unsplash_x8ZStukS2PM_9_zqbywg.svg', category: 'plastic' },
  { slug: 'plastic-antistatic-agent', name: 'Antistatic Agent', image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452037/antistatic_agent_t36xro.jpg', category: 'plastic' }
];

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'rubber';
  
  const products = category === 'plastic' ? plasticProducts : rubberProducts;
  const title = category === 'plastic' ? 'Plastic Additives' : 'Specialty Rubber Chemicals';
  const description = category === 'plastic' 
    ? "Auropol's plastic additives are designed to enhance the performance, processing, and quality of plastic products across various applications. Our comprehensive range includes process aids, antiblock additives, dispersing agents, flame retardants, and more, engineered to improve efficiency, durability, and functionality in plastic manufacturing."
    : "Auropol's specialty rubber chemicals enhance performance and processability in applications such as tires, belts, hoses, footwear, and industrial rubber products. Our portfolio includes bonding agents, peroxide co-agents, flame retardants, antitack agents, tackifiers, and processing aids designed to deliver durability, adhesion, and efficiency";

  return (
    <>
      {/* Hero Banner Section */}
      <section className="product-hero">
        <div className="product-hero-overlay"></div>
      </section>

      {/* Main Content Section */}
      <section className="product-content-section">
        <div className="product-intro">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Products</span>
          </nav>
          <h1 className="product-main-title">{title}</h1>
          <p className="product-intro-text">
            {description}
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.slug} className="product-card-item">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
                <div className="product-card-overlay"></div>
              </div>
              <div className="product-card-text">
                <h3>{product.name}</h3>
                <button className="product-card-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

