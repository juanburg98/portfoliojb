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

export default function Footer() {
  return (
    <>
      <footer>
        <div className='flex flex-col md:flex-row md:justify-between items-center md:mx-16 md:pt-32 pt-16'>
          <ul className='md:flex flex flex-row md:flex-row justify-items-center grid-cols-2 md:gap-3 gap-y-3 gap-x-6 font-sans md:text-base text-base font-normal text-secondary'>
            {links.map(({ label, route }) => (
              <li className='focus:text-primary md:focus:text-primary lg:focus:text-primary xl:focus:text-primary md:p-2 lg:p-2 xl:p-2 md:hover:bg-blue-200 md:hover:rounded-md lg:hover:bg-blue-200 lg:hover:rounded-md xl:hover:bg-blue-200 xl:hover:rounded-md' key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className='flex flex-row md:gap-2 gap-3 md:items-baseline items-center pt-5 pb-5'>
            <a
              className='md:p-2 lg:p-2 xl:p-2 md:hover:bg-blue-200 md:hover:rounded-md lg:hover:bg-blue-200 lg:hover:rounded-md xl:hover:bg-blue-200 xl:hover:rounded-md'
              href='https://github.com/juanburg98'
              aria-label='View Github Profile'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image
                className='focus:text-primary md:focus:text-primary lg:focus:text-primary xl:focus:text-primary'
                src={'/icons/github.svg'}
                width={24}
                height={24}
                alt='Github profile'
              />
            </a>
            <a
              className='md:p-2 lg:p-2 xl:p-2 md:hover:bg-blue-200 md:hover:rounded-md lg:hover:bg-blue-200 lg:hover:rounded-md xl:hover:bg-blue-200 xl:hover:rounded-md'
              href='https://www.linkedin.com/in/juanburg/'
              aria-label='View LinkedIn Profile'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image
                className='focus:text-primary md:focus:text-primary lg:focus:text-primary xl:focus:text-primary'
                src={'/icons/linkedin.svg'}
                width={22}
                height={22}
                alt='LinkedIn profile'
              />
            </a>
            <a
              className='md:p-2 lg:p-2 xl:p-2 md:hover:bg-blue-200 md:hover:rounded-md lg:hover:bg-blue-200 lg:hover:rounded-md xl:hover:bg-blue-200 xl:hover:rounded-md'
              href='https://open.spotify.com/user/31ezgf4f3pq4oigr7ydtac5meska?si=578039503c1e4ef2'
              aria-label='View Spotify Profile'
              target='_blank'
              rel='noreferrer noopener'
            >
              <Image
                className='focus:text-primary md:focus:text-primary lg:focus:text-primary xl:focus:text-primary'
                src={'/icons/spotify.svg'}
                width={24}
                height={24}
                alt='Spotify profile'
              />
            </a>
          </div>
        </div>
        <hr className='border-neutral-300 md:mx-16 mx-8' />
        <div className='font-sans font-normal text-secondary md:text-base text-sm pt-5 md:pb-3 lg:pb-3 xl:pb-3 pb-3 text-center'>
          <p>© 2023 Juan Burgueño. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
