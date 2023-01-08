import Image from 'next/image';
import GreenWorld from '../public/CT-FW-Green-World.jpg';
import UrbanFarming from '../public/addis ababa urban farming.jpeg';
import EnvironmentallyFriendly from '../public/What-is-Being-Environmentally-Friendly.jpg';

export const SustainablityDetail: React.FC = () => {
  const Detail = [
    {
      head: 'RESPONSIBLE TRAVEL',
      description:
        'Our company was founded to offer environmentally-friendly tours. It’s a commitment that is reflected in our name: Ecotravel. We strive to travel responsibly by making environmentally-friendly choices and carbon neutralizing our tours, by working with locally-owned businesses and supporting local non-profits whose aims are to support local causes, environments, or wildlife. With our Environmentally friendly and economic fuel utilization vehicles, We take you to amazing destinations, navigating far and wide, and when we do, it comes at a price in the form of carbon emissions, which contribute to climate change.',
      image: GreenWorld,
    },
    {
      head: 'WE SUPPORT LOCAL AND SUSTAINABLE BUSINESSES',
      description:
        'We believe that working with local communities helps reduce our impact on tourist destinations, while also providing amazing, unique experiences for our responsible clients. Our tours generally support local communities through the purchase of local goods and services, visiting social projects, and promoting authentic encounters that foster cross-cultural understanding. We also use locally owned lodges and hotels in our trips and arrange a village tours to support the local economy and reduce their dependence on Nature.',
      image: UrbanFarming,
    },
    {
      head: 'POLLUTION',
      description:
        'We believe that reducing our carbon footprint will also have a beneficial impact on our local area by reducing congestion and air pollution. Using green and ecological principles, Buying eco-label products, Reducing paper consumption, Choosing suppliers who are committed to sustainability, Reducing our brochure use, encouraging clients to recycle their brochures, and using environmentally friendly cleaning materials are some of our best experience to reduce our impact against the environment.',
      image: EnvironmentallyFriendly,
    },
  ];
  return (
    <section className="py-10">
      {Detail.map((data, index) => (
        <div className="flex flex-col even:bg-white odd:bg-[#165248] even:text-[#165248] odd:text-white mb-5 lg:mb-10 py-20 px-5">
          <div className="flex flex-col w-full lg:px-52">
            <h1 className="text-left text-3xl lg:text-4xl font-sans leading-10 font-bold mb-5 lg:mb-10">
              {data.head}
            </h1>
            <p className="text-left text-lg lg:text-2xl font-sans leading-8 lg:leading-10 font-normal mb-5">
              {data.description}
            </p>
          </div>

          <div className="w-full pt-10 lg:px-72 lg:my-auto">
            <Image
              src={data.image}
              className="w-full h-[300px] object-cover brightness-75 border rounded-2xl hover:scale-110 transition duration-500"
              priority
              alt="AboutUsEthiopia"
            />
          </div>
        </div>
      ))}

      <div className="text-center mb-10">
        <button className="mt-10 font-sans font-extrabold text-2xl py-5 px-16 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
          Get In Touch
        </button>
      </div>
    </section>
  );
};
