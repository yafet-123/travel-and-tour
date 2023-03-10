import Image from 'next/image';
import TravelTipsHeroImage from '../public/2.jpg';

export const TravelTipsHero: React.FC = () => {
  return (
    <section className="w-full h-[380px]">
      <div className="relative">
        <Image
          src={TravelTipsHeroImage}
          className="w-full h-[380px] object-cover lg:object-fit brightness-50"
          priority
          alt="Contact"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 m-auto w-full lg:w-[50%]">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mt-16">
            Read Our Travel Tips
          </h1>
        </div>
      </div>
    </section>
  );
};
