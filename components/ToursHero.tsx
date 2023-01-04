import Image from 'next/image';
import TourHeroImage from '../public/tour/TourHeroImage.jpg';

export const ToursHero: React.FC = () => {
  return (
    <div className=" flex justify-center place-items-center h-[523px] bg-scroll  hero-background">
      <div className="flex flex-col gap-8  font-bold h-1/2 text-center ">
        <div>
          <h1 className="text-white text-3xl md:text-6xl  m-4">
            <span className="font-normal">Create</span> Your Tour
          </h1>
        </div>
        <div>
          <h1 className="text-white  text-xl lg:text-3xl m-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum. sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.
          </h1>
        </div>
      </div>
    </div>
  );
};

 