import React from "react";

const CategoriesSection = () => {
  return (
    <div className="py-8">
      <div className="flex items-center  gap-3 ">
        <div className="h-10 w-5 bg-primary rounded-sm max-2xl:h-8 max-2xl:w-4"></div>
        <h2 className="text-lg text-primary capitalize font-bold max-2xl:text-base __className_153980">
          Categories
        </h2>
      </div>

      <div className="text-4xl pt-5 pb-8 font-bold">Browse by Category</div>

      <div className="flex gap-10">
        <div className="w-36 h-32 border-2 border-gray-300 rounded-md hover:bg-blue-700 flex flex-col items-center justify-center hover:text-white">
          Garderner
        </div>

        <div className="w-36 h-32 border-2 border-gray-300 rounded-md hover:bg-blue-700 flex flex-col items-center justify-center hover:text-white">
          Painter
        </div>

        <div className="w-36 h-32 border-2 border-gray-300 rounded-md hover:bg-blue-700 flex flex-col items-center justify-center hover:text-white">
          Sweeper
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
