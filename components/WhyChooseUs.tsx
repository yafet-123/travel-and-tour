import Image from 'next/image';
import heroImageOne from '../public/hero/heroImageOne.jpg';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="h-[678px] w-full bg-[#165248] mt-20">
      <div className="mx-20 flex justify-between">
        <div className="flex flex-col mt-44">
          <h1 className="text-left text-6xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
            WHY CHOOSE US
          </h1>
          <p className="w-2/4 text-2xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
            We are proud to offer excellent quality and value for money in our
            tours, which give you the chance to experience your chosen
            destination in an authentic and exciting way.
          </p>
        </div>
        <div className="w-full h-[548px] bg-[#94BB3C] -mt-24">
          <Image
            src={heroImageOne}
            className="w-full h-[548px] brightness-50 object-cover box-border pl-3 pb-3"
            priority
            alt="Navbar"
          />
        </div>
      </div>
    </section>
  );
};
