import React from "react";
import { MenuCategories, MenuPost } from ".";

const Menu = () => {
  return (
    <div className="w-full lg:flex-[0.8] flex flex-col items-start justify-start gap-6">
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark dark:text-[#C0C5D0]">{`What's Happening 🗞️`}</h4>
        <h2 className="text-xl font-bold md:text-2xl">
          Most Popular
        </h2>
      </div>
      <MenuPost />
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark dark:text-[#C0C5D0]">
          Discover by topic
        </h4>
        <h2 className="text-xl font-bold md:text-2xl">
          Categories
        </h2>
      </div>
      <MenuCategories />
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark dark:text-[#C0C5D0]">
          Chosen by the author
        </h4>
        <h2 className="text-xl font-bold md:text-2xl">
          Editors Pick
        </h2>
      </div>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
