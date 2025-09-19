import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number; // Tracks the current slide index
  scrollSnaps: number[]; // Array storing the index of each slide
  onDotButtonClick: (index: number) => void; // Function to navigate to a specific slide
};

// Custom hook to manage dot button functionality in Embla carousel
export const useDotButton = (
  // Carousel API instance from Embla and optional callback when dot is clicked
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0); // State for the currently selected slide index

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]); // State for the list of scroll snap positions (each slide's position)

  // Callback function to handle dot button clicks and update carousel position
  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi); // Trigger optional click event
    },
    [emblaApi, onButtonClick],
  );

  // Initialize snap positions (slide positions) for the carousel
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  // Update selectedIndex when the carousel slide changes
  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  // Effect to initialize and update carousel state on mount or carousel changes
  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi); // Initialize scroll snaps positions
    onSelect(emblaApi); // Set initial selected slide

    // Listen for carousel events to keep selectedIndex in sync with Embla's state
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);

    // Cleanup: remove event listeners when component unmounts or emblaApi changes
    return () => {
      emblaApi
        .off("reInit", onInit)
        .off("reInit", onSelect)
        .off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  // Return the current slide index, scroll positions, and the click handler for dots
  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

// Define the props type for the DotButton component, extending button properties
type PropType = ComponentPropsWithRef<"button">;

// DotButton component to represent individual navigation dots for each slide
export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
