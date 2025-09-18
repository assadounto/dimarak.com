"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons (install lucide-react if needed)

function Story() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stories = [
    {
      name: "Favor",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    { name: "Rich", image: "/status2.png", profileImage: "/profileImage2.png" },
    {
      name: "Joyce",
      image: "/status3.png",
      profileImage: "/profileImage1.png",
    },
    { name: "Jane", image: "/status1.png", profileImage: "/profileImage2.png" },
    {
      name: "Favor",
      image: "/status2.png",
      profileImage: "/profileImage1.png",
    },
    { name: "Rich", image: "/status3.png", profileImage: "/profileImage2.png" },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    {
      name: "Joyce",
      image: "/status1.png",
      profileImage: "/profileImage1.png",
    },
    { name: "Jane", image: "/status2.png", profileImage: "/profileImage1.png" },
    { name: "Jane", image: "/status2.png", profileImage: "/profileImage1.png" },
    { name: "Jane", image: "/status2.png", profileImage: "/profileImage1.png" },
    { name: "Jane", image: "/status2.png", profileImage: "/profileImage1.png" },
    { name: "Jane", image: "/status2.png", profileImage: "/profileImage1.png" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300; // Adjust this value as needed
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden mx-auto !max-w-[111rem] md:flex md:px-[4rem] px-[1.3rem] pt-[2rem] w-full gap-3 relative">
      {/* Navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </button>

      <div
        className="item-container w-full overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex w-max gap-3 mx-auto py-2">
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[8rem] relative w-[7rem] rounded-[12px] overflow-hidden flex-col items-center"
            >
              <Image
                src={story.image}
                alt={story.name}
                width={50}
                height={50}
                className="h-full w-full object-cover"
              />

              <div className="profile-container flex items-start gap-1 absolute bottom-4 left-2">
                <div className="profile-image h-[2.1rem] w-[2.1rem] overflow-hidden rounded-full bg-gray-500 block">
                  <Image
                    src={story?.profileImage}
                    alt={story.name}
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs lg:text-sm text-white font-semibold">
                  {story.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;
