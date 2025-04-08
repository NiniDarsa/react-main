import { useEffect, useState } from "react";

const useIntersectionObserver = (id: string) => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation when the element comes into view
          setInView(true);
        } else {
          // Optional: Reset if the element leaves the viewport
          setInView(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    // Target the element you want to observe
    const target = document.getElementById(id);
    target && observer.observe(target);

    // Cleanup the observer on component unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return inView;
};
export default useIntersectionObserver;
