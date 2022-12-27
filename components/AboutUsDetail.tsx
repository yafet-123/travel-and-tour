import Image from 'next/image';
import AboutUsHeroImageOne from '../public/aboutus/AboutUsHerOne.jpg';
import AboutUsHeroImageTwo from '../public/aboutus/AboutUsHerTwo.jpg';
import AboutUsHeroImageThree from '../public/aboutus/AboutUsHerOne.jpg';

export const AboutUsDetail: React.FC = () => {
  return (
    <section className="mx-0 lg:mx-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div className="flex flex-col my-5 lg:my-10">
          <h3 className="w-full text-xl lg:text-4xl text-center lg:text-left font-sans leading-8 font-bold text-[#165248] hover:text-[#94BB3C] mb-10 lg:mb-0">
            We are Eco-Travel Ethiopia
          </h3>
          <p className="mt-10 w-full lg:w-3/4 text-sm lg:text-xl text-left font-sans leading-8 font-bold text-[#165248] hover:text-[#94BB3C]">
            Ecotravel Ethiopia was founded to offer environmentally-friendly
            tours. Our commitment is as reflected in our name offering tours
            with a softer footprint.
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <Image
            src={AboutUsHeroImageOne}
            className="w-full h-[194px] object-cover brightness-75 border rounded-2xl"
            priority
            alt="AboutUs"
          />

          <div className="flex justify-between items-center mt-10">
            <Image
              src={AboutUsHeroImageTwo}
              className="w-1/2 h-[223px] object-cover brightness-75 border rounded-2xl mr-5"
              priority
              alt="AboutUs"
            />
            <Image
              src={AboutUsHeroImageThree}
              className="w-1/2 h-[223px] object-cover brightness-75 border rounded-2xl ml-5"
              priority
              alt="AboutUs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};