import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Ticker } from './components/Ticker';
import { ProductsCarousel } from './components/ProductsCarousel';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy-800 selection:bg-brand-500/20 flex flex-col">
      <Navbar />
      <HeroSection />
      <Ticker />
      <ProductsCarousel />
    </div>
  )
}

export default App
