import TimeLine from './components/TimeLine';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <section className='flex flex-col justify-center items-center text-center'>
        <div className='font-sans font-bold text-primary text-8xl pt-32'>
          <h1>Hello, I&apos;m</h1>
          <h2>Juan Burgueño</h2>
        </div>
        <div className='font-sans text-secondary text-xl pt-6'>
          <h3>Front-End Developer</h3>
        </div>
        <div className='font-sans text-secondary text-xl w-1/2 pt-14'>
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
        <div>
          <p>NextJS 13</p>
        </div>
      </section>
    </main>
  );
}
