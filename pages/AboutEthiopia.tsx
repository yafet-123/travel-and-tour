import { Navbar } from '../components/Navbar';
import { AboutEthiopiaHero } from '../components/AboutEthiopiaHero';
import { AboutEthiopiaDetail } from '../components/AboutEthiopiaDetail'
import { Footer } from '../components/Footer';

export default function AboutEthiopia() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutEthiopiaHero />
      <AboutEthiopiaDetail />
      <Footer />
    </div>
  );
}
