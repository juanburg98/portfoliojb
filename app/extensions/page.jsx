import Image from 'next/image';

export default function Extensions() {
  return (
    <>
      <section className='container mx-auto ml-3'>
        <div className='font-sans font-bold text-primary md:text-6xl text-4xl md:pt-48 pt-12 w-11/12'>
          <h2>VSCode Extensions</h2>
        </div>
        <div className='font-sans text-primary font-normal md:text-xl text-lg w-11/12 pt-12'>
          <p>Here is the list of my favorite extensions that I love to use every day for programming.</p>
        </div>
        <div>
          <h3 className='font-sans text-accent font-medium text-2xl pt-20'>Extensions:</h3>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>One Dark Theme</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>The theme that I use all the time.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>CodeSnap</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>Take screenshots of your code by hitting Cmd+Shift+P on OS X or Ctrl+Shift+P on Windows/Linux.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>EsLint</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>An analysis tool for identifying problematic patterns that are found in JavaScript code, making code more consistent and avoiding bugs.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>Prettier</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>GitHub Copilot</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>An AI pair programmer that helps you write code faster and with less work. GitHub Copilot draws context from comments and code, and suggests individual lines and whole functions instantly.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>GitLens</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>An open-source extension for Visual Studio Code, supercharging Git inside VS Code and unlocking untapped knowledge within each repository.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>Import Cost</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>Provides instant feedback upon importing large packages.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>Tailwind CSS IntelliSense</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>Provides help with autocompleted, syntax highlighting, and linting. It also offers suggestions for class names, CSS functions, and directives.</p>
        </div>
        <div>
          <h4 className='font-sans text-primary font-medium md:text-2xl text-xl pt-14'>RapidAPI Client</h4>
          <p className='font-sans text-secondary font-normal md:text-xl text-lg w-11/12'>RapidAPI Client is a full-featured HTTP client that lets you test and describes the APIs you build or consume.</p>
        </div>
      </section>
    </>
  );
}
