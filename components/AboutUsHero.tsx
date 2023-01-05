import Image from 'next/image';
import AboutUsHeroImage from '../public/2.jpg';

export const AboutUsHero: React.FC = () => {
  return (
    <section className="w-full h-[700px]">
      <div className="relative">
        <Image
          src={AboutUsHeroImage}
          className="w-full h-[700px] object-cover lg:object-fill brightness-50"
          priority
          alt="Contact"
        />
        <div className="absolute top-32 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[40%]">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
            <span className="font-normal">Different People</span> - One Mission
          </h1>
          <p className="mx-5 text-center text-xl md:text-2xl lg:text-3xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum. sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit laborum.
          </p>
        </div>
      </div>
    </section>
  );
};
