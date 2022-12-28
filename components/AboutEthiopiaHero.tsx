import Image from 'next/image';
import AboutEthiopiaHeroImage from '../public/AboutEthiopia/AboutEthiopiaHeroImage.png';

export const AboutEthiopiaHero: React.FC = () => {
  return (
    <section className="w-full h-[465px]">
      <div className="relative">
        <Image
          src={AboutEthiopiaHeroImage}
          className="w-full h-[465px] object-cover lg:object-fit brightness-50"
          priority
          alt="Contact"
        />
        <div className="absolute top-10 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[50%]">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            About Ethiopia
          </h1>
          <p className="mx-5 text-center text-xl md:text-2xl lg:text-3xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
            Ethiopia may not be the first place you think of when booking your
            next holiday, but it should be. The country has been developing and
            its economy is one of the fastest growing in the world.
          </p>
        </div>
      </div>
    </section>
  );
};
