import Image from "next/image";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IItem } from "../../../datas/item";
import { ImageObj } from "../../../datas/match";
import { RootState } from "../../../redux/rootReducer";
import { notNumberRegex } from "../../../tools/regex";
import {
  StyleContainer,
  StyleItem,
  StyleItemImage,
  StyleItemList,
  StyleVisionWardInfoWrapper,
  StyleVisionWardInfo,
} from "./itemInfo.styled";

interface IProps {
  items: Array<ImageObj>;
  isWin: boolean;
  visionWardsBought: number;
}

const ItemInfo = ({ items, isWin, visionWardsBought }: IProps) => {
  const { itemList: itemInfoList } = useSelector((state: RootState) => state);
  const itemList = useMemo<Array<IItem | null>>(() => {
    const result: Array<IItem | null> = [];
    for (let i = 0; i < 8; i++) {
      if (items[i]) {
        const itemId = items[i].imageUrl.replace(notNumberRegex, "");
        if (itemInfoList[itemId]) {
          result.push({
            ...items[i],
            ...itemInfoList[itemId],
          });
        }
      } else {
        result.push(null);
      }
    }
    return result;
  }, []);

  return (
    <StyleContainer>
      <StyleItemList>
        {itemList.map((item, idx) => (
          <StyleItem key={`item_${idx}`} isWin={isWin}>
            {item && <StyleItemImage src={item.imageUrl} />}
          </StyleItem>
        ))}
      </StyleItemList>
      <StyleVisionWardInfoWrapper>
        <Image src={"/icons/icon-ward-red.png"} width={16} height={16} />
        <StyleVisionWardInfo>{`제어와드 ${visionWardsBought}`}</StyleVisionWardInfo>
      </StyleVisionWardInfoWrapper>
    </StyleContainer>
  );
};

export default ItemInfo;
