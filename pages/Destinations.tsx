import { Navbar } from '../components/Navbar';
import { DestinationsHero } from '../components/DestinationsHero';
import { DestinationsDetail } from '../components/DestinationsDetail';
import { Footer } from '../components/Footer';

export default function Destinations() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <DestinationsHero />
      <DestinationsDetail />
      <Footer />
    </div>
  );
}
