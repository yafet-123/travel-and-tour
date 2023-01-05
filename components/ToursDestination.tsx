import TourOne from '../public/tour/TourOne.jpg';
import TourTwo from '../public/tour/TourTwo.jpg';
import TourThree from '../public/tour/TourThree.jpg';
import TourFour from '../public/tour/TourFour.jpg';
import TourFive from '../public/tour/TourFive.jpg';
import TourSix from '../public/tour/TourSix.jpg';
import TourSeven from '../public/tour/TourSeven.jpg';
import TourEight from '../public/tour/TourEight.jpg';
import Image from 'next/image';

export const ToursDestination: React.FC = () => {
  const FieldTour = [
    {
      image: TourOne,
      name: 'Ultimate Ethiopian Wildlife Tour',
      description:
        'Ethiopia is home to some of the wildest and most interesting habitats on the planet, with a large number of indigenous plant and animal species. Birdlife is particularly rich. The lakes in the Great Rift Valley region abound with numerous species of birds ...',
    },
    {
      image: TourTwo,
      name: 'Ethiopian History and Nature',
      description:
        'This trip combines culture and nature. You will start in Addis Ababa, the capital city of Ethiopia and center for the African continent, drive via rift valley lakes towards the beautiful Bale Mountains National Park and the coffee plantation region ...',
    },
    {
      image: TourThree,
      name: 'Discover Ethiopian Nature and Culture',
      description:
        'This trip combines culture and nature. You will start in Addis Ababa, the capital city of Ethiopia and center for the African continent, drive via rift valley lakes towards the beautiful Bale Mountains National Park and the coffee plantation region ... ',
    },
    {
      image: TourFour,
      name: 'Cultural Exploration of Omo Valley',
      description:
        'This trip will start and end in Addis Ababa, the capital city of Ethiopia and center for the African continent. This is a great itinerary which gives travelers an extraordinary opportunity to travel through Ethiopia’s fascinating Southern region... ',
    },
    {
      image: TourFive,
      name: 'Trekking to the Highest peak in Ethiopia',
      description:
        'This is a trekking itinerary in the spectacular Simien Mountains. Located in the far north section of the country, the Simien Mountains are a trekkers utopia. Home to endemic wild animals, Green pastures, glistening streams & mountain views that will leave you mesmerized for weeks thereafter ... ',
    },
    {
      image: TourSix,
      name: 'Danakil Depression',
      description:
        'This adventurous trip focuses on the arid north – east of the country which counts amongst its treasures the fascinating Danakil Depression, one of the lowest and hottest places on earth. ',
    },
    {
      image: TourSeven,
      name: 'Trekking to the Bale Mountains National Park',
      description:
        'This adventurous trip focuses on the arid north – east of the country which counts amongst its treasures the fascinating Danakil Depression, one of the lowest and hottest places on earth.',
    },
    {
      image: TourEight,
      name: 'Addis Ababa City Tour',
      description:
        'Addis Ababa a historical place where Emperor Menelik II resided and built his palace, when he came from Ankober and founded Addis Ababa. It is considered a sacred mountain and has many monasteries.  Mount Entoto is also ... ',
    },
  ];
  return (
    <section className="py-10">
      <div className="flex flex-col my-5">
        {FieldTour.map((data, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-5 even:bg-[#165248] text-[#165248] even:text-white px-5 lg:px-10 lg:px-20 py-5 lg:py-10 border-transparent rounded-lg"
          >
            <Image
              src={data.image}
              className="w-full lg:w-[600px] h-[300px] lg:h-[423px] object-cover lg:object-fit box-border border-transparent rounded-xl"
              priority
              alt="Navbar"
            />

            <div className="flex flex-col justify-between my-5 lg:my-10">
              <h3 className="w-full text-2xl lg:text-4xl text-center lg:text-left font-sans leading-8 font-bold hover:text-[#94BB3C] mb-10 lg:mb-0">
                {data.name}
              </h3>
              <p className="w-full lg:w-3/4 text-lg lg:text-2xl text-left font-sans leading-8 font-bold hover:text-[#94BB3C]">
                {data.description}
              </p>
              <div className="text-center lg:text-left">
                <button className="mt-10 w-52 font-sans text-center font-extrabold text-xl py-3 px-5 bg-[#94BB3C] hover:bg-white text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
                  Buy Tour
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mx-16">
          <button className="my-10 w-full lg:w-96 font-sans font-extrabold text-3xl py-5 bg-[#94BB3C] hover:bg-white text-white hover:text-[#94BB3C] border-8 border-[#165248] rounded-md">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
