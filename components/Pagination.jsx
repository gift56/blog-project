"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="w-full flex items-center justify-between gap-5">
      <button type="button" disabled={!has} className="w-[100px] border border-primary bg-primary text-white disabled:bg-[#dc143c79] disabled:cursor-not-allowed">Previous</button>
      <button type="button" disabled={!has} className="w-[100px] border border-primary bg-primary text-white disabled:bg-[#dc143c79] disabled:cursor-not-allowed">Next</button>
    </div>
  );
};

export default Pagination;
