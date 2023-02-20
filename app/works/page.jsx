import Card from "../components/Card";
export default function Works() {
  return (
    <div className="container mx-auto">
      <div className='text-center font-sans font-bold text-primary md:text-6xl text-4xl md:pt-48 pt-12'>
        <h1>My Works</h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center pt-14 gap-5">
      <Card />
      <Card />
      </div>
    </div>
  );
}
