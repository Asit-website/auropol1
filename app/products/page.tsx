import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductsContent from '../components/ProductsContent';

export const dynamic = 'force-dynamic';

export default function ProductsPage() {
  return (
    <div className="products-page">
      <Header />
      
      <Suspense fallback={
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>Loading...</p>
        </div>
      }>
        <ProductsContent />
      </Suspense>
      
      <Footer />
    </div>
  );
}

