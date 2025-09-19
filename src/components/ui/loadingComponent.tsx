import React from "react";

const LoadingComponent = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <div className="flex space-x-2">
        <div
          className="h-3 w-3 animate-pulse rounded-full bg-black"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="h-3 w-3 animate-pulse rounded-full bg-black"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="h-3 w-3 animate-pulse rounded-full bg-black"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
