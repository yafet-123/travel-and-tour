import Image from 'next/image';
import heroImageOne from '../public/hero/heroImageOne.jpg';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="h-[678px] w-full bg-white lg:bg-[#165248] my-10">
      <div className="mx-5 lg:mx-20 flex justify-between flex-col lg:flex-row">
        <div className="flex flex-col lg:mt-44">
          <h1 className="w-full text-center lg:text-left text-5xl font-sans  font-bold text-[#165248] lg:text-white hover:text-[#94BB3C] mb-10">
            WHY CHOOSE US
          </h1>
          <p className="w-full lg:w-2/4 text-center lg:text-left text-lg lg:text-2xl font-sans leading-10 font-bold text-[#165248] lg:text-white hover:text-[#94BB3C] pb-5">
            We are proud to offer excellent quality and value for money in our
            tours, which give you the chance to experience your chosen
            destination in an authentic and exciting way.
          </p>
        </div>
        <div className="w-full h-[548px] bg-white lg:bg-[#94BB3C] lg:-mt-24">
          <Image
            src={heroImageOne}
            className="w-full h-[548px] brightness-50 object-cover box-border pl-0 lg:pl-3 pb-3"
            priority
            alt="Navbar"
          />
        </div>
      </div>
    </section>
  );
};
