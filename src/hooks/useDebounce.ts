import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay?: 500): [string, boolean] => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setLoading(false);
    }, delay);

    return () => {
      setLoading(true);
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue, loading];
};
