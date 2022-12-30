import Image from 'next/image';
import heroImage from '../public/hero/hero.jpg'
export const Hero: React.FC = () => {
  return (
    <section className="relative">
      <div className="w-full h-[663px]">
        <Image
          src={heroImage}
          className="w-full h-[663px] brightness-50"
          priority
          alt="Navbar"
        />
        <div className="absolute top-32 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[40%]">
          <h1 className="text-center text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
            Trust Our Experience
          </h1>
          <p className="text-center text-3xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
            Eco-Travel Ethiopia Offers You Sustainable and Environmentally
            Friendly Tours.
          </p>

          <h1 className="mx-auto font-sans font-extrabold text-center text-3xl py-3 bg-[#94BB3C] hover:bg-white text-white hover:text-[#94BB3C] w-52 border-2 border-white rounded-md">
            See Tours
          </h1>
        </div>
      </div>
    </section>
  );
};
