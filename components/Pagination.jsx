"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-between gap-5">
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
};

export default Pagination;
