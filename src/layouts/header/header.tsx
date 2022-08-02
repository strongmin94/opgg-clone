import SearchInput from "../../components/searchInput/searchInput";
import { StyleContainer, StyleContentsWrapper } from "./header.styled";

const Header = () => {
  return (
    <StyleContainer>
      <StyleContentsWrapper>
        <SearchInput />
      </StyleContentsWrapper>
    </StyleContainer>
  );
};

export default Header;
