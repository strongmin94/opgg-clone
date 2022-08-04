import Image from "next/image";
import useSearchInput from "./useSearchInput";
import { StyleContainer, StyleInput, StyleSearchButton } from "./searchInput.styled";
import SearchList from "./searchList/searchList";

const SearchInput = () => {
  const {
    ref,
    inputRef,
    searchList,
    value,
    setValue,
    onSubmit,
    isSearchList,
    setIsSearchList,
    onRemoveSearchItem,
  } = useSearchInput();

  return (
    <StyleContainer ref={ref} onSubmit={onSubmit}>
      <StyleInput
        ref={inputRef}
        type={"search"}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        placeholder="소환사명,챔피언…"
        onFocus={() => setIsSearchList(true)}
      />
      <StyleSearchButton type={"submit"}>
        <Image src={"/icons/icon-gg.svg"} width={30} height={13.5} />
      </StyleSearchButton>
      {isSearchList && (
        <SearchList searchList={searchList} onRemoveSearchItem={onRemoveSearchItem} />
      )}
    </StyleContainer>
  );
};

export default SearchInput;
