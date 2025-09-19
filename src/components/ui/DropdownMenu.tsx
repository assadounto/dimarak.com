import React from "react";
import SubContent from "./subcontent";

interface DropdownMenuProps {
  subcategories: {
    title: string;
    items: string[];
  }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ subcategories }) => {
  const columnCount = Math.min(subcategories.length, 5) || 5;
  const gridCols = `grid-cols-5`;

  return (
    <div className="invisible fixed left-1/2 top-[140px] z-20 max-h-[600px] w-[1400px] -translate-x-1/2 overflow-y-auto bg-white px-8 py-6 pt-5 opacity-0 shadow-lg transition-all delay-300 duration-300 group-hover:visible group-hover:opacity-100">
      <div className={`grid pb-10 ${gridCols} gap-6`}>
        {subcategories.map((subcategory, index) => (
          <SubContent
            key={index}
            title={subcategory.title}
            items={subcategory.items}
          />
        ))}
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 bg-gray-500 text-white text-center py-2 mt-4">
        <p className="text-sm font-semibold">Subscribe to get 6% off your next purchase!</p>
      </div> */}
    </div>
  );
};

export default DropdownMenu;
