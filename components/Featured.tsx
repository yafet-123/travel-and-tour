import featureImageOne from '../public/feature/featureImageOne.jpg';
import featureImageTwo from '../public/feature/featureImagetwo.jpg';
import Image from 'next/image';
export const Featured: React.FC = () => {
  const FieldTour = [
    {
      image: featureImageOne,
      name: 'Omo Valley Tribes',
      description:
        'Transportation: Drive and flight Duration: 7 Days/ 6 Nights Accommodation: Hotels and Lodge',
    },
    {
      image: featureImageTwo,
      name: 'Ethiopian History and Nature',
      description:
        'Transportation: Flight and Drive Duration: 14 Days/ 13 Nights Accommodation: Lodges, Hotel, and Resorts',
    },
    {
      image: featureImageTwo,
      name: 'Ethiopian History and Nature',
      description:
        'Transportation: Flight and Drive Duration: 14 Days/ 13 Nights Accommodation: Lodges, Hotel, and Resorts ',
    },
    {
      image: featureImageOne,
      name: 'Omo Valley Tribes',
      description:
        'Transportation: Flight and Drive Duration: 14 Days/ 13 Nights Accommodation: Lodges, Hotel, and Resorts ',
    },
  ];
  return (
    <section className="mx-auto max-w-7xl mb-24">
      <h1 className="text-center text-5xl font-sans leading-10 font-bold text-[#165248] hover:text-[#165248] mb-16">
        FEATURED TOURS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28">
        {FieldTour.map((data, index) => (
          <div
            key={index}
            className="w-full lg:w-[600px] h-[281px] bg-green-300 relative"
          >
            <Image
              src={data.image}
              className="w-full lg:w-[600px] h-[281px] brightness-50 object-cover box-border"
              priority
              alt="Navbar"
            />
            <h3 className="absolute top-5 w-full text-3xl text-center font-sans leading-10 font-bold text-white hover:text-[#94BB3C]">
              {data.name}
            </h3>
            <p className="absolute px-10 top-20 w-full text-xl text-center font-sans leading-10 font-bold text-white hover:text-[#94BB3C]">
              {data.description}
            </p>
            <button className="absolute left-1/2 -translate-x-1/2 bottom-5 font-sans font-extrabold text-center text-xl py-2 bg-[#94BB3C] hover:bg-white text-white hover:text-[#94BB3C] w-[210px] border-2 border-white rounded-md">
              Read More
            </button>
          </div>
        ))}
      </div>

      <button className="mt-10 font-sans font-extrabold text-center text-2xl py-5 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] w-[335px] border-2 border-white rounded-md">
        Other Tours
      </button>
    </section>
  );
};
