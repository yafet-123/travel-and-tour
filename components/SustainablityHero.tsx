import Image from 'next/image';
import SustainablityHeroImage from '../public/Sustainablity/SustainablityHeroImage.png';

export const SustainablityHero: React.FC = () => {
  return (
    <section className="w-full h-[300px] lg:h-[479px]">
      <div className="relative">
        <Image
          src={SustainablityHeroImage}
          className="w-full h-[300px] lg:h-[479px] object-cover lg:object-fit brightness-100"
          priority
          alt="Contact"
        />
      </div>
    </section>
  );
};