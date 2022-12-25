import Image from 'next/image';
import heroImage from '../public/hero/hero.jpg';
import heroImageOne from '../public/hero/heroImageOne.jpg';
import heroImageTwo from '../public/hero/heroImageTwo.jpg';
import heroImageThree from '../public/hero/heroImageThree.jpg';
export const Herotours: React.FC = () => {
  const TourArray = [
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

  return(
    <div className="relative flex flex-col text-white my-12 mx-[5%] justify-between lg:flex-row lg:-mt-20 lg:my-10">
        {TourArray.map((data, index) => (
          <div
            key={index}
            className="w-full lg:w-[30%] h-[670px] bg-[#94BB3C] mb-10 p-2"
          >
            <Image
              src={data.image}
              className="w-full h-[650px] brightness-50 object-cover box-border"
              priority
              alt="Navbar"
            />
            <h3 className="absolute top-10 px-10 w-full lg:w-10 text-4xl text-center lg:text-left font-sans leading-10 font-bold text-white hover:text-[#94BB3C]">
              {data.name}
            </h3>
            <p className="mb-10 absolute bottom-5 px-10 w-full lg:w-72 text-2xl text-center lg:text-left font-sans leading-10 font-bold text-white hover:text-[#94BB3C]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
  )
}