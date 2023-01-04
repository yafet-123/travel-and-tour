import React from 'react';
import Link from 'next/link';

export const Herotours: React.FC = () => {
  const CardsArray = [
    {
      id: 'historical',
      name: 'Historical Routes',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 'trekking',
      name: 'Mountain Trekking',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 'adventure',
      name: 'Adventure Expeditions',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];

  return (
    <div className="flex flex-col text-white my-12 w-11/12 mx-auto justify-center space-y-4 md:space-y-0 md:space-x-8 md:flex-row space-x-0 md:-mt-12 md:h-128 md:my-24">
      {CardsArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${card.id} bg-cover bg-blend-darken w-full lg:w-[600px] h-[290px] flex flex-col items-center justify-between py-5 lg:py-10 text-center border-secondaryColor border-4 md:h-96 py-3`}
          >
            <div>
              {' '}
              <h3 className="text-2xl lg:text-3xl font-bold font-monospace ">
                {card.name}
              </h3>
            </div>

            <div className="flex flex-col w-3/4 items-center gap-4 ">
              <p className="text-md  text-white">{card.description}</p>
              <Link href="/">
                <h5 className="border text-white font-semibold font-monospace hover:font-bold mt-2 p-1 ">
                  Read More
                </h5>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
