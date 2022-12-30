import Image from 'next/image';
import AboutOne from '../public/AboutEthiopia/AboutOne.png';
import AboutTwo from '../public/AboutEthiopia/AboutTwo.png';
import AboutThree from '../public/AboutEthiopia/AboutThree.png';
import AboutFour from '../public/AboutEthiopia/AboutFour.png';
import AboutFive from '../public/AboutEthiopia/AboutFive.jpg';
import AboutSix from '../public/AboutEthiopia/AboutSix.png';

export const DestinationsDetail: React.FC = () => {
  const Detail = [
    {
      head: 'Simien Mountains National Park',
      description:
        'The Lake Tana area was important in the fourteenth, fifteenth and sixteenth centuries in view of its role in maintaining the Christian faith against contemporary pressures, and the rise of the Solomonic Dynasty which patronized the building of churches and monasteries.<br className="mb-10" /> Many of the earliest manuscripts and precious examples of ecclesiastical art as well as royal objects were safely stored in their treasuries. At the same time, new religious arts were developed and displayed in the churches. The oldest of these forty or so churches have their origins in the fourteenth century. They reflect the native building tradition in their round shape, materials and building techniques. Each one consists of three parts: the inner sanctuary, the inner ambulatory and the outer ambulatory. The outside walls of the sanctuary are usually covered with magnificent paintings. Seven of the most accessible and representative of these churches, still serving their original function, have been selected for the international campaign: Kebran Gabriel, Ura Kidane Mehret, Narga Selassie, Daga Estifanos, Medhane Alem of Rema, Kota Maryam and Mertola Maryam.',
      image: AboutOne,
    },
    
  ];
  return (
    <section className="py-10">
      <div className="mx-0 lg:mx-20">
        {Detail.map((data, index) => (
          <div className="mb-3 bg-[#165248]">
            <div className="">
              <Image
                src={data.image}
                className="w-[300px] h-[300px] object-cover brightness-75 border rounded-2xl float-right mx-5"
                priority
                alt="AboutUsEthiopia"
              />
            </div>

            
              <h1 className="text-left text-3xl lg:text-4xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-5">
                {data.head}
              </h1>
              <div 
                dangerouslySetInnerHTML={{ __html: data.description }}
                className="text-left text-lg lg:text-xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-5"
              />
              
            
          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <button className="mt-10 font-sans font-extrabold text-2xl py-5 px-16 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
          Get In Touch
        </button>
      </div>
    </section>
  );
};
