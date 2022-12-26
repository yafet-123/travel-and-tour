import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

export const ContactList: React.FC = () => {
  const contactImage = [
    {
      icon: <GoLocation size={50} />,
      name: 'VISIT US',
      description: 'Addis Ababa Ethiopia Bole, Rwanda Street',
    },
    {
      icon: <AiFillPhone size={50} />,
      name: 'CALL US',
      description: '+251 123 587 4444 <br> +251 456 234 1111',
    },
    {
      icon: <AiOutlineMail size={50} />,
      name: 'EMAIL US',
      description: 'ecotravelethiopia@gmail.com',
    },
  ];
  return (
    <section className="h-full w-full bg-white my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 px-5 lg:px-20 my-20">
        {contactImage.map((data, index) => (
          <div
            className="w-full h-[380px] bg-[#165248] flex flex-col justify-between items-center py-20 px-2"
            key={index}
          >
            <span className="text-white"> {data.icon} </span>
            <h1 className="w-full text-center text-3xl font-sans leading-5 lg:leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
              {data.name}
            </h1>

            <h1 className="w-full text-center text-xl px-5 font-sans font-bold text-white hover:text-[#94BB3C]">
              {data.description}
            </h1>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto flex flex-col justify-between items-center">
        <h1 className="w-full text-center text-5xl font-sans leading-5 lg:leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-10">
          Contact Us
        </h1>
        <p className="px-5 text-center text-2xl font-sans leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-10">
          Our team of experts are ready to help you with any questions about a
          trip to Ethiopia. Call us now to start your journey.
        </p>

        <div className="text-center">
          <button className="mt-10 font-sans font-extrabold text-2xl py-3 px-7 bg-[#165248] hover:bg-black text-white hover:text-[#94BB3C] border-8 border-[#94BB3C] rounded-md">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
