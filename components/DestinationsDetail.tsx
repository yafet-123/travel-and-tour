import Image from 'next/image';
import { useState, useEffect } from 'react';
import tana from '../public/lake-Tana.png';
import fasiledes from '../public/fasiledes.jpg';
import lalibela from '../public/lalibela-destination.png';
import axum from '../public/axum.png';
import SimienMountainsNationalPark from '../public/Simien Mountains National Park.png';
import BalemountainsNationalPark from '../public/Attractions-naturall-endemic-mammals-MOUNTAIN-NYALA-overland-ethiopia-tour.jpg';
import DanakilDepression from '../public/Danakil Depression.png';
import AwashNationalPark from '../public/Awash National Park.png';
import OmoValley from '../public/OmoValley.png';
import Harar from '../public/Harar.png';
import Meskel from '../public/Meskel.png';
import Timket from '../public/Timket.png';
import Gena from '../public/Gena.png';
export const DestinationsDetail: React.FC = ({ state }) => {
  const HistoricalDetail = [
    {
      head: 'Lake Tana Monasteriesrk',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries.<br className="pb-20" /> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: tana,
    },

    {
      head: 'Fasiladas’ Palace',
      description:
        'It stands 32m tall and has a crenulated parapet and four domed towers. Made of roughly hewn stones, it’s reputedly the work of an Indian architect and shows an unusual synthesis of Indian, Portuguese, Moorish and Aksumite influences. The main floor was used as dining halls and a formal reception area.<br className="pb-20" /> Note the wall reliefs, including several Stars of David, which trumpet Fasiladas’ link to the Solomonic dynasty. The small room in the northern corner boasts its original beam ceiling and some faint frescoes. On the 1st floor, Fasiladas’ prayer room has windows in four directions, each overlooking Gonder’s important churches. Religious ceremonies were held on the roof, and it was from here that he addressed his people. Above Fasiladas’ 2nd-floor bedroomwas the watchtower, from where it’s (apparently) possible to see all the way to Lake Tana. Behind the castle are various ruined buildings, including the kitchen (domed ceiling), steam bath and water cistern.',
      image: fasiledes,
    },

    {
      head: 'Rock Hewn churches of Lalibela',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries.<br className="pb-20" /> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: lalibela,
    },

    {
      head: 'The Obelisks of Axum',
      description:
        'It stands 32m tall and has a crenulated parapet and four domed towers. Made of roughly hewn stones, it’s reputedly the work of an Indian architect and shows an unusual synthesis of Indian, Portuguese, Moorish and Aksumite influences. The main floor was used as dining halls and a formal reception area. <br /> Note the wall reliefs, including several Stars of David, which trumpet Fasiladas’ link to the Solomonic dynasty. The small room in the northern corner boasts its original beam ceiling and some faint frescoes. On the 1st floor, Fasiladas’ prayer room has windows in four directions, each overlooking Gonder’s important churches. Religious ceremonies were held on the roof, and it was from here that he addressed his people. Above Fasiladas’ 2nd-floor bedroomwas the watchtower, from where it’s (apparently) possible to see all the way to Lake Tana. Behind the castle are various ruined buildings, including the kitchen (domed ceiling), steam bath and water cistern.',
      image: axum,
    },
  ];

  const NaturalDetail = [
    {
      head: 'Simien Mountains National Park',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries. <br className="pb-10"> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: SimienMountainsNationalPark,
    },

    {
      head: 'Bale mountains National Park',
      description:
        'It stands 32m tall and has a crenulated parapet and four domed towers. Made of roughly hewn stones, it’s reputedly the work of an Indian architect and shows an unusual synthesis of Indian, Portuguese, Moorish and Aksumite influences. The main floor was used as dining halls and a formal reception area. <br className="pb-10"> Note the wall reliefs, including several Stars of David, which trumpet Fasiladas’ link to the Solomonic dynasty. The small room in the northern corner boasts its original beam ceiling and some faint frescoes. On the 1st floor, Fasiladas’ prayer room has windows in four directions, each overlooking Gonder’s important churches. Religious ceremonies were held on the roof, and it was from here that he addressed his people. Above Fasiladas’ 2nd-floor bedroomwas the watchtower, from where it’s (apparently) possible to see all the way to Lake Tana. Behind the castle are various ruined buildings, including the kitchen (domed ceiling), steam bath and water cistern.',
      image: BalemountainsNationalPark,
    },

    {
      head: 'Danakil Depression',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries. <br className="pb-10"/> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: DanakilDepression,
    },

    {
      head: 'Awash National Park',
      description:
        'It stands 32m tall and has a crenulated parapet and four domed towers. Made of roughly hewn stones, it’s reputedly the work of an Indian architect and shows an unusual synthesis of Indian, Portuguese, Moorish and Aksumite influences. The main floor was used as dining halls and a formal reception area. <br className="pb-10" /> Note the wall reliefs, including several Stars of David, which trumpet Fasiladas’ link to the Solomonic dynasty. The small room in the northern corner boasts its original beam ceiling and some faint frescoes. On the 1st floor, Fasiladas’ prayer room has windows in four directions, each overlooking Gonder’s important churches. Religious ceremonies were held on the roof, and it was from here that he addressed his people. Above Fasiladas’ 2nd-floor bedroomwas the watchtower, from where it’s (apparently) possible to see all the way to Lake Tana. Behind the castle are various ruined buildings, including the kitchen (domed ceiling), steam bath and water cistern.',
      image: AwashNationalPark,
    },
  ];

  const CulturalDetail = [
    {
      head: 'Omo Valley',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries. <br className="pb-10" /> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: OmoValley,
    },

    {
      head: 'Harar',
      description:
        'It stands 32m tall and has a crenulated parapet and four domed towers. Made of roughly hewn stones, it’s reputedly the work of an Indian architect and shows an unusual synthesis of Indian, Portuguese, Moorish and Aksumite influences. The main floor was used as dining halls and a formal reception area. <br className="pb-10" /> Note the wall reliefs, including several Stars of David, which trumpet Fasiladas’ link to the Solomonic dynasty. The small room in the northern corner boasts its original beam ceiling and some faint frescoes. On the 1st floor, Fasiladas’ prayer room has windows in four directions, each overlooking Gonder’s important churches. Religious ceremonies were held on the roof, and it was from here that he addressed his people. Above Fasiladas’ 2nd-floor bedroomwas the watchtower, from where it’s (apparently) possible to see all the way to Lake Tana. Behind the castle are various ruined buildings, including the kitchen (domed ceiling), steam bath and water cistern.',
      image: Harar,
    },
  ];

  const FestivalsDetail = [
    {
      head: 'Meskel (Finding of the true cross)',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries. <br className="pb-10" /> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: Meskel,
    },

    {
      head: 'Timket',
      description:
        'It stands 32m tall and has a crenulated parapet and four domed towers. Made of roughly hewn stones, it’s reputedly the work of an Indian architect and shows an unusual synthesis of Indian, Portuguese, Moorish and Aksumite influences. The main floor was used as dining halls and a formal reception area. <br className="pb-20" /> Note the wall reliefs, including several Stars of David, which trumpet Fasiladas’ link to the Solomonic dynasty. The small room in the northern corner boasts its original beam ceiling and some faint frescoes. On the 1st floor, Fasiladas’ prayer room has windows in four directions, each overlooking Gonder’s important churches. Religious ceremonies were held on the roof, and it was from here that he addressed his people. Above Fasiladas’ 2nd-floor bedroomwas the watchtower, from where it’s (apparently) possible to see all the way to Lake Tana. Behind the castle are various ruined buildings, including the kitchen (domed ceiling), steam bath and water cistern.',
      image: Timket,
    },

    {
      head: 'Genna (Ethiopian Christmass)',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries. <br className="pb-10" /> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: Gena,
    },
  ];

  return (
    <section className="py-10">
      {state === 'HistoricalDetail' && (
        <div className="mx-0 lg:mx-20 ">
          {HistoricalDetail.map((data, index) => (
            <div key={index} className="p-3 lg:p-20 ">
              <Image
                src={data.image}
                className="w-full lg:w-[700px] h-[300px] object-cover brightness-75 border rounded-2xl lg:mx-5 float-none lg:odd:float-right lg:even:float-left mb-10"
                priority
                alt="Destination"
              />

              <div>
                <h1 className="py-2 lg:pb-10 text-left text-3xl lg:text-4xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5">
                  {data.head}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  className="text-left text-md lg:text-xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {state === 'NaturalDetail' && (
        <div className="mx-0 lg:mx-20 ">
          {NaturalDetail.map((data, index) => (
            <div key={index} className="p-3 lg:p-20">
              <Image
                src={data.image}
                className="w-full lg:w-[700px] h-[300px] object-cover brightness-75 border rounded-2xl lg:mx-5 odd:float-right even:float-left mb-10"
                priority
                alt="Destination"
              />

              <div>
                <h1 className="py-2 lg:pb-10 text-left text-3xl lg:text-4xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5">
                  {data.head}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  className="text-left text-md lg:text-xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {state === 'CulturalDetail' && (
        <div className="mx-0 lg:mx-20 ">
          {CulturalDetail.map((data, index) => (
            <div key={index} className="p-3 lg:p-20">
              <Image
                src={data.image}
                className="w-full lg:w-[700px] h-[300px] object-cover brightness-75 border rounded-2xl lg:mx-5 odd:float-right even:float-left mb-10"
                priority
                alt="Destination"
              />

              <div>
                <h1 className="py-2 lg:pb-10 text-left text-3xl lg:text-4xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5">
                  {data.head}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  className="text-left text-md lg:text-xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {state === 'FestivalsDetail' && (
        <div className="mx-0 lg:mx-20 ">
          {FestivalsDetail.map((data, index) => (
            <div key={index} className="p-3 lg:p-20">
              <Image
                src={data.image}
                className="w-full lg:w-[700px] h-[300px] object-cover brightness-75 border rounded-2xl lg:mx-5 odd:float-right even:float-left mb-10"
                priority
                alt="Destination"
              />

              <div>
                <h1 className="py-2 lg:pb-10 text-left text-3xl lg:text-4xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5">
                  {data.head}
                </h1>
                <div
                  dangerouslySetInnerHTML={{ __html: data.description }}
                  className="text-left text-md lg:text-xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-5"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mb-10">
        <button className="mt-10 font-sans font-extrabold text-2xl py-5 px-16 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
          Get In Touch
        </button>
      </div>
    </section>
  );
};
