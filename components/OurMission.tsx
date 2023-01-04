import Image from 'next/image';
import AboutUsHeroImage from '../public/aboutus/AboutUsHero.jpg';

export const OurMission: React.FC = () => {
  return (
    <section className="h-full lg:h-[678px] w-full bg-[#165248] my-10 lg:my-20">
      <div className="mx-5 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:mt-52">
        <div className="w-full h-[300px] lg:h-[548px] lg:bg-[#94BB3C] sm:h-2/4">
          <Image
            src={AboutUsHeroImage}
            className="w-full h-full lg:h-[548px] object-cover box-border lg:pl-3 lg:pb-3"
            priority
            alt="Navbar"
          />
        </div>
        <div className="flex flex-col lg:ml-20 sm:h-2/4">
          <h1 className="w-full text-center lg:text-left text-2xl lg:text-5xl font-sans font-bold text-white hover:text-[#94BB3C] mb-5 lg:mb-10">
            OUR MISSION
          </h1>
          <p className="w-full lg:w-3/4 text-center lg:text-left text-md lg:text-2xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] pb-5">
            Our mission is to provide the ultimate travel planning experience
            while becoming a one-stop shop for every travel service available in
            the industry.
          </p>
        </div>
      </div>
    </section>
  );
};
