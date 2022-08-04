import Image from "next/image";
import {
  StyleContainer,
  StyleThumbnailWrapper,
  StyleBorderWrapper,
  StyleLevelWrapper,
  StyleLevel,
} from "./userThumbnail.styled";

interface IProps {
  level: number;
  profileBorderImageUrl: string;
  profileImageUrl: string;
}

const UserThumbnail = ({ level, profileBorderImageUrl, profileImageUrl }: IProps) => {
  return (
    <StyleContainer>
      <StyleThumbnailWrapper>
        <Image src={profileImageUrl} width={"100%"} height={"100%"} />
      </StyleThumbnailWrapper>
      <StyleBorderWrapper>
        <Image src={profileBorderImageUrl} layout={"fill"} />
      </StyleBorderWrapper>
      <StyleLevelWrapper>
        <StyleLevel>{level}</StyleLevel>
      </StyleLevelWrapper>
    </StyleContainer>
  );
};

export default UserThumbnail;
