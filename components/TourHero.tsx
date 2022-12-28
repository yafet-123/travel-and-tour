import Image from 'next/image';
import { MdEmojiTransportation } from 'react-icons/md';
import { GiDuration } from 'react-icons/gi';
import { BiGroup } from 'react-icons/bi';
import { AiFillMacCommand } from 'react-icons/ai';
import TourOne from '../public/tour/TourOne.jpg';

export const TourHero: React.FC = () => {
  const ToursGuide = [
    {
      icon: <MdEmojiTransportation size={50} />,
      name: 'Transportation',
      description: 'Drive and Flight',
    },
    {
      icon: <AiFillMacCommand size={50} />,
      name: 'Accommodation',
      description: 'Hotels and Lodges',
    },
    {
      icon: <GiDuration size={50} />,
      name: 'Duration',
      description: '12 Days 11 Nights',
    },
    {
      icon: <BiGroup size={50} />,
      name: 'Group Size',
      description: 'From 2 to 12',
    },
  ];
  return (
    <section className="w-full h-full lg:h-[700px] mb-10">
      <div className="relative">
        <Image
          src={TourOne}
          className="w-full h-[800px] lg:h-[700px] object-cover lg:object-fit brightness-75"
          priority
          alt="Contact"
        />
        <div className="absolute top-10 flex flex-col justify-between left-0 right-0 w-full">
          <h1 className="mx-auto text-xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-5 lg:mb-32">
            Ultimate Ethiopian Wildlife Tour
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-20 w-full">
            {ToursGuide.map((data, index) => (
              <div
                key={index}
                className="w-full h-[143px] lg:h-[199px] border rounded-3xl flex flex-col justify-around items-center bg-[#165248] bg-opacity-50"
              >
                <span className="text-white text-center">{data.icon}</span>
                <h1 className="text-center text-xl font-sans leading-10 font-black text-white hover:text-[#94BB3C]">
                  {data.name}
                </h1>
                <h4 className="text-center text-2xl lg:text-3xl font-sans leading-10 font-medium text-white hover:text-[#94BB3C]">
                  {data.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
