import Image from 'next/image';
import TourHeroImage from '../public/tour/TourHeroImage.jpg';

export const ToursHero: React.FC = () => {
  return (
    <section className="w-full h-[663px]">
      <div className="relative">
        <Image
          src={TourHeroImage}
          className="w-full h-[700px] object-cover lg:object-fit brightness-75"
          priority
          alt="Contact"
        />
        <div className="absolute top-10 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[40%]">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            Create Your Tour
          </h1>
          <p className="mx-5 text-center text-xl md:text-2xl lg:text-3xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum. sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
