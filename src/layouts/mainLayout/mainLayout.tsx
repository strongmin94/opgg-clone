import { ReactNode } from "react";
import Header from "../header/header";
import { StyleContainer, StyleMainWrapper } from "./mainLayout.styled";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <StyleContainer>
      <Header />
      <StyleMainWrapper>{children}</StyleMainWrapper>
    </StyleContainer>
  );
};

export default MainLayout;
