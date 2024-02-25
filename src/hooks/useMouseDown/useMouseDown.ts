import { DependencyList, useCallback, useEffect, useRef } from "react";

const useMouseDown = (callback = () => {}, deps: DependencyList = []) => {
  const ref = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback((event: MouseEvent) => {
    if (
      event.target instanceof Node &&
      !ref?.current?.contains(event?.target)
    ) {
      callback?.();
    }
  }, deps);

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, deps);

  return {
    ref,
  };
};
export { useMouseDown };
