import Image from 'next/image';
import AboutUsHeroImage from '../public/aboutus/AboutUsHero.jpg';

export const TourAbout: React.FC = () => {
  return (
    <section className="w-full h-full lg:h-[800px] bg-[#165248] my-20 px-5 lg:px-52 py-20">
      <h1 className="text-center lg:text-left text-3xl lg:text-4xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
        About the Tour
      </h1>
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <p className="mr-10 w-full lg:w-6/12 text-left text-lg md:text-xl lg:text-2xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24">
          Ethiopia is home to some of the wildest and most interesting habitats
          on the planet, with a large number of indigenous plant and animal
          species. Birdlife is particularly rich. The lakes in the Great Rift
          Valley region abound with numerous species of birds, and wild animals
          are found in every region and National Parks. Elephant, Giraffe,
          Buffalo, Rhino, Lion, civet, serval, bush pig, gazelle, antelope,
          ibex, kudu, dik-dik, oribi, reedbuck, wild ass, zebra, hyena, Mountain
          Nyala, Gelada Baboon, and numerous species of monkeys are still found
          and to be visited. This is the special wildlife safari to Simien
          mountains National park, Bale mountains national park, Awash National
          Park, the great rift valley lakes and the surrounding. This itinerary
          is designed for those who love nature, wildlife, and authentic
          culture. The two major National parks in the country that are famous
          for their wild life are included.
        </p>
        <Image
          src={AboutUsHeroImage}
          className="w-full lg:w-[676px] h-[196px] lg:h-[517px] object-cover lg:object-cover brightness-75"
          priority
          alt="AboutUs"
        />
      </div>
    </section>
  );
};
