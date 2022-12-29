import { Navbar } from '../components/Navbar';
import { TravelTipsHero } from '../components/TravelTipsHero';
import { TravelTipsDetail } from '../components/TravelTipsDetail';
import { Footer } from '../components/Footer';

export default function TravelTips() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <TravelTipsHero />
      <TravelTipsDetail />
      <Footer />
    </div>
  );
}
