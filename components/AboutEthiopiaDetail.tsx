import Image from 'next/image';
import AboutOne from '../public/AboutEthiopia/AboutOne.png';
import AboutTwo from '../public/AboutEthiopia/AboutTwo.png';
import AboutThree from '../public/AboutEthiopia/AboutThree.png';
import AboutFour from '../public/AboutEthiopia/AboutFour.png';
import AboutFive from '../public/AboutEthiopia/AboutFive.jpg';
import AboutSix from '../public/AboutEthiopia/AboutSix.png';

export const AboutEthiopiaDetail: React.FC = () => {
  const Detail = [
    {
      head: 'Thirteen Months to the Year',
      description:
        'Sure, plenty of cultures have their own calendars that they prefer to follow over the Western Gregorian one, but most still abide by the unspoken ’12 months to a year’ rule. Not Ethiopia. Ever looking to buck a trend, several thousand years ago the Ethiopians cottoned on to Spinal Tap’s belief that one more is always better – and have been counting 13 months to their year ever since. What does this mean?  That canny tourism boards can legitimately claim that the country really does boast ’13 months of sunshine’.',
      image: AboutOne,
    },
    {
      head: 'Complete Independence',
      description:
        "Ethiopia is the oldest independent country in Africa and one of the world's oldest - it exists for at least 2,000 years. The country comprises more than 80 ethnic groups and as many languages. Primarily their shared independent existence unites Ethiopia's many nations. Unique among African countries, Ethiopia has never been colonized, one exception being the occupation by Italy in 1936-41.",
      image: AboutTwo,
    },
    {
      head: 'A Nation of Religious Festivals',
      description:
        'Ethiopia is a country full of vibrant and colourful festivals. The biggest, Timket, is a three-day annual festival that honours the baptism of Jesus Christ in the river Jordan. Today the priests remove the ‘Tabots’ (replicas of the Ark of Covenant) from each church and march to the nearest water source, where the communal baptism takes place. The procession is accompanied by thousands of locals dressed in dazzling white traditional dress that contrasts with the colours of the ceremonial robes and sequined velvet umbrellas of the priests.',
      image: AboutThree,
    },
    {
      head: 'Beautiful Nature',
      description:
        "Ethiopia is one of Africa's most beautiful countries and its landscapes are epic in both scale and beauty. Here is a place where you can trek more than 9800ft above sea level (the Simien and Bale mountains) or visit the lowest place on the African continent, the Danakil Depression. In between, there are lush highlands and stirring deserts, vertiginous canyons and sweeping savanna, vast lakes and high plateaus. If you look hard enough, you'll also find landmarks of great significance, from the source of the Blue Nile to, again, the mesmerizingly desolate Danakil Depression, peppered with an astonishing 25% of Africa’s active volcanoes.",
      image: AboutFour,
    },
    {
      head: 'Historical Wonders',
      description:
        "Ethiopia, one of the oldest countries in the world, successfully resisted European colonialism throughout the centuries – it has retained much of its cultural identity and its story is one of Africa's most fascinating. It all begins with Lucy, one of our most celebrated ancient ancestors, moves effortlessly into the realm of ancient Aksum with its oblelisks and echoes of the Queen of Sheba, and then takes on power and passion as Christianity, with mysterious echoes of Ancient Israel, takes center stage. The ancients here left behind some extraordinary monuments to faith and power which serve as focal points for so many wonderful journeys.",
      image: AboutFive,
    },
    {
      head: 'Proud Traditions',
      description:
        'When it comes to culture, Ethiopia has an embarrassment of riches. There are the Surmi, Afar, Mursi, Karo, Hamer, Nuer and Anuak, whose ancient customs and traditions have remained almost entirely intact. A highlight of any trip here is witnessing one of the many festivals that are an integral part of the traditional culture, from age-old ceremonies marking rites of passage to Christian celebrations of singular passion, the impact upon those who witness such events can provide travel memories to last a lifetime.',
      image: AboutSix,
    },
  ];
  return (
    <section className="py-10">
      <div className="mx-0 lg:mx-20">
        {Detail.map((data, index) => (
          <div className="flex flex-row even:flex-row-reverse">
            <div className="flex flex-col justify-between items-center bg-[#165248] w-1/2 pt-10 px-20">
              <h1 className="text-center text-3xl lg:text-4xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
                {data.head}
              </h1>
              <p className="mx-5 text-center text-lg lg:text-xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
                {data.description}
              </p>
            </div>

            <div className="w-1/2">
              <Image
                src={data.image}
                className="w-1/2 h-1/2 object-cover brightness-75 border rounded-2xl"
                priority
                alt="AboutUsEthiopia"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-full lg:h-[400px] bg-[#165248] py-32 px-96 my-20">
        <p className="mx-5 text-center text-lg lg:text-xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
          Addis Ababa now boasts of a wide variety of restaurants traditional,
          Italian, Far East and western, and at hotels in tourist sites European
          style foods are always available. If you are travelling to remote
          areas and camping, such as the Omo Valley and parts of southern
          Ethiopia, our company provide professional cook with first class
          cooking materials it is also advisable to inform your interest of food
          during booking.
        </p>
      </div>

      <div className="text-center">
        <button className="mt-10 font-sans font-extrabold text-2xl py-5 px-16 bg-[#94BB3C] hover:bg-black text-white hover:text-[#94BB3C] border-2 border-white rounded-md">
          Get In Touch
        </button>
      </div>
    </section>
  );
};
