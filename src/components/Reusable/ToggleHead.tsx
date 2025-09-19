import React from "react";
import Image from "next/image";

interface TrendingHeaderProps {
  title: string;
  isGridView?: boolean;
  setIsGridView?: (value: boolean) => void;
}

const ToggleHeader: React.FC<TrendingHeaderProps> = ({
  title,
  isGridView,
  setIsGridView,
}) => {
  return (
    <div className="bg-buttonColor flex justify-between items-center p-4 relative">
      <h2 className="text-white font-bold text-center w-full">{title}</h2>

      {isGridView !== undefined && setIsGridView && (
        <div className="flex items-center gap-4 absolute right-4">
          <Image
            src={isGridView ? "/hamburger.svg" : "/hamburgerOrange.svg"}
            alt="Toggle to Row View"
            width={24}
            height={24}
            onClick={() => setIsGridView(false)}
            className="cursor-pointer"
          />
          <Image
            src={isGridView ? "/OrangeIcon.svg" : "/WhiteIcon.svg"}
            alt="Toggle to Grid View"
            width={24}
            height={24}
            onClick={() => setIsGridView(true)}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default ToggleHeader;
