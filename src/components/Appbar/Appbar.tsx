import React, { useState } from 'react';
import Links from './Links';
import { IoBagOutline, IoClose, IoMenu, IoPersonOutline, IoSearchOutline } from "react-icons/io5";
import { SelectedPage } from '../shared/enum_types';
import useMediaQuery from '../hooks/useMediaQuery';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Appbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav className=''>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6 bg-black`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            {/*<img alt="logo" src={Logo} />*/}
            <p className='text-white font-bold flex items-center justify-between text-4xl'>NAX<span className='text-[#ee7b48] text-4xl'>OO</span></p>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Links
                    page="Explore"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Marketplace"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Community"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Creatures"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Links
                    page="Support"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 text-white`}>
                  <button className="bg-[#ee7b48] hover:bg-orange-600 text-white font-normal py-2 px-4 text-sm rounded-full">
                    Connect Wallet
                  </button>
                </div>
              </>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <IoMenu className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <IoClose className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Links
              page="Explore"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Marketplace"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Community"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Creatures"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Support"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Appbar