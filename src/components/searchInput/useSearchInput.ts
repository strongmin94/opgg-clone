import { useState } from "react";

const useSearchInput = () => {
  const [value, setValue] = useState<string>("");

  return {
    value,
    setValue,
  };
};

export default useSearchInput;
