export const Featured: React.FC = () => {
  const FeaturedTour = [
    {
      name: 'Omo Valley Tribes',
      description:
        'Transportation: Drive and flight Duration: 7 Days/ 6 Nights Accommodation: Hotels and Lodge',
    },
    {
      name: 'Ethiopian History and Nature',
      description:
        'Transportation: Flight and Drive Duration: 14 Days/ 13 Nights Accommodation: Lodges, Hotel, and Resorts',
    },
    {
      name: 'Ethiopian History and Nature',
      description:
        'Transportation: Flight and Drive Duration: 14 Days/ 13 Nights Accommodation: Lodges, Hotel, and Resorts ',
    },
    {
      name: 'Omo Valley Tribes',
      description:
        'Transportation: Flight and Drive Duration: 14 Days/ 13 Nights Accommodation: Lodges, Hotel, and Resorts ',
    },
  ];
  return (
    <section className="mx-auto max-w-7xl mb-24">
      <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-[#165248] hover:text-[#165248] mb-16">
        FEATURED TOURS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 px-5">
        {FeaturedTour.map((data, index) => (
          <div
            key={index}
            className="hero-background bg-cover bg-blend-darken w-full lg:w-[600px] h-[290px] flex flex-col items-center justify-between py-5 lg:py-10 text-center border-secondaryColor border-4 md:h-96 p-3"
          >
            <h3 className="w-full text-lg lg:text-3xl font-sans lg:leading-8 font-bold text-white hover:text-[#94BB3C] ">
              {data.name}
            </h3>
            <p className="w-full text-md lg:text-2xl font-sans leading-8  text-white hover:text-[#94BB3C]">
              {data.description}
            </p>
            <button className="bottom-5 font-sans font-extrabold text-xl py-2 px-5 bg-[#94BB3C] hover:bg-white text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="mt-10 font-sans font-extrabold text-2xl py-5 px-5 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
          Other Tours
        </button>
      </div>
    </section>
  );
};
