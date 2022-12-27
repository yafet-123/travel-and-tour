import { Navbar } from '../components/Navbar';
import { ToursHero } from '../components/ToursHero';
import { ToursDestination } from '../components/ToursDestination';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ToursHero />
      <ToursDestination />
      <Footer />
    </div>
  );
}
