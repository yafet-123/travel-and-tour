import React from 'react';
import Image from 'next/image';
import whychooseusimage from '../public/2.jpg';

export const WhyChooseUs: React.FC = () => {
  return (
    <div
      className="flex md:flex-row sm:flex-col sm:text-center md:text-left md:h-96 md:bg-primaryColor 
    gap-36 md:justify-around sm:justify-center md:mt-32 my-8 bg-[#165248]"
    >
      <div
        className="flex flex-col gap-4 sm:justify-center md:justify-start md:my-8 md:w-[500px]
                     text-white md:max-w-1/2 md:text-left"
      >
        <h1 className="md:text-4xl sm:text-3xl font-bold md:text-white sm:text-black justify-center">
          WHY CHOOSE US
        </h1>
        <h3 className="md:text-2xl sm:text-xl font-normal md:text-white sm:text-black">
          We are proud to offer excellent quality and value for money in our
          tours, which give you the chance to experience your chosen destination
          in an authentic and exciting way.
        </h3>
      </div>
      <div className="hidden md:inline-flex">
        <Image
          src={whychooseusimage}
          alt="why choose us image"
          width={600}
          height={500}
          className="-mt-20 border-b-8 border-l-8 border-secondaryColor mb-16"
        />
      </div>
    </div>
  );
};
