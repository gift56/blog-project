import React from "react";
import { Pagination } from ".";

const CardList = () => {
  return (
    <div className="w-full lg:flex-[2] flex flex-col items-start justify-start gap-6">
      <h2 className="text-2xl font-bold md:text-3xl">Recent Post</h2>
      <div className="w-full flex flex-col items-start justify-start gap-8">
        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-8 md:items-center">
          
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
