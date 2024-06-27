'use client';

import {
  HomeIcon,
  ListBulletIcon,
  UserIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
import clsx from 'clsx';
import { useContext } from 'react';
import { OpenContext } from '@/app/context/open-context'

// Map of links to display in the side navigation.
const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Search',
    href: '/dashboard/search',
    icon: ListBulletIcon,
  },
  { name: 'Account', href: '/dashboard/account', icon: UserIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const open = useContext(OpenContext);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-105 duration-300 flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-concrete-gray hover:text-black-gray md:flex-none md:p-2 md:px-3',
              {
                'bg-concrete-gray text-black': pathname === link.href,
                'md:justify-start': open,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className={clsx("hidden",
              {'md:block': open}
            )}>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
