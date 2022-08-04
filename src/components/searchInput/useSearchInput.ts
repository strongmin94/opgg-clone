import { useRouter } from "next/router";
import { FormEvent, useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOutsideClick from "../../hooks/useOutsideClick";
import useUpdateEffect from "../../hooks/useUpdateEffect";
import { RootState } from "../../redux/rootReducer";
import { removeSearchList } from "../../redux/searchListSlice";

const useSearchInput = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchList } = useSelector((state: RootState) => state);
  const [value, setValue] = useState<string>("");
  const [isSearchList, setIsSearchList] = useState<boolean>(false);
  const { ref } = useOutsideClick(() => setIsSearchList(false));
  const {
    query: { summonerName },
  } = router;

  useUpdateEffect(() => {
    setValue("");
    setIsSearchList(false);
    inputRef.current?.blur();
  }, [summonerName]);

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (value) {
        router.push(`/summoner/${encodeURIComponent(value)}`);
      }
    },
    [value]
  );

  const onRemoveSearchItem = useCallback((summonerName: string) => {
    dispatch(removeSearchList(summonerName));
  }, []);

  return {
    ref,
    inputRef,
    searchList,
    value,
    setValue,
    onSubmit,
    isSearchList,
    setIsSearchList,
    onRemoveSearchItem,
  };
};

export default useSearchInput;
