import Image from 'next/image';
import { MdEmojiTransportation } from 'react-icons/md';
import { GiDuration } from 'react-icons/gi';
import { BiGroup } from 'react-icons/bi';
import { AiFillMacCommand } from 'react-icons/ai';

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
    <section className="w-full h-[663px]">
      <div className="relative">
        <Image
          src={TourHeroImage}
          className="w-full h-[700px] object-cover lg:object-fit brightness-75"
          priority
          alt="Contact"
        />
        <div className="absolute top-10 flex flex-col justify-between left-0 right-0 m-auto w-full lg:w-[40%]">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            Ultimate Ethiopian Wildlife Tour
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mx-20 ">
            {ToursGuide.map((data, index) => (
              <div
                key={index}
                className="bg-white w-full h-[199px] border rounded-3xl flex flex-col justify-around"
              >
                <span>{data.icon}</span>
                <h1 className="text-center text-5xl font-sans leading-10 font-black text-[#165248] hover:text-[#94BB3C]">
                  {data.name}
                </h1>
                <h4 className="text-center text-2xl lg:text-3xl font-sans leading-10 font-medium text-[#165248] hover:text-[#94BB3C]">
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
