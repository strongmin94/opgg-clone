import Image from "next/image";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import ToolTip from "../../../../../../components/tooltip/tooltip";
import { IItemObject } from "../../../../../../datas/item";
import { ImageObj } from "../../../../../../datas/match";
import { RootState } from "../../../../../../redux/rootReducer";
import { notNumberRegex } from "../../../../../../tools/regex";
import {
  StyleContainer,
  StyleItem,
  StyleItemImage,
  StyleItemList,
  StyleVisionWardInfoWrapper,
  StyleVisionWardInfo,
  StyleTooltipDescription,
  StyleTooltipTitle,
} from "./itemInfo.styled";

interface IProps {
  items: Array<ImageObj>;
  isWin: boolean;
  visionWardsBought: number;
}

const ItemInfo = ({ items, isWin, visionWardsBought }: IProps) => {
  const { itemList } = useSelector((state: RootState) => state);
  const renderItemList = useMemo<Array<IItemObject | null>>(() => {
    const result: Array<IItemObject | null> = [];
    for (let i = 0; i < 8; i++) {
      if (items[i]) {
        const itemId = items[i].imageUrl.replace(notNumberRegex, "");
        if (itemList[itemId]) {
          result.push({
            ...items[i],
            itemInfo: itemList[itemId],
          });
        } else {
          result.push(items[i]);
        }
      } else {
        result.push(null);
      }
    }
    return result;
  }, [itemList]);

  return (
    <StyleContainer>
      <StyleItemList>
        {renderItemList.map((item, idx) => (
          <StyleItem key={`item_${idx}`} isWin={isWin}>
            {item && item.itemInfo && (
              <ToolTip
                tooltip={
                  <>
                    <StyleTooltipTitle>{item.itemInfo.name}</StyleTooltipTitle>
                    <StyleTooltipDescription>{item.itemInfo.plaintext} </StyleTooltipDescription>
                  </>
                }
              >
                <StyleItemImage src={item.imageUrl} />
              </ToolTip>
            )}
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
