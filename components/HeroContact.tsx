import Image from 'next/image';
import contactImageOne from '../public/hero/contactImage.jpg';

export const HeroContact: React.FC = () => {
  return (
    <section className="relative">
      <div className="w-full h-[663px] w-full">
        <Image
          src={contactImageOne}
          className="w-full h-[700px] object-cover brightness-50"
          priority
          alt="Contact"
        />
        <div className="absolute top-10 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[40%]">
          <h1 className="text-center text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            WE LOVE TO HEAR FROM YOU
          </h1>
          <p className="text-center text-3xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum. sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
