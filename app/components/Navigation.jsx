import Image from 'next/image';

export default function Navigation() {
  return (
    <header>
      <nav>
        <div className='flex flex-row justify-between items-center max-h-full h-20 fixed border-b bg-neutral-50/70 top-0 right-0 left-0 z-50 backdrop-blur-md border-neutral-50/70 pr-20 pl-20'>
          <div className='flex items-center'>
            <a href='/'>
              <Image src={'/logo.svg'} width={40} height={40} alt='logo' />
            </a>
          </div>
          <div className='flex flex-row gap-5 items-center'>
            <ul className='flex flex-row gap-5 font-sans text-base font-light text-primary'>
              <a href='/'>
                <li className='p-2 hover:bg-blue-200 hover:rounded-md'>Home</li>
              </a>
              <a href='/works'>
                <li className='p-2 hover:bg-blue-200 hover:rounded-md'>Work</li>
              </a>
              <a href='/contact'>
                <li className='p-2 hover:bg-blue-200 hover:rounded-md'>
                  Contact
                </li>
              </a>
            </ul>
            <a className='p-2 hover:bg-blue-200 hover:rounded-md' href='https://github.com/juanburg98' target='_blank' rel='noreferrer noopener'>
              <Image src={'/github.svg'} width={32} height={32} alt='logo' />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
