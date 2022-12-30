import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import navbarImage from '../public/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = [
    { path: '#', name: 'HOME' },
    { path: '#', name: 'TOURS' },
    { path: '#', name: 'ETHIOPIA' },
    { path: '#', name: 'CONTACT' },
    { path: '#', name: 'DESTINATIONS' },
    { path: '#', name: 'SUSTAINABLITY' },
    { path: '#', name: 'TRAVEL TIPS' },
    { path: '#', name: 'ABOUT' },
  ];

  return (
    <nav className="w-full bg-[#165248] lg:h-[100px] fixed z-50">
      <div className="justify-between px-4 mx-10 items-center lg:flex py-[10px] ">
        <div className="flex items-center justify-between py-3 lg:block">
          <Link href="#">
            <Image
              src={navbarImage}
              className="w-[100px] h-[51px]"
              priority
              alt="Navbar"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setOpen(!open)}
            >
              {open === true ? (
                <AiOutlineClose color="white" size={30} />
              ) : (
                <AiOutlineMenu color="white" size={30} />
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              open ? 'flex' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-16 lg:space-y-0">
              {NavLinks.map((link, index) => (
                <li
                  key={link.name}
                  className="md:ml-6 text-lg font-medium md:my-0 my-7"
                >
                  <Link
                    href={link.path}
                    className="text-white hover:text-[#94BB3C] duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <button className="bg-[white] text-[#165248] font-bold font-sans py-2 px-6 rounded md:ml-8  hover:text-[#94BB3C] duration-500">
                CALL NOW
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
