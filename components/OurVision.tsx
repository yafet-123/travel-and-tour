import Image from 'next/image';
import AboutUsHeroImageOne from '../public/aboutus/AboutUsHeroImageOne.jpg';

export const OurVision: React.FC = () => {
  return (
    <section className="my-10 lg:my-20">
      <div className="px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 h-full lg:h-[678px] w-full bg-[#165248]">
        <div className="flex flex-col sm:h-2/4 mt-10 lg:mt-52">
          <h1 className="w-full text-center lg:text-left text-2xl lg:text-5xl font-sans font-bold text-white hover:text-[#94BB3C] mb-5 lg:mb-10">
            OUR VISION
          </h1>
          <p className="w-full lg:w-3/4 text-center lg:text-left text-md lg:text-2xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] pb-5">
            We are proud to offer excellent quality and value for money in our
            tours, which give you the chance to experience your chosen
            destination in an authentic and exciting way.
          </p>
        </div>

        <div className="w-full h-[300px] lg:h-[548px] lg:bg-[#94BB3C] lg:-mt-24 mb-10 sm:h-2/4">
          <Image
            src={AboutUsHeroImageOne}
            className="w-full h-full lg:h-[548px] object-cover box-border lg:pl-3 lg:pb-3"
            priority
            alt="Navbar"
          />
        </div>
      </div>
      <div className="text-center mx-16">
        <button className="my-10 w-full lg:w-96 font-sans font-extrabold text-xl lg:text-3xl py-5 bg-[#94BB3C] hover:bg-white text-white hover:text-[#94BB3C] border-8 border-[#165248] rounded-md">
          Get In Touch
        </button>
      </div>
    </section>
  );
};
