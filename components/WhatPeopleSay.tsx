import Image from 'next/image';
import heroImageOne from '../public/hero/heroImageOne.jpg';

export const WhatPeopleSay: React.FC = () => {
	const TourArray = [
    {
      image: heroImageOne,
      name: 'Historical Routes',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      image: heroImageOne,
      name: 'Mountain Trekking',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      image: heroImageOne,
      name: 'Adventure Expeditions',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];
	return(
		<section className="h-full lg:h-[678px] w-full bg-[#94BB3C] mt-24">
			<h1 className="w-full text-center text-5xl font-sans leading-[50px] font-semibold text-[#165248] hover:text-white my-10">
          		WHAT PEOPLE SAY
        	</h1>

        	<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-10">
        		{TourArray.map((data, index) => (
        <div
          key={index}
          className="w-full h-[281px] bg-[#94BB3C] mb-10 p-2 relative bg-white"
        >
          <Image
            src={data.image}
            className="w-32 h-32 rounded-full absolute"
            priority
            alt="Navbar"
          />
          <h3 className="text-4xl text-center lg:text-left font-sans leading-10 font-bold text-white hover:text-[#94BB3C]">
            {data.name}
          </h3>
          <p className="px-10 w-full lg:w-72 text-2xl text-center lg:text-left font-sans leading-10 font-bold text-white hover:text-[#94BB3C]">
            {data.description}
          </p>
        </div>
      ))}
        	</div>
		</section>
	)
}