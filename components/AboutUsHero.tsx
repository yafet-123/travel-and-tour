import Image from 'next/image';
import AboutUsHeroImage from '../public/aboutus/AboutUsHero.jpg';

export const AboutUsHero: React.FC = () => {
  return (
    <div className=" flex justify-center place-items-center h-[638px] bg-scroll about-us-hero-background">
      <div className="flex flex-col gap-8  font-bold h-1/2  text-center ">
        <div>
          <h1 className="text-white text-3xl md:text-6xl  m-4">
            <span className="font-normal">Different People</span> - One Mission
          </h1>
        </div>
        <div className="mx-auto lg:w-3/4">
          <h1 className="text-white text-xl lg:text-3xl m-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum. sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit laborum.
          </h1>
        </div>
      </div>
    </div>
  );
};
