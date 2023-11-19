import React from "react";

const Menu = () => {
  return (
    <div className="w-full lg:flex-[0.5] flex flex-col items-start justify-start gap-6">
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark">{`What's Happening 🗞️`}</h4>
        <h2 className="text-xl font-semibold md:text-2xl text-darkBg">
          Most Popular
        </h2>
      </div>
    </div>
  );
};

export default Menu;
