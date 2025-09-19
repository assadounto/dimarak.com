import React from "react";
import ItemCard from "../Reusable/ItemCard";

const GridContainer = ({ arrayItem }: any) => {
  return (
    <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {arrayItem.map((item: any, index: number) => (
        <div key={index} className="card-container">
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default GridContainer;
