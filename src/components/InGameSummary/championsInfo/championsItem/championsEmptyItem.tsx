import {
  StyleContaier,
  StyleDescriptionWrapper,
  StyleEmptyDescription,
  StyleThumbnail,
} from "./championsItem.styled";

const ChampionsEmptyItem = () => {
  return (
    <StyleContaier>
      <StyleThumbnail src={"/icons/group.png"} />
      <StyleDescriptionWrapper>
        <StyleEmptyDescription>챔피언 정보가 없습니다.</StyleEmptyDescription>
      </StyleDescriptionWrapper>
    </StyleContaier>
  );
};

export default ChampionsEmptyItem;
