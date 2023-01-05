import Image from 'next/image';

import { BiBusSchool } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { FcOnlineSupport } from 'react-icons/fc';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaHotel } from 'react-icons/fa';
import { MdPriceCheck } from 'react-icons/md';
export const OurServices: React.FC = () => {
  const ServicesArray = [
    {
      icon: <BiBusSchool size={50} />,
      name: 'Wide Variety of Tours',
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: <AiOutlineStar size={50} />,
      name: 'Highly Qualified Service',
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: <FcOnlineSupport size={50} />,
      name: '24/7 Support',
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
    {
      icon: <BsPersonBoundingBox size={50} />,
      name: 'Personalized Matching',
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: <FaHotel size={50} />,
      name: 'Handpicked Hotels',
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: <MdPriceCheck size={50} />,
      name: 'Best Price Guarantee',
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
  ];
  return (
    <section className="h-full w-full bg-white my-20">
      <h1 className="w-full text-center text-5xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-20">
        OUR SERVICES
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 lg:px-20 my-20">
        {ServicesArray.map((data, index) => (
          <div
            className="h-full lg:h-[380px] bg-[#165248] flex flex-col justify-between items-center py-10 px-2 hover:bg-emerald-700 hover:scale-110 transition duration-500"
            key={index}
          >
            <h1 className="w-full text-center text-lg lg:text-3xl font-sans leading-5 lg:leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
              {data.name}
            </h1>

            <span className="">{data.icon}</span>

            <p className="w-full text-center text-sm lg:text-xl lg:px-10 font-sans text-white hover:text-[#94BB3C]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
