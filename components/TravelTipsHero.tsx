import Image from 'next/image';
import AboutEthiopiaHeroImage from '../public/AboutEthiopia/AboutEthiopiaHeroImage.png';

export const TravelTipsHero: React.FC = () => {
  return (
    <section className="w-full h-[280px]">
      <div className="relative">
        <Image
          src={AboutEthiopiaHeroImage}
          className="w-full h-[280px] object-cover lg:object-fit brightness-50"
          priority
          alt="Contact"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 m-auto w-full lg:w-[50%]">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            Read Our Travel Tips
          </h1>
        </div>
      </div>
    </section>
  );
};
