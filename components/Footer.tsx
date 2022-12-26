import Image from 'next/image';
import Link from 'next/link';
import navbarImage from '../public/navbar/navbarHead.png';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
export const Footer: React.FC = () => {
  const socialMediaLinks = [
    { path: <AiFillInstagram size={30} /> },
    { path: <AiFillTwitterCircle size={30} /> },
    { path: <AiFillFacebook size={30} /> },
    { path: <AiFillLinkedin size={30} /> },
  ];

  const quickLinks = [
    { link: 'About Us' },
    { link: 'Our Tours ' },
    { link: 'Sustainabilty' },
    { link: 'Contact us' },
    { link: 'About Ethiopia' },
    { link: 'Travel Tips' },
  ];

  const contactLinks = [
    { link: '+251910111213', path: <AiFillPhone /> },
    { link: 'ecotravelethiopia@gmail.com', path: <AiOutlineMail /> },
    { link: '+251910111213', path: <AiFillPhone /> },
    { link: 'Addis Ababa, Ethiopia', path: <GoLocation /> },
  ];

  return (
    <footer className="bg-[#94BB3C]">
      <div className="flex flex-col lg:flex-row justify-between items-center p-10 bg-[#165248] lg:px-20">
        <div className="flex flex-col items-center justify-between space-y-5 md:items-start w-full md:w-1/4 mb-10 md:mb-0">
          <div className="">
            <Link href="/">
              <Image
                src={navbarImage}
                className="w-[100px] h-[51px]"
                alt="Footer"
                width={100}
                height={35}
              />
            </Link>
          </div>

          <p className="text-white w-full lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <div className="flex justify-center space-x-4 text-white">
            {socialMediaLinks.map((paths, index) => {
              return (
                <Link key={index} href="#">
                  {paths.path}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-2 text-white">
          <h1 className="text-2xl font-bold">CONTACT US</h1>

          {contactLinks.map((links, index) => {
            return (
              <Link
                key={index}
                href="#"
                className="flex items-center text-white hover:text-black font-normal text-xl"
              >
                {links.path}
                <span className="ml-2">{links.link}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-center my-10 text-white">
          <h1 className="text-lg font-bold">QUICK LINKS</h1>
          <ul className="list-disc">
            {quickLinks.map((links, index) => {
              return (
                <li
                  key={index}
                  className=" text-white hover:text-black font-bold text-2xl"
                >
                  <Link href="#">{links.link}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center h-full lg:h-8 mx-10">
        <div className="text-xs lg:text-lg text-black font-bold md:block">
          © 2022 Eco-Travel Ethiopia. All rights reserved.
        </div>

        <div className="text-xs lg:text-lg text-black font-bold md:block">
          Made By Lorem Epsum
        </div>
      </div>
    </footer>
  );
};
export default Footer;
