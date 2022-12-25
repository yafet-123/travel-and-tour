import Image from 'next/image';
import heroImageOne from '../public/hero/heroImageOne.jpg';

export const AboutUs: React.FC = () => {
  return (
    <section className="h-[695px] w-full bg-[#165248] my-20 ">
      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        <h1 className="w-full text-center text-5xl font-sans leading-10 font-bold text-[#165248] lg:text-white hover:text-[#94BB3C] mb-10">
          ABOUT US
        </h1>
        <p className="w-full text-center text-2xl font-sans leading-10 font-bold text-[#165248] lg:text-white hover:text-[#94BB3C] mb-24">
          Eco-travel Ethiopia was founded to offer environmentally-friendly tours. our commitment is as reflected in our name 
          offering tours with a softer footprint. We believe that Protecting the places we visit is necessary to ensure we can 
          continue to introduce travelers to the spectacular beauty of Ethiopia.
        </p>
      </div>
    </section>
  );
};
