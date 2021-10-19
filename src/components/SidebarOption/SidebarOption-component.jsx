import React from "react";

import * as S from "./SidebarOption-style";

const SidebarOption = ({ text, Icon, active }) => {
  return (
    <S.Container sideBarOption={active}>
      <Icon />
      <S.SidebarOptionTitle>{text}</S.SidebarOptionTitle>
    </S.Container>
  );
};

export default SidebarOption;
