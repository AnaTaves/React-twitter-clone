import styled from "styled-components";

export const FeedContainer = styled.div`
  flex: 0.4;
  border-right: #e6ecf0 1px solid;
  min-width: fit-content;
  overflow-y: scroll;
`;

export const FeedHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  border: 1px solid #e6ecf0;
  padding: 15px 20px;
`;

export const FeedHeaderTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;
