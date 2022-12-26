import Image from 'next/image';
import personImageOne from '../public/profile.jpg';

export const WhatPeopleSay: React.FC = () => {
  const sayArrays = [
    {
      image: personImageOne,
      name: 'Personal Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: personImageOne,
      name: 'Personal Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: personImageOne,
      name: 'Personal Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  return (
    <section className="h-full lg:h-[678px] w-full bg-[#94BB3C] my-20">
      <h1 className="w-full text-center text-4xl lg:text-5xl font-sans leading-[50px] font-semibold text-[#165248] hover:text-white mt-20">
        WHAT PEOPLE SAY
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 mx-2 lg:mx-10 mt-28">
        {sayArrays.map((data, index) => (
          <div
            key={index}
            className="w-full h-[350px] lg:h-[281px] bg-[#94BB3C] mb-28 p-2 relative bg-white"
          >
            <Image
              src={data.image}
              className="w-28 h-28 rounded-full absolute left-1/2 -translate-x-1/2 -top-1/4 mb-20"
              priority
              alt="person"
            />
            <p className="absolute top-16 px-5 lg:px-10 w-full text-lg text-center font-sans leading-10 font-normal text-black hover:text-[#94BB3C]">
              {data.description}
            </p>
            <h3 className="absolute bottom-2 text-xl w-full text-center font-sans leading-10 font-bold text-black hover:text-[#94BB3C]">
              {data.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
