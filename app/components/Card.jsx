import Image from "next/image"
export default function Card() {
  return (
    <>
      <div className="md:w-2/5 w-11/12 h-auto rounded-lg hover:border border-solid border-slate-100 shadow-lg">
      <a href="https://juanburg98.github.io/color-samples/" target='_blank' rel='noreferrer noopener'>
        <div className="flex justify-center">
        <Image
        className="p-3"
        src={'/cover-colorsamples.svg'}
        width={500}
        height={400}
        alt="Screenshot of Color Samples"
        />
        </div>
        <div className="flex flex-col justify-start pl-8">
      <h3 className="text-lg font-semibold text-primary">Color Samples</h3>
      <p className="text-base text-secondary pb-3">Color Samples shows you a variety of colors that you can use on your web page.</p>
      </div>
      </a>
      </div>
    </>
  )
}
