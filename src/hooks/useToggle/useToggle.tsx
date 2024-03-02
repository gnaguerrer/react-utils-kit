import { useCallback, useEffect, useState } from "react";

const useToggle = (initialState?: boolean) => {
  const [value, setValue] = useState(initialState ?? false);

  const handleToggle = useCallback((state?: boolean) => {
    if (state !== undefined) {
      return setValue(!!state);
    }

    return setValue((v) => !v);
  }, []);

  useEffect(() => {
    handleToggle(initialState);
  }, [initialState]);

  return { value, handleToggle };
};
export { useToggle };
