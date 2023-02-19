import TimeLine from './components/TimeLine';
import Status from './components/Status';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <section className='flex flex-col justify-center items-center text-center'>
      <Status />
        <div className='font-sans font-black text-primary text-8xl pt-6'>
          <h1>Hello, I&apos;m</h1>
          <h2>Juan Burgueño</h2>
        </div>
        <div className='font-sans text-secondary font-normal text-xl pt-9'>
          <h3>Front-End Developer</h3>
        </div>
        <div className='font-sans text-secondary font-normal text-lg w-1/2 pt-14'>
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
      <section className='flex flex-col justify-center items-center text-center'>
        <div className='font-sans font-black text-primary text-6xl pt-32'>
          <h2>My Toolbox &</h2>
          <h2>Things I can do</h2>
        </div>
        <div className='flex flex-row pt-16 gap-4 font-sans text-secondary font-bold text-5xl'>
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
