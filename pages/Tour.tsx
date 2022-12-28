import { Navbar } from '../components/Navbar';
import { TourHero } from '../components/TourHero';
import { ToursDestination } from '../components/ToursDestination';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <TourHero />
      <ToursDestination />
      <Footer />
    </div>
  );
}
