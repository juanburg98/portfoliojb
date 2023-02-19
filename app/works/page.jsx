import Card from "../components/Card";
export default function Works() {
  return (
    <div className="container mx-auto">
      <div className='text-center font-sans font-black text-primary text-6xl pt-32'>
        <h1>My Works</h1>
      </div>
      <div className="flex justify-center items-center pt-14 gap-5">
      <Card />
      <Card />
      </div>
    </div>
  );
}
