import Image from 'next/image';

export default function TimeLine() {
  return (
    <>
      <section>
        <div className='font-sans font-black text-primary text-6xl pt-32 text-center'>
          <h2>Studies</h2>
        </div>
        <div className='flex justify-center pt-24'>
          <ol className='relative border-l border-neutral-300'>
            <li className='mb-10 ml-4'>
              <div className='flex flex-row items-center gap-4 pb-5'>
                <div className='flex flex-row items-center'>
                  <div className='absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5'></div>
                  <Image
                    src={'/google.svg'}
                    width={90}
                    height={90}
                    alt='Google logo'
                  />
                </div>
                <div className='flex flex-col justify-start'>
                  <time className='text-sm font-normal font-sans leading-none text-secondary'>
                    January 2023 - February 2023
                  </time>
                  <h3 className='text-lg font-semibold font-sans text-primary'>
                    Agile Project Management
                  </h3>
                </div>
              </div>
            </li>
            <li className='mb-10 ml-4'>
              <div className='flex flex-row items-center gap-4 pb-5'>
                <div className='flex flex-row items-center'>
                  <div className='absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5'></div>
                  <Image
                    src={'/coderhouse.svg'}
                    width={90}
                    height={90}
                    alt='Coderhouse logo'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <time className='mb-1 text-sm font-normal font-sans leading-none text-secondary'>
                    January 2023 - Currently
                  </time>
                  <h3 className='text-lg font-semibold font-sans text-primary'>
                    Back-End
                  </h3>
                </div>
              </div>
            </li>
            <li className='mb-10 ml-4'>
              <div className='flex flex-row items-center gap-4 pb-5'>
                <div className='flex flex-row items-center'>
                  <div className='absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5'></div>
                  <Image
                    src={'/coderhouse.svg'}
                    width={90}
                    height={90}
                    alt='Coderhouse logo'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <time className='mb-1 text-sm font-normal font-sans leading-none text-secondary'>
                    November 2022 - January 2023
                  </time>
                  <h3 className='text-lg font-semibold font-sans text-primary'>
                    ReactJs
                  </h3>
                </div>
              </div>
            </li>
            <li className='mb-10 ml-4'>
              <div className='flex flex-row items-center gap-4 pb-5'>
                <div className='flex flex-row items-center'>
                  <div className='absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5'></div>
                  <Image
                    src={'/coderhouse.svg'}
                    width={90}
                    height={90}
                    alt='Coderhouse logo'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <time className='mb-1 text-sm font-normal font-sans leading-none text-secondary'>
                    September 2022 - November 2022
                  </time>
                  <h3 className='text-lg font-semibold font-sans text-primary'>
                    JavaScript
                  </h3>
                </div>
              </div>
            </li>
            <li className='mb-10 ml-4'>
              <div className='flex flex-row items-center gap-4 pb-5'>
                <div className='flex flex-row items-center'>
                  <div className='absolute w-3 h-3 bg-blue-200 rounded-full mt-1.5 -left-1.5'></div>
                  <Image
                    src={'/coderhouse.svg'}
                    width={90}
                    height={90}
                    alt='Coderhouse logo'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <time className='mb-1 text-sm font-normal font-sans leading-none text-secondary'>
                    June 2022 - August 2022
                  </time>
                  <h3 className='text-lg font-semibold font-sans text-primary'>
                    Web Development
                  </h3>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
