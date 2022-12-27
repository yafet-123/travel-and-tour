import Image from 'next/image';
import AboutUsHeroImageOne from '../public/aboutus/AboutUsHeroImageOne.jpg';

export const OurVision: React.FC = () => {
  return (
    <section className="h-full lg:h-[678px] w-full bg-[#165248] my-20">
      <div className="mx-5 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col lg:mt-52">
          <h1 className="w-full text-center lg:text-left text-4xl lg:text-5xl font-sans  font-bold text-white hover:text-black mb-10">
            OUR VISION
          </h1>
          <p className="w-full lg:w-3/4 text-center lg:text-left text-xl lg:text-2xl font-sans leading-10 font-bold text-white hover:text-black pb-5">
            We are proud to offer excellent quality and value for money in our
            tours, which give you the chance to experience your chosen
            destination in an authentic and exciting way.
          </p>
        </div>

        <div className="w-full h-[300px] lg:h-[548px] bg-[#94BB3C] lg:-mt-24 mb-10">
          <Image
            src={AboutUsHeroImageOne}
            className="w-full h-full lg:h-[548px] object-cover box-border pl-3 pb-3"
            priority
            alt="Navbar"
          />
        </div>
      </div>
    </section>
  );
};
