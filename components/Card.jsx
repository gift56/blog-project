import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-start gap-8 md:items-center">
      <div className="w-full lg:flex-1 relative">
        <Image
          src="/p1.jpeg"
          alt="island"
          width={500}
          height={500}
          className="!w-full md:!h-[300px] rounded-lg"
        />
      </div>
      <div className="w-full lg:flex-1 flex flex-col items-start justify-start gap-6">
        <p className="text-sm uppercase text-gray-500 md:text-base font-medium">
          <span>11.2.2023</span> - <span>Culture</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
