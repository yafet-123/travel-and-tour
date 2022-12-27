import { Navbar } from '../components/Navbar';
import { AboutUsHero } from '../components/AboutUsHero';
import { AboutUsDetail } from '../components/AboutUsDetail';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutUsHero />
      <AboutUsDetail />
      <Footer />
    </div>
  );
}
