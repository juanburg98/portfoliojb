import Image from "next/image"
export default function Card() {
  return (
    <>
      <div className="w-2/5 h-auto border border-solid shadow-lg rounded-xl">
        <div className="flex justify-center">
        <Image
        className="p-3"
        src={'/examplo.webp'}
        width={500}
        height={400}
        alt="Picture of the author"
        />
        </div>
        <div className="flex flex-col justify-start pl-8">
      <h3 className="text-lg font-semibold text-primary">Personal Website</h3>
      <p className="text-base text-secondary pb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla natus, est at reprehenderit nihil tempore.</p>
      </div>
      </div>
    </>
  )
}
