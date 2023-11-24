"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-between gap-5">
      <button
        type="button"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
        className="w-[100px] h-12 border border-primary rounded-lg bg-primary text-white disabled:bg-[#dc143c79] disabled:border-[#dc143c79] disabled:cursor-not-allowed transition-all duration-300"
      >
        Previous
      </button>
      <button
        type="button"
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
        className="w-[100px] h-12 border border-primary bg-primary rounded-lg text-white disabled:bg-[#dc143c79] disabled:border-[#dc143c79] disabled:cursor-not-allowed transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
