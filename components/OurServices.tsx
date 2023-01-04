import Image from 'next/image';
import heroImage from '../public/hero/hero.jpg';

export const OurServices: React.FC = () => {
  const ServicesArray = [
    {
      icon: heroImage,
      name: 'Wide Variety of Tours',
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: heroImage,
      name: 'Highly Qualified Service',
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: heroImage,
      name: '24/7 Support',
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
    {
      icon: heroImage,
      name: 'Personalized Matching',
      description:
        'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: heroImage,
      name: 'Handpicked Hotels',
      description:
        'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: heroImage,
      name: 'Best Price Guarantee',
      description:
        'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
  ];
  return (
    <section className="h-full w-full bg-white my-20">
      <h1 className="w-full text-center text-5xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-20">
        OUR SERVICES
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 px-2 lg:px-20 my-20">
        {ServicesArray.map((data, index) => (
          <div
            className="w-full h-[380px] bg-[#165248] flex flex-col justify-between items-center py-10 px-2"
            key={index}
          >
            <h1 className="w-full text-center text-lg lg:text-3xl font-sans leading-5 lg:leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
              {data.name}
            </h1>

            <Image
              src={data.icon}
              className="w-[95.83px] h-[66.5px] brightness-50 object-cover box-border pl-3 pb-3"
              priority
              alt="Navbar"
            />

            <p className="w-full text-center text-sm lg:text-xl lg:px-10 font-sans text-white hover:text-[#94BB3C]">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
