export const FollowingTheDream: React.FC = () => {
  const Dream = [
    {
      number: '300+',
      name: 'Happy Travelers',
    },
    {
      number: '50+',
      name: 'Destinations',
    },
    {
      number: '10+',
      name: 'Team Members',
    },
  ];
  return (
    <section className="my-10 w-full h-full lg:h-[429px] bg-[#165248] py-5 lg:py-10">
      <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-5 lg:mb-16">
        Following the Dream
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 mx-20 ">
        {Dream.map((data, index) => (
          <div
            key={index}
            className="bg-white w-full h-[199px] border rounded-3xl flex flex-col justify-around group hover:bg-secondaryColor hover:scale-110 transition duration-500"
          >
            <h1 className="text-center text-4xl lg:text-5xl font-sans leading-10 font-black text-[#165248] group-hover:text-white">
              {data.number}
            </h1>
            <h4 className="text-center text-2xl lg:text-3xl font-sans leading-10 font-medium text-[#165248] group-hover:text-white">
              {data.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};
