import { Navbar } from '../components/Navbar';
import { TourHero } from '../components/TourHero';
import { TourAbout } from '../components/TourAbout';
import { DetailLtinerary } from '../components/DetailLtinerary';
import { Book } from '../components/Book';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <TourHero />
      <TourAbout />
      <DetailLtinerary />
      <Book />
      <Footer />
    </div>
  );
}
