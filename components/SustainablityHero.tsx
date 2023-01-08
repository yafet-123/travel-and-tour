import Image from 'next/image';
import SustainablityHeroImage from '../public/infographic760.png';

export const SustainablityHero: React.FC = () => {
  return (
    <section className="w-full h-[700px]">
      <div className="relative">
        <Image
          src={SustainablityHeroImage}
          className="w-full h-[700px] object-cover lg:object-fill brightness-75"
          priority
          alt="Sustainablity"
        />
      </div>
    </section>
  );
};
