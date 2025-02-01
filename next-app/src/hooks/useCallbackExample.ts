import { useCallback, useState } from "react";

export const useToggle = (initialValue: boolean = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggle] as const;
};
