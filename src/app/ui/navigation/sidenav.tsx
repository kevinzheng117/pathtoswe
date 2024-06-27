"use client";

import Link from 'next/link';
import NavLinks from '@/app/ui/navigation/nav-links';
import Logo from '@/app/ui/navigation/logo';
import { ArrowRightStartOnRectangleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { OpenContext } from '@/app/context/open-context';
import clsx from 'clsx';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OpenContext.Provider value={isOpen}>
      <div className={clsx("transition-all duration-300 w-full flex-none", isOpen ? 'md:w-64': 'md:w-24')}>
        <div className={"flex h-full flex-col px-3 py-4 md:px-2 bg-black-gray  text-white"}>
          <div className="mb-8 flex p-4 items-center pr-0">
            <Link
              className={clsx("flex h-20 items-center rounded-md",
                {'justify-center, ml-auto': !isOpen}
              )}
              href="/"
            > 
              <Logo />
              <h2 className={clsx("animate-fadeInFromRight ml-3 grow font-serif hidden",
                {
                'md:block': isOpen,
                }
              )}>PathToSWE</h2>
            </Link>
            <button className={clsx("animate-fadeInFromRight btn btn-xs btn-square bg-transparent",
              {'ml-auto': isOpen}
            )} onClick={() => toggleSidebar()}>
              {isOpen ? <ChevronLeftIcon className="w-4" />: <ChevronRightIcon className="w-4"/>}
            </button>
          </div>
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md md:block"></div>
            <form>
              <button className={clsx("transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-concrete-gray hover:text-black-gray md:flex-none md:p-2 md:px-3",
                {'md:justify-start': isOpen}
              )}>
                <ArrowRightStartOnRectangleIcon className="w-6" />
                <div className={clsx("animate-fadeInFromRight", isOpen ? 'md:block' : 'hidden')}>
                  {/* keeps the words together on transition */}
                  Sign&nbsp;Out
                </div> 
              </button>
            </form>
          </div>
        </div>
      </div>
    </OpenContext.Provider>
  );
}