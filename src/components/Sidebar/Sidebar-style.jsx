import styled from "styled-components";

import Button from "@material-ui/core/Button";

export const SideBarContainer = styled.div`
  border-right: 1px solid #50b7f5;
  flex: 0.25;
  min-width: 250px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SideBarTweet = styled(Button)`
  background-color: #50b7f5 !important;
  border: none !important;
  color: white !important;
  font-weight: 700 !important;
  text-transform: inherit !important;
  border-radius: 20px !important;
  height: 50px !important;
  margin-top: 20px !important;
`;

export const SideBarTweetIcon = styled.div`
  color: #50b7f5;
  font-size: 30px !important;
  margin-left: 20px;
  margin-bottom: 20px;
`;
