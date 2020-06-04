import React from "react";

import { Header } from "./styles";

interface HeaderComponentProps {
  title?: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
};

export default HeaderComponent;
