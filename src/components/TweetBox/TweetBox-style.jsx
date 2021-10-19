import styled from "styled-components";
import { Button } from "@material-ui/core";

export const TweetBoxContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: 8px solid #e6ecf0;
  padding-right: 10px;
`;

export const TweetBoxForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const TweetBoxInput = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;

  textarea {
    flex: 1;
    margin-left: 20px;
    font-size: 1.2em;
    border: none;
    width: 532px;
    height: 90px;

    &:focus {
      outline: none;
    }
  }
`;

export const CharacterCount = styled.p`
  color: #969595;
  text-align: center;
`;

export const TweetBoxImageInput = styled.input`
  border: none;
  padding: 15px;
`;

export const TweetBoxButton = styled(Button)`
  background-color: #50b7f5 !important;
  border: none !important;
  color: white !important;
  font-weight: 700 !important;
  text-transform: inherit !important;
  border-radius: 20px !important;
  height: 45px !important;
  margin-top: 20px !important;
  margin-left: auto !important;
`;
