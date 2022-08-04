import Image from "next/image";
import Link from "next/link";
import {
  StyleContainer,
  StyleSearchListTabList,
  StyleSearchListTabItem,
  StyleSearchList,
  StyleSearchItem,
  StyleEmptySearchList,
  StyleEmptyInfo,
  StyleSearchLinkWrapper,
  StyleSearchLink,
  StyleRemoveButton,
} from "./searchList.styled";

interface IProps {
  searchList: Array<string>;
  onRemoveSearchItem: (summonerName: string) => void;
}

const SearchList = ({ searchList, onRemoveSearchItem }: IProps) => {
  return (
    <StyleContainer>
      <StyleSearchListTabList>
        <StyleSearchListTabItem isActive={true}>최근검색</StyleSearchListTabItem>
        <StyleSearchListTabItem isActive={false} onClick={() => alert("지원하지 않는 기능입니다.")}>
          즐겨찾기
        </StyleSearchListTabItem>
      </StyleSearchListTabList>
      {searchList.length > 0 ? (
        <StyleSearchList>
          {searchList.map((item, idx) => (
            <StyleSearchItem key={`search_${idx}`}>
              <StyleSearchLinkWrapper>
                <Link href={`/summoner/${item}`} passHref>
                  <StyleSearchLink>{item}</StyleSearchLink>
                </Link>
              </StyleSearchLinkWrapper>
              <StyleRemoveButton type="button" onClick={() => onRemoveSearchItem(item)}>
                <Image src={"/icons/icon-close-small.svg"} width={24} height={24} />
              </StyleRemoveButton>
            </StyleSearchItem>
          ))}
        </StyleSearchList>
      ) : (
        <StyleEmptySearchList>
          <StyleEmptyInfo>최근에 본 소환사가 없습니다.</StyleEmptyInfo>
        </StyleEmptySearchList>
      )}
    </StyleContainer>
  );
};

export default SearchList;
