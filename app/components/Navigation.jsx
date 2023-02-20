'use client';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    route: '/',
    label: 'Home',
  },
  {
    route: '/works',
    label: 'Work',
  },
  {
    route: '/contact',
    label: 'Contact',
  },
];

export default function Navigation() {
  return (
    <header>
      <nav>
        <div className='flex flex-row md:justify-between justify-between items-center md:max-w-full md:h-20 h-14 md:fixed border-b bg-neutral-50/70 top-0 right-0 left-0 z-50 backdrop-blur-md border-neutral-300 md:pl-16 pl-3 md:pr-16 pr-3'>
          <div className='flex items-center'>
            <a href='/'>
              <Image src={'/logo.svg'} width={40} height={40} alt='logo' />
            </a>
          </div>
          <div className='flex flex-row gap-5 items-center'>
            <ul className='hidden md:flex md:flex-row gap-5 font-sans text-base font-normal text-secondary'>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
            <a
              className='md:p-2 hover:bg-blue-200 hover:rounded-md'
              href='https://github.com/juanburg98'
              aria-label='View Source Code'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image src={'/github.svg'} width={32} height={32} alt='logo' />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
