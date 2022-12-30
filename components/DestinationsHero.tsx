import Image from 'next/image';
import DestinationsHeroImage from '../public/Destinations/DestinationsHeroImage.jpg';

export const DestinationsHero: React.FC = ({handledestinationChange, state}) => {
  const DestinationsButton = [
    {
      name: 'HISTORICAL ATTRACTIONS',
      file:"HistoricalDetail"
    },
    {
      name: 'NATURAL ATTRACTIONS',
      file:"NaturalDetail"
    },
    {
      name: 'CULTURAL ATTRACTIONS',
      file:"CulturalDetail"
    },
    {
      name: 'FESTIVALS',
      file:"FestivalsDetail"
    },
  ];
  return (
    <section className="w-full h-[513px]">
      <div className="relative">
        <Image
          src={DestinationsHeroImage}
          className="w-full h-[513px] object-cover lg:object-fit brightness-50"
          priority
          alt="Contact"
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full lg:px-52">
          <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
            Check Out Our Destinations
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mx-5">
            {DestinationsButton.map((data, index) => (
              <button
                key={data.name}
                onClick = {(e) => handledestinationChange(data.file) }
                className={ state === data.file ? "py-3 border-4 border-[#94BB3C] rounded-xl text-center text-lg lg:text-2xl font-sans font-bold text-[#94BB3C] hover:text-[#94BB3C] lg:mb-16" : "py-3 border-4 border-white rounded-xl text-center text-lg lg:text-2xl font-sans font-bold text-white hover:text-[#94BB3C] lg:mb-16"}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
