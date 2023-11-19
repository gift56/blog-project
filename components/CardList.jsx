import React from "react";
import { Card, Pagination } from ".";

const CardList = () => {
  return (
    <div className="w-full lg:flex-[2] flex flex-col items-start justify-start gap-6">
      <h2 className="text-2xl font-bold md:text-3xl">Recent Post</h2>
      <div className="w-full flex flex-col items-start justify-start gap-8">
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
