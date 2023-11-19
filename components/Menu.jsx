import React from "react";
import { MenuCategories, MenuPost } from ".";

const Menu = () => {
  return (
    <div className="w-full lg:flex-[0.8] flex flex-col items-start justify-start gap-6">
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark">{`What's Happening 🗞️`}</h4>
        <h2 className="text-xl font-bold md:text-2xl text-darkBg">
          Most Popular
        </h2>
      </div>
      <MenuPost />
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark">
          Discover by topic
        </h4>
        <h2 className="text-xl font-bold md:text-2xl text-darkBg">
          Categories
        </h2>
      </div>
      <MenuCategories />
      <div>
        <h4 className="text-sm font-medium md:text-base text-dark">
          Chosen by the author
        </h4>
        <h2 className="text-xl font-bold md:text-2xl text-darkBg">
          Editors Pick
        </h2>
      </div>
      <MenuPost withImage={true} />
    </div>
  );
};

export default Menu;
