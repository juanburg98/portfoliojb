import TimeLine from './components/TimeLine';
import Status from './components/Status';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <section className='flex flex-col md:justify-center md:items-center md:text-center justify-center items-center text-center'>
      <Status />
        <div className='font-sans font-bold text-primary xl:text-8xl lg:text-7xl md:text-7xl text-5xl pt-6'>
          <h1>Hello, I&apos;m</h1>
          <h2>Juan Burgueño</h2>
        </div>
        <div className='font-sans text-secondary font-normal md:text-xl xl:text-2xl text-lg md:pt-9 pt-5'>
          <h3>Front-End Developer</h3>
        </div>
        <div className='font-sans text-secondary font-normal xl:text-xl lg:text-lg md:text-base text-base md:w-1/2 w-10/12 md:pt-14 pt-9'>
          <p>
            I&apos;m from Canelones, Uruguay and I&apos;m 25 years old, I focus
            on design and user experience seeking a usable, inclusive and
            accessible result for all people, along with clean, scalable and
            optimized code. I am a creative person with very good communication
            skills, commitment to the team and critical thinking. I like to keep
            up to date with new technologies continuously learning both as a
            programmer and as a person.
          </p>
        </div>
      </section>
      <TimeLine />
      <section className='flex flex-col md:justify-center md:items-center md:text-center justify-center items-center text-center'>
        <div className='font-sans font-bold text-primary md:text-5xl xl:text-7xl text-4xl lg:pt-32 md:pt-32 pt-14'>
          <h2>My Toolbox &</h2>
          <h2>Things I can do</h2>
        </div>
        <div className='lg:flex lg:flex-row xl:flex flex xl:flex-row md:flex-col flex-col md:pt-16 pt-9 md:gap-4 gap-2 font-sans text-secondary font-bold md:text-4xl lg:text-4xl xl:text-5xl text-3xl'>
          <p>NextJS 13</p>
          <p>Git</p>
          <p>ReactJS</p>
          <p>Tailwind CSS</p>
          <p>Astro</p>
          <p>HTML</p>
          <p>Github</p>
        </div>
      </section>
    </main>
  );
}
