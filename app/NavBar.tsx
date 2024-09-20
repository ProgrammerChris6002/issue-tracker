import React from 'react';
import Link from 'next/link';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const navLinks = [
    {
      label: 'Dashboard',
      href: '/'
    },
    {
      label: 'Issues',
      href: '/issues'
    },
  ];

  return (
    <nav
      className='flex items-center justify-beteen gap-10 h-16 border-b p-5'
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
          className='text-zinc-500 hover:text-zinc-800'
        >
          { link.label }
        </Link>) }
      </ul>

    </nav>
  )
}

export default NavBar;
