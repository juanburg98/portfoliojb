export default function Contact() {
  return (
    <>
      <section className='container mx-auto ml-3'>
        <div className='font-sans font-bold text-primary md:text-6xl text-4xl md:pt-48 pt-12'>
          <h2>Contact</h2>
        </div>
        <div className='md:pt-14 pt-7'>
          <form>
            <div className='flex flex-col items-start gap-2 pb-2'>
              <label
                for='email'
                className='font-sans text-primary font-medium text-lg'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                className='font-sans text-secondary font-normal text-base border border-solid border-neutral-300 rounded-md py-2 pl-2 md:w-1/2 w-11/12'
                placeholder='name@email.com'
              />
            </div>
            <div className='flex flex-col items-start gap-2 pb-2'>
              <label
                for='subject'
                className='font-sans text-primary font-medium text-lg'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                className='font-sans text-secondary font-normal text-base border border-solid border-neutral-300 rounded-md py-2 pl-2 md:w-1/2 w-11/12'
                placeholder='Let us know how we can help you'
              />
            </div>
            <div className='flex flex-col items-start gap-2 pb-2'>
              <label
                for='message'
                className='font-sans text-primary font-medium text-lg'
              >
                Your message
              </label>
              <textarea
                id='message'
                rows='6'
                className='font-sans text-secondary font-normal text-base border border-solid border-neutral-300 rounded-md py-2 pl-2 md:w-1/2 w-11/12'
                placeholder='Leave a comment...'
              ></textarea>
            </div>
            <div className='pt-7'>
              <button
                type='submit'
                className='font-sans text-blue-200 font-normal md:text-lg text-base border bg-primary hover:bg-blue-200 hover:text-primary md:px-3 md:py-3 px-2 py-2 md:rounded-md rounded-md'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
