import Image from "next/image";
import Link from "next/link";

const MenuPost = ({ withImage }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-5">
      <Link to="/" className="flex items-center justify-start gap-5"></Link>
    </div>
  );
};

export default MenuPost;
