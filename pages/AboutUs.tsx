import { Navbar } from '../components/Navbar';
import { AboutUsHero } from '../components/AboutUsHero';
import { AboutUsDetail } from '../components/AboutUsDetail';
import { FollowingTheDream } from '../components/FollowingTheDream';
import { OurMission } from '../components/OurMission';
import { OurVision } from '../components/OurVision';
import { Footer } from '../components/Footer';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <AboutUsHero />
      <AboutUsDetail />
      <FollowingTheDream />
      <OurMission />
      <OurVision />
      <Footer />
    </div>
  );
}
