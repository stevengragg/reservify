import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className="rounded-xl items-center m-2 mt-5 cursor-pointer hover:scale-105 hover:bg-teal-100 transition transform duration-200 ease-out">
      <div className="relative h-64 w-64">
        <Image layout="fill" src={img} alt="You can live with these locations" className="rounded-xl" />
      </div>
      <div className="text-center">
        <h2 className="font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default MediumCard;
