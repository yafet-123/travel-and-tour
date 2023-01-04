
export const Hero: React.FC = () => {
  return (
    <div className=" flex justify-center place-items-center h-screen bg-scroll  hero-background">
      <div className="flex flex-col gap-8  font-bold h-1/2  text-center ">
        <div>
          <h1 className="text-white text-3xl md:text-6xl  m-4">
            <span className="font-normal">TRUST</span> OUR EXPERIENCE
          </h1>
        </div>
        <div>
          <h1 className="text-white  text-xl lg:text-3xl m-4">
            Eco-Travel Ethiopia Offers You Sustainable and Environmentally
            Friendly Tours.
          </h1>
        </div>
        <div>
          <button
            className="font-bold cursor-pointer text-white text-3xl py-3 hover:text-secshadow-secondaryColor hover:border-secondaryColor 
              shadow-md shadow-white hover:shadow-secondaryColor border-white border-2 rounded-sm w-56"
            onClick={() => alert('see tours')}
          >
            See Tours
          </button>
        </div>
      </div>
    </div>
  );
};
