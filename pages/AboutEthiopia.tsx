import { Navbar } from '../components/Navbar';
import { AboutEthiopiaHero } from '../components/AboutEthiopiaHero';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutEthiopiaHero />
      <Footer />
    </div>
  );
}