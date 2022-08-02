import { Dispatch, SetStateAction } from "react";
import { ITabItem } from "../../datas/tabItem";
import { StyleContainer, StyleNavItem, StyleNavList } from "./navigation.styled";

interface IProps {
  list: Array<ITabItem>;
  value: ITabItem;
  onChange: Dispatch<SetStateAction<any>>;
}

const Navigation = ({ value, onChange, list }: IProps) => {
  return (
    <StyleContainer>
      <StyleNavList>
        {list.map((item, idx) => (
          <StyleNavItem
            key={`navigationItem_${idx}`}
            isSelected={value.value === item.value}
            onClick={() => onChange(item)}
          >
            {item.label}
          </StyleNavItem>
        ))}
      </StyleNavList>
    </StyleContainer>
  );
};

export default Navigation;
