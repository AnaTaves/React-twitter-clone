import styled from "styled-components";
import { Search } from "@material-ui/icons";

export const Container = styled.div`
  flex: 0.3;
`;

export const WidgetsInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #e6ecf0;
  padding: 10px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 20px;

  input {
    border: none;
    background-color: #e6ecf0;

    &:focus {
      outline: none;
    }
  }
`;

export const WidgetSearchIcon = styled(Search)`
  color: gray;
`;

export const WidgetContainer = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  padding: 20px;
  background-color: #f5f8fa;
  border-radius: 20px;
`;

export const WidgetContainerTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;
