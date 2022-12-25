import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import navbarImage from '../public/navbar/navbarHead.png';

export const Navbar: React.FC = () => {
  const [navbar, setNavbar] = useState(false);

  const NavbarList = [
    { path: '#', name: 'HOME' },
    { path: '#', name: 'TOURS' },
    { path: '#', name: 'ABOUT US' },
    { path: '#', name: 'SUSTAINABLITY' },
    { path: '#', name: 'DESTINATIONS' },
    { path: '#', name: 'ETHIOPIA' },
  ];

  return (
    <nav className="w-full bg-[#165248] lg:h-[100px] ">
      <div className="justify-between px-4 mx-10 items-center lg:flex py-[10px] ">
        <div className="flex items-center justify-between py-3 lg:block">
          <Link href="#">
            <Image
              src={navbarImage}
              className="w-[100px] h-[51px]"
              alt="Navbar"
            />
          </Link>
          <div className="lg:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? 'flex' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-16 lg:space-y-0">
              {NavbarList.map((data, index) => (
                <li key={index} className="text-white">
                  <Link href={data.path}>
                    <h1 className="font-sans text-xl leading-6 font-bold text-white hover:text-[#94BB3C]">
                      {data.name}
                    </h1>
                  </Link>
                </li>
              ))}

              <li className="text-white">
                <Link href="#">
                  <h1 className="font-sans text-xl leading-6 p-2 bg-[#94BB3C] hover:bg-white font-bold text-white hover:text-[#94BB3C] w-44 lg:w-full border-[#165248] rounded-md">
                    CONTACT
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
