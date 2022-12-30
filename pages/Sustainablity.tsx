import { Navbar } from '../components/Navbar';
import { SustainablityHero } from '../components/SustainablityHero';
import { SustainablityDetail } from '../components/SustainablityDetail';
import { Footer } from '../components/Footer';

export default function Sustainablity() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SustainablityHero />
      <SustainablityDetail />
      <Footer />
    </div>
  );
}
