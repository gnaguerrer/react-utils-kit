import { useState, useEffect } from "react";

export const useWindowSize = (): {
  windowWidth: {
    width: number;
    height: number;
  };
} => {
  const [windowSize, setWindowSize] = useState({});

  useEffect(() => {
    const handler = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handler();

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return windowSize;
};
