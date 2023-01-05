import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

export const ContactList: React.FC = () => {
  const contactImage = [
    {
      icon: <GoLocation />,
      name: 'VISIT US',
      description: 'Addis Ababa Ethiopia Bole, Rwanda Street',
    },
    {
      icon: <AiFillPhone />,
      name: 'CALL US',
      description: '+251 123 587 4444 <br> +251 456 234 1111',
    },
    {
      icon: <AiOutlineMail />,
      name: 'EMAIL US',
      description: 'ecotravelethiopia@gmail.com',
    },
  ];
  return (
    <section className="h-full w-full bg-white my-10">
      <div className="flex flex-col lg:flex-row justify-around items-center my-20 mx-10 lg:mx-20">
        {contactImage.map((data, index) => (
          <div
            className="w-full lg:w-[388px] h-full lg:h-[380px] bg-[#165248] flex flex-col justify-around items-center py-5 my-10 px-5 hover:bg-emerald-700 hover:scale-110 transition duration-500"
            key={index}
          >
            <span className="text-white text-4xl lg:text-7xl mb-10">
              {' '}
              {data.icon}{' '}
            </span>
            <h1 className="w-full text-center text-2xl lg:text-3xl font-sans leading-5 lg:leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
              {data.name}
            </h1>

            <div
              dangerouslySetInnerHTML={{ __html: data.description }}
              className="text-center text-md lg:text-xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-5"
            />
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto flex flex-col justify-between items-center">
        <h1 className="w-full text-center text-2xl lg:text-5xl font-sans leading-5 lg:leading-10 font-bold text-[#165248] hover:text-[#94BB3C] mb-10">
          Contact Us
        </h1>
        <p className="px-5 text-center text-xl lg:text-2xl font-sans leading-10 text-[#165248] hover:text-[#94BB3C] mb-10">
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
