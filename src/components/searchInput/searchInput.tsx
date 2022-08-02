import { StyleContainer, StyleInput } from "./searchInput.styled";
import useSearchInput from "./useSearchInput";

const SearchInput = () => {
  const { value, setValue } = useSearchInput();

  return (
    <StyleContainer>
      <StyleInput
        type={"search"}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        placeholder="소환사명,챔피언…"
      />
    </StyleContainer>
  );
};

export default SearchInput;
