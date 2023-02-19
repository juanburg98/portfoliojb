import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer>
        <div className='flex flex-row gap-2 items-baseline pb-5'>
          <a
            className='p-2 hover:bg-blue-200 hover:rounded-md'
            href='https://github.com/juanburg98'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              src={'/github.svg'}
              width={24}
              height={24}
              alt='Github profile'
            />
          </a>
          <a
            className='p-2 hover:bg-blue-200 hover:rounded-md'
            href='https://www.linkedin.com/in/juanburg/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              src={'/linkedin.svg'}
              width={24}
              height={24}
              alt='LinkedIn profile'
            />
          </a>
          <a
            className='p-2 hover:bg-blue-200 hover:rounded-md'
            href='https://discord.gg/qaAbzfbeac'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              src={'/discord.svg'}
              width={24}
              height={24}
              alt='Discord profile'
            />
          </a>
          <a
            className='p-2 hover:bg-blue-200 hover:rounded-md'
            href='https://open.spotify.com/user/31ezgf4f3pq4oigr7ydtac5meska?si=578039503c1e4ef2'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              src={'/spotify.svg'}
              width={24}
              height={24}
              alt='Spotify profile'
            />
          </a>
        </div>
        <hr className='w-11/12 border-neutral-300' />
        <div className='font-sans font-normal text-secondary text-base pt-5 text-center'>
          <p>© 2023 Juan Burgueño. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
