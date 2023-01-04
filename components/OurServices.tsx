import Image from 'next/image';

import { BiBusSchool } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { FcOnlineSupport } from 'react-icons/fc'
import { BsPersonBoundingBox } from 'react-icons/bs'
import { FaHotel } from 'react-icons/fa'
import { MdPriceCheck } from 'react-icons/md'
export const OurServices: React.FC = () => {
  const ServicesArray = [
    {
      icon: <BiBusSchool size={30} />,
      name: 'Wide Variety of Tours',
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: <AiOutlineStar size={30} />,
      name: 'Highly Qualified Service',
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: <FcOnlineSupport size={30} />,
      name: '24/7 Support',
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
    {
      icon: <BsPersonBoundingBox size={30} />,
      name: 'Personalized Matching',
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: <FaHotel size={30} />,
      name: 'Handpicked Hotels',
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: <MdPriceCheck size={30} />,
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

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 px-2 lg:px-20 my-20">
        {ServicesArray.map((data, index) => (
          <div
            className="w-full h-[380px] bg-[#165248] flex flex-col justify-between items-center py-10 px-2"
            key={index}
          >
            <h1 className="w-full text-center text-lg lg:text-3xl font-sans leading-5 lg:leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
              {data.name}
            </h1>

            <span className="text-yellow-500 text-3xl">{data.icon}</span>

            <p className="w-full text-center text-sm lg:text-xl lg:px-10 font-sans text-white hover:text-[#94BB3C]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
