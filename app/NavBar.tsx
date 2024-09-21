'use client';

import React from 'react';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const navLinks = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/Issues',
    },
  ];
  const currentPath = usePathname();

  return (
    <nav
      className='flex space-x-6 mb-5 h-14 border-b px-5 items-center'
    >
      <Link
        href='/'
      >
        <AiFillBug
        />
      </Link>

      <ul
        className='flex space-x-6'
      >
        { navLinks.map((link) => <Link
          href={ link.href }
          key={ link.href }
          className={ classNames({
            'text-zinc-900': link.href === currentPath,
            'text-zinc-500': link.href !== currentPath,
            'hover:text-zinc-700 transition-colors': true,
          }) }
        >
          { link.label }
        </Link>) }
      </ul>

    </nav>
  )
}

export default NavBar;
