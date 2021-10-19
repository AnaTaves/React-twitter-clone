import styled from "styled-components";
import { VerifiedUser } from "@material-ui/icons";

export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e6ecf0;
`;

export const PostAvatar = styled.div`
  padding: 20px;
`;

export const PostBody = styled.div`
  flex: 1;
  padding: 10px;
`;

export const PostHeaderText = styled.h3`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const PostHeaderSpecial = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: gray;
`;

export const PostHeaderDescription = styled.div``;

export const Image = styled.img`
  border-radius: 20px;
  width: 100%;
`;

export const PostBadge = styled(VerifiedUser)`
  font-size: 14px !important;
  color: #50b7f5;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
