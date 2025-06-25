import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import BottomNavigation from './components/shared/BottomNavigation';
import Header from './components/shared/Header';
import LoadingSpinner from './components/shared/LoadingSpinner'; 

const Home = lazy(() => import('./pages/Home'));
const ProductsList = lazy(() => import('./pages/ProductsList'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={ <Home />} />
           <Route path="/cart" element={<ProductsList />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </Suspense>
      <BottomNavigation />
    </>
  );
}

export default App;