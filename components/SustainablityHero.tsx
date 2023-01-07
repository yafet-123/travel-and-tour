import Image from 'next/image';
import SustainablityHeroImage from '../public/infographic760.png';

export const SustainablityHero: React.FC = () => {
  return (
    <section className="w-full h-screen lg:h-[600px]">
      <div className="relative">
        <Image
          src={SustainablityHeroImage}
          className="w-full h-screen lg:h-[600px] object-cover lg:object-fill brightness-100"
          priority
          alt="Contact"
        />
      </div>
    </section>
  );
};
