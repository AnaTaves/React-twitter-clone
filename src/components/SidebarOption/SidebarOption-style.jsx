import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 30px;
  color: ${(props) => (props.active ? "#e6ecf0" : "unset")};

  &:hover {
    background-color: #e8f5fe;
  }
`;

export const SidebarOptionTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  margin-right: 20px;
`;
