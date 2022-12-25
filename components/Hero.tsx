import Image from 'next/image';
import heroImage from '../public/hero/hero.jpg';
import heroImageOne from '../public/hero/heroImageOne.jpg';
import heroImageTwo from '../public/hero/heroImageTwo.jpg';
import heroImageThree from '../public/hero/heroImageThree.jpg';
export const Hero: React.FC = () => {
  const ProjectsArray = [
    {
      image: heroImageOne,
      name: 'Historical Routes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      image: heroImageTwo,
      name: 'Mountain Trekking',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      image: heroImageThree,
      name: 'Adventure Expeditions',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];
  return (
    <section className="relative">
      <div className="w-full h-[663px] w-full">
        <Image
          src={heroImage}
          className="w-full h-[663px] brightness-50"
          priority
          alt="Navbar"
        />
        <div className="absolute top-10 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[40%]">
          <h1 className="text-center text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            Trust Our Experience
          </h1>
          <p className="text-center text-3xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
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