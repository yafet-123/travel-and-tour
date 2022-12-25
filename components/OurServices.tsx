import Image from 'next/image';
import heroImage from '../public/hero/hero.jpg';

export const OurServices: React.FC = () => {
  const ServicesArray = [
    {
      icon: heroImage,
      name: 'Wide Variety of Tours',
      description: 'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: heroImage,
      name: 'Highly Qualified Service',
      description: 'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: heroImage,
      name: '24/7 Support',
      description: 'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
    {
      icon: heroImage,
      name: 'Personalized Matching',
      description: 'We offer a wide variety of personally picked tours with destinations all over Ethiopia.',
    },
    {
      icon: heroImage,
      name: 'Handpicked Hotels',
      description: 'Our tour managers are qualified, skilled, and friendly to bring you the best service.',
    },
    {
      icon: heroImage,
      name: 'Best Price Guarantee',
      description: 'You can always get professional support from our staff 24/7 and ask any question you have.',
    },
  ];
  return (
    <section className="h-[678px] w-full bg-white mt-20">
      <h1 className="w-full text-center text-5xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-20">
        OUR SERVICES
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mx-20">
        {ServicesArray.map((data,index)=>(
          <div className="w-full h-[380px] bg-[#165248] mb-10 p-2" key={index}>
            <h1 className="w-full text-center text-3xl font-sans leading-10 font-bold text-[#165248] lg:text-white hover:text-[#94BB3C] mb-10">
              {data.name}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};
