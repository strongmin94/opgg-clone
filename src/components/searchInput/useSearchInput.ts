import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const useSearchInput = () => {
  const { searchList } = useSelector((state: RootState) => state);
  const [value, setValue] = useState<string>("");

  return {
    value,
    setValue,
  };
};

export default useSearchInput;
