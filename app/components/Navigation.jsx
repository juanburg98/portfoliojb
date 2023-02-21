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
    route: '/extensions',
    label: 'Extensions',
  },
];

export default function Navigation() {
  return (
    <header>
      <nav>
        <div className='flex flex-row md:justify-between justify-between items-center xl:max-w-full lg:max-w-full md:max-w-full max-w-full md:h-20 h-14 xl:fixed lg:fixed md:fixed fixed border-b bg-neutral-50/70 top-0 right-0 left-0 z-50 backdrop-blur-md border-neutral-300 lg:pl-16 md:pl-8 pl-3 lg:pr-16 md:pr-8 pr-3'>
          <div className='flex items-center'>
            <a href='/'>
              <Image src={'/icons/logo.svg'} width={40} height={40} alt='logo' />
            </a>
          </div>
          <div className='flex flex-row gap-5 items-center'>
            <ul className='hidden md:flex md:flex-row lg:flex lg:flex-row gap-5 font-sans xl:text-base lg:text-base text-base font-normal text-secondary'>
              {links.map(({ label, route }) => (
                <li className='focus:text-primary md:focus:text-primary lg:focus:text-primary xl:focus:text-primary md:p-2 lg:p-2 xl:p-2 md:hover:bg-blue-200 md:hover:rounded-md lg:hover:bg-blue-200 lg:hover:rounded-md xl:hover:bg-blue-200 xl:hover:rounded-md' key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
            <a
              className='md:p-2 lg:p-2 xl:p-2 md:hover:bg-blue-200 md:hover:rounded-md lg:hover:bg-blue-200 lg:hover:rounded-md xl:hover:bg-blue-200 xl:hover:rounded-md'
              href='https://github.com/juanburg98/portfoliojb'
              aria-label='View Source Code'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image className='focus:text-primary md:focus:text-primary lg:focus:text-primary xl:focus:text-primary' src={'/icons/github.svg'} width={32} height={32} alt='logo' />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
